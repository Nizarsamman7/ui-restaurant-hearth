import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="reserve"><span>Dinner Thu–Sat · 36 seats</span><Link href="/reserve">Reserve</Link></div>
      <header className="top">
        <Link className="word" href="/">Hearth</Link>
        <span>Kitchen from 18:00</span>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Tonight</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/wine">Wine</Link>
        <Link href="/reserve">Reserve</Link>
        <Link href="/private-dining">Private dining</Link>
        <Link href="/dietary">Dietary</Link>
        <Link href="/kitchen">Kitchen</Link>
        <Link href="/about">About</Link>
        <Link href="/hours">Hours</Link>
        <Link href="/events">Events</Link>
        <Link href="/gifts">Gifts</Link>
        <Link href="/location">Location</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
