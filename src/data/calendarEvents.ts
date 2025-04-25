// src/data/calendarEvents.ts
export interface CalendarEvent { title: string; start: Date; end: Date; cost: number; sprint: string; milestone: string; day?: string; } // day is optional here, will be added

export const calendarEventsData: Omit<CalendarEvent, 'day'>[] = [ // Use Omit as 'day' isn't in the source
    { title: "Team Sync", start: new Date(2025, 3, 25, 9, 0), end: new Date(2025, 3, 25, 10, 0), cost: 100, sprint: "Sprint 22", milestone: "M1" },
    { title: "Sprint Planning", start: new Date(2025, 3, 26, 10, 0), end: new Date(2025, 3, 26, 12, 0), cost: 150, sprint: "Sprint 23", milestone: "M2" },
    { title: "Retrospective", start: new Date(2025, 3, 27, 9, 30), end: new Date(2025, 3, 27, 10, 30), cost: 120, sprint: "Sprint 22", milestone: "M1" },
    { title: "Daily Standup", start: new Date(2025, 3, 28, 9, 0), end: new Date(2025, 3, 28, 9, 15), cost: 50, sprint: "Sprint 23", milestone: "M2" },
    { title: "Backlog Grooming", start: new Date(2025, 3, 15, 14, 0), end: new Date(2025, 3, 15, 15, 30), cost: 180, sprint: "Sprint 21", milestone: "M1" },
];