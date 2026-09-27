import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Service"}</p>
      <h1>{"Before you book."}</h1>
      <p className="lede">{"We are a set menu. Please do not arrive expecting a burger list."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Can we split the menu?"}</summary><p>{"The table eats the same menu. We adjust for allergies we know about."}</p></details>
<details className="panel"><summary>{"Children?"}</summary><p>{"Yes, early seating, a smaller plate."}</p></details>
<details className="panel"><summary>{"Corkage?"}</summary><p>{"No."}</p></details>
<details className="panel"><summary>{"Smart clothes?"}</summary><p>{"Clean clothes. No dress code beyond that."}</p></details>
</div>
      
    </article>
  );
}
