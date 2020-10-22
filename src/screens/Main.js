import AboutUrls from '../components/AboutUrls';

import '../css/Main.css';

const Main = () => {
  return (
    <div className="App-main">
      <AboutUrls orientation={'vertical'} />
      <div className="App-main-text-container">
        <div>Hi, I'm</div>
        <div className="App-main-section">
          <div className="App-main-title" style={{color: '#0070ff'}}>
            Rohit Prasad.
          </div>
          <div className="App-main-title" style={{color: '#0080ff'}}>
            I build things for the web and mobile.
          </div>
        </div>
        <div>Currently pursuing my degree in Computer Science and Engineering</div>
        <div>at Govt. Model Engineering College, Thrikkakara.</div>
        <div>I ♥ Free and Open Source projects.</div>
      </div>
    </div>
  );
};

export default Main;
