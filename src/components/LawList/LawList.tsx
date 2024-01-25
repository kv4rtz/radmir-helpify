import Link from 'next/link'
import { laws } from './data'

const LawList = () => {
  return (
    <ul>
      {laws.map((el, idx) => (
        <li key={idx}>
          <Link target="_blank" href={el.href}>
            {el.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LawList
