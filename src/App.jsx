import './App.css'
import { Animes } from './components/Animes'
import { useAnimes } from './hooks/useAnimes'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, updateSearch, error } = useSearch()
  const { animes, loading, getMovies } = useAnimes({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Animes</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px, solid, transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Mushoku Tensei'
          />
          <button type='submit'>Submit</button>
        </form>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Animes animes={animes} />
        }
      </main>
    </div>
  )
}

export default App
