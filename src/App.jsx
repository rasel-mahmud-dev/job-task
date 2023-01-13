import {lazy,  Suspense} from 'react'
import './App.scss'
import Loader from "components/Loader/Loader";

const JoinForm = lazy(()=>import("./pages/JoinForm/JoinForm"));

function App() {

  return (
    <div className="App">
        <Suspense fallback={<Loader />}>
            <JoinForm />
        </Suspense>
    </div>
  )
}

export default App
