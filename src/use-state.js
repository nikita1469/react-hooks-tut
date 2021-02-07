// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//   return (
//     <div>
//       <HookSwitcher/>
//     </div>
//   )
// }

// const HookSwitcher = () => {

//   const light = {
//     backgroundColor: 'white', 
//     color: 'black'
//   }

//   const dark = {
//     backgroundColor: 'black', 
//     color: 'white'
//   }

//   const [ color, setColor ] = useState({...dark})


//   const [ fontSize, setFontSize ] = useState(14)

//   return (
//     <div style={{padding: '10px', backgroundColor: color.backgroundColor}}>
//       <p style={{color: color.color, fontSize: fontSize}}>Hi</p>
//       <button onClick={() => setColor(light)}>Light</button>
//       <button onClick={() => setColor(dark)}>Dark</button>
//       <button onClick={() => setFontSize((s) => s + 2)}>+</button>
//     </div>
//   )
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// )
