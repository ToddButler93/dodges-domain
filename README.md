# Dodges Domain

Branch for migrating site to a new host with backend services.

https://www.dodgesdomain.com/

Tribes Ascend stuff (T3 soon).

Made using the [T3 Stack](https://create.t3.gg/).

## Scripts
"pnpm build" - Build site

### Dev

"pnpm dev"
"pnpm lint"
"pnpm start"

### Drizzle

"pnpm db:push" - Drizzle push (mysql db)
"pnpm db:studio" - Drizzle Studio

## What's here?

### Important

- [Next.js](https://nextjs.org) framework.
- [Drizzle](https://orm.drizzle.team/) object relation mapping.
- [VercelDB]

### Pretty stuff

- [Tailwind CSS](https://tailwindcss.com) css for dummies.
- [Mantine](https://mantine.dev/) component library.
- [React Icons](https://react-icons.github.io/react-icons/) for icons.

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## TODO

- [x] Transfer old data
- [ ] ShadUIify -> swap mantine with ShadUI components
- - [ ] Resizable
- - [x] Navigation Menu
- - [x] Card
- - [x] HoverCard
- - [x] Button
- - [x] dropdown-menu
- - [x] navigation-menu
- - [x] Seperator
- - [ ] Aspect Ratio
- - [x] Accordion
- - [x] Alert
- - [x] Sheet
- - [ ] Carousel (New)
- - [x] Table
- - [x] Tabs
- - [ ] Breadcrumb (New)
- - [ ] Badge (New)
- [x] Add react Icons
- [ ] Paragraph & Headings styling
- [ ] Layouts (create a standard)
- [x] Migrate to git
- [ ] Clone live sites color theme with similar tailwind offerings
- [ ] Add T3 Section
- - [ ] Different Color Theme
- - [ ] Gameplay guides
- - - [ ] Quick short PUG Guide
- - - [ ] Recommended loadouts
- - [ ] Recommended Settings
- - [ ] Maps (Gallery pages)
- - [ ] Patch History
- - [ ] External Links

- [ ] Make it deploy (vercel)
- [ ] Scaffold basic ui with mock data
- [ ] Tidy up build process
- [ ] Actually setup a database (vercel postgres)
- [ ] Attach database to UI
- [ ] Add authentication (w/ clerk)
- [ ] Add image/txt upload
- [ ] "taint" (serverside-only)
- [ ] Error management (w/ Sentry)
- [ ] Routing/image page (parrallel route)
- [ ] Delete button (w/ Server Actions)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)

### Newer processes 
- [ ] Use "git add -p", review changes, "git status", "git commit