import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logos">
          <img
            src="../assets/images/qcu-logo.png"
            alt="QCU Logo"
            className="footer-logo"
          />
          <img
            src="../assets/images/qc-logo.png"
            alt="QC Logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-info">
          <div className="footer-title">QUEZON CITY UNIVERSITY</div>
          <div>673 Quirino Highway, San Bartolome, Novaliches, Quezon City</div>
        </div>
        <div className="footer-connect">
          <h3>CONNECT WITH US:</h3>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/images/ig-logo.png"
                alt="Instagram"
                className="social-logo"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/images/fb-logo.png"
                alt="Facebook"
                className="social-logo"
              />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/images/google-logo.png"
                alt="Google"
                className="social-logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-qr">
          <img
            src="../assets/images/qcu-qr.png"
            alt="QR Code"
            className="qr-logo"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright 2025. Quezon City University. All Rights reserved. |
          Powered by CCSSBIT3I
        </p>
      </div>
    </footer>
  );
};

export default Footer;
