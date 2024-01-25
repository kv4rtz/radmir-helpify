'use client'

import { useState } from 'react'
import Container from '../Container'

const Footer = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString())

  return (
    <footer className="flex-shrink-0 py-3 opacity-70 border-t-2 border-solid border-transparent border-t-bg-gray">
      <Container>
        <div className="flex justify-between">
          <time>Актуально: {date}</time>
          <div>Created by kvarcev & caxapok</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
