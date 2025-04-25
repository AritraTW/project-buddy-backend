// src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import moment from 'moment'; // Import moment for date formatting
import { sprintData } from './data/sprints';
import { calendarEventsData } from './data/calendarEvents';
import type { CalendarEvent as RawCalendarEvent } from './data/calendarEvents'; // Import type

// Define the processed event type for the API response
interface ProcessedCalendarEvent extends Omit<RawCalendarEvent, 'start' | 'end'> {
    start: string; // Send dates as ISO strings
    end: string;
    day: string; // Ensure day is always present
}

const app = express();
const PORT = process.env.PORT || 4000; // Use port 4000 or environment variable

// --- Middleware ---
// Enable CORS for requests from your frontend (adjust origin in production)
app.use(cors({ origin: '*' })); // Allow all origins for development
app.use(express.json()); // If you need to parse JSON request bodies later

// --- Routes ---
app.get('/api/sprints', (req: Request, res: Response) => {
    res.json(sprintData);
});

app.get('/api/calendar-events', (req: Request, res: Response) => {
    // Process events: format dates as ISO strings and add 'day'
    const processedEvents: ProcessedCalendarEvent[] = calendarEventsData.map(event => ({
        ...event,
        start: event.start.toISOString(), // Format date for JSON
        end: event.end.toISOString(),   // Format date for JSON
        day: moment(event.start).format("YYYY-MM-DD") // Add day string
    }));
    res.json(processedEvents);
});

// Simple root message
app.get('/', (req: Request, res: Response) => {
    res.send('Retro Buddy API is running!');
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
});