import './css/App.css';
import Lib from './../lib';

class App {
  constructor(){
    let libInstance = new Lib();
    console.log(libInstance);
  }
}

export default App;
