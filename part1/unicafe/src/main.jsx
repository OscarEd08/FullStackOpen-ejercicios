import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const Display = (props) => (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
)

const Button  = (props) => (
  <button onClick={props.handleClick}> 
    {props.text} 
  </button>)

const Stats = ({clicks}) => {

  const total  = clicks.good + clicks.neutral + clicks.bad;
  const avg = ((clicks.good - clicks.bad) / total).toFixed(1);
  const positive = (clicks.good / total * 100).toFixed(1);

  return(
    <div>
    {
      total===0?
        <div>No feedback given</div>
      :
      <table>
        <tbody>
          <Display text='Good' value={clicks.good}/>
          <Display text='Neutral' value={clicks.neutral}/>
          <Display text='Bad' value={clicks.bad}/>
          <Display text='All' value={total}/>
          <Display text='Average' value={avg}/>
          <Display text='Positive' value={positive + '%'}/>
        </tbody>
    </table>
    }
    </div>
  )
}

const App = () => {
  const [allClicks, setAll] = useState({
    good: 0, neutral:0, bad:0
  })

  const handleClick = (state) => () => {
    switch(state){
      case 1: setAll({...allClicks, good:allClicks.good+1}); break;
      case 2: setAll({...allClicks, neutral:allClicks.neutral+1}); break;
      case 3: setAll({...allClicks, bad:allClicks.bad+1}); break;
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClick(1)} text='good'/>
      <Button handleClick={handleClick(2)} text='neutral'/>
      <Button handleClick={handleClick(3)} text='bad'/>
      <h1>Statics</h1>
      <Stats clicks={allClicks} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

