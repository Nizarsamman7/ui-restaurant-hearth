import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"House"}</p>
      <h1>{"A dining room with 36 seats."}</h1>
      <p className="lede">{"Hearth is dinner only, four nights most weeks. Lunch is not a service we pretend to offer."}</p>
      <p>{"The room is dark on purpose. There is enough light to read the plate and not enough to work on a laptop."}</p>
      
      
      
      
    </article>
  );
}
