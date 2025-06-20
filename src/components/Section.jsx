/* export default function Section({ sectionClass, children }) {
  return (
    <section className={sectionClass}>
      <div className="container">{children}</div>
    </section>
  );
}
 */
export default function Section({ sectionClass, children }) {
  return <section className={`container ${sectionClass}`}>{children}</section>;
}
