import './App.css'

function App () {
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
        <p>Resultados</p>
      </main>
    </div>
  )
}

export default App
