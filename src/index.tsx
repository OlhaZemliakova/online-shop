import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/App.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <App />
)