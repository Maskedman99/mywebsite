import { useContext } from 'react';

import {ThemeContext} from '../context/Themes';

import '../css/CertificationCard.css';

const CertificationCard = ({image, title, subTitle1, subTitle2, link}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <a
      className="CertificationCard-Container"
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      style={{color: theme.foreground}}>
      <img className="CertificationCard-Image" src={image} alt="" height="100" width="100" />
      <div>
        <div className="CertificationCard-Title">{title}</div>
        <div className="CertificationCard-Subtitle">{subTitle1}</div>
        {subTitle2 !== undefined && <div className="CertificationCard-Subtitle">{subTitle2}</div>}
      </div>
    </a>
  );
};

export default CertificationCard;
