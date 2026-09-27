import type { Metadata } from "next";
export const metadata: Metadata = { title: "Kitchen" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Fire"}</p>
      <h1>{"A grill, an oven, and a short pass."}</h1>
      <p className="lede">{"Two cooks and one person on pots. That is why the menu is four lines and not forty."}</p>
      <p>{"If the chicken is finished, the night is finished. We do not swap in a steak from a freezer."}</p>
      
      
      
      
    </article>
  );
}
