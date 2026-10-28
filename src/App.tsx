import { useState } from 'react'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './sections/About'
import { Benefits } from './sections/Benefits'
import { Catalog } from './sections/Catalog'
import { Collections } from './sections/Collections'
import { Contact } from './sections/Contact'
import { Faq } from './sections/Faq'
import { Hero } from './sections/Hero'

export default function App() {
  const [collectionRequest, setCollectionRequest] = useState<{ name: string; nonce: number } | undefined>()

  function handleSelectCollection(name: string) {
    setCollectionRequest({ name, nonce: Date.now() })
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-50">
      <a
        href="#catalogo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Saltar al catálogo
      </a>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Catalog requestedCollection={collectionRequest} />
        <Collections onSelectCollection={handleSelectCollection} />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
