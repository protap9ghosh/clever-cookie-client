import { useState } from 'react'
import './App.css'
import NavigationBar from './Shared/NavigationBar/NavigationBar'
import HeroSection from './Shared/Header/HeroSection'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <NavigationBar></NavigationBar>
            <HeroSection></HeroSection>
        </div>
    )
}

export default App
