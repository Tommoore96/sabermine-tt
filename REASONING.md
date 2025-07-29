#### EDIT

Having thought about ways to improve the mobile experience I've came up with the idea of changing the panels from being side by side (horizontal) to on top of eachother (vertical) on smaller viewports.

This change is in the PR/branch [mobile-view](https://github.com/Tommoore96/sabermine-tt/pull/3).

I also think it's important to mention that it is an conscious choice not to use much of NextJS's routing features. It's not only unnecessary for the way the app is managed, it's also much slower than using the `Tabs` component. I have however utilised the router for saving the regular expression id as a search param, I thought it was a better UX for switching between the edit and approval mode if the approval mode maintained the same regular expression. This way users could quickly see the outcome of their changes in the edit mode.

Zustand could also have been used to share this bit of information across the two panels, but it doesn't provide much visibility to the user & I wanted to show how I like the pattern of preserving state in the URL where I can.

---

# Reasoning

Here I'll explain my reasoning for the tech stack and component patterns used in this project. I've tried to keep it as simple as possible and avoid over-engineering, but at the same time I've made it extensible for future use, and in a way that I would likely use in real projects for a scaling startup.

## Assumptions

In lieu of designs, given time constraints and the fact that this is primarily a frontend project, I've made the assumption that this is to be a desktop first application.

## Component Patterns

I don't use Next day to day currently xand my professional experience does not involce using the app router, but I have kept up to date from reading about it and spinning up my own apps for a playaround.

In my opinion the dev community still hasn't landed on a great pattern for using server components yet. A lot of packages out there still don't support them and the patterns that Vercel once recommended like form actions, using `useFormStatus` and `useOptimistic` etc haven't really taken off. In my own foray using these patterns I came across a lot of bugs and complexity.

On top of this, not using an API and caching all the data on the frontend meant that in many cases trying to use server components and actions for everything wasn't possible anyway.

For these reasons I chose to use the technologies below to build this application, and work in server components wherever I could.

To do this:

- I kept every component that needed to be on the client in its own file.
- Everything upstream of a client component is a server component. `LeftPanel` is an example how a server component is used to display non conditional text like "Add and edit your regex patterns" before the client components in it are rendered.

## Tech Choices

Whenever picking a technology I always try and consider the following:

- Simplicity - how long does it take to understand and implement?
- Readability - would my junior developer self of 8 years ago be able to understand this with little explanation?
- Extensibility - how easy is it to add new features, combine with other technologies and patterns, and how easy is it to remove and switch away from?
- Performance - will it slow the app down enough for end users to notice?
- Documentation - can I easily find answers to questions?
- Community - how well used, supported and maintained is it?
- Compatibility - does it work well with the other technologies I'm using?

### Monorepo

- When using a component library a monorepo allows to have depencies all in one place.
- Very extensible, allowing code to be easily broken up when required.
- Single source of truth for all code.
- Types can easily be shared between the web app, the component library and any hypothetical API.

### Turborepo

I've used turborepo monorepo to manage the build process because:

- Good integration with Vercel, such as remote caching, but could be used with any other platform.
- Caching, making builds faster.
- Only changed files are rebuilt.
- Simple setup.

### pnpm

I've used pnpm as a package manager because:

- It's fast.
- Has good monorepo/workspace support.
- Well supported with different CI/CD platforms.

### Tailwind CSS

I considered using CSS modules, but I chose tailwind instead.

- Fast development.
- More familiar due to recent use.
- Consistent with the UI package where I wanted to use shadcn, which only supports tailwind.

### Shadcn/ui

Creating my own components was considered, as it's another way to show off different skills. However Shadcn was chosen because it's:

- Well established.
- Fast development.
- Very customisable.
- Built with Radix UI, which is fully ARIA compliant and has lots of accessibility features built in, such as keyboard navigation and screen reader support.
- Well documented.
- Easy to use.

### Zustand

- Simple implementation.
- Minimal setup required.
- Can easily persist data.
- No bells and whistles - it does what it's supposed to, not much more, makes for simpler documentation.

### Zod and React Hook Form

These two technologies go really well together, hence I've put the reasoning for the two packages in the same section.

- Typesafety - zod and RHF work very well with typescript and shadcn, it's hard to make a mistake that isn't caught by typescript.
- Performant - uses input refs as opposed to `useState` meaning less rerenders.
- State is local - no providers needed like with Formik!
- Error handling - zod has good error messaging by default and RHF makes it easy to check for errors, interrupt submission and display errors if there are any.
