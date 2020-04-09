import React from "react";
import '../../CSS/footer.css'


//trouble getting search 'widget' to load

export const Footer = () => {
  return (
    <div className = "footerDiv">
        <div className = "horizSpacer"></div>
        <p className = "footerText"> (c) Land Intelligence, Inc. 2020 all rights reserved </p>
        <a href = "https://landintelligence.net/terms/" className = "footerText"> Terms of Service | </a>
        <a href = "https://landintelligence.net/privacy-policy/" className = "footerText"> Privacy Policy </a>
        <div className = "horizSpacer"></div>
    </div>
  );
};