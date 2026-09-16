# Yassco Group

The agency licensed Medicare producers join. Two tracks — **Home Desk** and **Local Practice** — with a chooser on `/` and isolated apply, book, and thank-you pages.

## Run locally

```bash
npm install
npm run dev
```

Build the production bundle with:

```bash
npm run build
```

Upload the contents of `dist/` to the Yassco Group web root. The included `.htaccess` supports client-side routes on Apache hosting.

## Connect the application form

Set `VITE_FORM_ENDPOINT` or `VITE_OPTIN_ENDPOINT` to a webhook that accepts JSON. Without it, the form still advances to thank-you so you can preview the path. Submissions include track id (`homeDesk` / `localPractice`) and CRM source (`yassco_home_desk` / `yassco_local_practice`).

Optional: `VITE_GROWTH_BOOKING_URL` for the calendar embed, `VITE_LEGAL_EMAIL` for privacy contact.

## Brand split

- **yasscogroup.com** — producers. Home Desk or Local Practice.
- **medigard.io** — agency owners. Owner links on this site send them there.

No production, earnings, lead-volume, enrollment, or commission claims are made on these pages.
