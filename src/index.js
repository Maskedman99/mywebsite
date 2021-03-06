import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  document.getElementById('root')
);
