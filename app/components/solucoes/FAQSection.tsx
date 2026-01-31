import { faqs } from "@/app/lib/solucoes/data";

export default function FAQSection() {
  return (
    <section id="faq" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            Perguntas Frequentes
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Dúvidas <span className="text-accent">Comuns</span>
          </h2>
          <p className="mt-3 text-muted">
            Respostas para as principais perguntas sobre desenvolvimento de soluções personalizadas.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-white border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-muted">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
