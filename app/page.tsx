const courses = [
  ["Snack", "Warm olives, fennel, chilli"],
  ["First", "Celeriac soup, brown butter"],
  ["Second", "Coal-roast chicken, jus"],
  ["Last", "Burnt honey custard"],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p>One menu. It changes when the oven does.</p>
        <h1>Fire, then the plate.</h1>
      </section>
      <section className="courses">
        {courses.map(([course, text]) => (
          <article className="course" key={course}><span>{course}</span><p>{text}</p></article>
        ))}
      </section>
    </>
  );
}
