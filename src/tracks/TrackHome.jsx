import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrackApply from "./TrackApply";
import { useTrack } from "./TrackLayout";
import { TRACK_VISUALS } from "./visuals";

export default function TrackHome() {
  const { track, other, paths } = useTrack();
  const { voice, page, day30, salesLetter } = track;
  const visual = TRACK_VISUALS[track.id];

  useEffect(() => {
    if (window.location.hash !== "#apply") return;
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="track-main">
      <section className="track-hero">
        <div className="track-hero-inner">
          <p className="track-kicker">{page.kicker}</p>
          <h1 className="track-display">
            {voice.headline}{" "}
            <span className="track-accent">{voice.headlineAccent}</span>
          </h1>
          <p className="track-subhead">{voice.subhead}</p>
          <div className="track-hero-actions">
            <a className="track-btn" href="#apply">
              {page.cta}
            </a>
            <Link className="track-text-link" to={paths.book}>
              {page.bookCta}
            </Link>
          </div>
        </div>
        {visual ? (
          <figure className="track-visual">
            <img src={visual.hero.src} alt={visual.hero.alt} />
            <figcaption>{voice.wound}</figcaption>
          </figure>
        ) : (
          <div className="track-desk-slab">
            <p>{voice.wound}</p>
          </div>
        )}
      </section>

      <section
        className="track-section track-letter-lead"
        aria-labelledby="lead-heading"
      >
        <div className="track-section-inner track-letter-copy">
          <p className="track-section-label">{salesLetter.lead.eyebrow}</p>
          <h2 id="lead-heading">{salesLetter.lead.heading}</h2>
          {salesLetter.lead.paragraphs.map((paragraph, index) => (
            <p
              className={index === 0 ? "track-letter-opening" : undefined}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
          <aside className="track-recognition" aria-label="Signs this fits">
            <p className="track-recognition-label">
              You may have already said it this way
            </p>
            <ul className="track-says">
              {voice.says.map((line) => (
                <li key={line}>“{line}”</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        className="track-section track-future"
        aria-labelledby="future-heading"
      >
        <div className="track-section-inner track-letter-copy">
          <p className="track-section-label">{salesLetter.future.eyebrow}</p>
          <h2 id="future-heading">{salesLetter.future.heading}</h2>
          {salesLetter.future.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote>{salesLetter.future.close}</blockquote>
        </div>
        {visual ? (
          <div className="track-letter-stills">
            {visual.stills.map((still) => (
              <figure key={still.src}>
                <img src={still.src} alt={still.alt} />
                <figcaption>{still.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </section>

      <section
        className="track-section track-mechanism"
        aria-labelledby="mechanism-heading"
      >
        <div className="track-section-inner">
          <p className="track-section-label">{salesLetter.mechanism.eyebrow}</p>
          <h2 id="mechanism-heading">{salesLetter.mechanism.heading}</h2>
          <p>{salesLetter.mechanism.intro}</p>
          <ol className="track-method">
            {salesLetter.mechanism.steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="track-section track-inside"
        aria-labelledby="delivers-heading"
      >
        <div className="track-section-inner">
          <p className="track-section-label">{salesLetter.inside.eyebrow}</p>
          <h2 id="delivers-heading">{salesLetter.inside.heading}</h2>
          <p>{salesLetter.inside.intro}</p>
          <div className="track-delivers">
            {page.delivers.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="track-section track-day30-section"
        aria-labelledby="day30-heading"
      >
        <div className="track-section-inner">
          <p className="track-section-label">The first operating marker</p>
          <h2 id="day30-heading">Working, by Day 30</h2>
          <div className="track-day30">
            <div>
              <span>Working means</span>
              <p>{day30.working}</p>
            </div>
            <div>
              <span>Not working</span>
              <p>{day30.notWorking}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="track-section track-decision"
        aria-labelledby="decision-heading"
      >
        <div className="track-section-inner">
          <p className="track-section-label">{salesLetter.decision.eyebrow}</p>
          <h2 id="decision-heading">{salesLetter.decision.heading}</h2>
          <div className="track-options">
            {salesLetter.decision.options.map((option, index) => (
              <article key={option.label}>
                <span>Option {index + 1}</span>
                <h3>{option.label}</h3>
                <p>{option.body}</p>
              </article>
            ))}
          </div>
          <p className="track-decision-close">{salesLetter.decision.close}</p>
          <a className="track-btn track-decision-cta" href="#apply">
            {page.cta} →
          </a>
        </div>
      </section>

      <section
        className="track-section track-promise"
        aria-labelledby="promise-heading"
      >
        <div className="track-section-inner track-letter-copy">
          <p className="track-section-label">{salesLetter.promise.eyebrow}</p>
          <h2 id="promise-heading">{salesLetter.promise.heading}</h2>
          {salesLetter.promise.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        className="track-section track-disqualify"
        aria-labelledby="other-heading"
      >
        <div className="track-section-inner">
          <h2 id="other-heading">{page.otherPrompt}</h2>
          <p>{track.ad.disqualify}</p>
          <p className="track-other-link">
            <Link className="track-text-link" to={paths.otherHome}>
              {page.otherCta} → {other.ownerName}
            </Link>
          </p>
        </div>
      </section>

      <section className="track-section track-apply" id="apply">
        <div className="track-section-inner">
          <h2>{page.applyHeading}</h2>
          <p>{page.applySubhead}</p>
          <TrackApply />
          <p className="track-apply-fine-print">{page.finePrint}</p>
        </div>
      </section>
    </main>
  );
}
