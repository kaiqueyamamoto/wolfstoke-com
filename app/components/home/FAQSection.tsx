import { faqs } from "@/app/lib/home/data";

export default function FAQSection() {
  return (
    <section id="faq" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Perguntas rápidas
          </h2>
          <p className="mt-2 text-muted">
            Transparência total. Se precisar de mais informações, entre em contato.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="collapse collapse-arrow glass border border-white/10 bg-base-200/30"
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
