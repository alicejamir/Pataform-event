import { List } from 'phosphor-react'
import { Logo } from '../components/Logo'

export function Header() {
  return (
    <div>
      <header className="w-full  py-5 flex items-center   justify-between md:justify-center  bg-gray-700 border-b border-gray-600">
        <Logo></Logo>
        <button className="md:invisible">
          <List size={32} color="#e6e5e5" />
        </button>
      </header>
    </div>
  )
}
