import React from "react";
import "../css/History.css"; // Ensure you have the appropriate CSS file for styling

const History = () => {
  return (
    <div className="history-container">
      <h2 className="history-title">Our History</h2>
      <div className="history-content">
        <p>
          <strong>Quezon City University (QCU)</strong>, formerly known as
          Quezon City Polytechnic University (QCPU), is a city government-funded
          university in Quezon City, Philippines.
        </p>
        <p>
          It was established on March 1, 1994, as the Quezon City Polytechnic,
          offering technical and vocational courses. It was renamed as Quezon
          City Polytechnic University when it was elevated into university
          status in 2001. Twenty years later in 2021, QCPU was renamed Quezon
          City University.
        </p>
        <p>
          Under the guidance of our esteemed University President, Dr. Teresita
          V. Atienza, QCU continues to pursue excellence in education, research,
          and community service. Her visionary leadership drives us forward,
          ensuring that QCU remains at the forefront of higher education in the
          region.
        </p>
      </div>
    </div>
  );
};

export default History;
