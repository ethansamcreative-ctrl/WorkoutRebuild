# Project Rebuild — Product & Engineering Blueprint

## 1. Product vision

Project Rebuild is a mobile-first training and recovery application designed to help Ethan rebuild strength, mobility, conditioning, and athletic capacity through a clear three-day gym program and guided movement routines.

The app should feel like a coach, not a document viewer. It should guide a session, explain movements clearly, remember progress, and remain easy to use in a crowded gym on a phone.

### Core promise

Open the app and immediately understand:

- What should I do today?
- How do I perform it safely?
- What should I log?
- What should I do if a machine is unavailable or something hurts?
- Am I becoming more consistent and capable?

---

## 2. Product principles

Every product and code decision should support these principles.

### Simple before advanced

The first version should make three workouts and several mobility routines excellent before adding nutrition, social features, advanced analytics, or accounts.

### Guided, not overwhelming

Users should see the information needed for the current moment. Detailed instructions should be available without turning every screen into a wall of text.

### Data-driven, not hardcoded

Exercises, workouts, routines, phases, and substitutions should live in structured data. Components should render that data consistently.

### Mobile-first

The app should be easy to use with one hand, readable while standing, and efficient on a small screen.

### Pain-aware, not diagnostic

The app may provide modification guidance and general warning signs, but it should not diagnose injuries or replace professional medical care.

### Reusable before duplicated

Build one strong component or workflow and reuse it across Gym A, Gym B, Gym C, and mobility routines.

---

## 3. Current baseline

The deployed application currently includes:

- React and Vite
- GitHub Pages deployment through GitHub Actions
- Hash-based navigation
- Five top-level sections: Today, Train, Move, Progress, and You
- Reusable `BottomNav` and `MovementCard` components
- Structured movement data in `src/data/movements.js`
- Local storage for the Today mission checklist
- A mobile-first visual style

### Current file flow

```text
index.html
  ↓
src/main.jsx
  ↓
src/App.jsx
  ↓
src/components/*
  ↓
src/data/movements.js
  ↓
src/styles/app.css
```

### Current limitations

- `App.jsx` contains all five page components.
- The three workouts only contain three exercises each.
- Exercise data lacks setup, execution, mistakes, alternatives, muscles, equipment, progression, and warning guidance.
- Movement cards rely heavily on one large image.
- The expanded state is too limited to function as a true movement guide.
- There is no guided workout session mode.
- Logging inputs are not saved.
- Mobility is a list of movements rather than complete routines.
- Progress and profile are placeholders.

---

## 4. Product scope

### Version 1.0 must include

- A complete three-day gym program
- A clear weekly schedule
- Warm-up, strength, accessory, core, conditioning, and cooldown blocks
- Compact exercise tiles
- Full exercise detail view
- Consistent media/demo viewer
- Setup, execution, cues, mistakes, substitutions, and pain-aware modifications
- Guided workout session mode
- Set logging
- Rest timer
- Local progress history
- Complete mobility and recovery routines
- Installable PWA behavior
- Responsive and accessible design

### Version 1.0 will not include

- User accounts or cloud synchronization
- Social feeds or leaderboards
- Paid subscriptions
- AI-generated medical or injury diagnoses
- Full nutrition tracking
- Wearable integrations
- Coach dashboards
- Complex analytics infrastructure

These can be considered after the core training experience works reliably.

---

## 5. Information architecture

The main navigation remains:

```text
Today
Train
Move
Progress
You
```

### Today

Purpose: Answer “What should I do today?”

Planned content:

- Current week and phase
- Today’s recommended session
- Mission checklist
- Step, mobility, and recovery targets
- Resume-workout action
- Coach note
- Recent progress summary

### Train

Purpose: Plan and complete gym sessions.

Planned content:

- Gym A, Gym B, and Gym C overview
- Session duration and focus
- Workout blocks
- Exercise detail views
- Guided session mode
- Set logging and rest timer
- Exercise substitutions

### Move

Purpose: Improve mobility, preparation, and recovery.

Planned routines:

- Daily reset
- Upper-body preparation
- Lower-body preparation
- Foot and Achilles care
- Post-workout recovery

### Progress

Purpose: Show consistency and capacity over time.

Planned content:

- Completed workouts
- Weekly consistency
- Workout streak
- Exercise history
- Mobility completion
- Step trends
- Pain or readiness notes
- Program phase progress

### You

Purpose: Store plan preferences and app settings.

Planned content:

- Primary goal
- Training environment
- Available equipment
- Current limitations
- Return-to-sport goals
- Weekly schedule
- Units and display preferences
- Data reset/export controls

---

## 6. Training program structure

Each gym session follows the same high-level flow:

```text
Readiness
Preparation
Primary strength
Secondary strength
Accessories
Core or stability
Conditioning
Cooldown
```

### Gym A — Push + Core

Focus:

- Chest
- Shoulders
- Triceps
- Anti-rotation core strength

Planned working movements:

- Machine Chest Press
- Seated Machine Shoulder Press
- Incline Dumbbell Press
- Pec Deck or Cable Fly
- Cable Triceps Pressdown
- Cable Lateral Raise
- Incline Push-Up
- Pallof Press
- Dead Bug
- Low-impact conditioning

### Gym B — Pull + Posture

Focus:

- Back
- Rear shoulders
- Biceps
- Grip
- Trunk stability

Planned working movements:

- Seated Cable Row
- Neutral-Grip Lat Pulldown
- Chest-Supported Row
- Straight-Arm Cable Pulldown
- Reverse Pec Deck
- Hammer Curl
- Cable Curl
- Static Dumbbell Hold
- Bird Dog
- Side Plank From Knees
- Low-impact conditioning

### Gym C — Legs + Durability

Focus:

- Quads
- Hamstrings
- Glutes
- Calves
- Tibialis
- Balance

Planned working movements:

- Leg Press
- Dumbbell Romanian Deadlift
- Seated Leg Curl
- Smith Machine Box Squat or Sit-to-Stand
- Glute Bridge or Hip-Thrust Machine
- Seated Calf Raise
- Tibialis Raise
- Supported Single-Leg Balance
- Pallof Press or Cable Chop
- Standing March With Support
- Recumbent bike conditioning

### Program phases

#### Phase 1 — Foundation, Weeks 1–4

- Learn movement patterns
- Establish consistency
- Use conservative effort
- Track pain and tolerance
- Build basic walking and cardio capacity

#### Phase 2 — Capacity, Weeks 5–8

- Add volume gradually
- Increase working loads
- Extend conditioning
- Improve balance and unilateral control

#### Phase 3 — Athletic Return, Weeks 9–12

- Use stronger working sets
- Increase conditioning challenge
- Prepare for tennis, swimming, judo, and martial arts
- Improve movement confidence and work capacity

---

## 7. Core data models

### Exercise model

```js
{
  id: 'machine-chest-press',
  name: 'Machine Chest Press',
  category: 'push',
  movementPattern: 'horizontal-press',
  difficulty: 'beginner',
  equipment: ['machine'],
  primaryMuscles: ['chest'],
  secondaryMuscles: ['triceps', 'front-delts'],
  summary: 'Stable horizontal pressing for chest and triceps strength.',
  setup: [],
  execution: [],
  cues: [],
  mistakes: [],
  modifications: [],
  stopGuidance: [],
  alternatives: [],
  media: {
    thumbnail: '',
    start: '',
    finish: '',
    muscles: '',
    setup: '',
    video: ''
  }
}
```

### Workout model

```js
{
  id: 'gym-a',
  name: 'Gym A',
  focus: 'Push + Core',
  estimatedMinutes: 65,
  blocks: [
    {
      id: 'preparation',
      title: 'Preparation',
      type: 'warmup',
      movements: []
    },
    {
      id: 'strength',
      title: 'Primary Strength',
      type: 'strength',
      movements: []
    }
  ]
}
```

### Workout movement prescription

```js
{
  exerciseId: 'machine-chest-press',
  phase1: { sets: 2, reps: '8–10', targetRpe: '5–6', restSeconds: 90 },
  phase2: { sets: 3, reps: '8–12', targetRpe: '6–7', restSeconds: 90 },
  phase3: { sets: 3, reps: '6–10', targetRpe: '7–8', restSeconds: 120 }
}
```

### Routine model

```js
{
  id: 'daily-reset',
  name: 'Daily Reset',
  estimatedMinutes: 8,
  purpose: 'Reduce stiffness and maintain daily movement quality.',
  movements: []
}
```

### Workout log model

```js
{
  id: 'generated-session-id',
  workoutId: 'gym-a',
  startedAt: '',
  completedAt: '',
  exercises: [
    {
      exerciseId: 'machine-chest-press',
      sets: [
        { weight: 90, reps: 10, rpe: 6, completed: true }
      ]
    }
  ],
  notes: '',
  readiness: null,
  pain: null
}
```

---

## 8. Component system

### Foundation components

- `PageHeader`
- `SectionHeader`
- `Button`
- `IconButton`
- `Tag`
- `Panel`
- `BottomNav`

### Card components

- `WorkoutCard`
- `WorkoutBlockCard`
- `ExerciseCard`
- `RoutineCard`
- `CoachCard`
- `MetricCard`
- `ProgressCard`

### Exercise components

- `ExerciseDemo`
- `ExerciseDetailSheet`
- `ExerciseInstructions`
- `ExerciseSubstitutions`
- `ExerciseLogger`
- `PainGuidance`

### Workout components

- `WorkoutOverview`
- `WorkoutBlockList`
- `WorkoutSession`
- `CurrentExercise`
- `SetLogger`
- `RestTimer`
- `SessionProgress`
- `WorkoutSummary`

### Utility components

- `Tabs`
- `Accordion`
- `BottomSheet`
- `EmptyState`
- `ConfirmDialog`

---

## 9. Exercise tile specification

### Collapsed state

The tile should show only the information needed to scan a workout:

- Consistent thumbnail
- Exercise name
- Primary muscles
- Sets and reps
- Equipment
- Difficulty or phase label
- Clear “View exercise” action

### Expanded/detail state

Detailed content should appear in a full-screen panel or bottom sheet rather than making the card extremely tall.

The detail view should contain:

- Demonstration viewer
- Purpose
- Setup
- Execution
- Coaching cues
- Common mistakes
- Modifications
- Alternatives
- Stop or modify guidance
- Logging controls when used during a workout

### Media rules

- Use a fixed visual frame.
- Prefer `aspect-ratio: 4 / 3`.
- Use `object-fit: contain` for instructional visuals.
- Avoid screenshots of full documents.
- One asset should communicate one idea.
- SVG is preferred for diagrams and illustrations.
- WebP is preferred for photographic or rendered demonstrations.

Planned naming convention:

```text
public/assets/exercises/machine-chest-press/
  thumbnail.webp
  start.svg
  finish.svg
  muscles.svg
  setup.svg
```

---

## 10. Proposed source architecture

```text
src/
├── components/
│   ├── cards/
│   ├── exercise/
│   ├── workout/
│   ├── navigation/
│   └── ui/
├── pages/
│   ├── TodayPage.jsx
│   ├── TrainPage.jsx
│   ├── MovePage.jsx
│   ├── ProgressPage.jsx
│   └── ProfilePage.jsx
├── data/
│   ├── exercises.js
│   ├── workouts.js
│   ├── routines.js
│   └── phases.js
├── hooks/
│   ├── useLocalStorage.js
│   ├── useProgramWeek.js
│   └── useWorkoutSession.js
├── utils/
│   ├── ids.js
│   ├── dates.js
│   └── validation.js
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── app.css
├── App.jsx
└── main.jsx
```

This structure is a target, not a requirement to create every folder immediately. Folders should be added only when a sprint needs them.

---

## 11. State and storage strategy

### Initial approach

Use React state and browser local storage.

Store:

- Mission checklist
- Current program week
- Active workout session
- Completed workout logs
- Mobility completions
- Basic profile settings

### Later consideration

Cloud synchronization can be added only after local behavior is reliable and the data models are stable.

### Storage rules

- Use one clear storage key per domain.
- Version stored data so future schema changes can be migrated.
- Never assume local storage data is valid; parse defensively.
- Provide a data reset option.

Example keys:

```text
rebuild.settings.v1
rebuild.missions.v1
rebuild.activeSession.v1
rebuild.workoutHistory.v1
rebuild.mobilityHistory.v1
```

---

## 12. Design system direction

### Visual character

- Grounded
- Athletic
- Calm
- Mature
- Earth-toned
- High-contrast where actions matter
- Less like a generic fitness template

### Current palette direction

- Deep green for primary surfaces and actions
- Cream for background
- Warm paper for cards
- Bronze for accents
- Muted green-gray for secondary text

### Typography

- Serif display type for major headlines
- Clean system sans-serif for interface text
- Strong hierarchy with limited font sizes

### Spacing

Use a consistent spacing scale rather than arbitrary values.

```text
4, 8, 12, 16, 24, 32, 48, 64
```

### Responsive behavior

- Mobile is the primary design.
- Tablet and desktop should widen the layout without creating oversized cards.
- Workout session mode should remain narrow and focused even on desktop.

---

## 13. Accessibility requirements

- All buttons need meaningful accessible labels.
- Navigation must expose the active page.
- Expanded sections need `aria-expanded` and a connected region.
- Text must maintain sufficient contrast.
- Tap targets should be approximately 44px or larger.
- Images require useful alt text or empty alt text when decorative.
- The app must remain usable with keyboard navigation.
- Motion should respect reduced-motion preferences.
- Instructions must not rely only on color.

---

## 14. Git workflow

### Branch strategy

Use one branch per focused change.

Examples:

```text
refactor/page-structure
feature/exercise-data-model
feature/exercise-detail-sheet
feature/gym-a-workout
fix/mobile-card-overflow
```

### Commit strategy

Commits should describe one meaningful change.

Examples:

```text
refactor: move top-level screens into page components
feat: add structured exercise instruction fields
feat: add compact exercise card layout
fix: prevent demonstration images from overflowing cards
```

### Pull request checklist

Before merging:

- The change has one clear objective.
- The app still builds successfully.
- Existing behavior was checked.
- Mobile layout was reviewed.
- Unrelated files were not changed.
- New data follows the agreed schema.
- The GitHub Pages workflow succeeds.
- The deployed application was checked after merge.

### Release practice

- Merge focused pull requests into `main`.
- Let GitHub Actions deploy automatically.
- Use tags for major milestones such as `v0.2.0`, `v0.5.0`, and `v1.0.0`.
- Maintain a short changelog once feature work begins.

---

## 15. Sprint roadmap

### Sprint 0 — Baseline and blueprint

Objective:

- Preserve the deployed baseline.
- Document the product and engineering direction.

Deliverables:

- `PROJECT_BLUEPRINT.md`
- Current architecture review
- Agreed sprint order

Learning focus:

- Repository structure
- Build flow
- Product scope
- Why planning precedes refactoring

### Sprint 1 — Page separation

Objective:

- Move Today, Train, Move, Progress, and You into dedicated page components without changing behavior.

Likely files:

```text
src/pages/TodayPage.jsx
src/pages/TrainPage.jsx
src/pages/MovePage.jsx
src/pages/ProgressPage.jsx
src/pages/ProfilePage.jsx
src/App.jsx
```

Learning focus:

- Components
- Imports and exports
- Refactoring without redesigning
- Reviewing a focused pull request

### Sprint 2 — Design tokens and base UI

Objective:

- Split visual tokens from component styling and establish reusable UI primitives.

Learning focus:

- CSS variables
- Responsive design
- Reusable interface components

### Sprint 3 — Exercise data model

Objective:

- Replace the minimal movement objects with a complete exercise schema.

Learning focus:

- Objects and arrays
- Data modeling
- Rendering from structured data

### Sprint 4 — Robust exercise card

Objective:

- Replace the current image-heavy card with a compact, scalable card.

Learning focus:

- Props
- Conditional rendering
- Component composition

### Sprint 5 — Exercise detail sheet and demo viewer

Objective:

- Add fixed-ratio media, tabs, detailed instructions, and substitutions.

Learning focus:

- Component state
- Tabs
- Bottom sheets
- Asset organization

### Sprint 6 — Complete Gym A

Objective:

- Build one complete workout using reusable workout blocks.

Learning focus:

- Feature composition
- Data relationships
- Building one pattern before repeating it

### Sprint 7 — Guided session mode

Objective:

- Add active exercise, set logging, progress, and rest timer.

Learning focus:

- Forms
- State transitions
- Timers
- Local storage

### Sprint 8 — Complete Gym B and Gym C

Objective:

- Reuse the Gym A system to complete the full three-day split.

Learning focus:

- Reuse
- Validation
- Avoiding duplicated code

### Sprint 9 — Mobility and recovery routines

Objective:

- Convert Move into guided routines with timers and completion history.

Learning focus:

- Shared movement components
- Routine sequencing

### Sprint 10 — Progress and profile

Objective:

- Make the app remember and summarize training behavior.

Learning focus:

- Derived data
- History views
- Settings

### Sprint 11 — PWA polish and Version 1.0

Objective:

- Improve offline behavior, accessibility, performance, install experience, and release readiness.

Learning focus:

- Service workers
- Caching
- Production checks
- Release management

---

## 16. Definition of done

A feature is complete only when:

- It solves the stated user problem.
- It uses the agreed data and component patterns.
- It works on a phone-sized screen.
- It does not break another page.
- It builds successfully in GitHub Actions.
- It is reviewed in the deployed application.
- Any new behavior is documented where necessary.
- The pull request is focused and understandable.

---

## 17. Immediate next action

Create a branch named:

```text
refactor/page-structure
```

Sprint 1 should move the five page components out of `App.jsx` while preserving the exact current appearance and behavior.

No workout expansion, tile redesign, new assets, or styling changes should be mixed into that branch.

That separation will give the project a clean base for every later sprint.
