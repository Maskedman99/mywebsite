import React from 'react';

import '../css/CertificationCard.css';

const CertificationCard = ({image, title, subTitle1, subTitle2, link}) => {
  return (
    <div className="CertificationCard-Container">
      <img className="CertificationCard-Image" src={image} alt="" height="100" width="100" />
      <div>
        <div className="CertificationCard-Title">{title}</div>
        <div className="CertificationCard-Subtitle">{subTitle1}</div>
        {subTitle2 !== undefined && <div className="CertificationCard-Subtitle">{subTitle2}</div>}
      </div>
    </div>
  );
};

export default CertificationCard;
