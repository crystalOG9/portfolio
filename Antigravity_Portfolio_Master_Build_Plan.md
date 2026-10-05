# PERSONAL PORTFOLIO --- ANTIGRAVITY MASTER BUILD PLAN

## Purpose

This document is the master plan for building my personal portfolio
website with Antigravity.

The portfolio must NOT be built as one giant component or one giant
prompt-generated codebase.

The goal is to create a premium, highly interactive portfolio that
demonstrates my skills in:

-   Frontend development
-   UI/UX
-   3D web development
-   Web animations
-   Creative coding
-   React / Next.js
-   Modern web technologies
-   Performance optimization

The website should feel like a real developer/creative portfolio, not a
template or a copy of another person's website.

Reference websites may be used ONLY for inspiration. Do not copy their
exact layout, branding, text, animations, assets, or visual identity.

------------------------------------------------------------------------

# CORE DEVELOPMENT PRINCIPLE

Build the portfolio in independent, reusable modules.

Every major section must be easy to modify, replace, disable, or
redesign without breaking the rest of the website.

DO NOT create:

-   One huge page component
-   One huge CSS file containing everything
-   Hard-coded project information inside components
-   Hard-coded personal information throughout the UI
-   Repeated animation code
-   3D code directly mixed into unrelated sections
-   Unnecessary dependencies
-   Fake functionality

Prefer:

-   Reusable React components
-   Central configuration
-   Design tokens
-   Central animation utilities
-   Separate 3D components
-   Separate data/configuration
-   Lazy loading
-   Clean folder structure
-   Type-safe code where practical
-   Responsive design
-   Accessible interactions

------------------------------------------------------------------------

# MASTER PHASES

The project will be completed in these phases:

PHASE 01 --- Project Foundation & Architecture PHASE 02 --- Design
System PHASE 03 --- Portfolio Content / Configuration System PHASE 04
--- Global Layout & Navigation PHASE 05 --- Hero Section PHASE 06 ---
About Section PHASE 07 --- Skills Section PHASE 08 --- Projects Section
PHASE 09 --- Experience / Education / Timeline PHASE 10 --- Experiments
/ Creative Lab PHASE 11 --- Contact Section PHASE 12 --- 3D System PHASE
13 --- Animation System PHASE 14 --- Responsive / Mobile Experience
PHASE 15 --- Performance Optimization PHASE 16 --- Accessibility & UX
PHASE 17 --- Final Integration & QA PHASE 18 --- Deployment & Production
Preparation

Each phase should be implemented and tested before moving to the next
phase.

------------------------------------------------------------------------

# PHASE 01 --- PROJECT FOUNDATION & ARCHITECTURE

## Objective

Create a clean, scalable foundation for the entire portfolio.

## Requirements

Use a modern React-based architecture. Prefer Next.js with App Router
unless there is a strong technical reason not to.

Create a clean structure similar to:

src/ app/ components/ components/ui/ components/sections/ components/3d/
animations/ config/ data/ hooks/ lib/ styles/ types/ assets/

The exact structure may be adjusted if there is a better architecture,
but responsibilities must remain separated.

## Rules

-   Components should have one clear responsibility.
-   Avoid giant files.
-   Avoid duplicated code.
-   Keep sections independently replaceable.
-   Use reusable primitives for buttons, cards, headings, containers,
    etc.
-   Keep content separate from presentation.
-   Keep 3D separate from normal UI.
-   Keep animation utilities separate from content.
-   Use environment variables only for actual secrets/configuration.
-   Never expose private API keys in client-side code.

## Completion criteria

The project runs correctly.

The structure is understandable.

A future developer can locate:

-   Page sections
-   Personal data
-   Projects
-   Design tokens
-   Animations
-   3D components
-   Utility functions

without searching through a giant file.

------------------------------------------------------------------------

# PHASE 02 --- DESIGN SYSTEM

## Objective

Create a centralized visual language before building all sections.

Define:

-   Primary background
-   Secondary background
-   Surface colors
-   Text colors
-   Muted text
-   Accent color
-   Borders
-   Shadows
-   Typography
-   Font sizes
-   Font weights
-   Spacing
-   Border radius
-   Container widths
-   Z-index layers
-   Motion durations
-   Easing functions

Create centralized design tokens.

Example concept:

design/tokens

or

styles/globals.css

Do NOT scatter visual values everywhere.

## Theme flexibility

I should be able to change the primary accent or overall visual
direction without manually editing dozens of components.

For example:

Dark + red Dark + purple Dark + white Dark + neon accent

should be achievable mainly through centralized tokens.

## Typography

Use a modern, premium typography system.

The typography should support:

-   Large hero typography
-   Section headings
-   Body text
-   Labels
-   Technical metadata
-   Project information

Avoid excessive font combinations.

------------------------------------------------------------------------

# PHASE 03 --- PORTFOLIO CONTENT / CONFIGURATION SYSTEM

## Objective

This is one of the most important phases.

All personal information should be stored separately from UI components.

Create a central configuration/data layer.

Possible structure:

config/ portfolio.ts

or

data/ portfolio.ts

The configuration should contain:

-   Name
-   Display name
-   Role
-   Short tagline
-   Biography
-   Location
-   Email
-   Social links
-   GitHub
-   LinkedIn
-   Instagram
-   Resume link
-   Skills
-   Technologies
-   Projects
-   Experience
-   Education
-   Achievements
-   Services
-   Experiments

## Project data

Each project should support fields such as:

-   Title
-   Slug
-   Short description
-   Long description
-   Technologies
-   Image
-   Video
-   GitHub URL
-   Live URL
-   Year
-   Category
-   Featured status
-   Accent/visual style if required

## Important rule

A project should be added by editing data/configuration, NOT by
rewriting the project component.

Example:

projects: \[ { title: "...", description: "...", technologies: \[...\],
image: "...", liveUrl: "...", githubUrl: "..." }\]

The Projects UI automatically renders it.

## Goal

I should be able to update my portfolio content without touching layout
or animation code.

------------------------------------------------------------------------

# PHASE 04 --- GLOBAL LAYOUT & NAVIGATION

## Objective

Create the basic visual shell.

Build:

-   Navigation
-   Logo/name
-   Desktop navigation
-   Mobile navigation
-   Page container
-   Global background
-   Footer
-   Scroll behavior
-   Section spacing

Navigation should support smooth navigation to sections where
appropriate.

The navbar should remain visually consistent with the rest of the
design.

Mobile navigation must be designed separately where necessary instead of
simply shrinking desktop navigation.

------------------------------------------------------------------------

# PHASE 05 --- HERO SECTION

## Objective

Create the strongest first impression.

The hero should immediately communicate:

-   Who I am
-   What I do
-   What kind of developer/creator I am
-   A clear primary action

Potential content:

-   Name
-   Role
-   Short statement
-   CTA
-   Social links
-   Scroll indicator

## Visual direction

The hero should contain a strong visual element.

Possible options:

-   3D object
-   Interactive 3D scene
-   Particle field
-   WebGL effect
-   Interactive typography
-   Cursor-reactive background
-   Abstract animated object

Do not add effects just because they are possible.

The visual must support the portfolio identity.

## Important architecture rule

The 3D/visual scene must be a separate component.

Example:

Hero.tsx HeroScene.tsx

The Hero layout must still work if HeroScene is removed.

This allows the 3D scene to be replaced later.

------------------------------------------------------------------------

# PHASE 06 --- ABOUT SECTION

## Objective

Introduce the person behind the work.

Include:

-   Short personal introduction
-   Development focus
-   Interests
-   Current learning/building areas
-   Relevant personal details

Use visual storytelling rather than a huge wall of text.

Possible interactions:

-   Animated text reveal
-   Scroll-triggered content
-   Interactive cards
-   Small visual statistics
-   Image/3D element

Keep the content editable from the configuration/data system.

------------------------------------------------------------------------

# PHASE 07 --- SKILLS SECTION

## Objective

Show technical skills in a visually interesting way.

Categories may include:

Frontend: - HTML - CSS - JavaScript - React - Next.js

Backend: - PHP - Node.js - SQL - MySQL - MongoDB

Programming: - C - C++ - Java - Python

Creative / Interactive: - Three.js - GSAP - WebGL - 3D web experiences

Tools: - Git - GitHub - VS Code - Vercel - n8n - Power BI - etc.

## Visual direction

Avoid basic progress bars unless they genuinely fit the design.

Possible presentation:

-   Interactive skill nodes
-   Floating tags
-   3D skill system
-   Animated grid
-   Skill constellation
-   Hover interactions
-   Category filters

Skills must come from configuration/data.

------------------------------------------------------------------------

# PHASE 08 --- PROJECTS SECTION

## Objective

Make projects one of the main proof points of the portfolio.

Create a reusable ProjectCard component.

The project system should support:

-   Project image
-   Project video
-   Hover animation
-   3D tilt
-   Technology tags
-   Project category
-   Year
-   Live demo
-   GitHub
-   Case-study link if available

## Project examples

Potential portfolio projects may include:

-   SPARTAN
-   RideBridge
-   Medi-4-U
-   Personal experiments
-   IoT projects
-   Other future projects

Do not hard-code these names permanently. They must come from the
project data.

## Project interactions

Potential interactions:

-   Image distortion
-   Cursor-following preview
-   3D card movement
-   Horizontal scrolling
-   Large project previews
-   Smooth project transitions

Use effects carefully.

The project information must remain easy to understand.

------------------------------------------------------------------------

# PHASE 09 --- EXPERIENCE / EDUCATION / TIMELINE

## Objective

Present education, internships, experience, achievements, or milestones.

Create a reusable timeline component.

Each timeline item should support:

-   Date/year
-   Title
-   Organization
-   Description
-   Type/category

The timeline must be data-driven.

Adding a new experience should require editing the data, not the
component.

------------------------------------------------------------------------

# PHASE 10 --- EXPERIMENTS / CREATIVE LAB

## Objective

This section is specifically intended to demonstrate experimental
technical and creative skills.

Possible title:

LAB EXPERIMENTS PLAYGROUND CREATIVE LAB DIGITAL EXPERIMENTS

This section can contain:

-   3D experiments
-   WebGL experiments
-   GSAP animations
-   Cursor experiments
-   Interactive typography
-   Particle systems
-   Shader experiments
-   Experimental UI
-   Micro-interactions
-   Small creative prototypes

## Important concept

Professional projects show what I have built.

The Lab shows what I am capable of experimenting with.

This section can therefore be more visually experimental than the rest
of the portfolio.

------------------------------------------------------------------------

# PHASE 11 --- CONTACT SECTION

## Objective

End the portfolio with a strong call to action.

Include:

-   Email
-   Social links
-   GitHub
-   LinkedIn
-   Contact CTA
-   Optional contact form

Possible visual treatment:

-   Large typography
-   Interactive background
-   Animated object
-   Magnetic button
-   Cursor interaction

If a form is created, do not pretend it works unless a real
backend/service is configured.

------------------------------------------------------------------------

# PHASE 12 --- 3D SYSTEM

## Objective

Create a reusable 3D system instead of placing random 3D code throughout
the project.

Possible technology:

-   Three.js
-   React Three Fiber
-   Drei
-   WebGL where appropriate

Create a separate 3D area:

components/3d/

Possible components:

-   HeroScene
-   ParticleField
-   FloatingObject
-   InteractiveModel
-   BackgroundScene
-   SceneLoader

## Requirements

3D must:

-   Be modular
-   Be lazy-loaded where appropriate
-   Have fallbacks
-   Not block the main page
-   Be responsive
-   Avoid unnecessary high-poly assets
-   Avoid excessive GPU usage
-   Be removable without breaking the site

## Performance

Always consider:

-   Geometry complexity
-   Texture size
-   Number of objects
-   Pixel ratio
-   Animation frequency
-   Mobile GPU limitations

------------------------------------------------------------------------

# PHASE 13 --- ANIMATION SYSTEM

## Objective

Create a consistent animation language.

Possible tools:

-   GSAP
-   Framer Motion / Motion
-   CSS animations
-   Lenis for smooth scrolling if appropriate

Do not randomly mix animation libraries for every component.

## Central animation utilities

Create reusable systems for:

-   Fade in
-   Slide in
-   Text reveal
-   Stagger
-   Hover
-   Magnetic interactions
-   Page transitions
-   Scroll-triggered animation

Possible structure:

animations/ text.ts scroll.ts hover.ts transitions.ts constants.ts

## Animation principles

Animations should:

-   Have purpose
-   Feel smooth
-   Not slow the user down
-   Not interfere with reading
-   Not cause layout shifts
-   Work on mobile
-   Respect reduced-motion preferences

------------------------------------------------------------------------

# PHASE 14 --- RESPONSIVE / MOBILE EXPERIENCE

## Objective

The portfolio must feel intentionally designed on:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large monitors

Do not simply scale down the desktop design.

Some effects may need different behavior on mobile.

For example:

Desktop: - Cursor-following effects - Large 3D scene - Hover
interactions

Mobile: - Touch interactions - Reduced 3D complexity - Simplified
animations - Smaller visual effects

The site must remain usable even if heavy visual effects are disabled.

------------------------------------------------------------------------

# PHASE 15 --- PERFORMANCE OPTIMIZATION

## Objective

Make the portfolio visually impressive without becoming slow.

Optimize:

-   Images
-   Videos
-   Fonts
-   JavaScript
-   3D models
-   Textures
-   Animations
-   Component loading

Use:

-   Lazy loading
-   Dynamic imports
-   Responsive images
-   Proper compression
-   Code splitting
-   Suspense where useful

Avoid unnecessary dependencies.

## Performance priorities

1.  Initial page load
2.  Hero responsiveness
3.  Scroll performance
4.  Mobile GPU performance
5.  3D loading
6.  Image/video loading

Do not sacrifice basic usability for visual effects.

------------------------------------------------------------------------

# PHASE 16 --- ACCESSIBILITY & UX

## Objective

Make the experimental design still usable.

Include:

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   Alt text
-   Good contrast
-   Accessible buttons/links
-   Proper headings
-   Reduced-motion support
-   Screen-reader-friendly labels

Do not make an interaction dependent only on mouse movement.

Every important action must remain accessible without advanced
animation.

------------------------------------------------------------------------

# PHASE 17 --- FINAL INTEGRATION & QA

## Objective

Review the entire portfolio after all sections are built.

Check:

### Functionality

-   Navigation works
-   Links work
-   Buttons work
-   Project links work
-   Contact links work
-   Mobile menu works
-   Animations do not break navigation

### Visual

-   Consistent spacing
-   Consistent typography
-   Consistent colors
-   No broken images
-   No overlapping elements
-   No accidental horizontal scrolling

### Responsive

Test:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large screen

### Performance

Check:

-   Initial loading
-   Scroll smoothness
-   3D performance
-   Animation performance
-   Mobile performance

### Code quality

Check:

-   No giant components
-   No unnecessary duplication
-   No unused dependencies
-   No console errors
-   No obvious TypeScript errors
-   No hard-coded personal information in UI components

------------------------------------------------------------------------

# PHASE 18 --- DEPLOYMENT & PRODUCTION PREPARATION

## Objective

Prepare the portfolio for production.

Deployment can use Vercel or another suitable platform.

Before deployment:

-   Production build succeeds
-   Environment variables are configured correctly
-   No secrets are committed
-   Images/assets load correctly
-   Routes work
-   Metadata is configured
-   Favicon is configured
-   Social preview metadata is configured
-   SEO basics are configured
-   Mobile layout is verified
-   Production performance is checked

------------------------------------------------------------------------

# FILE / COMPONENT PRINCIPLES

Every major feature should be independently replaceable.

For example:

If I dislike the Hero 3D animation, I should be able to replace:

HeroScene

without rebuilding:

Hero Navbar About Projects Skills

If I want to change the Projects layout, I should be able to replace:

ProjectCard

without changing:

portfolio.ts Hero Skills Contact

If I want to change my information, I should edit:

portfolio.ts

instead of searching through the entire project.

------------------------------------------------------------------------

# CONTENT VS UI RULE

Separate:

CONTENT from PRESENTATION

Bad:

const name = "Piyush";

inside multiple components.

Good:

portfolio.name

from the central configuration.

Bad:

Project information directly inside ProjectCard.

Good:

ProjectCard receives project data.

------------------------------------------------------------------------

# ANIMATION VS UI RULE

Separate:

ANIMATION LOGIC from COMPONENT STRUCTURE

The component should define what exists.

The animation system should define how it moves.

------------------------------------------------------------------------

# 3D VS UI RULE

Separate:

3D SCENE from NORMAL HTML/UI

The page must continue functioning if the 3D scene fails, is disabled,
or is not loaded yet.

------------------------------------------------------------------------

# ANTIGRAVITY WORKFLOW

Do NOT ask Antigravity to generate the entire project in one step.

Use this workflow:

1.  Give Antigravity Phase 01.
2.  Review the generated architecture.
3.  Fix architecture problems.
4.  Give Phase 02.
5.  Review.
6.  Give Phase 03.
7.  Review.
8.  Continue section by section.
9.  Only add advanced 3D after the normal UI structure is stable.
10. Perform final performance and QA passes.

Each phase should build on the previous phase.

------------------------------------------------------------------------

# CHANGEABILITY REQUIREMENT

The final project must be designed so that I can easily change:

-   Name
-   Bio
-   Role
-   Skills
-   Projects
-   Project images
-   Project links
-   Social links
-   Colors
-   Fonts
-   Animation intensity
-   3D scenes
-   Section order
-   Section visibility
-   Navigation items
-   Contact information

without rewriting the entire website.

Where practical, use configuration flags such as:

ENABLE_3D ENABLE_CURSOR_EFFECTS ENABLE_SMOOTH_SCROLL
ENABLE_PAGE_TRANSITIONS REDUCED_MOTION_MODE

These should be implemented cleanly rather than as random global
variables.

------------------------------------------------------------------------

# VISUAL DIRECTION

The final portfolio should feel:

-   Premium
-   Modern
-   Technical
-   Creative
-   Experimental
-   Personal
-   Cinematic where appropriate
-   Professional enough for recruiters/clients
-   Impressive without becoming confusing

Avoid:

-   Generic developer portfolio templates
-   Excessive neon
-   Random gradients everywhere
-   Excessive glassmorphism
-   Gaming-style visuals unless intentionally relevant
-   Copying reference websites
-   Animations that reduce usability
-   Effects that exist only for decoration

------------------------------------------------------------------------

# REFERENCE WEBSITE RULE

Reference websites are inspiration only.

When I provide a reference:

1.  Analyze its layout.
2.  Identify the interaction I like.
3.  Identify the animation technique I like.
4.  Identify the visual principle I like.
5.  Reinterpret that idea using my own portfolio identity.

Never reproduce:

-   Exact layout
-   Exact text
-   Exact branding
-   Exact assets
-   Exact animations
-   Exact component styling

The final website must have its own identity.

------------------------------------------------------------------------

# SUCCESS CRITERIA

The project is successful when:

1.  The portfolio looks highly polished.
2.  The design feels original.
3.  The website demonstrates real frontend skill.
4.  The animations feel intentional.
5.  The 3D work feels integrated rather than forced.
6.  Projects are easy to add/edit.
7.  Personal information is easy to change.
8.  Sections are independently replaceable.
9.  The website works well on mobile.
10. Performance remains reasonable.
11. The codebase remains maintainable.
12. The portfolio itself becomes evidence of my technical ability.

------------------------------------------------------------------------

# FINAL PRINCIPLE

The portfolio is not just a website ABOUT my skills.

The portfolio itself IS a demonstration of my skills.

Every design decision should support that idea.

Build with creativity, but maintain structure.

Build impressive visuals, but maintain usability.

Build advanced interactions, but maintain performance.

Build for today, but structure the code so I can easily change it
tomorrow.
