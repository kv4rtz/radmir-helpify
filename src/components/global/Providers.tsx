import { ReactNode } from 'react'
import { PrimeReactProvider } from 'primereact/api'

interface ProvidersProps {
  children: ReactNode
}

const Providres = ({ children }: ProvidersProps) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>
}

export default Providres
