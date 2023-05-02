import { useState } from 'react'
import './App.css'
import Header from './components/Shared/Header/Header'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Header></Header>
        </div>
    )
}

export default App
