export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Golden Spring Rolls",
    description: "Crispy rolls filled with vegetables and glass noodles, served with sweet chili sauce.",
    price: "$8.00",
    category: "Appetizers"
  },
  {
    id: 2,
    name: "Satay Chicken",
    description: "Grilled chicken skewers marinated in coconut milk and spices, served with peanut sauce.",
    price: "$10.00",
    category: "Appetizers"
  },
  {
    id: 3,
    name: "Tom Yum Goong",
    description: "Spicy and sour soup with shrimp, lemongrass, galangal, and lime leaves.",
    price: "$12.00",
    category: "Soups"
  },
  {
    id: 4,
    name: "Tom Kha Gai",
    description: "Coconut milk soup with chicken, mushrooms, and aromatic Thai herbs.",
    price: "$11.00",
    category: "Soups"
  },
  {
    id: 5,
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, sprouts, and peanuts in tamarind sauce.",
    price: "$18.00",
    category: "Mains"
  },
  {
    id: 6,
    name: "Green Curry",
    description: "Creamy coconut curry with chicken, bamboo shoots, and basil. Spicy and fragrant.",
    price: "$19.00",
    category: "Mains"
  },
  {
    id: 7,
    name: "Mango Sticky Rice",
    description: "Sweet coconut rice served with fresh mango slices and mung beans.",
    price: "$9.00",
    category: "Desserts"
  }
];
