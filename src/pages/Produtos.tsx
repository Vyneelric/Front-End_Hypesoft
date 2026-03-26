import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ProdutoForm } from '@/components/forms/ProdutoForm'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function Produtos() {
  return (
    <div className="w-full h-16">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-medium ml-6">Produtos</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-38 h-10 rounded-3xl bg-[#FFFFFF] text-black mr-12 flex items-center gap-2 p-3 border-1 border border-gray-300">
            <Plus></Plus>
            Criar produto
          </Button>
          </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="font-bold mb-2">Novo Produto</DialogTitle>
              </DialogHeader>
              <ProdutoForm />
            </DialogContent>
        </Dialog>

      </div>
      <div className="w-full h-auto flex-column bg-[#FAFAFC] p-8 mt-5">
          <Card className="border-none ring-0 w-full h-full bg-[#FFFFFF]">
            <p className="flex mt-2 ml-10 font-bold text-xl">Filtros</p>
            <CardHeader className="flex flex-row items-center gap-2">

              <CardTitle className="w-full items-center font-semibold text-lg mr-16 flex gap-4 p-4">

                <Input className="w-34 placeholder:text-sm placeholder:text-gray-600 rounded-lg h-10" placeholder="Busca por nome..." />
                <Input className="w-34 placeholder:text-sm placeholder:text-gray-600 rounded-lg h-10" placeholder="Qnt. Estoque Máximo" />
                <Select>
                  <SelectTrigger className="w-56">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Eletrônicos</SelectItem>
                    <SelectItem value="2">Periféricos</SelectItem>
                    <SelectItem value="3">Acessórios</SelectItem>
                    <SelectItem value="4">Hardware</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[442px] overflow-y-auto overflow-x-hidden">
                <Table className="w-full table-fixed">
                  <TableHeader className='justify-center'>
                    <TableRow>
                      <TableHead className="w-[30%] text-gray-600 text-sm text-center">ID</TableHead>
                      <TableHead className="w-[20%] text-gray-600 text-sm text-center">Nome</TableHead>
                      <TableHead className="w-[35%] text-gray-600 text-sm text-center">Descrição</TableHead>
                      <TableHead className="w-[15%] text-gray-600 text-sm text-center">Preço</TableHead>
                      <TableHead className="w-[15%] text-gray-600 text-sm text-center">Qnt. estoque</TableHead>
                      <TableHead className="w-[15%] text-gray-600 text-sm text-center">Categoria</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell className="break-all whitespace-normal text-sm text-center">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">R$ 38.99</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">10</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">Eletrônicos</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="break-all whitespace-normal text-sm text-center">sdmasdhj21dsa-2njsdadn2u-231jnsadd</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">Produto 01</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">Mouse gamer muito com sensor Paw3311</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">R$ 38.99</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">10</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">Eletrônicos</TableCell>
                    </TableRow>
                    
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
