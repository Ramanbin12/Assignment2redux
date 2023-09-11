import './App.css';
import React from 'react';
// import {useState} from 'react';
import { ComponentNavbar } from './components/index';
import ComponentRoute from './routes/ComponentRoute';
// import {store} from './redux/store';
// import AppContext from './common/AppContext';
// import { Provider } from 'react-redux';
function App() {
  // const[showNav,setShowNav]=useState(false);
  // const[addFav,setAddFav]=useState(false);
  return (
    <div className="App">
      <div className="flex">
        {/* <Provider value={{addFav,setAddFav}}> */}
        {/* <Provider store={store}> */}
        <ComponentNavbar/>
        <ComponentRoute/>
        {/* </Provider> */}
      </div>
       
    </div>
  
  );
}

export default App;
