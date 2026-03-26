import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CategoriaForm } from '@/components/forms/CategoriaForm'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCategorias, useDeletarCategoria } from '@/hooks/useCategoria'
import { useState } from 'react'
import { CategoriaActionsDialog } from '@/components/CategoriaActionsDialog'
import { toast } from 'sonner'

export function Categorias() {
  const { data: categorias, isLoading, error } = useCategorias()
  const { mutate: deletarCategoria } = useDeletarCategoria()
  const [criarDialogOpen, setCriarDialogOpen] = useState(false)
  const [selectedCategoria, setSelectedCategoria] = useState<any>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [filtroNome, setFiltroNome] = useState('')

  const categoriasFiltradas = categorias?.filter((categoria: any) =>
    categoria.nome.toLowerCase().includes(filtroNome.toLowerCase())
  ) || []

  const handleDelete = () => {
    if (!selectedCategoria) return
    deletarCategoria(selectedCategoria.id, {
      onSuccess: () => {
        toast.success('Categoria deletada com sucesso!')
        setDialogOpen(false)
      },
      onError: () => {
        toast.error('Erro ao deletar categoria')
      }
    })
  }

  return (
    <div className="w-full h-16">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-medium ml-6">Categorias</p>
        <Dialog open={criarDialogOpen} onOpenChange={setCriarDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-38 h-10 rounded-3xl bg-[#FFFFFF] text-black mr-12 flex items-center gap-2 p-3 border-1 border border-gray-300">
              <Plus />
              Criar categoria
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white sm:max-w-xl" aria-describedby={undefined}>
            <DialogHeader>
              <DialogTitle className="font-bold mb-2 text-center">Nova Categoria</DialogTitle>
            </DialogHeader>
            <CategoriaForm onSuccess={() => setCriarDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="w-full h-auto flex-column bg-[#FAFAFC] p-8 mt-5">
        <Card className="border-none ring-0 w-full h-full bg-[#FFFFFF]">
          <p className="flex mt-2 ml-10 font-bold text-xl">Filtros</p>
          <CardHeader className="flex flex-row items-center gap-2">
            <CardTitle className="w-full items-center font-semibold text-lg mr-16 flex gap-4 p-4">
              <Input
                className="w-56 placeholder:text-sm placeholder:text-gray-600 rounded-lg h-10"
                placeholder="Busca por nome..."
                value={filtroNome}
                onChange={(e) => setFiltroNome(e.target.value)}
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[442px] overflow-y-auto overflow-x-hidden">
              <Table className="w-full table-fixed">
                <TableHeader className='justify-center'>
                  <TableRow>
                    <TableHead className="w-[30%] text-gray-600 text-sm text-center">ID</TableHead>
                    <TableHead className="w-[20%] text-gray-600 text-sm text-center">Nome</TableHead>
                    <TableHead className="w-[50%] text-gray-600 text-sm text-center">Descrição</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center">Carregando...</TableCell>
                    </TableRow>
                  ) : error ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-red-500">Erro ao carregar categorias</TableCell>
                    </TableRow>
                  ) : categoriasFiltradas?.map((categoria: any) => (
                    <TableRow
                      key={categoria.id}
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => {
                        setSelectedCategoria(categoria)
                        setDialogOpen(true)
                      }}
                    >
                      <TableCell className="break-all whitespace-normal text-sm text-center">{categoria.id}</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">{categoria.nome}</TableCell>
                      <TableCell className="break-all whitespace-normal text-sm text-center">{categoria.descricao}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <CategoriaActionsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onDelete={handleDelete}
      />
    </div>
  )
}
