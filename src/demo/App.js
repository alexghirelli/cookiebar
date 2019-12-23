import './css/App.css';
import Lib from './../lib';

class App {
  constructor(){
    let libInstance = new Lib('#root', 'Lorem ipsum dolor sit amet.');
    console.log(libInstance);
  }
}

export default App;
