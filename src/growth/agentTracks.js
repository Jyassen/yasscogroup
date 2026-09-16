export const AGENT_TRACK_FORBIDDEN = [
  "be your own boss",
  "unlimited residual",
  "guaranteed income",
  "what you will write",
  "Agency Scale Infrastructure",
  "The Growth Order",
  "The Forced Choice Trap",
];

export const PROVIDER_CONNECT = {
  name: "Provider Connect",
  from: "agent",
  to: "clinic",
  job: "Preferred agent–practice interactions: who to meet, how to show up, how a referral enters the book.",
};

export const CARRIER_DESK = {
  name: "Carrier desk",
  from: "agency",
  to: "carrier",
  job: "Preferred agent–carrier interactions, then better rates once the shop is a real distribution partner.",
  when: "Turns on for larger agencies and writing shops — not in a Day-0 agent ad.",
};

export const HOME_DESK = {
  id: "homeDesk",
  ownerName: "Home Desk",
  agentName: "Home Desk producer",
  tone: "desk",
  identityWanted:
    "A licensed producer with a real company behind a home calendar.",
  identityRejected:
    "A leftover on a downline, grinding junk leads from the kitchen table.",
  day30: {
    working:
      "Handling owned, booked conversations on a home calendar without owner rescue",
    notWorking: "Logged in, trained, waiting on “better leads”",
  },
  voice: {
    wound:
      "You passed the exam. Then the upline went quiet. You sat at the kitchen table with a login and a prayer.",
    enemy:
      "The contract-and-a-prayer upline. A support team that is a shared inbox.",
    permission:
      "Working from home is not a consolation prize. It is a professional choice — if there is actually a desk behind you.",
    headline: "They left you with a login and a prayer.",
    headlineAccent: "You needed a desk.",
    subhead:
      "You do not need a storefront, a seminar, or a personality brand. You need a human who answers, tools that run from home, and conversations that show up on your calendar.",
    interviewOpen:
      "This path is a home-based production desk. You will not be asked to work clinics or run seminars. If that sounds like a letdown, this is the wrong room. If that sounds like relief, we should talk about the desk.",
    says: [
      "I already have my license",
      "I don’t want to cold-walk clinics",
      "I just need someone who actually answers",
      "The leads I bought myself were junk",
      "I want to work from home without feeling like a telemarketer",
    ],
  },
  salesLetter: {
    lead: {
      eyebrow: "The silence after the license",
      heading: "You did the hard part. Then they handed you the lonely part.",
      paragraphs: [
        "You passed the exam. You finished the contracting. You opened the laptop expecting the business to begin.",
        "Instead, you found a portal, a carrier list, and a calendar with too much empty space. When a question came up, the person who recruited you became a shared inbox. When the names you bought went nowhere, the answer was to buy more names.",
        "So you sat at the kitchen table doing three jobs at once: finding the conversation, figuring out the tools, and trying to become your own support department.",
        "Then the silence got called a discipline problem—as if one more script, one more training replay, or one more hour on the dialer could turn a login into a business.",
        "Your problem is not motivation. And it is not working from home. Your problem is that nobody built the desk.",
      ],
    },
    future: {
      eyebrow: "Your ordinary Tuesday",
      heading: "What a real day at home should feel like.",
      paragraphs: [
        "You sit down and open a calendar—not another list of strangers to chase. The conversations are booked. The work in front of you is to prepare, show up, and serve the person on the other end.",
        "Your CRM, quoting tools, scripts, and disposition process are already part of the same daily driver. You are not rebuilding the workflow every morning from five browser tabs and somebody else’s spreadsheet.",
        "A carrier question stops the call? There is a human to ask. A conversation goes sideways? There is coaching you can use on the next one—not a motivational post three days later.",
        "You still do the work. You still earn every next conversation. But you are no longer spending the day inventing the company that was supposed to be behind you.",
      ],
      close:
        "Working from home was never the compromise. Working alone was.",
    },
    mechanism: {
      eyebrow: "The mechanism",
      heading: "The Home Desk",
      intro:
        "This is not a prettier portal or another lead vendor dressed up as an agency. The Home Desk puts four pieces around the work, in the order you need them.",
      steps: [
        {
          title: "Open the calendar",
          desc: "Start with owned, booked conversations on a home calendar—not a junk list you bought in a Facebook group.",
        },
        {
          title: "Run the daily driver",
          desc: "Use the CRM, quoting, scripts, and disposition process as one repeatable workflow from home.",
        },
        {
          title: "Get unstuck",
          desc: "Bring contracting, carrier, and first-call questions to a human who answers.",
        },
        {
          title: "Stay on the right job",
          desc: "No storefront. No clinic route. No seminar persona. The desk is the job, not the consolation prize.",
        },
      ],
    },
    inside: {
      eyebrow: "What is behind you",
      heading: "Not more access. Actual operating support.",
      intro:
        "A contract gives you permission to write. It does not give you a way to work. These are the pieces that turn a home setup into a defined production desk.",
    },
    decision: {
      eyebrow: "The decision",
      heading: "You can keep carrying the whole company—or sit at a desk built for the job.",
      options: [
        {
          label: "Keep the login",
          body: "Keep finding the names, stitching together the tools, waiting on the inbox, and wondering whether the problem is you.",
        },
        {
          label: "Talk about the desk",
          body: "See whether a home calendar, a working daily driver, and a human backstop fit the way you actually want to produce.",
        },
      ],
      close:
        "If relief is the first thing you felt reading this, that is worth a conversation.",
    },
    promise: {
      eyebrow: "A clear promise",
      heading: "We will define the desk. We will not invent your outcome.",
      paragraphs: [
        "Yassco Group can put a clear home-based operating path around you: support, tools, and booked conversations on a home calendar.",
        "We do not promise income, enrollments, commissions, lead volume, or production. You remain responsible for licensing, compliance, the conversations you conduct, and the work you do.",
        "By Day 30, “working” means you can handle owned, booked conversations on your home calendar without owner rescue. It does not mean a production guarantee.",
      ],
    },
  },
  ad: {
    primary:
      "Licensed? Work from home with a real desk — not a login and a prayer.",
    disqualify:
      "This is not a local clinic-and-seminar practice. If you want to be the Medicare person in your town, that is a different path.",
  },
  page: {
    kicker: "Home Desk",
    cta: "Talk about the desk",
    bookCta: "Pick a time",
    applyHeading: "If that sounds like relief, sit down.",
    applySubhead:
      "Licensed producers only. No clinics. No seminars. No writing guarantee.",
    bookingHeading: "A conversation about the desk.",
    bookingLead:
      "Bring the silence after the license. We will talk about support, tools, and a home calendar — not a local clinic practice.",
    thanksKicker: "We heard you",
    thanksHeading: "You asked for a desk.",
    thanksBody:
      "Check your email. Yassco Group will reach out about the desk. This is the agency — a real Home Desk, not a login and a prayer.",
    thanksNext: [
      {
        title: "Check your email",
        desc: "Confirmation and a short note about what this conversation is — and is not.",
      },
      {
        title: "Stay on this path",
        desc: "We will not ask you to work clinics or run seminars.",
      },
      {
        title: "Name the silence",
        desc: "Be ready to say what happened after you got licensed.",
      },
    ],
    delivers: [
      {
        title: "A human who answers",
        desc: "Contracting, carrier questions, first-call coaching — not a shared inbox.",
      },
      {
        title: "Tools you can run from home",
        desc: "The daily driver: CRM, quoting, scripts, disposition. No owner rescue.",
      },
      {
        title: "Conversations on your calendar",
        desc: "Owned, booked flow. You are not buying junk lists in a Facebook group.",
      },
      {
        title: "No storefront required",
        desc: "You will not be asked to become a local brand. The desk is the job.",
      },
    ],
    otherPrompt: "Want to be the Medicare person in your town?",
    otherCta: "That’s a different path",
    ownerEscape: "Agency owner? That’s Medigard.",
    finePrint:
      "We do not promise income, enrollments, commissions, or what you write. Working means booked conversations on a home calendar — not a production guarantee.",
  },
};

export const LOCAL_PRACTICE = {
  id: "localPractice",
  ownerName: "Local Practice",
  agentName: "Community pillar",
  tone: "practice",
  identityWanted: "The Medicare person this town already trusts.",
  identityRejected:
    "Another headset in a machine that burned this town’s trust.",
  day30: {
    working:
      "At least one live distribution channel in motion — a clinic intro, an event date, or a vendor partner — plus a booked local conversation",
    notWorking: "A CRM login and a promise to “network around town”",
  },
  modules: [
    PROVIDER_CONNECT.name,
    "Seminar funnel",
    "Webinar funnel",
    "Vendor growth partnerships",
    "Local education rail",
  ],
  voice: {
    wound:
      "You live here. You know these families. And you are still treated like a stranger with a script.",
    enemy:
      "The call-center machine that burned this town’s trust in Medicare agents.",
    permission:
      "Being known is the business. A room full of neighbors is not old school. It is the point.",
    headline: "This town already knows you.",
    headlineAccent: "Stop calling like a stranger.",
    subhead:
      "Clinics, rooms, and partners — plus leads. Not a dialer that asks you to hide from the people you live next to.",
    interviewOpen:
      "This path is a local practice. You will be in rooms, in clinics, and in partnerships. If you wanted to stay on a headset at the kitchen table, we have a different path. If you want this town to send you their parents, stay.",
    says: [
      "I want to be known in this community",
      "Doctors should be sending people to me",
      "I didn’t get licensed to hide on a headset",
      "I can fill a room if someone helps me get the room",
      "I want a real local business, not a side hustle",
    ],
  },
  salesLetter: {
    lead: {
      eyebrow: "The stranger problem",
      heading: "The town knows your face. Your sales model keeps introducing you as a stranger.",
      paragraphs: [
        "You live here. You know the pharmacy on the corner, the clinic where your neighbor takes her mother, and the community room that fills when the subject actually matters.",
        "Then you got licensed—and the industry told you to put on a headset and call the same town from an anonymous list.",
        "Now every conversation starts at zero. You sound like one more interruption from the same machine that taught people not to answer. The relationships around you never enter the business, because the business was designed to ignore them.",
        "So you are told to network. Go shake hands. Drop off cards. “Get your name out there.” But nobody shows you who to meet, what the next step is, or how a warm local introduction becomes a booked conversation.",
        "Your problem is not that this town does not know you. Your problem is that your sales model does not know this town.",
      ],
    },
    future: {
      eyebrow: "Your local week",
      heading: "What a real practice in this town should feel like.",
      paragraphs: [
        "A clinic introduction has a purpose. A provider knows why you are there, how you help, and what happens when a patient needs a Medicare conversation.",
        "A community room is not a vague networking hope. There is a date, an education topic, a way to fill the seats, and a path from the room to a booked follow-up.",
        "The pharmacy, senior-living team, hearing office, or home-care provider down the road can become a real distribution partner—not another stack of business cards in a drawer.",
        "Leads still have a place. They simply sit beside the local book instead of pretending to be the whole practice.",
      ],
      close:
        "You stop borrowing trust from a script and start building on the trust already around you.",
    },
    mechanism: {
      eyebrow: "The mechanism",
      heading: "The Local Practice",
      intro:
        "This is not “go network” with better branding. The Local Practice gives the local work four defined channels, so every introduction has somewhere to go.",
      steps: [
        {
          title: "Enter through Provider Connect",
          desc: "Know which practices to meet, how to show up, and how a preferred agent–practice interaction enters your book.",
        },
        {
          title: "Put a date on the room",
          desc: "Use seminar and webinar funnels to turn useful local education into booked follow-up conversations.",
        },
        {
          title: "Build beside trusted vendors",
          desc: "Develop working partnerships with the people who already serve your neighbors—pharmacy, senior living, hearing, vision, and home care.",
        },
        {
          title: "Capture the local interest",
          desc: "Use local education and leads together, so the book is supported by more than one source of conversation.",
        },
      ],
    },
    inside: {
      eyebrow: "What is behind you",
      heading: "A local operating system—not a stack of networking advice.",
      intro:
        "Being known only becomes a business when the relationships have structure. These are the pieces that move a local reputation toward real conversations.",
    },
    decision: {
      eyebrow: "The decision",
      heading: "You can keep calling this town cold—or build where your name already means something.",
      options: [
        {
          label: "Keep calling like a stranger",
          body: "Stay on the list, start every conversation at zero, and keep “networking” without a defined path from introduction to appointment.",
        },
        {
          label: "Talk about this town",
          body: "See whether clinics, rooms, partners, and local education fit the practice you actually came here to build.",
        },
      ],
      close:
        "If you already know the community you want to serve, bring its name to the conversation.",
    },
    promise: {
      eyebrow: "A clear promise",
      heading: "We will define the channels. We will not invent your outcome.",
      paragraphs: [
        "Yassco Group can put a clear local operating path around you: Provider Connect, rooms, vendor partnerships, local education, and leads that support the book.",
        "We do not promise income, enrollments, commissions, introductions, attendance, lead volume, or production. You remain responsible for licensing, compliance, relationships, and the work you do.",
        "By Day 30, “working” means at least one live local channel is in motion—a clinic introduction, an event date, or a vendor partner—plus a booked local conversation. It does not mean a production guarantee.",
      ],
    },
  },
  ad: {
    primary:
      "Build a Medicare practice in your town. Clinics know you. The room is yours. The book is local.",
    disqualify:
      "This is not work-from-home lead grinding. If you want a home-based production desk, that is a different path.",
  },
  page: {
    kicker: "Local Practice",
    cta: "Talk about this town",
    bookCta: "Pick a time",
    applyHeading: "If you want this town to send you their parents, stay.",
    applySubhead:
      "This is a local practice. Rooms, clinics, partners. Not a headset at the kitchen table. No writing guarantee.",
    bookingHeading: "A conversation about this town.",
    bookingLead:
      "Bring the community you want to be known in. We will talk Provider Connect, rooms, and partners — not a work-from-home grind.",
    thanksKicker: "We heard you",
    thanksHeading: "You asked to be known here.",
    thanksBody:
      "Check your email. Yassco Group will reach out about this town. This is the agency — clinics, rooms, and partners. Not a headset and a script.",
    thanksNext: [
      {
        title: "Check your email",
        desc: "Confirmation and a short note about clinics, rooms, and partners.",
      },
      {
        title: "Name the town",
        desc: "Be ready to say where you want to be the Medicare person.",
      },
      {
        title: "Stay on this path",
        desc: "We will not drop you on a dialer and call it a local business.",
      },
    ],
    delivers: [
      {
        title: "Provider Connect",
        desc: "Preferred agent–practice interactions: who to meet, how to show up, how a referral enters the book.",
      },
      {
        title: "Rooms that fill",
        desc: "Seminar and webinar funnels — live local education that becomes booked appointments.",
      },
      {
        title: "Vendor partners",
        desc: "Pharmacy, senior living, hearing, vision, home care — people who already see your neighbors.",
      },
      {
        title: "Leads that sit beside the book",
        desc: "Local education capture. Necessary. Not the whole practice.",
      },
    ],
    otherPrompt: "Want a home-based production desk instead?",
    otherCta: "That’s a different path",
    ownerEscape: "Agency owner? That’s Medigard.",
    finePrint:
      "We do not promise income, enrollments, commissions, or what you write. Working means a live local channel in motion plus a booked conversation — not a production guarantee.",
  },
};

export const OWNER_TRACK_VOICE = {
  wound:
    "Half your roster wanted a job. Half wanted a practice. You trained them the same way and watched both go quiet.",
  enemy: "The mixed roster. One playbook for two businesses.",
  permission:
    "You are not a bad recruiter. You have been hiring two identities into one ramp.",
  headline: "You're recruiting two businesses into one playbook.",
  headlineAccent: "That is why good people go quiet.",
  subhead:
    "Home Desk producers need a desk, a calendar, and a human who answers. Community pillars need introductions, rooms, and partners. Mix them and both feel abandoned — just for different reasons.",
  reviewLine:
    "Which line are we installing — Home Desk, Local Practice, or both as separate rails? “Agents” is not an answer.",
};

export const YASSCO_AGENCY = {
  brand: "Yassco Group",
  domain: "yasscogroup.com",
  job: "The agency licensed producers join. Home Desk or Local Practice — not Medigard landing.",
  home: {
    kicker: "Licensed Medicare producers",
    headline: "You didn’t get licensed to wait.",
    accent: "Or to hide on a headset.",
    subhead: "A contract is not a desk. A login is not a practice.",
  },
};

export const MEDIGARD_GTM = {
  brand: "Medigard",
  domain: "medigard.io",
  buyer: "agency owner",
  job: "Growth and Compliance infrastructure. Exclusive to agency owners.",
};

export const AGENT_TRACKS = {
  agency: YASSCO_AGENCY,
  infrastructure: MEDIGARD_GTM,
  downline: {
    motion: "yassco-agency",
    rule: "Agents join Yassco Group. Medigard stays exclusive to agency owners. Agent funnels never route to Medigard landing.",
  },
  homeDesk: HOME_DESK,
  localPractice: LOCAL_PRACTICE,
  owner: OWNER_TRACK_VOICE,
  providerConnect: PROVIDER_CONNECT,
  carrierDesk: CARRIER_DESK,
};

export function getTrack(trackId) {
  if (trackId === HOME_DESK.id) return HOME_DESK;
  if (trackId === LOCAL_PRACTICE.id) return LOCAL_PRACTICE;
  throw new Error(`Unknown track: ${trackId}`);
}

export function getOtherTrack(trackId) {
  return trackId === HOME_DESK.id ? LOCAL_PRACTICE : HOME_DESK;
}
