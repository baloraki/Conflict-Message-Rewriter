"use client";

export default function ImprintPageContent() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Imprint</h1>
      <p className="text-zinc-500 text-sm mb-8">
        Legal disclosure pursuant to § 5 TMG (German Telemedia Act)
      </p>

      {/* TODO: Replace all placeholder values below before deploying to production */}
      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Responsible operator
          </h2>
          {/* TODO: Replace with actual name and address */}
          <address className="not-italic text-zinc-300 space-y-1">
            <p>[VORNAME NACHNAME]</p>
            <p>[STRASSE HAUSNR]</p>
            <p>[PLZ ORT]</p>
            <p>Germany</p>
          </address>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">Contact</h2>
          {/* TODO: Replace with actual contact email */}
          <p>
            Email:{" "}
            <a
              href="mailto:[DEINE@EMAIL.DE]"
              className="text-orange-400 hover:underline"
            >
              [DEINE@EMAIL.DE]
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Responsible for content
          </h2>
          <p>
            Responsible for the content of this website pursuant to § 55
            para.&nbsp;2 RStV:
          </p>
          {/* TODO: Replace with actual name and address */}
          <address className="not-italic mt-2 text-zinc-300 space-y-1">
            <p>[VORNAME NACHNAME]</p>
            <p>[STRASSE HAUSNR]</p>
            <p>[PLZ ORT]</p>
            <p>Germany</p>
          </address>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Disclaimer of liability
          </h2>
          <p>
            Despite careful content control, we assume no liability for the
            content of external links. The operators of linked pages are solely
            responsible for their content.
          </p>
        </section>
      </div>
    </div>
  );
}
