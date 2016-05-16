export const data = {
  shoppingBag: {
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
  days: [
      {
        id:0,
        title: "Lundi",
        imageUrl: require('./images/landing/recuisiner.jpg'),
        categories: [
          {
            id:0,
            title: "Entrées",
            products: [
              {
                id:0,
                name:"Radis de Chine",
                img:require('./images/products/radis.jpg'),
                desc:"Cultivés dans le Val d'Oise.",
                conseil:"à couper en fines tranches avec du beurre",
                conservation:"2 à 3 jours",
                prix: 150,
                commercant:{
                  name:"Jean Michel",
                  img:require('./images/commercant/michel.jpg')
                },
                people:1,
                portion:"portion de 300g"
              },
              {
                id:1,
                name:"Carottes Multicolores",
                img:require('./images/products/carottes.jpg'),
                desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
                conseil:"en batonnets ou râpées",
                conservation:"2 à 3 jours",
                prix: 100,
                commercant:{
                  name:"Jean Michel",
                  img:require('./images/commercant/michel.jpg')
                },
                people:1,
                portion:"portion de 240g"
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
                desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
                conseil:"fondue de poireaux ou vinaigrette",
                conservation:"2 à 3 jours",
                prix: 180,
                commercant:{
                  name:"Jean Michel",
                  img:require('./images/commercant/michel.jpg')
                },
                people:1,
                portion:"portion de 450g"
              },
              {
                id:1,
                name:"Coquilles Saint Jacques",
                img:require('./images/products/saint_jacques.jpg'),
                desc:"Pêchées dans les Iles Chausey(50)",
                conseil:"faites les revenir dans un beurre noisette",
                conservation:"2 à 3 jours",
                prix: 720,
                commercant:{
                  name:"Jean Michel",
                  img:require('./images/commercant/michel.jpg')
                },
                people:1,
                portion:"lot de 2 pièces"
              },
              {
                id:2,
                name:"Steack Hache",
                img:require('./images/products/steak.jpg'),
                desc:"Jeune vache Charolaise de 3 ans élevée dans le 71. Viande 1 mois de maturation. Agriculture vertueuse.",
                conseil:"à la poêle, en boulette, en bolognaise...",
                conservation:"2 à 3 jours",
                prix: 280,
                commercant:{
                  name:"Jean Michel",
                  img:require('./images/commercant/michel.jpg')
                },
                people:1,
                portion:"portion de 130g"
              }
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
              desc:"Lait de chèvre, Charentes-Poitou",
              conseil:"",
              prix: 400,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:2,
              portion:"A la pièce"
            },
            {
              id:1,
              name:"Compté 24 mois",
              img:require('./images/products/comte.jpg'),
              desc:"Origine Franche Compté, lait de vache cru, pâte cuite.",
              conseil:"à sortir du frigo 20 min avant dégustation",
              prix: 430,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"A la pièce (200g)"

            },
            {
              id:2,
              name:"Pain du Nil Bio",
              img:require('./images/products/pain_nil.jpg'),
              desc:"Pain avec des farines françaises biologiques issues de semences paysannes et adaptées au terroir de culture. Elles proviennent de moulins artisanaux qui utilisent des meules de pierre Astrié afin de ne pas altérer le grain et ses qualités nutritives.",
              conseil:"",
              prix: 250,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:3,
              portion:"A la pièce (1/2 miche) env. 230g"
            },
            {
              id:3,
              name:"Baguette Bio",
              img:require('./images/products/baguette.jpg'),
              desc:"Pain avec des farines françaises biologiques issues de semences paysannes et adaptées au terroir de culture. Elles proviennent de moulins artisanaux qui utilisent des meules de pierre Astrié afin de ne pas altérer le grain et ses qualités nutritives.",
              conseil:"",
              prix: 120,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:3,
              portion:"A la pièce"

            }
          ]
        },
        {
          id:3,
          title: "Desserts",
          products:[
            {
              id:0,
              name:"Pommes Bio Jubile",
              img:require('./images/products/pommes.jpg'),
              desc:"Bio, cultivées en Seine et Marne (77)",
              conseil:"",
              prix: 200,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"4 pommes, portion de 650g"
            },
            {
              id:1,
              name:"Fromage Blanc Frais",
              img:require('./images/products/fromage_blanc.jpg'),
              desc:"Fromage de lait battu, battu, 40% de M.G.",
              conseil:"",
              prix: 180,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 250g"
            },
            {
              id:2,
              name:"Barre Pralinée Noire",
              img:require('./images/products/chocolat.jpg'),
              desc:"Délicieuse barre de chocolat noir au praliné fondant et croustillant.",
              conseil:"",
              prix: 500,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"A la pièce"
            }
          ]
        }
        ]
      },
      {
        id:5,
        title: "Samedi",
        imageUrl: require('./images/landing/site-rencontre.jpg'),
        categories:[
          {
            id:0,
            title: "A partager",
            products:[
            {
              id:0,
              name:"Plateau de charcuterie",
              img:require('./images/products/plateau.jpg'),
              desc:"Assortiment de 200g de charcuterie.",
              conseil:"à sortir du frigo 20 min avant dégustation",
              prix: 800,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"A la pièce"
            },
            {
              id:1,
              name:"Mini Chou Fleur Bio",
              img:require('./images/products/chou_fleur.jpg'),
              desc:"Bio, cultivés dans le Finistère.",
              conseil:"à déguster cru à l'apéro avec une vinaigrette",
                conservation:"2 à 3 jours",
              prix: 190,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"A la pièce, 300g environ"
            }
          ]
        },{
        id:1,
        title: "Entrée",
        products:[
            {
              id:0,
              name:"Radis de Chine",
              img:require('./images/products/radis.jpg'),
              desc:"Cultivés dans le Val d'Oise.",
              conseil:"à couper en fines tranches avec du beurre",
                conservation:"2 à 3 jours",
              prix: 150,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 300g"

            },
            {
              id:1,
              name:"Carottes Multicolores",
              img:require('./images/products/carottes.jpg'),
              desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
              conseil:"en batonnets ou râpées",
                conservation:"2 à 3 jours",
              prix: 100,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 240g"

            }


          ]},{
            id:2,
            title: "Plat",
            products:[
              {
              id:0,
              name:"Poireaux Bio",
              img:require('./images/products/poireaux.jpg'),
              desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
              conseil:"fondue de poireaux ou vinaigrette",
                conservation:"2 à 3 jours",
              prix: 180,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 450g"
            },
            {
              id:1,
              name:"Coquilles Saint Jacques",
              img:require('./images/products/saint_jacques.jpg'),
              desc:"Pêchées dans les Iles Chausey(50)",
              conseil:"faites les revenir dans un beurre noisette",
                conservation:"2 à 3 jours",
              prix: 720,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"lot de 2 pièces"
            },
            {
              id:2,
              name:"Parmesan",
              img:require('./images/products/parmesan.jpg'),
              desc:"Parmiggiano Regiano en copeaux",
              conseil:"parfait sur une poëlée de champignons",
                conservation:"2 à 3 jours",
              prix: 190,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 50g"
            },
            {
              id:3,
              name:"Salade de feuille de Chêne",
              img:require('./images/products/salade.jpg'),
              desc:"Cultivés dans le Va d'Oise. Agriculture raisonnée",
              conseil:"parfait sur une poëlée de champignons",
                conservation:"2 à 3 jours",
              prix: 190,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 50g"
            },
            {
              id:4,
              name:"Pommes de terre charlotte",
              img:require('./images/products/PDT.jpg'),
              desc:"Cultivées dans le Val d'Oise. Agriculture raisonnée. Accompagnées d'une gousse d'ail et de branche de romarin",
              conseil:"Vapeur ou sautées, c'est toujours un régal",
                conservation:"2 à 3 jours",
              prix: 220,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:2,
              portion:"portion de 500g"
            },
            {
              id:5,
              name:"Steack Hache",
              img:require('./images/products/steak.jpg'),
              desc:"Jeune vache Charolaise de 3 ans élevée dans le 71. Viande 1 mois de maturation. Agriculture vertueuse.",
              conseil:"à la poêle, en boulette, en bolognaise...",
                conservation:"2 à 3 jours",
              prix: 280,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 130g"
            },
            {
              id:6,
              name:"Champignons de Paris Roses",
              img:require('./images/products/champignons.jpg'),
              desc:"Cultivés dans le Val d'Oise. Agriculture raisonnée",
              conseil:"Aussi bons crus que cuits",
                conservation:"2 à 3 jours",
              prix: 130,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 250g"
            },
            {
              id:7,
              name:"Bavette Charolaise",
              img:require('./images/products/bavette.jpg'),
              desc:"Jeune vache Charolaise de 3 ans élevée dans la Saône-et-Loire. Viande 1 mois de maturation. Agriculture vertueuse.",
              conseil:"à faire griller sur poêle très chaude",
                conservation:"2 à 3 jours",
              prix: 740,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 195g"
            }
          ]},{
            id:3,
            title: "Fromages/Pains",
            products:[
            {
              id:0,
              name:"Chevre Cendre",
              img:require('./images/products/chevre_cendre.jpg'),
              desc:"Lait de chèvre, Charentes-Poitou",
              conseil:"",
              prix: 400,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:2,
              portion:"A la pièce"
            },
            {
              id:1,
              name:"Compté 24 mois",
              img:require('./images/products/comte.jpg'),
              desc:"Origine Franche Compté, lait de vache cru, pâte cuite.",
              conseil:"à sortir du frigo 20 min avant dégustation",
              prix: 430,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"A la pièce (200g)"

            },
            {
              id:2,
              name:"Saint Marcelin",
              img:require('./images/products/saint_marcelin.jpg'),
              desc:"Lait de vache, Fabriqué dans le Dauphiné.",
              conseil:"à sortir du frigo 20 min avant dégustation",
              prix: 200,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:3,
              portion:"A la pièce"
            },
            {
              id:3,
              name:"Saint Nectaire Fermier",
              img:require('./images/products/saint_nectaire.jpg'),
              desc:"Origine Jura, lait de vache.",
              conseil:"à sortir du frigo 20 min avant dégustation",
              prix: 450,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"A la pièce (220g)"

            },
            {
              id:4,
              name:"Pain du Nil Bio",
              img:require('./images/products/pain_nil.jpg'),
              desc:"Pain avec des farines françaises biologiques issues de semences paysannes et adaptées au terroir de culture. Elles proviennent de moulins artisanaux qui utilisent des meules de pierre Astrié afin de ne pas altérer le grain et ses qualités nutritives.",
              conseil:"",
              prix: 250,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:3,
              portion:"A la pièce (1/2 miche) env. 230g"
            },
            {
              id:5,
              name:"Baguette Bio",
              img:require('./images/products/baguette.jpg'),
              desc:"Pain avec des farines françaises biologiques issues de semences paysannes et adaptées au terroir de culture. Elles proviennent de moulins artisanaux qui utilisent des meules de pierre Astrié afin de ne pas altérer le grain et ses qualités nutritives.",
              conseil:"",
              prix: 120,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:3,
              portion:"A la pièce"

            }
          ]},{
            id:4,
            title: "Desserts",
            products:[
            {
              id:0,
              name:"Pommes Bio Jubile",
              img:require('./images/products/pommes.jpg'),
              desc:"Bio, cultivées en Seine et Marne (77)",
              conseil:"",
              prix: 200,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:4,
              portion:"4 pommes, portion de 650g"
            },
            {
              id:1,
              name:"Fromage Blanc Frais",
              img:require('./images/products/fromage_blanc.jpg'),
              desc:"Fromage de lait battu, battu, 40% de M.G.",
              conseil:"",
              prix: 180,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"portion de 250g"
            },
            {
              id:2,
              name:"Barre Pralinée Noire",
              img:require('./images/products/chocolat.jpg'),
              desc:"Délicieuse barre de chocolat noir au praliné fondant et croustillant.",
              conseil:"",
              prix: 500,
              commercant:{
                name:"Jean Michel",
                img:require('./images/commercant/michel.jpg')
              },
              people:1,
              portion:"A la pièce"
            }
          ]


        }

    ]}],
  landings: [
    {
      id:0,
      name: "site-rencontre",
      title: "Le premier site de rencontre avec les bons produits parisiens",
      imageUrl: require('./images/landing/site-rencontre.jpg'),
      problem: {
        title: "Dans la vie de tous les jours, c’est dur de rencontrer des bons produits.",
        arguments:[
          {
            id:0,
            content: "Dénicher les bons produits ça prend du temps",
            imageUrl: require('./images/landing/prob-directions.png')
          },
          {
            id:1,
            content: "Les bons produits, c’est jamais quand on a envie",
            imageUrl: require('./images/landing/prob-closed.png')
          },
          {
            id:2,
            content: "Du coup on finit souvent avec de mauvais produits",
            imageUrl: require('./images/landing/prob-ravioli.png')
          }
        ],
      },
      solution: {
        title: "JAWS sélectionne pour vous les bons produits des meilleurs artisans de Paris.",
        arguments: [
          {
            id:0,
            content: "Vous choisissez vos bons produits dans notre sélection quotidienne",
            imageUrl: require('./images/landing/sol-smartphone.png')
          },
          {
            id:1,
            content: "Vous choisissez où et quand vous voulez être livré",
            imageUrl: require('./images/landing/sol-bicycle.png')
          },
          {
            id:2,
            content: "C’est tellement simple qu’il n’y a pas de petit trois",
            imageUrl: require('./images/landing/sol-unicorn.png')
          }
        ]
      }
    },

    {
      id:1,
      name: "pas-de-queue",
      title: "Les meilleurs artisans de Paris sans faire la queue",
      imageUrl: require('./images/landing/pas-de-queue.jpg'),
      problem: {
        title: "C’est mission impossible de bien manger quand on n’a pas le temps d’aller chez les bons artisans.",
        arguments:[
          {
            id:0,
            content: "Passer chez le maraîcher, le boucher et le boulanger, ça prend du temps",
            imageUrl: require('./images/landing/prob-directions.png')
          },
          {
            id:1,
            content: "Sans compter qu'ils sont souvent fermés quand on sort du boulot",
            imageUrl: require('./images/landing/prob-closed.png')
          },
          {
            id:2,
            content: "Du coup on finit à la supérette, pas chouette",
            imageUrl: require('./images/landing/prob-ravioli.png')
          }
        ],
      },
      solution: {
        title: "JAWS passe chez les meilleurs artisans de Paris et les livre chez vous en une seule fois.",
        arguments: [
          {
            id:0,
            content: "Vous choisissez vos bons produits dans notre sélection quotidienne",
            imageUrl: require('./images/landing/sol-smartphone.png')
          },
          {
            id:1,
            content: "Vous choisissez où et quand vous voulez être livré",
            imageUrl: require('./images/landing/sol-bicycle.png')
          },
          {
            id:2,
            content: "Du coup, vous avez tout le temps de cuisiner",
            imageUrl: require('./images/landing/sol-cloche.png')
          }
        ]
      }
    },

    {
      id:2,
      name: "recuisiner",
      title: "Tellement simple que vous allez vous (re)mettre à cuisiner !",
      imageUrl: require('./images/landing/recuisiner.jpg'),
      problem: {
        title: "Avec la vie qu’on mène, on n’a plus le temps de penser à la cuisine.",
        arguments:[
          {
            id:0,
            content: "On ne sait plus quoi répondre à “Qu’est-ce qu’on mange ce soir ?”",
            imageUrl: require('./images/landing/prob-calendar.png')
          },
          {
            id:1,
            content: "On n’a plus le temps de dénicher les bons produits",
            imageUrl: require('./images/landing/prob-directions.png')
          },
          {
            id:2,
            content: "Du coup on finit à la supérette, trop chouette",
            imageUrl: require('./images/landing/prob-ravioli.png')
          }
        ],
      },
      solution: {
        title: "Chaque jour, JAWS sélectionne pour vous les bons produits faciles à cuisiner.",
        arguments: [
          {
            id:0,
            content: "Chaque jour, de nouvelles idées pour votre dîner",
            imageUrl: require('./images/landing/sol-idea.png')
          },
          {
            id:1,
            content: "Cuisiner avec de bons produits, c’est un jeu d’enfant",
            imageUrl: require('./images/landing/sol-cloche.png')
          },
          {
            id:2,
            content: "Et votre table retrouve le smile",
            imageUrl: require('./images/landing/sol-table.png')
          }
        ]
      }
    },

    {
      id:3,
      name: "rue-commercante",
      title: "Vous ne le savez pas mais vous habitez la meilleure rue commerçante de Paris",
      imageUrl: require('./images/landing/rue-commercante.jpg'),
      problem: {
        title: "A Paris, on n’a pas le temps de courir partout pour acheter les bons produits.",
        arguments:[
          {
            id:0,
            content: "Le bon maraîcher, le bon boucher et le bon boulanger, c’est rarement la porte à côté",
            imageUrl: require('./images/landing/prob-directions.png')
          },
          {
            id:1,
            content: "Sans compter qu'ils sont souvent fermés quand on sort du boulot",
            imageUrl: require('./images/landing/prob-closed.png')
          },
          {
            id:2,
            content: "Du coup on finit à la supérette et on mange toujours la même chose",
            imageUrl: require('./images/landing/prob-ravioli.png')
          }
        ],
      },
      solution: {
        title: "JAWS passe chez les meilleurs artisans de Paris et les livre chez vous en une seule fois.",
        arguments: [
          {
            id:0,
            content: "Vous choisissez vos bons produits dans notre sélection quotidienne",
            imageUrl: require('./images/landing/sol-smartphone.png')
          },
          {
            id:1,
            content: "Vous choisissez où et quand vous voulez être livré",
            imageUrl: require('./images/landing/sol-bicycle.png')
          },
          {
            id:2,
            content: "C’est tellement simple qu’il n’y a pas de petit trois",
            imageUrl: require('./images/landing/sol-unicorn.png')
          }
        ]
      }
    },

    {
      id:4,
      name: "pas-plus-cher",
      title: "Faire ses courses chez les artisans ne coûte pas plus cher et JAWS vous les livre sur un plateau",
      imageUrl: require('./images/landing/pas-plus-cher.jpg'),
      problem: {
        title: "Mais pourquoi en 2016 on va encore au supermarché  ???",
        arguments:[
          {
            id:0,
            content: "Au supermarché, on achète mille fois trop",
            imageUrl: require('./images/landing/prob-caddie.png')
          },
          {
            id:1,
            content: "Et c’est fou ce qu’on finit par jeter !",
            imageUrl: require('./images/landing/prob-garbage.png')
          },
          {
            id:2,
            content: "Et le maraîcher super bon et pas trop cher, il est rarement en bas de la rue",
            imageUrl: require('./images/landing/prob-directions.png')
          }
        ],
      },
      solution: {
        title: "Avec JAWS, redécouvrez les bons produits de vos artisans en quelques clics.",
        arguments: [
          {
            id:0,
            content: "Vous choisissez vos bons produits dans notre sélection quotidienne",
            imageUrl: require('./images/landing/sol-smartphone.png')
          },
          {
            id:1,
            content: "Pour les quantités, c’est trop facile: les portions sont par personne",
            imageUrl: require('./images/landing/sol-balance.png')
          },
          {
            id:2,
            content: "Vous choisissez où et quand vous voulez être livré",
            imageUrl: require('./images/landing/sol-bicycle.png')
          }
        ]
      }
    }
  ]
};
