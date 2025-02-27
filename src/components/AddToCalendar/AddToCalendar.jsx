import React, { useState } from 'react';
import calendarIcon from "/assets/svg/icon-calendar-black.svg";
import "./AddToCalendar.scss";

const AddToCalendar = ({ event }) => {
    const { title, location, description } = event;
    const [showDropdown, setShowDropdown] = useState(false);

    // Get the next Sunday from today
    const getNextSunday = () => {
        const now = new Date();
        const daysUntilSunday = 7 - now.getDay(); // Days to next Sunday
        const nextSunday = new Date(now);
        nextSunday.setDate(now.getDate() + daysUntilSunday);
        nextSunday.setHours(10, 0, 0, 0); // Set time to 10 AM UTC
        return nextSunday;
    };

    const startDate = getNextSunday();
    const endDate = new Date(startDate);
    endDate.setHours(11); // 11 AM end time

    const formatDate = (date) => {
        return date.toISOString().replace(/-|:|\.\d{3}/g, ""); // Formats YYYYMMDDTHHMMSSZ
    };

    // Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
    )}&dates=${formatDate(startDate)}/${formatDate(
        endDate
    )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
        location
    )}&sf=true&output=xml`;

    // Apple Calendar Data
    const appleCalendarData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${encodeURIComponent(title)}
DESCRIPTION:${encodeURIComponent(description)}
LOCATION:${encodeURIComponent(location)}
END:VEVENT
END:VCALENDAR`;

    const appleCalendarUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(appleCalendarData)}`;

    return (
        <div className="addToCalendar">
            {/* Main Button */}
            <button className="addToCalendarButton" onClick={() => setShowDropdown(!showDropdown)}>
                <img src={calendarIcon} className="calendarIcon"></img>
                <span className="addToCalendarText">Add to Calendar</span>
            </button>

            {/* Dropdown Options */}
            {
                showDropdown && (
                    <div className="calendarDropdown">
                        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                            📅 Google Calendar
                        </a>
                        <a href={appleCalendarUrl} download={`${title}.ics`}>
                            🍏 Apple Calendar
                        </a>
                    </div>
                )
            }
        </div >
    );
};

export default AddToCalendar;