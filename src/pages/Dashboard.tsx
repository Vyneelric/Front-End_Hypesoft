import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ProductsByCategoryChart from '@/components/charts/ProductsByCategoryChart'
import { Ellipsis, ShoppingBasket, Scroll, ChartColumn } from 'lucide-react'
import { PackageIcon, ArrowFatDownIcon } from '@phosphor-icons/react'

const data = [
  { categoria: "Eletrônicos", Quantidade: 10 },
  { categoria: "Roupas", Quantidade: 20 },
  { categoria: "Alimentos", Quantidade: 15 }
]

export function Dashboard() {
  return (
    <div className="w-full h-16">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-medium ml-6">Dashboard</p>
        <div className="h-auto items-center flex gap-4 mr-8"></div>
      </div>
      <div className="w-full h-auto flex-column bg-[#FAFAFC] p-8 mt-5">
        <div className="w-full h-40 flex gap-10 justify-between">
          <Card className="border-none ring-0 w-3/5 h-40 bg-[#FFFFFF] pl-2">
            <CardHeader className="flex flex-row items-center gap-2">
              <ShoppingBasket className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" stroke="#4E36DF" strokeWidth={1.6}></ShoppingBasket>
              <CardTitle className="font-semibold text-lg mr-32">Valor total do estoque</CardTitle>
              <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
            </CardHeader>
            <CardContent className="font-semibold text-4xl">
              $29934,08
            </CardContent>
          </Card>
          <Card className="border-none ring-0 w-3/5 h-40 bg-[#FFFFFF] pl-2">
            <CardHeader className="flex flex-row items-center gap-2">
              <PackageIcon className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" fill="#4E36DF"></PackageIcon>
              <CardTitle className="font-semibold text-lg mr-44">Total de produtos</CardTitle>
              <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
            </CardHeader>
            <CardContent className="font-semibold text-4xl">
              28
            </CardContent>
          </Card>
          <Card className="border-none ring-0 w-3/5 h-40 bg-[#FFFFFF] pl-2">
            <CardHeader className="flex flex-row items-center gap-2">
              <ArrowFatDownIcon className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" fill="#4E36DF"></ArrowFatDownIcon>
              <CardTitle className="font-semibold text-lg mr-32">Produtos estoque baixo</CardTitle>
              <Ellipsis stroke="#545162" className="h-6 w-10 fill-green-500"/> 
            </CardHeader>
            <CardContent className="font-semibold text-4xl">
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
              <div className="w-full h-80 overflow-y-auto overflow-x-hidden">
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
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal">R$ 38.99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none ring-0 w-3/6 h-3/5 bg-[#FFFFFF]">
            <CardHeader className="flex flex-row items-center gap-2">
              <ChartColumn className="!w-9 !h-9 bg-[#F9F9F9] rounded-xl p-1" stroke="#4E36DF"></ChartColumn>
              <CardTitle className="font-semibold text-lg mr-16">Produtos e suas categorias</CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-4xl overflow-x-auto">
              <ProductsByCategoryChart data={data} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
