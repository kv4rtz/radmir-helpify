import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container max-w-[1200px] mx-auto px-2">{children}</div>
}

export default Container
