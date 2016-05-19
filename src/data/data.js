export const data = {
  categories: [
    {
      id: 'entrees',
      title: "Les Entrées"
    },
    {
      id: 'plats',
      title: "Les plats"
    }
  ],

  day: [
    {
      categoryId: 'entrees',
      products: [
        {
          productId: "carottes",
          quantity: 2
        }
      ]
    },
    {
      categoryId: 'plats',
      products: [
        {
          productId: "steak",
          quantity: 3
        }
      ]
    }
  ],
  
  products: [
    {
      id: "carottes",
      title: "Carottes de sable"
    },
    {
      id: "steak",
      title: "Steak super bon"
    }
  ]
}
