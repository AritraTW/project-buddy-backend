// src/data/sprints.ts
export interface MemberData { completed: number; }
export interface Sprint { sprint: string; committed: number; completed: number; bugs: number; features: number; chores: number; members: Record<string, MemberData>; }

export const sprintData: Sprint[] = [
    { sprint: "Sprint 21", committed: 40, completed: 35, bugs: 8, features: 20, chores: 7, members: { Alice: { completed: 10 }, Bob: { completed: 8 }, Charlie: { completed: 5 }, Diana: { completed: 4 }, Evan: { completed: 3 }, Fiona: { completed: 1 }, George: { completed: 1 }, Hannah: { completed: 1 }, Ian: { completed: 1 }, Julia: { completed: 1 } } },
    { sprint: "Sprint 22", committed: 45, completed: 40, bugs: 6, features: 25, chores: 9, members: { Alice: { completed: 12 }, Bob: { completed: 10 }, Charlie: { completed: 5 }, Diana: { completed: 4 }, Evan: { completed: 3 }, Fiona: { completed: 2 }, George: { completed: 1 }, Hannah: { completed: 1 }, Ian: { completed: 1 }, Julia: { completed: 1 } } },
    { sprint: "Sprint 23", committed: 50, completed: 30, bugs: 15, features: 10, chores: 5, members: { Alice: { completed: 6 }, Bob: { completed: 5 }, Charlie: { completed: 4 }, Diana: { completed: 3 }, Evan: { completed: 3 }, Fiona: { completed: 2 }, George: { completed: 2 }, Hannah: { completed: 1 }, Ian: { completed: 2 }, Julia: { completed: 2 } } },
];