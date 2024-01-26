import Link from 'next/link'
import { LawLink } from './data'

interface LawListProps {
  law: LawLink[]
}

const LawList = ({ law }: LawListProps) => {
  return (
    <ul className="mt-3 flex flex-col gap-1">
      {law.map((el, idx) => (
        <li key={idx}>
          <Link
            className="text-bg-green opacity-70 inline-block rounded"
            target="_blank"
            href={el.href}
          >
            {el.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LawList
