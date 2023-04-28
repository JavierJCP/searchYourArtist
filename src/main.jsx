import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AccessTokenProvider } from './context/accessToken';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AccessTokenProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AccessTokenProvider>
);
