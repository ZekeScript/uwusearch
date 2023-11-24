import { useCallback, useRef, useState } from 'react'
import { searchAnimes } from '../services/animes'

export function useAnimes ({ search, sort }) {
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef()

  const getAnimes = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(true)
      previousSearch.current = search
      const newAnimes = await searchAnimes({ search })
      setAnimes(newAnimes)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [search])

  const sortedAnimes = useCallback(sort
    ? [...animes].sort((a, b) => a.title.localeCompare(b.title))
    : animes
  , [sort, animes])

  return { animes: sortedAnimes, getAnimes, loading, error }
}
