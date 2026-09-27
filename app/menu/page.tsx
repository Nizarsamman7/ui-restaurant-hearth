import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Reserve" };

export default function MenuPage() {
  return (
    <>
      <header className="top">
        <Link className="word" href="/">Hearth</Link>
        <Link href="/">Tonight</Link>
      </header>
      <section className="pad">
        <h1>Hold a table</h1>
        <InquiryForm
          submitLabel="Request seats"
          fields={[
            { name: "name", label: "Name" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "seats", label: "Seats", type: "select", options: ["2", "3", "4", "5", "6"] },
            { name: "when", label: "Night" },
            { name: "note", label: "Notes", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
