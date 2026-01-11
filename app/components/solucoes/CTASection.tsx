import { contactInfo } from "@/app/lib/solucoes/data";

export default function CTASection() {
  return (
    <section id="contato" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="glass rounded-2xl border border-accent/40 bg-accent/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 md:text-4xl">
            Pronto para <span className="text-accent">Construir sua Solução</span>?
          </h2>
          <p className="text-lg text-muted mb-8">
            Entre em contato e vamos transformar sua visão em tecnologia de ponta.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="btn btn-accent text-black w-full sm:w-auto"
              >
                {contactInfo.email}
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                className="btn btn-outline border-accent/50 text-accent hover:border-accent hover:bg-accent/10 w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="text-sm text-muted space-y-1">
            <p>
              <strong>Horário de Atendimento:</strong> {contactInfo.hours}
            </p>
            <p>
              <strong>Website:</strong> {contactInfo.website}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
