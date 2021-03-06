const dailySplits = {
  "5day": [
    {
      day: "DAY 1",
      lifts: ["Bench", "OHP"],
      baseLift: ["bench", "ohp"],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, "8+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 2",
      lifts: ["Squat", "Sumo Dead"],
      baseLift: ["squat", "deadlift"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 3",
      lifts: ["OHP", "Incline Bench"],
      baseLift: ["ohp", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 4",
      lifts: ["Deadlift", "Front Squat"],
      baseLift: ["deadlift", "squat"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 3, 3, "3+"],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 5",
      lifts: ["Bench", "Close-Grip Bench"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
  "4day": [
    {
      day: "DAY 1",
      lifts: ["Bench", "OHP"],
      baseLift: ["bench", "ohp"],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, "8+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 2",
      lifts: ["Squat", "Sumo Dead"],
      baseLift: ["squat", "deadlift"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "--REST--",
      lifts: [],
      baseLift: [],
      t1Weights: [],
      t1Reps: [],
      t2Weights: [],
      t2Reps: [],
    },
    {
      day: "DAY 4",
      lifts: ["Deadlift", "Front Squat"],
      baseLift: ["deadlift", "squat"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 3, 3, "3+"],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 5",
      lifts: ["Bench", "Close-Grip Bench"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
  cap31: [
    {
      day: "DAY 1",
      lifts: ["Bench #1", "Bench #2"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.735, 0.735, 0.735, 0.8, 0.8, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, "8+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 2",
      lifts: ["Deadlift #1", "Row #2"],
      baseLift: ["deadlift", "row"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 3",
      lifts: ["Squat #1", "OHP #2"],
      baseLift: ["squat", "ohp"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 3, 3, "3+"],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 4",
      lifts: ["Bench #1", "Bench #2"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "--REST--",
      lifts: [],
      baseLift: [],
      t1Weights: [],
      t1Reps: [],
      t2Weights: [],
      t2Reps: [],
    },
    {
      day: "DAY 6",
      lifts: ["Deadlift #1", "Row #1"],
      baseLift: ["deadlift", "row"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 7",
      lifts: ["Squat #2", "OHP #1"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
  cap32: [
    {
      day: "DAY 8",
      lifts: ["Bench #1", "Bench #2"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, "8+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 9",
      lifts: ["Deadlift #1", "Row #2"],
      baseLift: ["deadlift", "row"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "--REST--",
      lifts: [],
      baseLift: [],
      t1Weights: [],
      t1Reps: [],
      t2Weights: [],
      t2Reps: [],
    },
    {
      day: "DAY 11",
      lifts: ["Squat #1", "OHP #2"],
      baseLift: ["squat", "ohp"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 12",
      lifts: ["Bench #1", "Bench #2"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 13",
      lifts: ["Deadlift #1", "Row #1"],
      baseLift: ["deadlift", "row"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 14",
      lifts: ["Squat #2", "OHP #1"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
  cap33: [
    {
      day: "--REST--",
      lifts: [],
      baseLift: [],
      t1Weights: [],
      t1Reps: [],
      t2Weights: [],
      t2Reps: [],
    },
    {
      day: "DAY 16",
      lifts: ["Bench #1", "Bench #2"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 17",
      lifts: ["Deadlift #1", "Row #2"],
      baseLift: ["deadlift", "row"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 3, 3, "3+"],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 18",
      lifts: ["Squat #1", "OHP #2"],
      baseLift: ["squat", "ohp"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 19",
      lifts: ["Bench #1", "Bench #2"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 20",
      lifts: ["Deadlift #1", "Row #1"],
      baseLift: ["deadlift", "row"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: "DAY 21",
      lifts: ["Squat #2", "OHP #1"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
};

export default dailySplits;
