import type { Metadata } from "next";
import DisclaimerBox from "@/components/product/DisclaimerBox";

export const metadata: Metadata = {
  title: "Safety Disclaimer",
  description:
    "Crisis resources and safety information. Burn After Chat is not therapy, crisis support, or professional mediation.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Safety Disclaimer — Burn After Chat",
    description:
      "Crisis resources and safety information. This app is not crisis support.",
    url: "/disclaimer",
    type: "article",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        Safety Disclaimer
      </h1>
      <p className="text-zinc-500 text-sm mb-8">Please read this carefully.</p>

      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <div className="p-5 rounded-xl bg-red-950/30 border border-red-800">
          <h2 className="text-xl font-semibold text-red-300 mb-3">
            If you are in immediate danger
          </h2>
          <p className="text-red-200">
            Stop using this app and contact emergency services immediately. Call
            911 (US), 999 (UK), 112 (EU), or your local emergency number. This
            app cannot help in emergencies.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-700">
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            If you may harm yourself or someone else
          </h2>
          <p>
            Please reach out to a crisis support line or emergency services
            immediately.
          </p>
          <ul className="mt-3 space-y-2 text-sm list-none">
            <li>
              🇺🇸 National Suicide Prevention Lifeline:{" "}
              <strong className="text-zinc-100">988</strong>
            </li>
            <li>
              🇺🇸 Crisis Text Line: Text{" "}
              <strong className="text-zinc-100">HOME to 741741</strong>
            </li>
            <li>
              🌍 International resources:{" "}
              <a
                href="https://www.iasp.info/resources/Crisis_Centres/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline"
              >
                iasp.info/resources/Crisis_Centres
              </a>
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-700">
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            If abuse, stalking, or threats are involved
          </h2>
          <p>
            Do not rely on this app. Contact local law enforcement, a domestic
            violence hotline, or a trusted professional immediately.
          </p>
          <ul className="mt-3 space-y-2 text-sm list-none">
            <li>
              🇺🇸 National Domestic Violence Hotline:{" "}
              <strong className="text-zinc-100">1-800-799-7233</strong>
            </li>
            <li>
              🇺🇸 RAINN:{" "}
              <strong className="text-zinc-100">1-800-656-4673</strong>
            </li>
          </ul>
        </div>

        <DisclaimerBox />
      </div>
    </div>
  );
}
