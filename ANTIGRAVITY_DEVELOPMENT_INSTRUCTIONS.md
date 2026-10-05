# ANTIGRAVITY DEVELOPMENT INSTRUCTIONS

## Personal Portfolio --- Agent Rules / Development Constitution

------------------------------------------------------------------------

# 01 --- ROLE

You are the primary development agent responsible for building and
maintaining my personal portfolio website.

Your job is to:

-   Implement the requested phase carefully.
-   Preserve existing working functionality.
-   Keep the codebase modular.
-   Build reusable components.
-   Maintain visual quality.
-   Maintain performance.
-   Avoid unnecessary complexity.
-   Ask for clarification only when a requirement is genuinely ambiguous
    or cannot be safely inferred.

The portfolio is a serious personal project intended to demonstrate my
development, UI/UX, animation, and 3D skills.

Treat the project as production-quality work.

------------------------------------------------------------------------

# 02 --- MASTER PLAN IS THE SOURCE OF TRUTH

The file:

PORTFOLIO_MASTER_BUILD_PLAN.md

contains the overall project roadmap.

Use it to understand:

-   Project phases
-   Architecture goals
-   Required sections
-   3D system
-   Animation system
-   Performance requirements
-   Responsive requirements
-   QA requirements

Do NOT treat the master plan as a request to implement every phase at
once.

Implement only the phase/task I currently request.

------------------------------------------------------------------------

# 03 --- PHASE DISCIPLINE

The project must be developed incrementally.

Expected workflow:

PHASE START ↓ Inspect existing project ↓ Understand current architecture
↓ Implement requested phase ↓ Run/build/test ↓ Fix errors ↓ Check
responsive behavior where relevant ↓ Review code quality ↓ Report what
changed ↓ Wait for next phase

Do NOT automatically start the next phase unless I explicitly ask for
it.

Do NOT add major features from future phases simply because they seem
useful.

------------------------------------------------------------------------

# 04 --- BEFORE MODIFYING THE PROJECT

Before making significant changes:

1.  Inspect the existing file structure.
2.  Check package.json and installed dependencies.
3.  Identify existing components.
4.  Check existing styling/design tokens.
5.  Check whether the requested functionality already exists.
6.  Reuse existing systems where appropriate.
7.  Avoid creating duplicate components or utilities.

Never assume the project is empty.

Never overwrite an existing implementation without checking what it
does.

------------------------------------------------------------------------

# 05 --- PRESERVE WORKING FUNCTIONALITY

Existing working functionality must remain working unless the requested
task specifically changes it.

When modifying a component:

-   Preserve existing props where possible.
-   Preserve existing routes.
-   Preserve existing data structures unless there is a good reason to
    change them.
-   Preserve existing animations that are unrelated to the current task.
-   Avoid unnecessary refactoring during feature implementation.

If a refactor is necessary, explain why.

------------------------------------------------------------------------

# 06 --- NO GIANT FILES

Do NOT create giant files containing an entire website.

Avoid:

-   2,000+ line page components
-   One massive CSS file
-   One massive component containing every section
-   Repeated inline animation code
-   Repeated project-card markup

Prefer small, focused components.

Example:

components/ Navbar Hero About Skills Projects ProjectCard Experience Lab
Contact Footer

The exact structure can differ if there is a better architecture.

------------------------------------------------------------------------

# 07 --- COMPONENT RESPONSIBILITY

Each component should have one clear responsibility.

For example:

Hero: - Hero layout - Hero content - Hero actions

HeroScene: - 3D scene only

ProjectCard: - Render one project

Projects: - Render the project collection

Navbar: - Navigation

MobileMenu: - Mobile navigation behavior

Do not mix unrelated responsibilities.

------------------------------------------------------------------------

# 08 --- DATA MUST BE SEPARATE FROM UI

Personal information and portfolio content must not be unnecessarily
hard-coded into UI components.

Use a centralized data/configuration system.

Example:

config/ portfolio.ts

The data should contain things such as:

-   Name
-   Role
-   Bio
-   Social links
-   Skills
-   Projects
-   Experience
-   Education

Components should consume this data.

Example concept:

ProjectCard receives a project object.

It should NOT contain permanent project information inside the component
itself.

------------------------------------------------------------------------

# 09 --- EASY CONTENT CHANGES

The final architecture must allow me to easily change:

-   My name
-   Role
-   Bio
-   Email
-   Social links
-   Skills
-   Projects
-   Project images
-   Project URLs
-   Experience
-   Education

without editing many unrelated files.

If adding a project requires modifying the ProjectCard component, the
architecture is wrong.

------------------------------------------------------------------------

# 10 --- DESIGN TOKENS

Do not scatter visual values throughout the codebase.

Centralize:

-   Colors
-   Typography
-   Spacing
-   Border radius
-   Shadows
-   Motion durations
-   Easing
-   Breakpoints where appropriate

If I later say:

"Change the accent from red to purple"

the change should be possible from the design system rather than
manually editing dozens of components.

------------------------------------------------------------------------

# 11 --- VISUAL CONSISTENCY

All sections must feel like one portfolio.

Maintain consistency in:

-   Typography
-   Spacing
-   Borders
-   Buttons
-   Cards
-   Motion
-   Color
-   Background treatment
-   Interaction style

Do not create every section as if it came from a different website.

Creative variation is welcome, but the overall identity must remain
coherent.

------------------------------------------------------------------------

# 12 --- REFERENCE WEBSITE RULE

When I provide a reference website, screenshot, video, or design:

Use it for inspiration only.

Extract:

-   Layout ideas
-   Interaction ideas
-   Animation concepts
-   Visual hierarchy
-   UX patterns

Do NOT copy:

-   Exact layout
-   Exact branding
-   Exact text
-   Exact assets
-   Exact animation
-   Exact colors
-   Exact visual identity

The final portfolio must have its own design language.

------------------------------------------------------------------------

# 13 --- ANIMATION RULES

Animations must have a purpose.

Good animation can:

-   Guide attention
-   Explain hierarchy
-   Provide feedback
-   Make transitions feel natural
-   Create personality
-   Showcase technical ability

Avoid animation that:

-   Makes reading difficult
-   Causes excessive motion
-   Blocks interaction
-   Slows navigation
-   Exists only because it looks technically impressive

Animations should feel intentional and polished.

------------------------------------------------------------------------

# 14 --- CENTRALIZE ANIMATION LOGIC

Do not duplicate complex animation code in every component.

Create reusable animation utilities where appropriate.

Potential structure:

animations/ scroll.ts text.ts hover.ts transitions.ts constants.ts

Reuse animation patterns.

Do not create a new custom animation implementation for every element if
the behavior is essentially the same.

------------------------------------------------------------------------

# 15 --- 3D RULES

3D is an important part of this portfolio, but it must remain modular.

Keep 3D code separate from normal UI.

Possible structure:

components/ 3d/ HeroScene ParticleField InteractiveObject SceneLoader

A 3D scene should be replaceable without rebuilding the surrounding
section.

------------------------------------------------------------------------

# 16 --- 3D MUST NOT BREAK THE WEBSITE

If 3D fails to load:

-   The page must still work.
-   Text must remain readable.
-   Navigation must remain usable.
-   Important actions must remain available.

Use appropriate loading states and fallbacks.

Do not make the entire portfolio dependent on a single 3D canvas.

------------------------------------------------------------------------

# 17 --- 3D PERFORMANCE

Do not use unnecessarily heavy 3D assets.

Consider:

-   Polygon count
-   Texture resolution
-   Number of objects
-   Pixel ratio
-   Animation frequency
-   Lighting complexity
-   Post-processing
-   Mobile GPU limitations

Use lazy loading or dynamic loading where appropriate.

The goal is:

IMPRESSIVE + RESPONSIVE

not:

IMPRESSIVE + UNUSABLE

------------------------------------------------------------------------

# 18 --- RESPONSIVE DESIGN

Never assume the desktop design can simply be scaled down.

Design intentionally for:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large monitors

Some interactions should change depending on device.

For example:

Desktop: - Cursor interactions - Hover effects - Larger 3D scenes

Mobile: - Touch-friendly interaction - Reduced visual complexity -
Simplified 3D - Reduced animation where necessary

------------------------------------------------------------------------

# 19 --- CURSOR EFFECTS

Custom cursor effects are allowed but must never replace normal
usability.

Do not hide the real cursor unnecessarily.

Cursor effects should:

-   Be lightweight
-   Work smoothly
-   Have appropriate mobile behavior
-   Not interfere with clicking
-   Not cover important content

Disable or simplify them on touch devices.

------------------------------------------------------------------------

# 20 --- SMOOTH SCROLL

If a smooth scrolling library is used:

-   Ensure native navigation still works.
-   Ensure anchor links work.
-   Ensure keyboard navigation works.
-   Avoid excessive scroll hijacking.
-   Avoid breaking browser behavior.

Smooth scrolling is enhancement, not a requirement for basic usability.

------------------------------------------------------------------------

# 21 --- ACCESSIBILITY

Use semantic HTML.

Important requirements:

-   Correct heading hierarchy
-   Accessible buttons
-   Accessible links
-   Keyboard navigation
-   Visible focus states
-   Meaningful alt text
-   Good contrast
-   Reduced-motion support

Never make an important action available only through a visual
animation.

------------------------------------------------------------------------

# 22 --- REDUCED MOTION

Respect:

prefers-reduced-motion

When reduced motion is requested:

-   Reduce large transitions
-   Reduce continuous animations
-   Reduce parallax
-   Reduce unnecessary 3D movement
-   Keep content accessible

The portfolio should remain attractive without requiring intense motion.

------------------------------------------------------------------------

# 23 --- PERFORMANCE-FIRST DEVELOPMENT

After adding a visually heavy feature, consider its performance impact.

Pay special attention to:

-   3D
-   Video
-   Large images
-   WebGL
-   Particle systems
-   Scroll animations
-   Large JavaScript bundles

Do not install a library for a feature that can be implemented simply
without it.

------------------------------------------------------------------------

# 24 --- DEPENDENCY RULE

Before adding a dependency:

Ask:

1.  Is it actually necessary?
2.  Can the existing stack handle it?
3.  Will it significantly increase bundle size?
4.  Is it maintained and appropriate?
5.  Does it conflict with existing libraries?

Avoid dependency bloat.

Do not add multiple libraries that solve the same problem.

------------------------------------------------------------------------

# 25 --- TYPESCRIPT / CODE QUALITY

If the project uses TypeScript:

-   Prefer typed props.
-   Avoid unnecessary `any`.
-   Use clear interfaces/types for project data.
-   Keep reusable types centralized where appropriate.

Use meaningful names.

Avoid cryptic variable names.

Keep functions focused.

------------------------------------------------------------------------

# 26 --- ERROR HANDLING

Do not silently ignore errors.

When a feature can fail:

-   Handle the failure.
-   Provide a fallback where appropriate.
-   Log useful development information.
-   Avoid exposing sensitive information to users.

For 3D or external content, graceful fallback is especially important.

------------------------------------------------------------------------

# 27 --- NO FAKE FUNCTIONALITY

Do not create fake:

-   Contact submissions
-   Login systems
-   Database connections
-   Analytics
-   API calls
-   Project links
-   Download functionality

If a feature is only visual, keep it clearly visual.

If real functionality is requested, implement it properly.

Never pretend something works when it does not.

------------------------------------------------------------------------

# 28 --- PLACEHOLDERS

If information is not yet available:

Use clearly identifiable placeholders.

Do not invent:

-   Work experience
-   Companies
-   Awards
-   Client results
-   Statistics
-   Testimonials
-   Credentials

The portfolio represents a real person.

Accuracy matters.

------------------------------------------------------------------------

# 29 --- PROJECT LINKS

Project links must be configurable.

A project may contain:

-   Live demo
-   GitHub
-   Case study
-   Video

If a link is missing, hide that action rather than creating a fake link.

------------------------------------------------------------------------

# 30 --- IMAGES AND MEDIA

Use optimized media.

Prefer:

-   WebP
-   AVIF where appropriate
-   Responsive images
-   Proper dimensions
-   Lazy loading for below-the-fold assets

Do not load a huge image when a smaller version is sufficient.

For video:

-   Use compressed formats.
-   Avoid autoplay with sound.
-   Consider mobile bandwidth.
-   Lazy-load when appropriate.

------------------------------------------------------------------------

# 31 --- MOBILE PERFORMANCE

On mobile:

-   Reduce particle count
-   Reduce 3D complexity
-   Reduce expensive effects
-   Avoid unnecessary blur
-   Avoid excessive shadows
-   Avoid continuous animations that consume resources

Mobile should feel intentionally optimized, not like a broken desktop
version.

------------------------------------------------------------------------

# 32 --- SEO BASICS

When the portfolio is ready:

Configure:

-   Page title
-   Meta description
-   Open Graph metadata
-   Social preview
-   Favicon
-   Canonical URL if appropriate
-   Semantic headings

Do not over-optimize or add meaningless metadata.

------------------------------------------------------------------------

# 33 --- SECURITY

Never commit:

-   API keys
-   Passwords
-   Private tokens
-   Database secrets
-   Authentication secrets

Use environment variables for secrets.

Never expose server-only secrets to browser code.

------------------------------------------------------------------------

# 34 --- FILE NAMING

Use consistent naming.

Prefer descriptive names.

Examples:

Hero.tsx ProjectCard.tsx MobileMenu.tsx HeroScene.tsx portfolio.ts
animations.ts

Avoid names such as:

test2.tsx finalfinal.tsx newcomponent.tsx abc.tsx

------------------------------------------------------------------------

# 35 --- NO UNNECESSARY REFACTORING

Do not refactor the entire project while implementing a small feature.

If I ask:

"Add a project"

do not:

-   Rewrite the entire design system.
-   Replace the animation library.
-   Rebuild navigation.
-   Move every file.

Make the smallest safe change required.

------------------------------------------------------------------------

# 36 --- DEBUGGING PROCESS

When something breaks:

1.  Identify the exact error.
2.  Find the responsible component/system.
3.  Fix the root cause.
4.  Test the affected functionality.
5.  Check that unrelated features still work.

Do not randomly rewrite working code until the error disappears.

------------------------------------------------------------------------

# 37 --- BUILD / TEST AFTER MAJOR CHANGES

After significant implementation:

-   Run the development/build process.
-   Check console errors.
-   Check TypeScript errors if applicable.
-   Verify the affected section.
-   Verify important existing sections.

Do not report a feature as complete if the project does not build.

------------------------------------------------------------------------

# 38 --- VISUAL QA

After implementing a visual section, inspect it visually.

Check:

-   Spacing
-   Alignment
-   Typography
-   Overflow
-   Animation timing
-   Mobile layout
-   Contrast
-   Visual hierarchy

If browser-based verification tools are available, use them.

------------------------------------------------------------------------

# 39 --- DO NOT OVER-ANIMATE

The portfolio should demonstrate skill, not overwhelm the visitor.

Use a hierarchy:

PRIMARY: Hero visual

SECONDARY: Section transitions

TERTIARY: Micro-interactions

Not every element needs to move.

------------------------------------------------------------------------

# 40 --- USER EXPERIENCE PRIORITY

When choosing between:

A visually impressive effect

and

A clear, fast, usable interface

prefer the clear, fast, usable interface.

Then add the effect in a way that does not damage the experience.

------------------------------------------------------------------------

# 41 --- SECTION INDEPENDENCE

Every major section should be independently removable.

For example:

If I decide to remove the Skills section, the rest of the website should
not break.

If I remove the 3D Hero scene, the Hero should still function.

If I remove the Lab section, navigation and other sections should
continue working.

------------------------------------------------------------------------

# 42 --- FEATURE FLAGS / CONFIGURATION

Where appropriate, support simple configuration such as:

ENABLE_3D ENABLE_CUSTOM_CURSOR ENABLE_SMOOTH_SCROLL
ENABLE_PAGE_TRANSITIONS ENABLE_BACKGROUND_EFFECTS

Use these responsibly.

Do not create dozens of meaningless flags.

------------------------------------------------------------------------

# 43 --- WHEN I PROVIDE NEW REFERENCE WEBSITES

When I send multiple reference websites:

Do not immediately copy/build them.

First identify:

-   What I like about each
-   What interaction it demonstrates
-   What visual principle it uses
-   Which section it could influence

Then implement an original interpretation.

------------------------------------------------------------------------

# 44 --- WHEN I SAY "MAKE IT BETTER"

Do not blindly add more effects.

Instead evaluate:

-   Composition
-   Typography
-   Spacing
-   Hierarchy
-   Interaction
-   Motion
-   Performance
-   Responsiveness

Improve the weakest area first.

------------------------------------------------------------------------

# 45 --- WHEN I SAY "MAKE IT MORE 3D"

Do not simply add more objects.

Consider:

-   Depth
-   Lighting
-   Camera movement
-   Materials
-   Parallax
-   Interaction
-   Spatial composition

A single well-designed 3D object can be better than 100 random objects.

------------------------------------------------------------------------

# 46 --- WHEN I SAY "MAKE IT MORE ANIMATED"

Do not animate everything.

Consider:

-   Entry animation
-   Scroll choreography
-   Hover interaction
-   Text reveal
-   Page transitions
-   Micro-interactions
-   Cursor response

Choose animations that support the design.

------------------------------------------------------------------------

# 47 --- COMMUNICATION AFTER EACH TASK

After completing a requested task, provide a concise report containing:

1.  What was implemented.
2.  Files/components created or changed.
3.  Important architectural decisions.
4.  Any dependencies added.
5.  Testing/build status.
6.  Any known limitations.
7.  What should be done next.

Do not write a huge explanation unless requested.

------------------------------------------------------------------------

# 48 --- STOP CONDITION

When the requested phase is complete:

STOP.

Do not automatically continue to another major phase.

Wait for the next instruction.

------------------------------------------------------------------------

# 49 --- FINAL QUALITY STANDARD

Before calling a phase complete, ask internally:

-   Is this modular?
-   Is this reusable?
-   Is this responsive?
-   Is this accessible?
-   Is this performant?
-   Is this visually consistent?
-   Is the code maintainable?
-   Can the user easily change the content?
-   Did I preserve existing functionality?
-   Did I introduce unnecessary complexity?

If the answer is no, fix the issue before reporting completion.

------------------------------------------------------------------------

# 50 --- CORE PRINCIPLE

The portfolio should demonstrate technical skill through both:

DESIGN and ENGINEERING.

The final codebase should be as impressive in structure as the final
website is visually.

Build something that can evolve.

Do not build something that only works once.

------------------------------------------------------------------------

# END OF ANTIGRAVITY DEVELOPMENT INSTRUCTIONS
