# Sprint 1 — Page Structure Refactor

## Objective

Separate the five application screens from `App.jsx` into dedicated page components without changing the visible design or user behavior.

## Why this sprint exists

`App.jsx` previously contained the content and logic for every screen. That works for a small prototype, but it becomes difficult to maintain as each screen grows.

After this refactor:

- `App.jsx` controls application-level navigation.
- Each page owns its own screen content and local state.
- Shared components remain in `src/components`.
- Shared data remains in `src/data`.

## Files added

- `src/pages/TodayPage.jsx`
- `src/pages/TrainPage.jsx`
- `src/pages/MovePage.jsx`
- `src/pages/ProgressPage.jsx`
- `src/pages/YouPage.jsx`

## Files changed

- `src/App.jsx`

## Behavior intentionally unchanged

- Bottom navigation still uses URL hashes.
- The Today checklist still saves to local storage.
- The Train workout selector still switches between Gym A, B, and C.
- Movement cards still expand and accept workout logging inputs.
- Existing styles and assets are unchanged.

## Git practice

Suggested branch:

`refactor/page-structure`

Suggested commit:

`refactor: separate app screens into page components`

Suggested pull request title:

`Sprint 1: Separate application pages`

## Review checklist

- [ ] All five navigation buttons still work.
- [ ] Refreshing a hashed URL such as `#train` opens the correct page.
- [ ] Today checklist selections survive a refresh.
- [ ] Train tabs still switch workouts.
- [ ] Exercise cards still expand.
- [ ] GitHub Actions build succeeds.
- [ ] The deployed application looks the same as before.
