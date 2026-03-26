import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function CategoriaForm() {
  return (
    <form className="bg-white space-y-4">
      <div>
        <label className="text-sm font-medium">Nome da Categoria</label>
        <Input className="mt-2 placeholder:text-sm placeholder:text-gray-600 rounded-lg" placeholder="Ex: Eletrônicos" />
      </div>
      
      <div>
        <label className="text-sm font-medium">Descrição</label>
        <Input className="mt-2 placeholder:text-sm placeholder:text-gray-600 rounded-lg" placeholder="Descrição da categoria" />
      </div>

      
      <div className="flex justify-center">
        <Button type="submit" className="w-38 h-10 rounded-xl bg-[#F8F8F8] text-black items-center gap-2 p-3 border-1 border border-gray-300"> Enviar Categoria</Button>
      </div>

    </form>
  )
}