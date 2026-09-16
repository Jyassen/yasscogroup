import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { ROUTES } from "../constants/routes";
import {
  HOME_DESK,
  LOCAL_PRACTICE,
  YASSCO_AGENCY,
} from "../growth/agentTracks";
import { MEDIGARD_ORIGIN } from "./brand";
import TrackHome from "./TrackHome";
import TrackLayout from "./TrackLayout";

function renderTrack(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/desk" element={<TrackLayout trackId="homeDesk" />}>
          <Route index element={<TrackHome />} />
        </Route>
        <Route
          path="/practice"
          element={<TrackLayout trackId="localPractice" />}
        >
          <Route index element={<TrackHome />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("TrackHome", () => {
  test("Home Desk lands the isolation headline and refuses the local path", () => {
    renderTrack(ROUTES.desk);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${HOME_DESK.voice.headline} ${HOME_DESK.voice.headlineAccent}`,
      }),
    ).toBeInTheDocument();
    expect(document.title).toBe(`Home Desk | ${YASSCO_AGENCY.brand}`);
    expect(
      screen.getByRole("link", { name: YASSCO_AGENCY.brand }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getAllByRole("link", { name: HOME_DESK.page.cta })[0],
    ).toHaveAttribute("href", "#apply");
    expect(
      screen.getByRole("link", {
        name: `${HOME_DESK.page.otherCta} → ${LOCAL_PRACTICE.ownerName}`,
      }),
    ).toHaveAttribute("href", ROUTES.practice);
    expect(screen.getByText(HOME_DESK.day30.working)).toBeInTheDocument();
    expect(screen.queryByText("Provider Connect")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Agency Scale Infrastructure"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("T-65 Guidance")).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: HOME_DESK.page.ownerEscape }),
    ).toHaveAttribute("href", MEDIGARD_ORIGIN);
    expect(
      screen.queryByRole("link", { name: "Medigard" }),
    ).not.toBeInTheDocument();
  });

  test("Local Practice lands belonging and names Provider Connect", () => {
    renderTrack(ROUTES.practice);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${LOCAL_PRACTICE.voice.headline} ${LOCAL_PRACTICE.voice.headlineAccent}`,
      }),
    ).toBeInTheDocument();
    expect(document.title).toBe(`Local Practice | ${YASSCO_AGENCY.brand}`);
    expect(screen.getByText("Provider Connect")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: `${LOCAL_PRACTICE.page.otherCta} → ${HOME_DESK.ownerName}`,
      }),
    ).toHaveAttribute("href", ROUTES.desk);
    expect(screen.queryByText("better carrier rates")).not.toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", {
        name: "I have an active license to sell Medicare.",
      }),
    ).toBeRequired();
  });
});
