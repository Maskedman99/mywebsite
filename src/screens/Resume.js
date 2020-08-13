import React from 'react';

import CertificationCard from '../components/CertificationCard';

import coursera from '../assets/coursera.jpeg';
import hackerrank from '../assets/hackerrank.jpeg';
import stationx from '../assets/stationx.png';

import '../css/Resume.css';

const Resume = () => {
  return (
    <div className="Resume-Container">
      <div>Certifications</div>
      <CertificationCard
        image={coursera}
        title={'Introduction to Big Data'}
        subTitle1={'UC San Diego'}
        subTitle2={'Coursera'}
        link={'https://www.coursera.org/account/accomplishments/certificate/SEQWRPDWRL4C'}
      />
      <CertificationCard
        image={coursera}
        title={'R Programming'}
        subTitle1={'John Hopkins University'}
        subTitle2={'Coursera'}
        link={'https://www.coursera.org/account/accomplishments/certificate/9TVNB8S6YNFP'}
      />
      <CertificationCard
        image={hackerrank}
        title={'React Certification'}
        subTitle1={'HackerRank'}
        link={'https://www.hackerrank.com/certificates/6f8c98030869'}
      />
      <CertificationCard
        image={stationx}
        title={'The Complete Cyber Security Course! Volume 1: Hackers Exposed'}
        subTitle1={'Nathan House'}
        subTitle2={'StationX'}
        link={''}
      />
    </div>
  );
};

export default Resume;
