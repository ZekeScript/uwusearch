import './App.css'
import { useState, useEffect } from 'react'
import { Animes } from './components/Animes'
import { useAnimes } from './hooks/useAnimes'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('Escriba un anime para buscarlo')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const { animes } = useAnimes()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Animes</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Mushoku Tensei' />
          <button type='submit'>Submit</button>
        </form>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Animes animes={animes} />
      </main>
    </div>
  )
}

export default App
