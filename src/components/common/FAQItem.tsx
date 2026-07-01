import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FAQItem as FAQItemType } from "@/types";

interface FAQItemProps {
  faq: FAQItemType;
}

export function FAQItem({ faq }: FAQItemProps) {
  return (
    <AccordionItem value={faq.id}>
      <AccordionTrigger>{faq.question}</AccordionTrigger>
      <AccordionContent>{faq.answer}</AccordionContent>
    </AccordionItem>
  );
}