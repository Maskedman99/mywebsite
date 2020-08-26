import React, {useState} from 'react';

import Skills from '../components/Skills';
import CertificationCard from '../components/CertificationCard';

import avasarshala from '../assets/avasarshala.png';
import coursera from '../assets/coursera.png';
import hackerrank from '../assets/hackerrank.png';
import stationx from '../assets/stationx.png';

import '../css/Resume.css';

const Resume = () => {
  const [open, setOpen] = useState('Skills');
  return (
    <div className="Resume-Container">
      <div
        className={open === 'Skills' ? 'Resume-ActiveTitle' : 'Resume-Title'}
        onClick={() => setOpen('Skills')}>
        Skills
      </div>
      {open === 'Skills' && (
        <Skills
          skills={['ReactJS', 'React-native', 'HTML', 'CSS', 'Python', 'C', 'Javascript', 'R', 'Git']}
        />
      )}
      <div
        className={open === 'Experience' ? 'Resume-ActiveTitle' : 'Resume-Title'}
        onClick={() => setOpen('Experience')}>
        Experience
      </div>
      {open === 'Experience' && (
        <CertificationCard
          image={avasarshala}
          title={'Avasarshala'}
          subTitle1={'Intern'}
          subTitle2={
            'Developed a website that helps administrator to view and manage the platform and help analyze user data.'
          }
          link={'https://www.avasarshala.com/'}
        />
      )}
      <div
        className={open === 'Certifications' ? 'Resume-ActiveTitle' : 'Resume-Title'}
        onClick={() => setOpen('Certifications')}>
        Certifications
      </div>
      {open === 'Certifications' && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Resume;
