import { CRM_SOURCES } from "../constants/funnels";
import { ROUTES } from "../constants/routes";
import { HOME_DESK } from "../growth/agentTracks";

export function trackPaths(trackId) {
  const isDesk = trackId === HOME_DESK.id;
  return {
    home: isDesk ? ROUTES.desk : ROUTES.practice,
    book: isDesk ? ROUTES.deskBook : ROUTES.practiceBook,
    thanks: isDesk ? ROUTES.deskThankYou : ROUTES.practiceThankYou,
    privacy: isDesk ? ROUTES.deskPrivacy : ROUTES.practicePrivacy,
    terms: isDesk ? ROUTES.deskTerms : ROUTES.practiceTerms,
    otherHome: isDesk ? ROUTES.practice : ROUTES.desk,
    source: isDesk ? CRM_SOURCES.homeDesk : CRM_SOURCES.localPractice,
    bookSource: isDesk
      ? CRM_SOURCES.homeDeskBook
      : CRM_SOURCES.localPracticeBook,
  };
}
