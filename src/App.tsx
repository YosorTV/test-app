import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Counter } from './Components'
import { RandomList } from './Components/RandomList'

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<any>([]);

  const applyCounter = useCallback(() => {
    setCount(count => count + 1)
    const num = Math.floor(Math.random() * 101);
    setList([...list, num])
  }, [list, count]);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      applyCounter()
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [list]);
  

  return (
    <div className="App">
      <div className="card">
        <button onClick={applyCounter}> Increase </button>
        <Counter value={count}/>
        <RandomList listData={list} />
      </div>
    </div>
  )
}

export default App
