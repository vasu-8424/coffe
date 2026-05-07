export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Breakfast' | 'Lunch' | 'Drinks' | 'Desserts';
  image: string;
  isBestSeller?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Artisan Avocado Toast',
    description: 'Sourdough, smashed avocado, heirloom tomatoes, and microgreens.',
    price: '$14.00',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Truffle Mushroom Omelette',
    description: 'Wild mushrooms, truffle oil, and aged gruyère cheese.',
    price: '$16.50',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d415?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Mediterranean Bowl',
    description: 'Quinoa, roasted chickpeas, kale, and lemon-tahini dressing.',
    price: '$15.50',
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Smoked Salmon Bagel',
    description: 'Cream cheese, capers, red onion, and fresh dill.',
    price: '$13.50',
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1584283838361-9c606e1ccb57?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Luxe Gold Latte',
    description: 'Signature espresso with hint of vanilla and caramel honeycomb.',
    price: '$6.50',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '6',
    name: 'Sage Rose Matcha',
    description: 'Ceremonial grade matcha with rose water and sage syrup.',
    price: '$7.00',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    name: 'Dark Chocolate Fondant',
    description: 'Warm chocolate center with homemade hazelnut gelato.',
    price: '$11.00',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1541920443742-7f304ddfa442?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '8',
    name: 'Almond Pear Tart',
    description: 'Butter pastry, poached pears, and frangipane.',
    price: '$9.50',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
  },
];
