"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export type ProgressState = "idle" | "loading" | "complete";

interface UseNavigationProgressReturn {
  state:    ProgressState;
  progress: number;          // 0–100
  start:    () => void;      // called on link click
  finish:   () => void;      // called when pathname settles
}

const IDLE_PROGRESS     = 0;
const START_PROGRESS    = 12;   // immediate jump on start
const CRAWL_TARGETS     = [42, 68] as const; // intermediate crawl stops
const COMPLETE_PROGRESS = 100;

export function useNavigationProgress(): UseNavigationProgressReturn {
  const pathname                = usePathname();
  const [state, setState]       = useState<ProgressState>("idle");
  const [progress, setProgress] = useState(IDLE_PROGRESS);

  const crawlTimers   = useRef<ReturnType<typeof setTimeout>[]>([]);
  const finishTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevPathname  = useRef(pathname);
  const isLoading     = useRef(false);

  // Clear all pending timers
  const clearTimers = useCallback(() => {
    crawlTimers.current.forEach(clearTimeout);
    crawlTimers.current = [];
    if (finishTimer.current) clearTimeout(finishTimer.current);
    finishTimer.current = null;
  }, []);

  // Called when a link click is detected — begins the animation
  const start = useCallback(() => {
    if (isLoading.current) return;
    isLoading.current = true;
    clearTimers();

    setState("loading");
    setProgress(START_PROGRESS);

    // Staggered crawl to intermediate targets — never reaches 100 naturally
    // so it feels like it's waiting for the server
    const t1 = setTimeout(() => setProgress(CRAWL_TARGETS[0]), 300);
    const t2 = setTimeout(() => setProgress(CRAWL_TARGETS[1]), 800);
    crawlTimers.current = [t1, t2];
  }, [clearTimers]);

  // Called once pathname changes — finishes the bar
  const finish = useCallback(() => {
    if (!isLoading.current) return;
    clearTimers();

    setProgress(COMPLETE_PROGRESS);
    setState("complete");

    // After bar reaches 100%, fade it out then reset
    finishTimer.current = setTimeout(() => {
      setState("idle");
      setProgress(IDLE_PROGRESS);
      isLoading.current = false;
    }, 500); // 500ms = 350ms transition + 150ms hold
  }, [clearTimers]);

  // Detect pathname change → finish the bar
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      finish();
    }
  }, [pathname, finish]);

  // Cleanup on unmount
  useEffect(() => () => clearTimers(), [clearTimers]);

  return { state, progress, start, finish };
}