import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
