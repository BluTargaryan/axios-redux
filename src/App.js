import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import Nav from './Nav';


function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const signedIN = useSelector((state)=>state.isLogged);
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <Nav counter={counter}/>
      {signedIN &&
      <h1>MOVIE LIST</h1>
    }
    </div>
  );
}


export default App;
