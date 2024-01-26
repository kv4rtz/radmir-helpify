import { MenuItem } from 'primereact/menuitem'
import { ReactNode } from 'react'

export interface ITabItem {
  label: string
  icon: string
  href: string
}

type TItemRenderer = (
  item: {
    label: string
    icon: string
    href: string
  },
  itemIndex: number,
) => ReactNode

export const navItems = (itemRenderer: TItemRenderer) => [
  {
    label: 'Поиск',
    href: '/',
    icon: 'pi pi-search',
    template: (item: ITabItem) => itemRenderer(item, 0),
  },
  {
    label: 'Законодательство',
    href: '/law',
    icon: 'pi pi-book',
    template: (item: ITabItem) => itemRenderer(item, 1),
  },
  {
    label: 'Памятка',
    href: '/minder',
    icon: 'pi pi-table',
    template: (item: ITabItem) => itemRenderer(item, 2),
  },
]
