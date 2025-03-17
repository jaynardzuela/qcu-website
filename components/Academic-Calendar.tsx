import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/AdmissionInstruction.css"; // Ensure you have the appropriate CSS file for styling

const AcademicCalendar = () => {
  return (
    <div className="admission-container">
      <Carousel>
        <div>
          <img
            src="../assets/images/acad-calendar.png"
            alt="Admission Step 1"
          />
        </div>
        <div>
          <img
            src="../assets/images/acad-calendar-2.png"
            alt="Admission Step 2"
          />
        </div>
        <div>
          <img
            src="../assets/images/acad-calendar-3.png"
            alt="Admission Step 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default AcademicCalendar;
