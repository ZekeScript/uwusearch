import './App.css'
import { Animes } from './components/Animes'
import { useAnimes } from './hooks/useAnimes'

function App () {
  const { animes } = useAnimes()

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Animes</h1>
        <form className='form'>
          <input placeholder='Mushoku Tensei' />
          <button>Submit</button>
        </form>
      </header>

      <main>
        <Animes animes={animes} />
      </main>
    </div>
  )
}

export default App
