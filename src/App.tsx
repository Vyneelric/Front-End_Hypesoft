import { Input } from "@/components/ui/input"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import ProductsByCategoryChart from "@/components/charts/ProductsByCategoryChart"
import { Search, SunMedium, Bell, Ellipsis, ShoppingBasket, Scroll, ChartColumn, Tag} from "lucide-react"
import { HouseIcon, CubeIcon, GearSixIcon, PackageIcon, ArrowFatDownIcon} from "@phosphor-icons/react";
import knight from "./assets/images/knight.webp"

const data = [
  { categoria: "Eletrônicos", Quantidade: 10 },
  { categoria: "Roupas", Quantidade: 20 },
  { categoria: "Alimentos", Quantidade: 15 }
]

export function App() {
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

        <div className="relative w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5"></Search> 
          <Input 
            className="pl-10 w-96 h-11 mr-[620px] placeholder:text-sm placeholder:text-gray-600 border-none bg-[#F9F9F9] rounded-2xl " 
            placeholder="Search"
          />
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
                <Button className="group flex w-5/6 h-14 bg-white hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4">
                  <HouseIcon
                    weight="fill"
                    className="!w-6 !h-6 fill-[#4F4D5B] group-hover:fill-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Dashboard
                  </span>
                </Button>

                <p className="flex w-auto mb-4 mt-4">F U N C I O N A L I D A D E S</p>

                <Button className="group flex w-5/6 h-14 bg-white hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4 mt-4">
                  <CubeIcon
                    weight="fill"
                    className="!w-6 !h-6 fill-[#4F4D5B] group-hover:fill-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Produtos
                  </span>
                </Button>

                <Button className="group flex w-5/6 h-14 bg-white hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4 mt-4">
                  <Tag
                    className="!w-6 !h-6 stroke-[#4F4D5B] group-hover:stroke-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Categorias
                  </span>
                </Button>

                <p className="flex w-auto mb-4 mt-4">C O N F I G U R A Ç Ã O</p>

                <Button className="group flex w-5/6 h-14 bg-white hover:bg-[#F9F9F9] transition-colors duration-300 rounded-2xl justify-start items-center gap-3 px-4 mt-4">
                  <GearSixIcon
                    weight="fill"
                    className="!w-6 !h-6 fill-[#4F4D5B] group-hover:fill-[#4E36DF]"
                  />
                  <span className="text-[#4F4D5B] group-hover:text-[#4E36DF] transition-colors">
                    Configurações
                  </span>
                </Button>
          </div>

          <div className="w-full h-16">
            <div className="w-full flex items-center justify-between">
              <p className="text-2xl font-medium ml-6">Dashboard</p>
              <div className="h-auto items-center flex gap-4 mr-8">
              </div>
            </div>
              <div className="w-full h-auto flex-column bg-[#FAFAFC] p-8 mt-5">
                <div className="w-full h-40 flex gap-10 justify-between">
                    <Card className="border-none ring-0 w-3/5 h-40 bg-[#FFFFFF] pl-2">
                      <CardHeader className="flex flex-row items-center gap-2">
                      <ShoppingBasket className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" stroke="#4E36DF" strokeWidth={1.6} ></ShoppingBasket>
                        <CardTitle className="font-semibold text-lg mr-32">Valor total do estoque</CardTitle>
                        <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
                      </CardHeader>
                      <CardContent className="font-semibold text-4xl ">
                        $29934,08
                      </CardContent>
                    </Card>
                    <Card className="border-none ring-0 w-3/5 h-40 bg-[#FFFFFF] pl-2">
                      <CardHeader className="flex flex-row items-center gap-2">
                      <PackageIcon className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" fill="#4E36DF" ></PackageIcon>
                        <CardTitle className="font-semibold text-lg mr-44">Total de produtos</CardTitle>
                        <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
                      </CardHeader>
                      <CardContent className="font-semibold text-4xl ">
                        28
                      </CardContent>
                    </Card>
                    <Card className="border-none ring-0 w-3/5 h-40 bg-[#FFFFFF] pl-2">
                      <CardHeader className="flex flex-row items-center gap-2">
                      <ArrowFatDownIcon className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" fill="#4E36DF" ></ArrowFatDownIcon>
                        <CardTitle className="font-semibold text-lg mr-32">Produtos estoque baixo</CardTitle>
                        <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
                      </CardHeader>
                      <CardContent className="font-semibold text-4xl ">
                        6
                      </CardContent>
                    </Card>
                  </div>

                <div className="w-full h-auto mt-10 flex gap-10">
                <Card className="border-none ring-0 w-4/6 h-full bg-[#FFFFFF]">
                  <CardHeader className="flex flex-row items-center gap-2">
                  <Scroll className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" stroke="#4E36DF" strokeWidth={1.6}></Scroll>
                    <CardTitle className="font-semibold text-lg mr-16">Lista de produtos com estoque baixo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-[440px] overflow-y-auto overflow-x-hidden">
                    <Table className="w-full table-fixed">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[30%]">ID</TableHead>
                          <TableHead className="w-[20%]">Nome</TableHead>
                          <TableHead className="w-[35%]">Descrição</TableHead>
                          <TableHead className="w-[15%]">Preço</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        <TableRow>
                          <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                          <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                          <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                          <TableCell className="break-all whitespace-normal">R$ 38.99 </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                          <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                          <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                          <TableCell className="break-all whitespace-normal">R$ 38.99 </TableCell>
                        </TableRow>
                        
                      </TableBody>
                    </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none ring-0 w-3/6 h-3/5 bg-[#FFFFFF]">
                  <CardHeader className="flex flex-row items-center gap-2">
                  <ChartColumn className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" stroke="#4E36DF" ></ChartColumn>
                    <CardTitle className="font-semibold text-lg mr-16">Produtos e suas categorias</CardTitle>
                  </CardHeader>
                  <CardContent className="font-semibold text-4xl overflow-x-auto">
                    <ProductsByCategoryChart data={data} />
                  </CardContent>
                </Card>
                  </div>
              </div>
          </div>
      </main>

      <footer></footer>
    </>
  )
}
