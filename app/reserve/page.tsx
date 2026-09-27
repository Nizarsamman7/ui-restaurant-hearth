import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Reserve" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Table"}</p>
      <h1>{"Hold a table for dinner."}</h1>
      <p className="lede">{"Thursday to Saturday. We confirm by phone. A table is held for 15 minutes."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Request seats"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"seats","label":"Seats","type":"select","options":["2","3","4","5","6"]},{"name":"when","label":"Night"},{"name":"note","label":"Notes","type":"textarea"}]} />
    </article>
  );
}
