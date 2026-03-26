import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ProdutoForm() {
  return (
    <form className="bg-white space-y-4">
      <div>
        <label className="text-sm font-medium">Nome do Produto</label>
        <Input className="mt-2 placeholder:text-sm placeholder:text-gray-600 rounded-lg" placeholder="Ex: Mouse Gamer" />
      </div>
      
      <div>
        <label className="text-sm font-medium">Descrição</label>
        <Input className="mt-2 placeholder:text-sm placeholder:text-gray-600 rounded-lg" placeholder="Descrição do produto" />
      </div>
      
      <div>
        <label className="text-sm font-medium">Preço</label>
        <Input className="mt-2 placeholder:text-sm placeholder:text-gray-600 rounded-lg" type="number" placeholder="0.00" />
      </div>

      <div>
        <label className="text-sm font-medium">Quantidade em estoque</label>
        <Input className="mt-2 placeholder:text-sm placeholder:text-gray-600 rounded-lg" type="number" placeholder="0" />
      </div>

      <div>
        <label className="text-sm font-medium">Categoria</label>
        <Select>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Eletrônicos</SelectItem>
            <SelectItem value="2">Periféricos</SelectItem>
            <SelectItem value="3">Acessórios</SelectItem>
            <SelectItem value="4">Hardware</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex justify-center">
        <Button type="submit" className="w-38 h-10 rounded-xl bg-[#FFFFFF] text-black items-center gap-2 p-3 border-1 border border-gray-300"> Enviar Produto</Button>
      </div>

    </form>
  )
}