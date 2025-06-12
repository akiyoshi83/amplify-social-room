import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json'

Amplify.configure(outputs);
console.log('REACT_APP_TEST_VARIABLE', process.env.REACT_APP_TEST_VARIABLE);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
