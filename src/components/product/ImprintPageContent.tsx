"use client";

import { ObfuscatedEmail } from "@/components/ui/ObfuscatedEmail";

export default function ImprintPageContent() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Imprint</h1>
      <p className="text-zinc-500 text-sm mb-8">
        Legal disclosure pursuant to § 5 TMG / § 18 MStV
      </p>

      {/* TODO: Replace all placeholder values below before deploying to production */}
      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">Operator</h2>
          {/* TODO: Replace with actual name and address */}
          <address className="not-italic text-zinc-300 space-y-1">
            <p>[FIRST LAST]</p>
            <p>[STREET NUMBER]</p>
            <p>[POSTAL CODE CITY]</p>
            <p>Germany</p>
          </address>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">Contact</h2>
          {/* TODO: Replace the encoded value with:
               node -e "console.log(Buffer.from('you@example.com').toString('base64'))"
          */}
          <p>
            Email:{" "}
            <ObfuscatedEmail
              encoded="W0RFSU5FQEVNQUJMLURF"
              className="text-orange-400 hover:underline"
            />
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Responsible for content
          </h2>
          <p>Responsible for content pursuant to § 18(2) MStV:</p>
          {/* TODO: Replace with actual name and address */}
          <address className="not-italic mt-2 text-zinc-300 space-y-1">
            <p>[FIRST LAST]</p>
            <p>[STREET NUMBER]</p>
            <p>[POSTAL CODE CITY]</p>
            <p>Germany</p>
          </address>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            VAT / small-business note
          </h2>
          <p>
            If applicable, the VAT identification number under § 27a UStG
            should be stated here. Operators using the small-business scheme
            under § 19 UStG do not charge VAT.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            EU online dispute resolution
          </h2>
          <p>
            The European Commission provides a platform for online dispute
            resolution:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . We are neither willing nor obliged to participate in dispute
            settlement proceedings before a consumer arbitration board.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Liability for content
          </h2>
          <p>
            As a service provider we are responsible for our own content on
            these pages in accordance with § 7(1) TMG and general laws.
            According to §§ 8 to 10 TMG, however, we are not obliged to
            monitor transmitted or stored third-party information, or to
            investigate circumstances that indicate illegal activity.
            Obligations to remove or block the use of information under
            general laws remain unaffected.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Liability for links
          </h2>
          <p>
            Our offer contains links to external third-party websites whose
            content we have no influence over. We therefore cannot accept any
            liability for this third-party content. The provider or operator
            of the linked pages is always responsible for their content.
            Should we become aware of any infringements we will remove such
            links immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Copyright
          </h2>
          <p>
            Content and works on these pages created by the site operator are
            subject to German copyright law. Reproduction, processing,
            distribution and any kind of exploitation outside the limits of
            copyright require the written consent of the respective author or
            creator.
          </p>
        </section>
      </div>
    </div>
  );
}
