import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header.js'
import { IntlProvider } from 'react-intl';

function App() {
  return (
    <IntlProvider messages={{}} locale='ru' defaultLocale='ru'>
      <div>
        <Header />
      </div>
    </IntlProvider>

  );
}

export default App;
