import './index.css'
import MyHeader from './assets/header'
import Travel from './assets/travel'
import data from "../public/data"

function App() {

  const Map = data.map((object) => {
    return (
      <Travel
        key={object.title}
        {...object}
      />
    )
  })

  return (
    <div className='page'>
      <MyHeader />
      {Map}
    </div>
  )
}

export default App
