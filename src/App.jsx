import './index.css'
import { useState } from 'react';
function App() {
  let [counter , setCounter] = useState(0)

  const addVal = () =>{
    if(counter < 20){
        setCounter(counter + 1);
    }
  }
  const removeVl = () =>{
     if(counter > 0){
      setCounter(counter - 1);
     }
  }
  return (
    <>
      <div className="flex flex-col justify-center  items-center h-lvh font-serif bg-slate-200">
        <h2 className="text-4xl font-bold text-center">Excercise: React Hooks</h2>
        <div className="bg-slate-400 border-2 border-black p-5 m-5">
          <h2 className='text-2xl text-center pb-4'>Your Value is: {counter}</h2>
          <div className="flex gap-4">
            <button onClick={addVal} className='bg-black px-5 py-2 border-2 border-white text-white rounded-sm'>Increase</button>
            <button onClick={removeVl} className='bg-black px-5 py-2 border-2 border-white text-white rounded-sm'>Decrease</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
