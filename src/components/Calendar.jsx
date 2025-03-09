import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography, useTheme, List, ListItem, ListItemText } from "@mui/material";
import Header from "./Header";
import { formatDate } from "@fullcalendar/core";
import { tokens } from "../theme";


export default function Calendar() {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Enter a title for your event");
        const calendarApi = selected.view.calendar;
        if (!calendarApi) return;

        calendarApi.unselect();

        if (title) {
            const newEvent = {
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            };

            calendarApi.addEvent(newEvent);
            setCurrentEvents((prev) => [...prev, newEvent]);
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete "${selected.event.title}"?`)) {
            selected.event.remove();
            setCurrentEvents((prev) => prev.filter(event => event.id !== selected.event.id));
        }
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* Sidebar */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]}
                borderRadius="4px"
                p={2}>
                    <Typography variant="h6">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id} sx={{
                                backgroundColor: colors.greenAccent[700], // ✅ إصلاح اللون
                                borderRadius: "4px",
                                margin: "10px 0"
                            }}>
                                <ListItemText primary={event.title} secondary={
                                    <Typography>
                                        {formatDate(event.start, 
                                        { year: "numeric", month: "short", day: "numeric" })}
                                    </Typography>
                                } />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Main Calendar */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[dayGridPlugin,timeGridPlugin,listPlugin,interactionPlugin]}
                        headerToolbar={{
                            right: 'prev,next today',
                            center: 'title',
                            left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        editable={true}
                        initialView="dayGridMonth"
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        initialEvents={[
                            { id: '1234', title: 'All-day event', date: new Date().toISOString().split('T')[0] }, // ✅ تحديث التاريخ الديناميكي
                        ]}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)} // ✅ استخدام `eventsSet` بدلاً من `eventSet`
                    />
                </Box>
            </Box>
        </Box>
    );
}
