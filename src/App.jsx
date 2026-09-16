import { Navigate, Route, Routes } from "react-router-dom";
import TrackBooking from "./tracks/TrackBooking";
import TrackHome from "./tracks/TrackHome";
import TrackLayout from "./tracks/TrackLayout";
import TrackLegal from "./tracks/TrackLegal";
import TrackThankYou from "./tracks/TrackThankYou";
import YasscoHome from "./tracks/YasscoHome";
import YasscoLegal from "./tracks/YasscoLegal";

function deskRoutes() {
  return (
    <Route path="/desk" element={<TrackLayout trackId="homeDesk" />}>
      <Route index element={<TrackHome />} />
      <Route path="book" element={<TrackBooking />} />
      <Route path="thank-you" element={<TrackThankYou />} />
      <Route path="privacy" element={<TrackLegal kind="privacy" />} />
      <Route path="terms" element={<TrackLegal kind="terms" />} />
    </Route>
  );
}

function practiceRoutes() {
  return (
    <Route path="/practice" element={<TrackLayout trackId="localPractice" />}>
      <Route index element={<TrackHome />} />
      <Route path="book" element={<TrackBooking />} />
      <Route path="thank-you" element={<TrackThankYou />} />
      <Route path="privacy" element={<TrackLegal kind="privacy" />} />
      <Route path="terms" element={<TrackLegal kind="terms" />} />
    </Route>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<YasscoHome />} />
      <Route path="/yassco" element={<Navigate to="/" replace />} />
      <Route path="/privacy" element={<YasscoLegal kind="privacy" />} />
      <Route path="/terms" element={<YasscoLegal kind="terms" />} />
      <Route path="/yassco/privacy" element={<YasscoLegal kind="privacy" />} />
      <Route path="/yassco/terms" element={<YasscoLegal kind="terms" />} />
      {deskRoutes()}
      {practiceRoutes()}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
