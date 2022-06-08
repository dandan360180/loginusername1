import logo from './logo.svg';
import './App.css';
import nandan from './Components/Nandan';
import Ankush1 from './Ankush1';
import Nandan from './Components/Nandan';
import NandanState from './Components/NandanState'
import NandanHandlingevent from './Components/NandanHandlingevent';
import NandanUsestate from './Components/NandanUsestate';
import NandanUseeffect from './Components/NandanUseeffect';


function App() {
  return (
    <div>
    <Ankush1 name="ankush" fav="superman"/>
    <Ankush1 name ="nandan" fav="batman"/>
    <Nandan name="anksuh"/>
   <NandanState/>
    <NandanHandlingevent/>
    <NandanUsestate/>
    <NandanUseeffect/>
    </div>
  );
}

export default App;
