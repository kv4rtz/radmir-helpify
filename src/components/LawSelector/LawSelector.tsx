import { Checkbox } from 'primereact/checkbox'
import { SearchLaws } from '../pages/HomePage/HomePage'
import { Dispatch, SetStateAction } from 'react'

interface LawSelectorProps {
  searchLaws: SearchLaws
  setSearchLaws: Dispatch<SetStateAction<SearchLaws>>
}

const LawSelector = ({ searchLaws, setSearchLaws }: LawSelectorProps) => {
  return (
    <ul className="flex flex-col gap-5">
      <li>
        <label className="select-none cursor-pointer flex gap-2 items-center">
          <Checkbox
            onChange={() =>
              setSearchLaws((prev) => ({ ...prev, uk: !prev.uk }))
            }
            checked={searchLaws.uk}
          />
          Уголовный
        </label>
      </li>
      <li>
        <label className="select-none cursor-pointer flex gap-2 items-center">
          <Checkbox
            onChange={() =>
              setSearchLaws((prev) => ({ ...prev, ak: !prev.ak }))
            }
            checked={searchLaws.ak}
          />
          Административный
        </label>
      </li>
      <li>
        <label className="select-none cursor-pointer flex gap-2 items-center">
          <Checkbox
            onChange={() =>
              setSearchLaws((prev) => ({ ...prev, upk: !prev.upk }))
            }
            checked={searchLaws.upk}
          />
          Уголовно-процессуальный
        </label>
      </li>
      <li>
        <label className="select-none cursor-pointer flex gap-2 items-center">
          <Checkbox
            onChange={() =>
              setSearchLaws((prev) => ({ ...prev, ek: !prev.ek }))
            }
            checked={searchLaws.ek}
          />
          Этический
        </label>
      </li>
    </ul>
  )
}

export default LawSelector
