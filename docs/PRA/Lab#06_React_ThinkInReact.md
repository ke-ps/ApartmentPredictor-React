# Lab#06: Think in React, Timers

## Summary

Timers Variants: focused specifically on **timers**, **delays**, **intervals**, **time-based side effects**, and cleanup patterns in React.

>These exercises keep the familiar incremental style (static → props → events → named handlers → state + timer logic → composition), but now center on real-world timer scenarios: countdowns, auto-dismiss, progress simulation, delayed actions, etc.

Each one is structured as a basic `React component pattern`.

References:

- [React Principles](/reactjs/reactjs-what-principles.qmd)
- [Describing the UI](https://react.dev/learn/describing-the-ui)
- [Adding Interactivity](https://react.dev/learn/adding-interactivity)
- [Managing state](https://react.dev/learn/managing-state)

## Practice variants

### Variant 16 – Auto-Dismiss Notification Toast Row

**Visual goal per toast row (imagine a stack of them):**

```
┌─────────────────────────────────────────────────┐
│ Success!   Item added to cart                   │
│ [Close ×]                                       │
│ ─────────────────────────────────────────────── │   ← thin progress bar
│                                                 │  shrinking over time
└─────────────────────────────────────────────────┘
   (disappears automatically after ~4 seconds)
```

**Phases to implement step-by-step:**

1. Static JSX — one hardcoded toast with message, type (success/info/error), close button, and a fake progress bar `<div>` (just styled width 100%).

2. Props: message, type ("success" | "info" | "error"), autoDismissDelay (number in ms, default 4000).

3. onClick on close button → alert("Toast manually closed: " + message) for now.

4. Named handler for close.

5. Add local state + timer logic:  
   - `useState` boolean `visible` (starts true)  
   - `useEffect` that sets a `setTimeout` to set visible=false after autoDismissDelay  
   - Cleanup: clear the timeout on unmount or when visible changes  
   - When visible=false → either return null or apply fade-out class  
   - Bonus: progress bar — use another `useState` for width (100 → 0), update it with a separate interval or CSS animation triggered by visible

6. Composition: `NotificationStack` parent that renders **four** different `<AutoDismissToast />` with varying messages, types, and delays.

**Tree questions per phase:** How many timeouts exist when 4 toasts are rendered? What happens if you change the delay prop after mount?

### Variant 17 – Live Countdown Event Card (sale / auction / launch timer)

**Visual goal per card:**

```
┌──────────────────────────────────────────┐
│ Flash Sale Ends In                       │
│ Summer Collection – 40% OFF              │
│ 02 : 14 : 37 : 09                        │   ← days:hours:min:sec
│ [Notify Me]  [View Products]             │
└──────────────────────────────────────────┘
```

**Phases:**

1. Static — one hardcoded card with fixed countdown display (e.g. "01:23:45") and two buttons.

2. Props: eventName, targetDate (ISO string or timestamp), notifyText.

3. Two button clicks → alerts with eventName + action.

4. Named handlers.

5. Timer logic core:  
   - `useState` for remainingTime (seconds) — calculate initially from targetDate  
   - `useEffect` with `setInterval(..., 1000)` to recalculate & update remainingTime every second  
   - Cleanup: clearInterval on unmount  
   - Format remainingTime into days/hours/min/sec display  
   - When ≤0 → stop interval + show “Event Ended” instead of timer  
   - Optional: add pause/resume button that toggles the interval

6. Composition: `UpcomingEvents` parent renders **three** countdown cards with different future targetDates.

**Tree questions:** How many intervals run simultaneously with 3 cards? What happens to cleanup when a card unmounts?

### Variant 18 – Simulated Progress / Loading Stepper Row (multi-step wizard or file upload style)

**Visual goal per row (e.g. in a list of background tasks):**

```
┌──────────────────────────────────────────────┐
│ Uploading profile photo...                   │
│ [60%]  ──────────────────────────────        │   ← progress bar
│ Step 2 of 5 • ~12s remaining                 │
│ [Cancel]                                     │
└──────────────────────────────────────────────┘
```

**Phases:**

1. Static — one hardcoded task row with fake progress 60%, step text, cancel button.

2. Props: taskName, totalSteps (number), estimatedTotalSeconds.

3. Cancel button → alert("Cancelled: " + taskName).

4. Named handler.

5. Timer + state logic:  
   - `useState` for currentProgress (0–100) and currentStep (1–totalSteps)  
   - `useEffect` that starts a `setInterval` (e.g. every 800–1200 ms for realism) to increment progress & occasionally advance step  
   - Use `setTimeout` chain or interval to simulate uneven progress  
   - Cleanup: clear interval on unmount or when progress ≥100  
   - When complete (progress=100) → change text to “Done ✓” + disable cancel  
   - Bonus: add pause button that stops/starts the interval

6. Composition: `ActiveTasks` parent renders **four** different progress rows with varying totalSteps and estimated times.

**Tree questions:** If each row has its own interval, how do we prevent memory leaks? What cleanup pattern do you see repeated?

These three build intuition for:

- `setTimeout` vs `setInterval`  
- `useEffect` cleanup (always return clear function)  
- Avoiding stale closures (use functional updates or refs if needed later)  
- Multiple independent timers in a list
