export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'petiscos' | 'burgers' | 'gluten-free' | 'drinks' | 'desserts';
  image?: string;
  isGlutenFree?: boolean;
  isVegetarian?: boolean;
}

export const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: 'Bolo do Caco Tradicional',
    description: 'Pão de malte e batata doce com manteiga de alho e salsa.',
    price: 3.50,
    category: 'petiscos',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop',
    isGlutenFree: false,
  },
  {
    id: '2',
    name: 'Hambúrguer Tasquinha',
    description: 'Carne de novilho, queijo da ilha, bacon, alface e molho especial em bolo do caco.',
    price: 12.50,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    isGlutenFree: false,
  },
  {
    id: '3',
    name: 'Hambúrguer Sem Glúten',
    description: 'Opção segura para celíacos com pão artesanal sem glúten e ingredientes selecionados.',
    price: 13.50,
    category: 'gluten-free',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    isGlutenFree: true,
  },
  {
    id: '4',
    name: 'Francesinha no Caco',
    description: 'A nossa versão da clássica francesinha servida em pão bolo do caco.',
    price: 14.00,
    category: 'burgers',
    image: 'https://tasquinhadocaco.pt/wp-content/uploads/2021/08/francesinha-tasquinha-do-caco-hamburgueria-e-pregaria-porfolio-impact-transition-1024x683.jpg',
  },
  {
    id: '5',
    name: 'Tábua de Queijos e Enchidos',
    description: 'Seleção de produtos regionais para partilhar.',
    price: 16.00,
    category: 'petiscos',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Mousse de Chocolate Caseira',
    description: 'Receita tradicional com chocolate 70%.',
    price: 4.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop',
  }
];
