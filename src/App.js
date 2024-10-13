import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import CounterWithRedux from './component/CounterWithRedux';
import CounterWithSlice from './component/CounterWithSlice';

function App() {
  return (
    <div >
      Hii
      {/* <Counter/> */}
      {/* <CounterWithRedux/> */}
      <CounterWithSlice/>
    </div>
  );
}

export default App;
