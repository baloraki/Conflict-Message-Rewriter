import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Anonymous, Local-Only, No AI, No Tracking",
  description:
    "How Burn After Chat handles your data: it doesn't collect any. No accounts, no servers receiving your chat, no AI processing your messages, no tracking of what you write. Here's exactly what happens — and doesn't happen — when you type.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Anonymous, Local-Only, No AI, No Tracking",
    description:
      "No accounts, no servers receiving chat, no AI, no tracking inside the chat. Here's exactly what happens to what you type.",
    url: "/privacy",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Privacy Policy</h1>
      <p className="text-zinc-500 text-sm mb-8">Last updated: May 2025</p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            The short version
          </h2>
          <p>
            Burn After Chat does not collect, store, or transmit your chat
            messages. Your messages live only in your browser memory while the
            page is open. Reloading or deleting the chat removes them completely
            and permanently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No accounts
          </h2>
          <p>
            There is no user account system. You do not log in. No personal
            information is collected or required.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Chat messages
          </h2>
          <p>
            Chat messages are stored only in React component state in your
            browser. They are never written to localStorage, sessionStorage,
            IndexedDB, cookies, URL parameters, or any server or database. They
            disappear when you delete the chat, reload the page, or close the
            tab.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No backend message storage
          </h2>
          <p>
            The app has no backend. Your messages are never transmitted over the
            internet. No server receives or processes them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            No AI APIs
          </h2>
          <p>
            The app does not use any AI or machine learning APIs. Fake replies
            are generated from a local predefined list. Nothing you type is
            analyzed, classified, or processed by an external service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Analytics and tracking
          </h2>
          <p>
            No analytics or tracking scripts are included by default. The app
            is designed to be as private as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Local preferences
          </h2>
          <p>
            The app may use localStorage to store non-sensitive preferences such
            as your theme choice or whether you have seen the intro. This data
            does not leave your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Contact form
          </h2>
          <p>
            If you use the contact form, your message is submitted to a
            third-party form service (Web3Forms). Only what you type in the form
            is transmitted. See Web3Forms&apos; privacy policy for how they
            handle form submissions.
          </p>
        </section>
      </div>
    </div>
  );
}
