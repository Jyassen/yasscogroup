import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { CRM_SOURCES } from "../constants/funnels";
import { ROUTES } from "../constants/routes";
import { HOME_DESK } from "../growth/agentTracks";
import TrackBooking from "./TrackBooking";
import TrackLayout from "./TrackLayout";

describe("TrackBooking", () => {
  test("tags the Home Desk conversation with the desk CRM source", () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.deskBook]}>
        <Routes>
          <Route path="/desk" element={<TrackLayout trackId="homeDesk" />}>
            <Route path="book" element={<TrackBooking />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: HOME_DESK.page.bookingHeading,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByTitle("Schedule a Home Desk conversation"),
    ).toHaveAttribute("src", expect.stringContaining(CRM_SOURCES.homeDeskBook));
    expect(
      screen.queryByText("agency review", { exact: false }),
    ).not.toBeInTheDocument();
  });
});
