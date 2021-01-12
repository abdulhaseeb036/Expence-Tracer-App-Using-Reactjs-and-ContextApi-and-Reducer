import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Totalbalance from './components/balance/totalbalance';
import Incomeexpence from './components/incomeexpenceData/incomeexpence';
// import History from './components/history/history'
import Addtranscation from './components/addtranscation/addtranscation'
function App() {
  return (
    <div className="container">
      <Header />
      <Totalbalance />
      <Incomeexpence />
      <Addtranscation />
      {/* <History /> */}

    </div>
  );
}

export default App;
