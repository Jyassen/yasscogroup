import { describe, expect, test } from "vitest";
import { MEDIGARD_GTM, YASSCO_AGENCY } from "../growth/agentTracks";
import {
  isMedigardHost,
  isYasscoHost,
  MEDIGARD_ORIGIN,
  yasscoHomePath,
  yasscoLegalPaths,
  YASSCO_ORIGIN,
} from "./brand";

describe("host split", () => {
  test("treats yasscogroup.com as the agency host and medigard.io as the owner host", () => {
    expect({
      yasscoRoot: isYasscoHost("yasscogroup.com"),
      yasscoWww: isYasscoHost("www.yasscogroup.com"),
      yasscoLocal: isYasscoHost("yassco.localhost"),
      medigardOnYassco: isMedigardHost("yasscogroup.com"),
      medigardRoot: isMedigardHost("medigard.io"),
      medigardWww: isMedigardHost("www.medigard.io"),
      yasscoOnMedigard: isYasscoHost("medigard.io"),
      localhostYassco: isYasscoHost("localhost"),
      localhostMedigard: isMedigardHost("127.0.0.1"),
    }).toEqual({
      yasscoRoot: true,
      yasscoWww: true,
      yasscoLocal: true,
      medigardOnYassco: false,
      medigardRoot: true,
      medigardWww: true,
      yasscoOnMedigard: false,
      localhostYassco: true,
      localhostMedigard: false,
    });
  });

  test("keeps this site’s home on / in local preview and production", () => {
    expect(yasscoHomePath("localhost")).toBe("/");
    expect(yasscoHomePath("yasscogroup.com")).toBe("/");
    expect(yasscoLegalPaths("localhost")).toEqual({
      home: "/",
      privacy: "/privacy",
      terms: "/terms",
    });
    expect(yasscoLegalPaths("yasscogroup.com")).toEqual({
      home: "/",
      privacy: "/privacy",
      terms: "/terms",
    });
  });

  test("points public origins at the locked domains", () => {
    expect(YASSCO_ORIGIN).toBe(`https://${YASSCO_AGENCY.domain}`);
    expect(MEDIGARD_ORIGIN).toBe(`https://${MEDIGARD_GTM.domain}`);
  });
});
