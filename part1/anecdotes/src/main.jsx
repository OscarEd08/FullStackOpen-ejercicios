import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Header = (props) => <h1>{props.text}</h1>

const Anecdote = (props) => {
  return(
    <div>
      <p>{props.anecdotes[props.value]}</p>
      <p>has {props.votes} votes</p>
    </div>

  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const MostVoted = ({vote,anecdote}) => {
  const maxVote = Math.max(...vote)
  const maxIndex = vote.indexOf(maxVote)
  const maxVoted = anecdote[maxIndex]

  return(
    <div>
      {
      maxVote === 0?
        <p>No votes yet</p>
      :
        <div>
          <p>{maxVoted}</p>
          <p>has {maxVote} votes</p>
        </div>
      }
    </div>
  )

}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(6).fill(0))
  
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const votes = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }


  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdotes={anecdotes} value={selected} votes={vote[selected]} />
      <Button onClick={votes} text={"vote"} />
      <Button onClick={randomAnecdote} text={"next anecdote"} />
      <Header text={"Anectode with most votes"} />
      <MostVoted vote={vote} anecdote={anecdotes}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
)
