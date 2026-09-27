import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hours" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Service"}</p>
      <h1>{"When the door opens."}</h1>
      <p className="lede">{"Last seating is 20:30. The kitchen does not take a table at 21:15."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Wednesday"}</b><span>{"Closed, unless a private dinner"}</span></div>
<div className="row"><b>{"Thursday–Saturday"}</b><span>{"18:00–22:30"}</span></div>
<div className="row"><b>{"Sunday–Tuesday"}</b><span>{"Closed"}</span></div>
</div>
      
      
    </article>
  );
}
