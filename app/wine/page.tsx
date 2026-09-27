import type { Metadata } from "next";
export const metadata: Metadata = { title: "Wine" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Glass"}</p>
      <h1>{"A short list, poured by the glass and the bottle."}</h1>
      <p className="lede">{"Two whites, two reds, one orange, and a cider. The pair is chosen for the chicken, not for a trophy shelf."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Glass of white"}</b><span>{"€7"}</span></div>
<div className="row"><b>{"Glass of red"}</b><span>{"€7"}</span></div>
<div className="row"><b>{"Bottle"}</b><span>{"From €32"}</span></div>
<div className="row"><b>{"Cider"}</b><span>{"€6"}</span></div>
</div>
      
      
    </article>
  );
}
