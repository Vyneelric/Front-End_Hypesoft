import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, SunMedium, Bell, Ellipsis, Tag, ChartColumnBig } from 'lucide-react'
import { CubeIcon, GearSixIcon } from '@phosphor-icons/react'
import knight from '@/assets/images/knight.webp'
import { useState, useEffect, useRef } from 'react'
import { useProdutos } from '@/hooks/useProduto'

export function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [busca, setBusca] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const { data: produtos } = useProdutos()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const produtosFiltrados = produtos?.filter((produto: any) => 
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  ).slice(0, 5) || []

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setBusca(value)
    setShowDropdown(value.length > 0)
  }

  const handleSelectProduto = (produto: any) => {
    setBusca(produto.nome)
    setShowDropdown(false)
    navigate('/produtos')
  }
  
  return (
    <>
      <header className="w-full h-20 px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/shopsenseNB.png" alt="" className="w-14 h-14"/>
          <p className="text-2xl font-medium">
            <span className="text-[#5647CE]">Shop</span>
            <span className="text-[#000000]">Sense</span>
          </p>
        </div>

        <div className="relative w-auto" ref={dropdownRef}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 z-10"></Search> 
          <Input 
            className="pl-10 w-96 h-11 mr-[620px] placeholder:text-sm placeholder:text-gray-600 border-none bg-[#F9F9F9] rounded-2xl" 
            placeholder="Search"
            value={busca}
            onChange={handleSearch}
            onFocus={() => busca.length > 0 && setShowDropdown(true)}
          />
          {showDropdown && produtosFiltrados.length > 0 && (
            <div className="absolute top-full mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
              {produtosFiltrados.map((produto: any) => (
                <div
                  key={produto.id}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleSelectProduto(produto)}
                >
                  <p className="font-medium text-sm">{produto.nome}</p>
                  <p className="text-xs text-gray-500">R$ {produto.preco}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-12 flex gap-3">
          <div className="flex gap-6 items-center">
            <SunMedium fill="#545162" stroke="#545162" className="w-7 h-7"></SunMedium>
            <Bell fill="#545162" stroke="#545162" className="w-6 h-6"></Bell>
          </div>

          <div className="w-px h-12 bg-gray-100 items-center"></div>

          <div className="h-full flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={knight}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
              <div className="h-auto flex-column items-center mr-2">
                <p className="font-semibold">Vinícius José</p>
                <p className="font-normal text-[12px] text-gray-400 text-left font-medium">Shop Admin</p>
              </div>
                <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
          </div>
        </div>
      </header>

      <main className="h-auto w-full flex mt-8">
          <div className="h-auto w-1/5 ml-8 flex-column">
              <p className="flex w-20 mb-4">G E R A L</p>
              <Link to="/">
                <Button className={`group flex w-5/6 h-14 ${location.pathname === '/' ? 'bg-[#F9F9F9]' : 'bg-white'} hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4`}>
                  <ChartColumnBig
                    className="!w-6 !h-6 stroke-[#4F4D5B] group-hover:stroke-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Dashboard
                  </span>
                </Button>
              </Link>

                <p className="flex w-auto mb-4 mt-4">F U N C I O N A L I D A D E S</p>

                <Link to="/produtos">
                <Button className={`group flex w-5/6 h-14 ${location.pathname === '/produtos' ? 'bg-[#F9F9F9]' : 'bg-white'} hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4 mt-4`}>
                  <CubeIcon
                    weight="fill"
                    className="!w-6 !h-6 fill-[#4F4D5B] group-hover:fill-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Produtos
                  </span>
                </Button>
                </Link>

                <Link to="/categorias">
                <Button className={`group flex w-5/6 h-14 ${location.pathname === '/categorias' ? 'bg-[#F9F9F9]' : 'bg-white'} hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4 mt-4`}>
                  <Tag
                    className="!w-6 !h-6 stroke-[#4F4D5B] group-hover:stroke-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Categorias
                  </span>
                </Button>
                </Link>

                <p className="flex w-auto mb-4 mt-4">C O N F I G U R A Ç Ã O</p>

                <Link to="/configuracoes">
                <Button className={`group flex w-5/6 h-14 ${location.pathname === '/configuracoes' ? 'bg-[#F9F9F9]' : 'bg-white'} hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4 mt-4`}>
                  <GearSixIcon
                    weight="fill"
                    className="!w-6 !h-6 fill-[#4F4D5B] group-hover:fill-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Configurações
                  </span>
                </Button>
                </Link>
          </div>

          <div className="w-full">
            <Outlet />
          </div>
      </main>
    </>
  )
}
