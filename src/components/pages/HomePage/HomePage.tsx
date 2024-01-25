'use client'

import { ptInput } from '@/app/pt'
import { InputText } from 'primereact/inputtext'
import Container from '../../global/Container'
import { useEffect, useState } from 'react'
import { uk } from '@/src/data/yk'
import { ILaw } from '@/src/data/data.types'
import { ak } from '@/src/data/ak'
import { upk } from '@/src/data/upk'
import LawSearchedList from '../../LawSearchedList/LawSearchedList'
import { ek } from '@/src/data/ek'
import { filter } from './helpers'
import LawSelector from '../../LawSelector/LawSelector'
import { Button } from 'primereact/button'

export interface SearchLaws {
  uk: boolean
  ak: boolean
  upk: boolean
  ek: boolean
}

const HomePage = () => {
  const [search, setSearch] = useState<string>('')
  const [ukLaw, setUkLaw] = useState<ILaw[]>([])
  const [akLaw, setAkLaw] = useState<ILaw[]>([])
  const [upkLaw, setUpkLaw] = useState<ILaw[]>([])
  const [ekLaw, setEkLaw] = useState<ILaw[]>([])
  const [searchLaws, setSearchLaws] = useState<SearchLaws>({
    uk: true,
    ak: true,
    upk: true,
    ek: true,
  })
  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    if (search.length > 0) {
      searchLaws.uk ? setUkLaw(filter(uk, search)) : setUkLaw([])
      searchLaws.ak ? setAkLaw(filter(ak, search)) : setAkLaw([])
      searchLaws.upk ? setUpkLaw(filter(upk, search)) : setUpkLaw([])
      searchLaws.ek ? setEkLaw(filter(ek, search)) : setEkLaw([])
    } else {
      setUkLaw([])
      setAkLaw([])
      setUpkLaw([])
      setEkLaw([])
    }
  }, [search, searchLaws])

  const handleShow = () => setShowMenu((prev) => !prev)

  return (
    <Container>
      <div className="flex gap-3 max-md:flex-col">
        <InputText
          className="grow"
          pt={ptInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите слово или номер статьи"
        />
        <Button
          className="min-w-[170px]"
          label={`${showMenu ? 'Скрыть' : 'Показать'} меню`}
          onClick={handleShow}
        />
      </div>
      <div className="flex max-md:flex-col gap-3 my-3 items-start">
        {showMenu && (
          <div className="p-3 rounded-lg bg-bg-gray grow-0 shrink-0 max-md:w-full max-md:grow max-md:shrink">
            <h2 className="text-xl font-semibold mb-3">Где ищем?</h2>
            <LawSelector
              searchLaws={searchLaws}
              setSearchLaws={setSearchLaws}
            />
          </div>
        )}
        <div className="grow">
          {!search.length && (
            <div className="text-center opacity-70 text-xl font-semibold">
              Ничего не найдено
            </div>
          )}
          <LawSearchedList law={ukLaw} type="uk" />
          <LawSearchedList law={akLaw} type="ak" />
          <LawSearchedList law={upkLaw} type="upk" />
          <LawSearchedList law={ekLaw} type="ek" />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
