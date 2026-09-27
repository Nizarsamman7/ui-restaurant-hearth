import type { Metadata } from "next";
export const metadata: Metadata = { title: "Menu" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Tonight"}</p>
      <h1>{"Four courses. The kitchen does not run a side list."}</h1>
      <p className="lede">{"Bread is on the table. A cheese plate can be added if you ask before the last course."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Snack"}</b><span>{"Warm olives, fennel, chilli"}</span></div>
<div className="row"><b>{"First"}</b><span>{"Celeriac soup, brown butter"}</span></div>
<div className="row"><b>{"Second"}</b><span>{"Coal-roast chicken, jus, greens"}</span></div>
<div className="row"><b>{"Last"}</b><span>{"Burnt honey custard"}</span></div>
<div className="row"><b>{"Menu"}</b><span>{"€48"}</span></div>
<div className="row"><b>{"With wine pair"}</b><span>{"€72"}</span></div>
</div>
      
      
    </article>
  );
}
