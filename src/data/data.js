import {fromJS} from 'immutable'

const raw_data = {
  day: {
    id: "387QWR",
    title: "Lundi",
    imageUrl: require('./images/landing/recuisiner.jpg'),
    categories:
    [
      {
        id: "265YIO",
        title: "Entrées",
        products: [
          {
            id: "207DNZ",
            name:"Radis de Chine",
            img:require('./images/products/radis.jpg'),
            desc:"Cultivés dans le Val d'Oise.",
            conseil:"à couper en fines tranches avec du beurre",
            conservation:"2 à 3 jours",
            prix: 150,
            commercant:{
              name:"Terroir d'Avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"portion de 300g"
          },
          {
            id: "206DRE",
            name:"Carottes Multicolores",
            img:require('./images/products/carottes.jpg'),
            desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
            conseil:"en batonnets ou râpées",
            conservation:"2 à 3 jours",
            prix: 100,
            commercant:{
              name:"Terroir d'Avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"portion de 240g"
          },
          {
            id: "387AQZ",
            name:"Autres Carottes Multicolores",
            img:require('./images/products/carottes.jpg'),
            desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
            conseil:"en batonnets ou râpées",
            conservation:"2 à 3 jours",
            prix: 100,
            commercant:{
              name:"Terroir d'Avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"portion de 240g"
          }
        ]
      },
      {
        id: "095DDP",
        title: "Plats",
        products: [
          {
            id: "364TFG",
            name:"Poireaux Bio",
            img:require('./images/products/poireaux.jpg'),
            desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
            conseil:"fondue de poireaux ou vinaigrette",
            conservation:"2 à 3 jours",
            prix: 180,
            commercant:{
              name:"Terroir d'Avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"portion de 450g"
          },
          {
            id: "147SRD",
            name:"Coquilles Saint Jacques",
            img:require('./images/products/saint_jacques.jpg'),
            desc:"Pêchées dans les Iles Chausey(50)",
            conseil:"faites les revenir dans un beurre noisette",
            conservation:"2 à 3 jours",
            prix: 720,
            commercant:{
              name:"Terroir d'Avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"lot de 2 pièces"
          },
          {
            id: "476DRT",
            name:"Steack Hache",
            img:require('./images/products/steak.jpg'),
            desc:"Jeune vache Charolaise de 3 ans élevée dans le 71. Viande 1 mois de maturation. Agriculture vertueuse.",
            conseil:"à la poêle, en boulette, en bolognaise...",
            conservation:"2 à 3 jours",
            prix: 280,
            commercant:{
              name:"Terroir d'Avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"portion de 130g"
          }
        ]
      },
      {
        id: "375SJY",
        title: "Fromages/Pain",
        products: [
          {
            id: "836YMH",
            name:"Chevre Cendre",
            img:require('./images/products/chevre_cendre.jpg'),
            desc:"Lait de chèvre, Charentes-Poitou",
            conseil:"",
            prix: 400,
            commercant:{
              name:"La Fermette",
              img:require('./images/commercant/michel.jpg')
            },
            people:2,
            portion:"A la pièce"
          },
          {
            id: "967FZE",
            name:"Compté 24 mois",
            img:require('./images/products/comte.jpg'),
            desc:"Origine Franche Compté, lait de vache cru, pâte cuite.",
            conseil:"à sortir du frigo 20 min avant dégustation",
            prix: 430,
            commercant:{
              name:"La Fermette",
              img:require('./images/commercant/michel.jpg')
            },
            people:4,
            portion:"A la pièce (200g)"

          },
          {
            id: "723DFT",
            name:"Pain du Nil Bio",
            img:require('./images/products/pain_nil.jpg'),
            desc:"Pain avec des farines françaises biologiques issues de semences paysannes et adaptées au terroir de culture. Elles proviennent de moulins artisanaux qui utilisent des meules de pierre Astrié afin de ne pas altérer le grain et ses qualités nutritives.",
            conseil:"",
            prix: 250,
            commercant:{
              name:"Terroirs d'avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:3,
            portion:"A la pièce (1/2 miche) env. 230g"
          },
          {
            id: "787DOG",
            name:"Baguette Bio",
            img:require('./images/products/baguette.jpg'),
            desc:"Pain avec des farines françaises biologiques issues de semences paysannes et adaptées au terroir de culture. Elles proviennent de moulins artisanaux qui utilisent des meules de pierre Astrié afin de ne pas altérer le grain et ses qualités nutritives.",
            conseil:"",
            prix: 120,
            commercant:{
              name:"Terroirs d'avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:3,
            portion:"A la pièce"

          }
        ]
      },
      {
        id: "358DQE",
        title: "Desserts",
        products:[
          {
            id: "205RFV",
            name:"Pommes Bio Jubile",
            img:require('./images/products/pommes.jpg'),
            desc:"Bio, cultivées en Seine et Marne (77)",
            conseil:"",
            prix: 200,
            commercant:{
              name:"Terroirs d'avenir",
              img:require('./images/commercant/michel.jpg')
            },
            people:4,
            portion:"4 pommes, portion de 650g"
          },
          {
            id: "457DXE",
            name:"Fromage Blanc Frais",
            img:require('./images/products/fromage_blanc.jpg'),
            desc:"Fromage de lait battu, battu, 40% de M.G.",
            conseil:"",
            prix: 180,
            commercant:{
              name:"La Fermette",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"portion de 250g"
          },
          {
            id: "034DRV",
            name:"Barre Pralinée Noire",
            img:require('./images/products/chocolat.jpg'),
            desc:"Délicieuse barre de chocolat noir au praliné fondant et croustillant.",
            conseil:"",
            prix: 500,
            commercant:{
              name:"La Mère de Famille",
              img:require('./images/commercant/michel.jpg')
            },
            people:1,
            portion:"A la pièce"
          }
        ]
      }
    ]
  },
  cart: {
    categories: [
      {
        id:0,
        title: "Entrées",
        products: [
          {
            id:0,
            name:"Radis de Chine",
            img:require('./images/products/radis.jpg'),
            prix: 150,
            portion:"portion de 300g",
            quantity: 3
          }
        ]
      },
      {
        id:1,
        title: "Plats",
        products: [
          {
            id:0,
            name:"Poireaux Bio",
            img:require('./images/products/poireaux.jpg'),
            prix: 180,
            portion:"portion de 450g",
            quantity: 3
          },
          {
            id:1,
            name:"Coquilles Saint Jacques",
            img:require('./images/products/saint_jacques.jpg'),
            prix: 720,
            portion:"lot de 2 pièces",
            quantity: 3
          },
        ]
      },
      {
        id:2,
        title: "Fromages/Pain",
        products: [
          {
            id:0,
            name:"Chevre Cendre",
            img:require('./images/products/chevre_cendre.jpg'),
            prix: 400,
            portion:"A la pièce",
            quantity: 1
          },
          {
            id:2,
            name:"Pain du Nil Bio",
            img:require('./images/products/pain_nil.jpg'),
            prix: 250,
            portion:"A la pièce (1/2 miche) env. 230g",
            quantity: 2
          },
        ]
      }
    ]
  },
}

export const data =  fromJS(raw_data)
