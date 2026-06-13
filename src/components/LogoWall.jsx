export default function LogoWall() {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const scrollLogos = [...logos, ...logos];

  return (
    <section className="logowall-section">
      <div className="container">
        <h2>Companies we've partnered with</h2>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {scrollLogos.map((num, i) => (
            <img key={i} src={`/logo/${num}.png`} alt={`Client ${num}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
