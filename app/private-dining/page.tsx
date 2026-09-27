import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Private dining" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Room"}</p>
      <h1>{"The whole room, 18 to 28 people."}</h1>
      <p className="lede">{"One menu, spoken beforehand. Not a projector and a playlist. Sundays and Mondays are the nights we can close for you."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
