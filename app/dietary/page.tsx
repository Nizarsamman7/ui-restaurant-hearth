import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dietary" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Kitchen"}</p>
      <h1>{"Tell us when you book."}</h1>
      <p className="lede">{"The menu is one plate. We can cook without gluten or without meat if we know the morning before. We cannot invent a separate banquet."}</p>
      <p>{"A serious allergy needs a phone call, not a note on the booking. The kitchen is small and the grill is shared."}</p>
      
      
      
      
    </article>
  );
}
