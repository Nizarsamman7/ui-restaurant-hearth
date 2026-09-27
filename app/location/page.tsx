import type { Metadata } from "next";
export const metadata: Metadata = { title: "Location" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Door"}</p>
      <h1>{"A side street. The sign is small."}</h1>
      <p className="lede">{"Sample address: Goudsbloemstraat 9, Amsterdam. Ring the bell if the door looks shut. It is not."}</p>
      <p>{"There is no parking in front. The tram is a six-minute walk."}</p>
      
      
      
      
    </article>
  );
}
