import { Link } from "react-router-dom";
import BookingWidget from "../components/BookingWidget";
import {
  BOOKING_URLS,
  canEmbedBooking,
  withSource,
} from "../constants/funnels";
import { useTrack } from "./TrackLayout";

export default function TrackBooking() {
  const { track, paths } = useTrack();
  const bookingSrc = withSource(BOOKING_URLS.growth, paths.bookSource);
  const embedsCalendar = canEmbedBooking(BOOKING_URLS.growth);
  const title = `Schedule a ${track.ownerName} conversation`;

  return (
    <main className="track-main track-booking">
      <div className="track-booking-grid">
        <section>
          <p className="track-kicker">{track.page.kicker}</p>
          <h1 className="track-display">{track.page.bookingHeading}</h1>
          <p className="track-subhead">{track.page.bookingLead}</p>
          <p className="track-subhead">{track.voice.interviewOpen}</p>
          <p className="track-subhead">{track.page.finePrint}</p>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="track-text-link" to={`${paths.home}#apply`}>
              Prefer to send a note first?
            </Link>
          </p>
        </section>
        <section aria-label={title}>
          {embedsCalendar ? (
            <BookingWidget
              src={bookingSrc}
              title={title}
              thankYouTo={paths.thanks}
            />
          ) : (
            <a
              className="track-btn"
              href={bookingSrc}
              target="_blank"
              rel="noreferrer"
            >
              Open the calendar
            </a>
          )}
        </section>
      </div>
    </main>
  );
}
