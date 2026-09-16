export default function YasscoMark({ light = false }) {
  return (
    <span className={`yassco-mark${light ? " yassco-mark--light" : ""}`}>
      <span className="yassco-mark__badge" aria-hidden="true">
        Y
      </span>
      <span className="yassco-mark__type">
        <strong>Yassco</strong>
        <small>Group</small>
      </span>
    </span>
  );
}
