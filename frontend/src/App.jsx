import viteLogo from '/vite.svg '
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((reponse)=>{
        setJokes(reponse.data)
      })
      .catch((error)=>{
        console.log(error)
      })
      })

  return (
    <>
      <h1>Aditi</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
