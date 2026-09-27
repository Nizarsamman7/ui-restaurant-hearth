import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Gifts" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Table"}</p>
      <h1>{"A dinner, paid ahead."}</h1>
      <p className="lede">{"The card covers the menu for two, without wine, unless you add it. It lasts a year."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Two menus"}</b><span>{"€96"}</span></div>
<div className="row"><b>{"Two menus and wine pair"}</b><span>{"€144"}</span></div>
</div>
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
