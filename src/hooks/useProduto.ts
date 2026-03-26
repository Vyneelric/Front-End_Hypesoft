import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/services/api'

export function useProdutos() {
  return useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const { data } = await api.get('/products')
      return Array.isArray(data) ? data : data.content || data.data || []
    }
  })
}

export function useCriarProduto() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (produto: any) => {
      const { data } = await api.post('/products', produto)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['produtos'] })
    }
  })
}

export function useValorTotalEstoque(){
  return useQuery({
    queryKey: ['valorTotalEstoque'],
    queryFn: async () => {
      const { data } = await api.get('/products/total_value_stock')
      return data.total_stock_value
    }
  })
}

export function useTotalProdutos() {
  return useQuery({
    queryKey: ['totalProdutos'],
    queryFn: async () => {
      const { data } = await api.get('/products')
      return data.total_products
    }
  })
}

export function useProdutosEstoqueBaixo() {
  return useQuery({
    queryKey: ['produtosEstoqueBaixo'],
    queryFn: async () => {
      const { data } = await api.get('/products?estoqueMenorQue=10')
      return data.total_products
    }
  })
}

export function useProdutosComEstoqueBaixo() {
  return useQuery({
    queryKey: ['produtosComEstoqueBaixo'],
    queryFn: async () => {
      const { data } = await api.get('/products?estoqueMenorQue=10')
      return data.data || []
    }
  })
}

export function useProdutosEstoqueBaixoLista() {
  return useQuery({
    queryKey: ['produtosEstoqueBaixoLista'],
    queryFn: async () => {
      const { data } = await api.get('/products?estoqueMenorQue=10')
      return data.data || []
    }
  })
}

export function useProdutosPorCategoria() {
  return useQuery({
    queryKey: ['produtosPorCategoria'],
    queryFn: async () => {
      const categorias = [
        { id: 'e2a4108b-649c-4815-b186-f80b0c0c7a1d', nome: 'Eletrônicos' },
        { id: 'e287dc5f-5746-44ed-bf0a-f8bcbb6dcc14', nome: 'Roupas' },
        { id: 'dd910769-d0c8-4c20-9fab-a60905af5190', nome: 'Brinquedos' },
        { id: '4c486013-9b9e-4021-adc1-25aed17adfc7', nome: 'Ferramentas' },
        { id: '9b1c6aeb-6bae-463e-a677-324cc9cdae83', nome: 'Jardim e Externo' }
      ]

      const resultados = await Promise.all(
        categorias.map(async (categoria) => {
          const { data } = await api.get(`/products/categories/${categoria.id}`)
          return {
            categoria: categoria.nome,
            Quantidade: data.total_products || data.data?.length || 0
          }
        })
      )
      
      return resultados
    }
  })
}