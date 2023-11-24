import './App.css'
import { useCallback, useState } from 'react'
import { Animes } from './components/Animes'
import { useAnimes } from './hooks/useAnimes'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { animes, loading, getAnimes } = useAnimes({ search, sort })

  const debounceGetAnimes = useCallback(
    debounce(search => {
      getAnimes({ search })
    }, 300)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getAnimes({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetAnimes(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Animes</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type='checkbox' onChange={handleSort} checked={sort} />
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
