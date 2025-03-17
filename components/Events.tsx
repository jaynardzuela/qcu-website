import "../css/Events.css";

const Events = () => {
  return (
    <div className="events">
      <h2>Campus Calendar of Events</h2>
      <div className="event-month">
        <h3>January</h3>
        <p>
          <strong>15</strong> - Start of Classes
        </p>
        <p>
          <strong>31</strong> - Last day of dropping subjects
        </p>
      </div>
      <div className="event-month">
        <h3>February</h3>
        <p>
          <strong>25</strong> - People Power Day
        </p>
      </div>
      <div className="event-month">
        <h3>March</h3>
        <p>
          <strong>3-7</strong> - QCU Foundation Day
        </p>
        <p>
          <strong>10-22</strong> - Midterm Examination
        </p>
      </div>
      <div className="see-more">
        <a href="/calendar" className="see-more-button">
          See More
        </a>
      </div>
    </div>
  );
};

export default Events;
