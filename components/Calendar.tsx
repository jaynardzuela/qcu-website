// filepath: c:\Users\User\Downloads\ai\my-app\components\Calendar.tsx
import React, { JSX, useState } from "react";
import "../css/Calendar.css";
import Events from "./Events";

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Get current month details
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get first day of the month and total days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Get day names
  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Get month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Handle date selection
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    if (onDateSelect) {
      onDateSelect(newDate);
    }
  };

  // Check if a date is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  // Check if a date is selected
  const isSelected = (day: number) => {
    return (
      selectedDate?.getDate() === day &&
      selectedDate?.getMonth() === currentMonth &&
      selectedDate?.getFullYear() === currentYear
    );
  };

  // Generate calendar days
  const renderDays = () => {
    const days: JSX.Element[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayClass = `calendar-day ${isToday(day) ? "today" : ""} ${
        isSelected(day) ? "selected" : ""
      }`;
      days.push(
        <div
          key={day}
          className={dayClass}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // Generate week numbers
  const renderWeekNumbers = () => {
    const weeks: JSX.Element[] = [];
    const totalWeeks = Math.ceil((daysInMonth + startingDayOfWeek) / 7);
    const weekNumber = Math.ceil(
      (firstDayOfMonth.getTime() - new Date(currentYear, 0, 1).getTime()) /
        (7 * 24 * 60 * 60 * 1000)
    );

    for (let i = 0; i < totalWeeks; i++) {
      weeks.push(
        <div key={`week-${i}`} className="calendar-week">
          {weekNumber + i}
        </div>
      );
    }
    return weeks;
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button className="calendar-nav-button" onClick={prevMonth}>
            &lt;
          </button>
          <div className="calendar-title">
            {monthNames[currentMonth]} {currentYear}
          </div>
          <button className="calendar-nav-button" onClick={nextMonth}>
            &gt;
          </button>
        </div>

        <div className="calendar-grid">
          <div className="calendar-week-column">
            <div className="calendar-month">{currentMonth + 1}</div>
            {renderWeekNumbers()}
          </div>
          <div className="calendar-content">
            <div className="calendar-weekdays">
              {dayNames.map((day) => (
                <div key={day} className="weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-days">{renderDays()}</div>
          </div>
        </div>
      </div>
      <Events />
    </div>
  );
};

export default Calendar;
