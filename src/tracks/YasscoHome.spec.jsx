import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { ROUTES } from "../constants/routes";
import {
  HOME_DESK,
  LOCAL_PRACTICE,
  YASSCO_AGENCY,
} from "../growth/agentTracks";
import { MEDIGARD_ORIGIN } from "./brand";
import YasscoHome from "./YasscoHome";

describe("YasscoHome", () => {
  test("names the agency and opens the two producer doors without Medigard landing", () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.yassco]}>
        <YasscoHome />
      </MemoryRouter>,
    );

    expect(document.title).toBe(YASSCO_AGENCY.brand);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${YASSCO_AGENCY.home.headline} ${YASSCO_AGENCY.home.accent}`,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: new RegExp(HOME_DESK.ownerName) }),
    ).toHaveAttribute("href", ROUTES.desk);
    expect(
      screen.getByRole("link", { name: new RegExp(LOCAL_PRACTICE.ownerName) }),
    ).toHaveAttribute("href", ROUTES.practice);
    expect(
      screen.getAllByRole("link", { name: HOME_DESK.page.ownerEscape })[0],
    ).toHaveAttribute("href", MEDIGARD_ORIGIN);
    expect(
      screen.queryByRole("link", { name: "Medigard" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Agency Scale Infrastructure"),
    ).not.toBeInTheDocument();
  });
});
