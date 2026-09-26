# Apurva Saumya — Portfolio Site: Build Spec

Drop this file in your project root (e.g. as `PROJECT_SPEC.md`) and reference it in
Copilot Chat: *"Build the Hero component per PROJECT_SPEC.md"*. Build section by
section rather than all at once — Copilot does better with one component at a time.

---

## 1. Stack & Setup

React + Vite, Tailwind CSS, Framer Motion, lucide-react for icons, deployed to
GitHub Pages via the `gh-pages` package.

```bash
npm create vite@latest apurva-portfolio -- --template react
cd apurva-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react
npm install -D gh-pages
```

**vite.config.js** — set `base`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/', // use '/' if repo is ApurvaSaumya.github.io; otherwise '/repo-name/'
})
```

**package.json** — add:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Recommended repo name:** `ApurvaSaumya.github.io` — this gives you a root URL
(`https://apurvasaumya.github.io`) with no subpath, and it's a real, publicly
indexable site (unlike a private preview link), which is what makes it show up
if someone searches your name.

---

## 2. Design Tokens

Add to `tailwind.config.js` under `theme.extend`:

```js
colors: {
  'ink-navy':    '#12172B', // page background
  'slate-panel': '#1C2238', // section/panel background
  'warm-white':  '#F1EDE4', // primary text
  'amber-signal':'#E8A33D', // the one loud accent — buttons, active nodes
  'teal-trace':  '#5FB3B3', // connecting lines, links, underlines only
},
fontFamily: {
  display: ['"Space Grotesk"', 'sans-serif'],   // headings
  body:    ['"IBM Plex Sans"', 'sans-serif'],   // body text
  mono:    ['"IBM Plex Mono"', 'monospace'],    // tech labels only
},
```

Add the Google Fonts link to `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Base page: `bg-ink-navy text-warm-white font-body`.

---

## 3. File Structure

```
src/
  assets/
    photo.jpg              <- place your photo here
  components/
    Hero.jsx
    OrchestrationDiagram.jsx
    SignalNode.jsx          <- small reusable dot-marker + connecting line segment
    Mosaic.jsx
    Capabilities.jsx
    Skills.jsx
    Contact.jsx
  App.jsx
  index.css
  main.jsx
```

Import the photo directly: `import photo from './assets/photo.jpg'` then
`<img src={photo} />` — Vite bundles it automatically, no extra config.

---

## 4. Layout Concept — "The Signal Path"

A thin vertical line (`border-l-2 border-teal-trace/30`) runs down the left
margin of the page on desktop, connecting each section like nodes in a
pipeline. Each major section has a small amber dot at its top, aligned to the
line. This isn't decoration — it echoes the actual subject matter (routing,
orchestration, pipelines).

Build this as a `<SignalNode>` wrapper component that each section uses,
rather than one computed-height line — simpler and more robust:

```jsx
// SignalNode.jsx — wraps a section, draws its segment of the line + dot
function SignalNode({ children }) {
  return (
    <div className="relative pl-8 md:pl-12 border-l-2 border-teal-trace/30">
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-signal" />
      {children}
    </div>
  );
}
```

Content is left-aligned throughout, offset to the right of the trace —
not centered.

---

## 5. Section-by-Section Content

### Hero
Two-column on desktop (text left, photo top-right, circular with a thin
warm-white ring), single column stacked on mobile.

- **Name:** Apurva Saumya — `font-display`, large (`text-5xl md:text-7xl`)
- **Title:** Applied AI Engineer — Agentic Systems & GenAI
- **Summary:** "I build production LLM and multi-agent systems — from
  architecture through evaluation to deployment — in regulated, high-stakes
  environments. Currently based in Hyderabad, India, and exploring
  opportunities across Europe."
- **Buttons:** "View Mosaic" (amber-signal solid, scrolls to Mosaic section),
  "Get in touch" (teal-trace outline, scrolls to Contact)
- **Below the fold text:** the `OrchestrationDiagram` — see below

No eyebrow label above the name, no all-caps anywhere.

### OrchestrationDiagram (the one signature animation)
A small SVG or Framer-Motion diagram: five nodes — `Request → Router →
Agent A / Agent B → Tools → Response` — with `Router` branching to two
agent nodes that both feed into `Tools`.

Behavior:
- On mount, edges draw in sequence (animate `pathLength` from 0 to 1 with
  Framer Motion, staggered ~150ms apart), each node lights up amber as the
  "signal" reaches it, connecting lines are teal-trace.
- Plays **once** on load. No loop, no scroll-retrigger, no hover-retrigger.
- Wrap in a check for `window.matchMedia('(prefers-reduced-motion: reduce)')`
  — if set, render the final lit-up state immediately with no animation.

This is the only non-user-triggered motion on the page. Everything else
(button hovers, link underlines) only animates in response to an action.

### Mosaic
- **Heading:** Mosaic
- **Description:** A multi-company earnings intelligence assistant built on
  LangGraph and ChromaDB, combining retrieval-augmented generation with an
  LLM-as-judge evaluation framework. Achieved a 96.4% evaluation score across
  test scenarios.
- **Demo video:** responsive 16:9 embed of `https://youtu.be/61iw1A9e0wk`
- **Tech mentions:** LangGraph, ChromaDB, RAG, Python, LLM-as-Judge — render
  as plain `font-mono text-sm` text separated by a teal-trace underline or
  small dot, not uniform rounded pill badges.
- **Link:** "View on GitHub" → `https://github.com/ApurvaSaumya/Mosaic`

### Capabilities — "What I Build"
Deliberately abstracted, no company names, no employer-specific metrics.
Each item: short bold heading + one plain sentence, marked with a small
teal-trace dot (continuing the signal-path motif, not a new card style):

- **Multi-agent orchestration** — Routing layers that direct queries across
  specialized agents based on task complexity.
- **Document intelligence pipelines** — Structured extraction from
  unstructured documents at scale, with context carried across related
  extractions for consistency.
- **LLM-as-judge evaluation** — Evaluation harnesses that define what
  "correct" means for a task and measure against expert-verified ground
  truth.
- **Production reliability for agentic systems** — Separating deterministic
  logic from LLM reasoning to keep automated workflows auditable and
  predictable.

### Skills
Grouped under `font-display` subheadings, each skill rendered `font-mono
text-sm` with a thin teal-trace underline (not a pill/badge). Four balanced
groups now (was three) — lay out as a 2-column grid on desktop (2 rows of 2),
single column on mobile:

- **AI & Agentic Systems:** Agentic AI, Multi-Agent Systems, ReAct Agents,
  LangChain, LangGraph, Prompt Engineering
- **Retrieval & Evaluation:** Retrieval-Augmented Generation (RAG),
  LLM-as-Judge Evaluation, AI Observability & Tracing
- **Cloud & AI Platforms:** Azure OpenAI, Azure AI Search, Azure Document
  Intelligence, AWS Bedrock, AWS Textract, Microsoft 365 & Copilot Studio
  Agents
- **Engineering & DevOps:** Python, FastAPI, React, PostgreSQL, CI/CD, DevOps

### Contact
Final signal-path node. Email (mailto), LinkedIn, GitHub — icon (lucide-react)
+ text link for each. One closing line: "Open to opportunities across
Europe."

---

## 6. Motion Rules (recap)

- **One** deliberate animated sequence: the orchestration diagram, plays once.
- No fade-and-slide-up on scroll for every section — this is the generic
  default and should be avoided.
- Buttons and links get a simple hover color transition only — this responds
  to a user action, which is fine.
- Respect `prefers-reduced-motion` everywhere.

---

## 7. Deployment Checklist

1. Create GitHub repo `ApurvaSaumya.github.io`.
2. Confirm `vite.config.js` has `base: '/'`.
3. `npm run deploy` (runs build, then pushes `dist/` to the `gh-pages` branch).
4. In repo **Settings → Pages**, confirm the source is set to the `gh-pages`
   branch (the `gh-pages` package creates and pushes this branch for you).
5. Site is live at `https://apurvasaumya.github.io` within a few minutes.
6. Add the link to your LinkedIn profile and resume once live — this also
   helps it get discovered by search engines over time.