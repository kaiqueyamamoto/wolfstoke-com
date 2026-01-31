import { faqs } from "@/app/lib/crypto/data";

export default function FAQSection() {
  return (
    <section id="faq" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Perguntas rápidas
          </h2>
          <p className="mt-2 text-muted">
            Se precisar de mais detalhes, abra um ticket ou fale com o time.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="collapse collapse-arrow bg-white border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                {faq.q}
              </div>
              <div className="collapse-content text-muted">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
