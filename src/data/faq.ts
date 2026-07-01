import type { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah saya harus memiliki pengalaman sebelumnya untuk mengikuti training?",
    answer:
      "Tidak harus. Semua program DEDC dimulai dari level dasar. Trainer akan membimbing dari awal sehingga peserta tanpa pengalaman sekalipun bisa mengikuti dengan baik.",
    pages: ["home", "programs"],
  },
  {
    id: "faq-2",
    question: "Apakah tersedia sertifikat setelah training selesai?",
    answer:
      "Ya. Setiap peserta yang menyelesaikan program training akan mendapatkan Sertifikat Training resmi dari DEDC yang diakui oleh berbagai perusahaan di industri.",
    pages: ["home", "programs"],
  },
  {
    id: "faq-3",
    question: "Apakah training tersedia secara online dan offline?",
    answer:
      "Tersedia keduanya. Anda dapat memilih kelas offline di training center DEDC atau kelas online via video conference. Materi dan kualitas trainer sama untuk kedua format.",
    pages: ["home", "programs"],
  },
  {
    id: "faq-4",
    question: "Berapa durasi pelatihan untuk setiap program?",
    answer:
      "Durasi bervariasi per program: AutoCAD 40 jam, AutoCAD Plant 3D 60 jam, Revit MEP 50 jam, E3D 60 jam. Jadwal dapat disesuaikan dengan ketersediaan peserta.",
    pages: ["home", "programs"],
  },
  {
    id: "faq-5",
    question: "Apakah ada konsultasi atau support setelah training selesai?",
    answer:
      "Ya. Peserta DEDC mendapatkan akses konsultasi pasca training dan update informasi lowongan kerja di industri engineering. Materi training juga tidak hangus — bisa diakses kembali kapan saja.",
    pages: ["home", "programs"],
  },
  {
    id: "faq-6",
    question: "Berapa kapasitas peserta per kelas?",
    answer:
      "DEDC menggunakan format kelas semi privat dengan maksimal 4–6 peserta per sesi. Ini memastikan setiap peserta mendapat perhatian penuh dari trainer.",
    pages: ["home", "about"],
  },
  {
    id: "faq-7",
    question: "Apakah DEDC menyediakan training untuk perusahaan (corporate training)?",
    answer:
      "Ya. DEDC melayani corporate training yang dapat dilakukan di kantor perusahaan atau di training center DEDC. Materi dan jadwal dapat disesuaikan dengan kebutuhan perusahaan.",
    pages: ["home", "about", "contact"],
  },
  {
    id: "faq-8",
    question: "Bagaimana cara mendaftar program training?",
    answer:
      "Hubungi tim DEDC melalui WhatsApp untuk konsultasi program yang sesuai dengan kebutuhan Anda. Tim kami akan membantu menentukan program terbaik dan mengatur jadwal training.",
    pages: ["home", "programs", "contact"],
  },
];

export function getFaqsByPage(page: FAQItem["pages"][number]): FAQItem[] {
  return faqs.filter((f) => f.pages.includes(page) || f.pages.includes("all"));
}
