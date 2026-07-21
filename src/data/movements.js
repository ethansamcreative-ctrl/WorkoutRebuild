const base = `${import.meta.env.BASE_URL}assets`;

export const workouts = {
  push: {
    title: 'Gym A · Push + Core',
    subtitle: 'Build pressing strength without sacrificing shoulder control.',
    exercises: [
      {
        name: 'Machine Chest Press',
        prescription: '3 sets · 8–10 reps',
        image: `${base}/exercises/push/machine-chest-press.jpg`,
        why: 'Builds chest and triceps strength with a stable setup.',
        cues: ['Feet planted', 'Shoulder blades gently back', 'Stop before the shoulders roll forward'],
      },
      {
        name: 'Seated Dumbbell Shoulder Press',
        prescription: '3 sets · 8 reps',
        image: `${base}/exercises/push/seated-db-shoulder-press.jpg`,
        why: 'Rebuilds overhead strength and trunk control.',
        cues: ['Ribs down', 'Use a neutral grip', 'Move slowly through a pain-free range'],
      },
      {
        name: 'Pallof Press',
        prescription: '3 sets · 10 per side',
        image: `${base}/exercises/core/pallof-press.jpg`,
        why: 'Trains the core to resist rotation for walking, tennis, and martial arts.',
        cues: ['Brace before pressing', 'Keep hips square', 'Do not let the cable turn you'],
      },
    ],
  },
  pull: {
    title: 'Gym B · Pull + Carry',
    subtitle: 'Strengthen the back, grip, posture, and pulling mechanics.',
    exercises: [
      {
        name: 'Lat Pulldown',
        prescription: '3 sets · 8–10 reps',
        image: `${base}/exercises/pull/lat-pulldown.jpg`,
        why: 'Builds vertical pulling strength and supports shoulder positioning.',
        cues: ['Drive elbows toward ribs', 'Avoid leaning far back', 'Control the return'],
      },
      {
        name: 'Seated Cable Row',
        prescription: '3 sets · 10 reps',
        image: `${base}/exercises/pull/seated-cable-row.jpg`,
        why: 'Builds mid-back strength and reinforces upright posture.',
        cues: ['Lead with elbows', 'Keep chest tall', 'Pause briefly at the body'],
      },
      {
        name: 'Static Dumbbell Hold',
        prescription: '3 rounds · 20–30 sec',
        image: `${base}/exercises/pull/static-db-hold.jpg`,
        why: 'Builds grip and standing strength without requiring long carries.',
        cues: ['Stand tall', 'Keep shoulders relaxed', 'Stop if posture breaks'],
      },
    ],
  },
  legs: {
    title: 'Gym C · Legs + Durability',
    subtitle: 'Build lower-body strength while respecting knees, feet, and Achilles.',
    exercises: [
      {
        name: 'Leg Press',
        prescription: '3 sets · 10 reps',
        image: `${base}/exercises/legs/leg-press.jpg`,
        why: 'Trains the legs through a controlled range with back support.',
        cues: ['Use a comfortable foot position', 'Keep knees tracking over toes', 'Do not lock out hard'],
      },
      {
        name: 'Dumbbell Romanian Deadlift',
        prescription: '3 sets · 8–10 reps',
        image: `${base}/exercises/legs/db-rdl.jpg`,
        why: 'Builds hamstrings, glutes, and hip-hinge strength.',
        cues: ['Push hips back', 'Keep weights close', 'Stop when the back wants to round'],
      },
      {
        name: 'Slow Calf Raise',
        prescription: '3 sets · 8 reps',
        image: `${base}/exercises/calves/slow-calf-raise.png`,
        why: 'Builds calf and Achilles capacity through controlled loading.',
        cues: ['Rise for two seconds', 'Pause at the top', 'Lower for three seconds'],
      },
    ],
  },
};

export const mobility = [
  {
    name: '90/90 Hip Switch',
    dose: '6 slow switches',
    image: `${base}/stretches/hips/90-90.png`,
    why: 'Improves hip rotation used in walking, squatting, tennis, and ground movement.',
  },
  {
    name: 'Hamstring Stretch',
    dose: '30 sec per side',
    image: `${base}/stretches/hamstrings/hamstring-stretch.png`,
    why: 'Reduces posterior-chain stiffness without forcing range.',
  },
  {
    name: 'Calf Stretch',
    dose: '30 sec per side',
    image: `${base}/stretches/calves/calf-stretch.png`,
    why: 'Supports ankle motion and reduces excess demand on the foot.',
  },
  {
    name: 'Towel Calf Stretch',
    dose: '30 sec per side',
    image: `${base}/stretches/calves/towel-calf-stretch.png`,
    why: 'A seated option for gently restoring ankle range.',
  },
  {
    name: 'Dead Bug',
    dose: '6 reps per side',
    image: `${base}/exercises/core/dead-bug.png`,
    why: 'Teaches trunk control while the arms and legs move.',
  },
  {
    name: 'Glute Bridge',
    dose: '10 controlled reps',
    image: `${base}/exercises/core/glute-bridge.png`,
    why: 'Activates the glutes and reinforces hip extension.',
  },
];
