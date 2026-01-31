"use client";

import { faqs } from "@/app/lib/home/data";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-8 py-24 md:py-32 bg-[--color-surface]">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-6 tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-[--color-muted] leading-relaxed">
            Tudo o que você precisa saber sobre nossa plataforma de trading.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-[--color-border-subtle] bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between
                         hover:bg-[--color-surface] transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[--color-foreground] pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[--color-foreground] transition-transform duration-200 flex-shrink-0
                           ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-base text-[--color-muted] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
