import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/App.scss';

// import { Provider } from 'react-redux'
// import store from './store'

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  // <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  // </Provider>
)