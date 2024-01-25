import { ILaw } from '@/src/data/data.types'
import Link from 'next/link'
import { Badge } from 'primereact/badge'
import { Rating } from 'primereact/rating'

interface LawSearchedListProps {
  law: ILaw[]
  type: 'uk' | 'ak' | 'upk' | 'ek'
}

const LawSearchedList = ({ law, type }: LawSearchedListProps) => {
  const WantedItem = ({ el }: { el: ILaw }) => {
    switch (type) {
      case 'uk':
        return (
          <div className="flex gap-2 items-center mt-3">
            <i className="pi pi-clock text-bg-green"></i>
            {typeof el.wanted === 'number' ? (
              <span className="inline-flex items-center gap-3">
                {el.wanted * 30} минут заключения
                <Rating value={el.wanted} readOnly stars={5} cancel={false} />
              </span>
            ) : (
              el.wanted
            )}
          </div>
        )
      case 'ak':
        return (
          <div className="flex gap-2 items-center mt-3">
            <i className="pi pi-dollar text-bg-green"></i>
            {typeof el.wanted === 'number' ? el.wanted + '$ штраф' : el.wanted}
          </div>
        )
    }
  }

  return (
    <ul>
      {law.length ? (
        <li className="text-xl font-semibold">
          {type === 'uk' ? (
            <div className="flex gap-2 items-center">
              Уголовный кодекс
              <Link
                className="pi pi-external-link text-bg-green"
                target="_blank"
                href="https://forum.radmirv.com/index.php?threads/%D0%A3%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9-%D0%9A%D0%BE%D0%B4%D0%B5%D0%BA%D1%81-%D1%88%D1%82%D0%B0%D1%82%D0%B0-san-andreas.19938/"
              />
            </div>
          ) : type === 'ak' ? (
            <div className="flex gap-2 items-center">
              Административный кодекс
              <Link
                className="pi pi-external-link text-bg-green"
                target="_blank"
                href="https://forum.radmirv.com/index.php?threads/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D1%81-%D1%88%D1%82%D0%B0%D1%82%D0%B0-san-andreas.19942/"
              />
            </div>
          ) : type === 'upk' ? (
            <div className="flex gap-2 items-center">
              Уголовно-процессуальный кодекс
              <Link
                className="pi pi-external-link text-bg-green"
                target="_blank"
                href="https://forum.radmirv.com/index.php?threads/%D0%A3%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%BE-%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D1%81-%D1%88%D1%82%D0%B0%D1%82%D0%B0-san-andreas.19943/"
              />
            </div>
          ) : type === 'ek' ? (
            <div className="flex gap-2 items-center">
              Этический кодекс
              <Link
                className="pi pi-external-link text-bg-green"
                target="_blank"
                href="https://forum.radmirv.com/index.php?threads/%D0%AD%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D1%81-%D1%88%D1%82%D0%B0%D1%82%D0%B0-san-andreas.19946/"
              />
            </div>
          ) : (
            'не определено'
          )}
        </li>
      ) : (
        ''
      )}
      {law.map((el, idx) => (
        <li key={idx} className="mt-3 p-3 rounded-lg bg-bg-gray">
          <p>
            <Badge value={`Статья ${el.article}`} /> {el.content}
          </p>
          {el.wanted && <WantedItem el={el} />}
        </li>
      ))}
    </ul>
  )
}

export default LawSearchedList
