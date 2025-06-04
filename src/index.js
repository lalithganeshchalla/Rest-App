import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import TernaryOperatorConditionalRendering from './ConditionalRendering/TernaryOperatorConditionalRendering';
// import IfElseConditionalRendering from './ConditionalRendering/IfElseConditionalRendering';
// import ParentComponent from './RenderingOneComponentOnAnotherComponentUsingProps/parentComponent';
// import SwitchCaseConditionalRendering from './ConditionalRendering/SwitchCaseConditionalRendering';
// import VariableConditionalRendering from './ConditionalRendering/VariableConditionalRendering';
// import CounterApp from './CounterApp/counterApp';
// // import TextInput2 from './TextInputUsingUseState/TextInput2';
// import ToDoTask from './ToDoApp/ToDoTask';
import App1 from './App1';
// import Users from './useReducer/Users';
// import List from './listandvalues/list';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ParentComponent /> */}
    {/* <IfElseConditionalRendering isLogin={true} /> */}
    {/* <TernaryOperatorConditionalRendering isLogin={true}/> */}
    {/* <SwitchCaseConditionalRendering status="" /> */}
    {/* <VariableConditionalRendering isLogin={false}/> */}
    {/* <CounterApp /> */}
    {/* <List /> */}
    {/* <TextInput2 /> */}
    {/* <ToDoTask /> */}
    <App1 />
    {/* <Users/> */}
  </React.StrictMode>
);


