# Abdullah Al Mamun Nayan: Developer Portfolio

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui** components, **next-themes** (dark/light), **Motion** (animation) and **Lenis** (smooth scrolling).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Customize (all content lives in one file)

Open `src/data/portfolio.ts` and search for `TODO`:

| What | Where in the file |
| --- | --- |
| Name, email, links, resume path | `site` |
| Typing-effect roles, intro, hero photo, floating badges | `hero` |
| Bio, education, facts | `about` |
| Education timeline | `education` |
| Certifications (add `credentialUrl` and an `image` if you have them) | `certifications` |
| Skills and icons | `skillGroups` (icons come from `react-icons/si`) |
| Projects, links, case studies | `projects` (add or remove blocks) |

Each project automatically gets a card on the home page **and** a details page at `/projects/<slug>`.

- **Hero photo:** save a portrait (about 4:5, e.g. 1000x1250) as `public/profile.jpg` and set `hero.image` to `"/profile.jpg"`.
- **Colors:** edit the `:root` and `.dark` tokens in `src/app/globals.css` (`--primary` is the main accent).
- **Cursor ring:** `src/components/custom-cursor.tsx` (size, spring and hover scale). It only appears on devices with a mouse. Remove `<CustomCursor />` from `layout.tsx` to disable it.
- **Smooth scroll feel:** `lerp` in `src/components/smooth-scroll.tsx` (lower is smoother and slower).
- **Typing speed:** props on `<Typewriter />` in `src/components/sections/hero.tsx`.
- **Fonts:** change the two imports in `src/app/layout.tsx`.
- **Project screenshots:** put images in `public/projects/` and set `image: "/projects/name.png"`.
- **Resume:** save your PDF as `public/resume.pdf`.
- **Contact form (sends to your email):** the form posts to `src/app/api/contact/route.ts`, which emails you through [Resend](https://resend.com) (free tier). Setup takes about 3 minutes:
  1. Create a Resend account and an API key.
  2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
  3. Restart `npm run dev` and send yourself a test message.
  4. On Vercel, add the same variables under Project Settings, then Environment Variables, and redeploy.

  Until you verify your own domain in Resend, messages can only be delivered to the email you signed up with, so use that address as `CONTACT_TO_EMAIL`. Pressing Reply in your inbox answers the visitor directly. The route validates input, has a hidden spam trap and a simple rate limit.
- **More shadcn components:** `npx shadcn@latest add dialog tabs ...` (`components.json` is already set up).

## Deploy

Push to GitHub, import the repo on [Vercel](https://vercel.com), and set `site.url` in `portfolio.ts` to your live domain.
