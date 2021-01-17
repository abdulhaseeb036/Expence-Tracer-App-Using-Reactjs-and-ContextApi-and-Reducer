import './App.css';
import Header from './components/header/header';
import Totalbalance from './components/balance/totalbalance';
import Incomeexpence from './components/incomeexpenceData/incomeexpence';
import History from './components/history/history'
import Addtranscation from './components/addtranscation/addtranscation'
import {Globalprovider} from './contextapi/contextapi'


function App() {
  return (
    <Globalprovider>
    <div className="container">
      <Header />
      <Totalbalance />
      <Incomeexpence />
      <Addtranscation />
      <History />

    </div>
    </Globalprovider>
  );
}

export default App;
