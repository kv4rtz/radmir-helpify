'use client'

import { TabMenu } from 'primereact/tabmenu'
import Container from '../Container'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ITabItem, navItems } from './data'
import { Badge } from 'primereact/badge'

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()
  const itemRenderer = (item: ITabItem, itemIndex: number) => (
    <Link
      href={item.href}
      className="p-menuitem-link flex items-center bg-transparent gap-2"
      onClick={() => setActiveIndex(itemIndex)}
    >
      <span className={item.icon}></span>
      <span className="font-bold text-sm">{item.label}</span>
    </Link>
  )
  const tabItems = navItems(itemRenderer)

  useEffect(() => {
    if (pathname === '/') setActiveIndex(0)
    if (pathname === '/law') setActiveIndex(1)
  }, [])

  return (
    <header className="my-3">
      <Container>
        <div className="p-3 rounded-lg bg-bg-gray">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img
                src="radmir-logo.svg"
                alt="radmir logo радмир логотип"
                className="w-[50px] h-[50px]"
              />
              <h1 className="font-semibold italic text-2xl">Radmir Helpify</h1>
              <Badge value="Beta 2.0"></Badge>
            </div>
            <div className="text-sm opacity-60">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <nav>
            <TabMenu
              // @ts-ignore
              model={tabItems}
              activeIndex={activeIndex}
              pt={{
                menu: {
                  className: 'overflow-x-auto overflow-y-hidden',
                },
              }}
              onTabChange={(e) => setActiveIndex(e.index)}
            />
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
