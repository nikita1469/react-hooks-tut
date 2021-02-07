import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
   const [value, setValue] = useState(1)
   const [visible, setVisible] = useState(true)

   if(visible) {
      return (
         <div style={{fontSize: '30px'}}>
            <button 
               onClick={() => setValue((v) => v + 1)}>+</button>
            <button
               onClick={() => setVisible(false)}>hide</button>
            <PlanetInfo id={value}/>
         </div>
      )
   } else {
      return <button onClick={() => setVisible(true)}>show</button>
   }
}

const usePlanetInfo = (id) => {

   const [ name, setName ] = useState(null)

   useEffect(() => {
      let canceled = false

      fetch(`https://swapi.dev/api/planets/${id}`)
         .then(res => res.json())
         .then(data => !canceled && setName(data.name))

      return () => canceled = true

   }, [id])

   return name
}

const PlanetInfo = ({id}) => {

   const name = usePlanetInfo(id)

   return (
      <div>{id} - {name}</div>
   )
}

ReactDOM.render(
   <App/>,
   document.getElementById('root')
)
