// import PassFunAsProps from './components/PassFunAsProps';
// import Child from './components/Child';

/*
function App() {

  //Pass Function As a Props
  function getName() {
    alert("Hello!!")
  }

  return (
    <div>
      <PassFunAsProps name={getName} />
      <div>
        <Child name={getName} />
      </div>
    </div>

  );
};

export default App;
*/
//=====================================================================


import React from "react";
import UnControlledCompo from "./components/UnControlledCompo"


function App() {

  return (
    <div>
      <UnControlledCompo />
    </div >
  )
}

export default App;



