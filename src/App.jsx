import { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SearchNav from './Components/SearchNav';
import Mains from './Components/Mains';
import Background from './Components/Background';
import './App.css';

function App() {
  const [character, setCharacter] = useState(null)
  return (
    <>
    <div className="app">
    <Background />
    <Header />
    <SearchNav setCharacter={setCharacter} />
    <Mains character={character} />
    <Footer />
    </div>
    </>
  )
}

export default App
