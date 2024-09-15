
import './App.css'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import 'primeicons/primeicons.css';
import Router from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <>
      <PrimeReactProvider value={{ pt: Tailwind }}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App
