import './App.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
