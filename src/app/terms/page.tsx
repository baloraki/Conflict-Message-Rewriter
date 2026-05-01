import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – Burn After Chat",
  description: "Terms of use for Burn After Chat.",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Terms of Use</h1>
      <p className="text-zinc-500 text-sm mb-8">Last updated: May 2025</p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Using the app
          </h2>
          <p>
            Burn After Chat is a free private writing tool. By using it, you
            agree to use it responsibly and not for illegal, harmful, or abusive
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Not therapy
          </h2>
          <p>
            This app is not therapy, counseling, crisis support, or any form of
            mental health service. It does not replace professional help. We
            make no claims about emotional outcomes from using this app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Not legal advice
          </h2>
          <p>
            Nothing in this app constitutes legal advice. If you are involved in
            a legal matter, consult a qualified legal professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Not crisis support
          </h2>
          <p>
            This app is not a crisis support tool. If you are in immediate
            danger, experiencing a mental health emergency, or at risk of harm,
            contact emergency services or a crisis support line immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Your responsibility
          </h2>
          <p>
            You are responsible for how you use this app and for your actions
            following its use. We are not responsible for any decisions you
            make, messages you send, or actions you take after using Burn After
            Chat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No guarantees
          </h2>
          <p>
            We do not guarantee any emotional, psychological, or practical
            outcome from using this app. The app is provided as-is, for
            personal use only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">Changes</h2>
          <p>
            These terms may be updated at any time. Continued use of the app
            constitutes acceptance of any updated terms.
          </p>
        </section>
      </div>
    </div>
  );
}
