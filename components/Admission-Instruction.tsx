import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/AdmissionInstruction.css"; // Ensure you have the appropriate CSS file for styling

const AdmissionInstruction = () => {
  return (
    <div className="admission-container">
      <Carousel>
        <div>
          <img src="../assets/images/admission-1.png" alt="Admission Step 1" />
        </div>
        <div>
          <img src="../assets/images/admission-2.png" alt="Admission Step 2" />
        </div>
        <div>
          <img src="../assets/images/admission-3.png" alt="Admission Step 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default AdmissionInstruction;
