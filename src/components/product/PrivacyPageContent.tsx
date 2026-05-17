"use client";

import Link from "next/link";

export default function PrivacyPageContent() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Privacy Policy</h1>
      <p className="text-zinc-500 text-sm mb-8">Last updated: May 2026</p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            The short version
          </h2>
          <p>
            Burn After Chat does not collect, store, or transmit your chat
            messages. Your messages live only in your browser memory while the
            page is open. Reloading or deleting the chat removes them completely
            and permanently. This policy informs you in line with Articles 13
            and 14 GDPR about the personal data we process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Data controller
          </h2>
          <p>
            The controller responsible for the processing of personal data on
            this website is the operator named in the{" "}
            <Link href="/en/imprint" className="text-orange-400 hover:underline">
              Imprint
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No accounts
          </h2>
          <p>
            There is no user account system. You do not log in. We do not
            collect names, email addresses or comparable personal identifiers
            in order to use the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Chat messages
          </h2>
          <p>
            Chat messages are held only ephemerally in React component state in
            your browser. They are never written to localStorage,
            sessionStorage, IndexedDB, cookies, URL parameters, log files, or
            any server or database, and they are never transmitted over the
            network. They disappear when you delete the chat, reload the page,
            or close the tab.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No backend message storage
          </h2>
          <p>
            The core app (chat) has no backend of its own. Your messages are
            never transmitted over the internet. No server receives or
            processes them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No AI APIs
          </h2>
          <p>
            The app does not use any AI or machine learning APIs. Fake replies
            are generated from a local predefined list shipped with the page.
            Nothing you type is analyzed, classified, or processed by an
            external service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Hosting and server logs
          </h2>
          <p>
            This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA. When you load the page, Vercel processes technically
            necessary connection data (IP address, date/time, user agent,
            requested URL) as a processor on our behalf. The legal basis is
            Art. 6(1)(f) GDPR (legitimate interest in providing a stable,
            secure website). IP addresses are not permanently linked to your
            identity. Transfers to the USA are safeguarded by the EU Standard
            Contractual Clauses. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Vercel&apos;s privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Analytics — Simple Analytics
          </h2>
          <p>
            We use{" "}
            <a
              href="https://www.simpleanalytics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Simple Analytics
            </a>{" "}
            (Simple Analytics B.V., Netherlands) for privacy-friendly traffic
            measurement. Simple Analytics sets no cookies, builds no
            cross-site profiles, and does not transfer data outside the
            EU/EEA. We collect only anonymised, aggregated statistics (page
            views, referrer, approximate country, browser/device class). IP
            addresses are processed only briefly in memory and are not stored.
            No personal profiles are created. Legal basis: Art. 6(1)(f) GDPR
            (legitimate interest in cookieless, data-minimising analytics to
            improve the service). Because no information is read from or
            stored on your device for this purpose, no consent under § 25
            TDDDG / ePrivacy is required. See{" "}
            <a
              href="https://docs.simpleanalytics.com/what-we-collect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              what Simple Analytics collects
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Vercel Analytics & Speed Insights
          </h2>
          <p>
            We additionally use Vercel Web Analytics and Speed Insights
            (Vercel Inc., USA) to anonymously measure page views and
            performance metrics. Vercel Analytics is cookieless and does not
            build user profiles; IP addresses are used only to compute a
            daily, salted, anonymous visitor hash and are not stored. Legal
            basis: Art. 6(1)(f) GDPR. Transfers to the USA are based on the EU
            Standard Contractual Clauses and the EU-US Data Privacy Framework.
            See{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Vercel Analytics privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Local preferences
          </h2>
          <p>
            The app stores technically necessary, non-sensitive preferences in
            your browser&apos;s localStorage (such as your selected language)
            and sets a <code>NEXT_LOCALE</code> cookie to honour your language
            choice on subsequent requests. This is permitted without consent
            because it is strictly necessary for a service explicitly
            requested by you. The data does not leave your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Contact form
          </h2>
          <p>
            If you use the contact form, your message is submitted to a
            third-party form service (Web3Forms, 10Web Inc., USA). Only what
            you type in the form is transmitted. Legal basis: Art. 6(1)(b)
            GDPR (handling your inquiry) or Art. 6(1)(f) GDPR. Transfers to
            the USA are safeguarded by the EU Standard Contractual Clauses.
            See{" "}
            <a
              href="https://web3forms.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Web3Forms&apos; privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Recipients and international transfers
          </h2>
          <p>
            Personal data is only shared with the processors named above
            (Vercel, Simple Analytics, Web3Forms). Transfers to the USA are
            safeguarded by the EU Standard Contractual Clauses (SCCs) and
            additionally by the EU-US Data Privacy Framework. We do not sell
            personal data and do not engage in profiling. No automated
            decision-making within the meaning of Art. 22 GDPR takes place.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Retention
          </h2>
          <p>
            Chat content is not stored. Analytics data is kept only in
            aggregated, anonymised form. Server logs are retained briefly by
            the host. Contact form inquiries are deleted as soon as they are
            no longer needed, at the latest after 12 months — unless statutory
            retention obligations apply.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Your rights
          </h2>
          <p>
            Under GDPR you have the right to access (Art. 15), rectification
            (Art. 16), erasure (Art. 17), restriction (Art. 18), data
            portability (Art. 20) and the right to object to processing based
            on Art. 6(1)(f) GDPR (Art. 21). To exercise these rights, contact
            us via the{" "}
            <Link href="/en/contact" className="text-orange-400 hover:underline">
              contact page
            </Link>
            . You also have the right under Art. 77 GDPR to lodge a complaint
            with a data protection supervisory authority.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Changes
          </h2>
          <p>
            We update this policy when our services or applicable laws change.
            The version published here, with the date shown above, applies.
          </p>
        </section>
      </div>
    </div>
  );
}
