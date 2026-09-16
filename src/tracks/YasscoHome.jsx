import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import {
  HOME_DESK,
  LOCAL_PRACTICE,
  YASSCO_AGENCY,
} from "../growth/agentTracks";
import YasscoFrame from "./YasscoFrame";
import { HOME_DOOR_VISUALS } from "./visuals";

export default function YasscoHome() {
  const { home } = YASSCO_AGENCY;

  return (
    <YasscoFrame title={YASSCO_AGENCY.brand}>
      <main className="yassco-home">
        <section className="yassco-hero">
          <p className="yassco-eyebrow">{home.kicker}</p>
          <h1 className="yassco-display">
            {home.headline} <em>{home.accent}</em>
          </h1>
          <p className="yassco-lead">{home.subhead}</p>
        </section>
        <div className="yassco-device">
          <div className="yassco-device-ring" aria-hidden="true" />
          <div className="yassco-paths">
            <Link
              className="yassco-door"
              data-tone={HOME_DESK.tone}
              to={ROUTES.desk}
            >
              <img
                className="yassco-door-photo"
                src={HOME_DOOR_VISUALS.desk.src}
                alt={HOME_DOOR_VISUALS.desk.alt}
              />
              <div className="yassco-door-copy">
                <span className="yassco-plate">{HOME_DESK.ownerName}</span>
                <h2>{HOME_DESK.voice.headline}</h2>
                <p>{HOME_DESK.voice.headlineAccent}</p>
                <span className="yassco-door-cta">{HOME_DESK.page.cta} →</span>
              </div>
            </Link>
            <Link
              className="yassco-door"
              data-tone={LOCAL_PRACTICE.tone}
              to={ROUTES.practice}
            >
              <img
                className="yassco-door-photo"
                src={HOME_DOOR_VISUALS.practice.src}
                alt={HOME_DOOR_VISUALS.practice.alt}
              />
              <div className="yassco-door-copy">
                <span className="yassco-plate">{LOCAL_PRACTICE.ownerName}</span>
                <h2>{LOCAL_PRACTICE.voice.headline}</h2>
                <p>{LOCAL_PRACTICE.voice.headlineAccent}</p>
                <span className="yassco-door-cta">
                  {LOCAL_PRACTICE.page.cta} →
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="yassco-home-note">
          <p>
            The doors are exclusive. Mixing them is how good producers go
            quiet.
          </p>
        </div>
      </main>
    </YasscoFrame>
  );
}
