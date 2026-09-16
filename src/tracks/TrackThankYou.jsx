import { Link } from "react-router-dom";
import { useTrack } from "./TrackLayout";

export default function TrackThankYou() {
  const { track, paths } = useTrack();

  return (
    <main className="track-main track-thanks">
      <div className="track-thanks-inner">
        <p className="track-kicker">{track.page.thanksKicker}</p>
        <h1 className="track-display">{track.page.thanksHeading}</h1>
        <p className="track-subhead">{track.page.thanksBody}</p>
        <ol className="track-thanks-next">
          {track.page.thanksNext.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span className="track-subhead" style={{ display: "block" }}>
                {step.desc}
              </span>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: "2rem" }}>
          <Link className="track-btn" to={paths.home}>
            Back to {track.ownerName}
          </Link>
        </p>
      </div>
    </main>
  );
}
