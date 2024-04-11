export const RESTAURANT_DETAILS_RECOMMENDATION_DATA = {
  statusCode: 0,
  data: {
    statusMessage: 'done successfully',
    cards: [
      {
        card: {
          card: {
            '@type':
              'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
            info: {
              id: '56428',
              name: 'Puliyogare Point',
              city: 'Bangalore',
              slugs: {
                restaurant: 'puliyogare-point-basavanagudi-basavanagudi',
                city: 'bangalore',
              },
              uniqueId: 'e51e6528-4859-48c8-8fed-e84c17dc2d76',
              cloudinaryImageId: 'wet9zrjusmdtkk16jlrz',
              locality: 'N.R Colony',
              areaName: 'Basavanagudi',
              costForTwo: '15000',
              costForTwoMessage: '₹150 for two',
              cuisines: ['South Indian'],
              avgRating: 4.6,
              veg: true,
              feeDetails: {
                restaurantId: '56428',
                fees: [
                  { name: 'time' },
                  { name: 'distance', fee: 2000 },
                  { name: 'special' },
                ],
                totalFee: 2000,
                icon: 'v1648208530/surgecreatives/info',
                message:
                  'Very Far (1,750.1 kms) | Additional delivery fee will apply',
              },
              parentId: '8409',
              avgRatingString: '4.6',
              totalRatingsString: '10K+ ratings',
              sla: {
                restaurantId: '56428',
                lastMileTravel: 1750.2,
                serviceability: 'NON_SERVICEABLE',
                rainMode: 'RAIN_MODE_NONE',
                longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
                lastMileTravelString: '1750.1 km',
                iconType: 'ICON_TYPE_EMPTY',
              },
              availability: {
                nextCloseTime: '2024-01-17 22:00:00',
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: '10% off',
                shortDescriptionList: [
                  {
                    meta: '10% off | Use TRYNEW',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: '10% off | Use PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                descriptionList: [
                  {
                    meta: '10% off up to ₹40 | Use code TRYNEW',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: '10% off | Use code PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: 'puliyogare-point-basavanagudi-basavanagudi',
              isOpen: true,
              labels: [
                { title: 'Timings', message: 'null' },
                {
                  title: 'Address',
                  message:
                    'No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi',
                },
                { title: 'Cuisines', message: 'South Indian' },
              ],
              totalRatings: 10000,
              aggregatedDiscountInfoV2: {
                header: '10% off',
                shortDescriptionList: [
                  {
                    meta: '10% off | Use TRYNEW',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: '10% off | Use PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                descriptionList: [
                  {
                    meta: '10% off up to ₹40 | Use code TRYNEW',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                  {
                    meta: '10% off | Use code PARTY',
                    discountType: 'Percentage',
                    operationType: 'RESTAURANT',
                  },
                ],
                couponDetailsCta: 'View coupon details',
              },
              type: 'F',
              nudgeBanners: [
                {
                  minValue: 525,
                  maxValue: 750,
                  priority: 2,
                  couponCode: 'PARTY',
                  discountInfo: { discountType: 'Percentage', value: 10 },
                  lockedMessage:
                    'Add items worth ₹<amount> to unlock flat 10% off | Code PARTY',
                  unlockedMessage:
                    'PARTY Coupon Unlocked! Use it to save flat 10% off',
                  logoCtx: {},
                },
                {
                  minValue: 335,
                  maxValue: 479,
                  priority: 3,
                  couponCode: 'JUMBO',
                  discountInfo: { discountType: 'Percentage', value: 10 },
                  lockedMessage:
                    'Add items worth ₹<amount> to save upto ₹100 | Code JUMBO',
                  unlockedMessage:
                    'JUMBO Coupon Unlocked! Use it to save upto ₹100',
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/56428',
              },
              ratingSlab: 'RATING_SLAB_5',
              availabilityServiceabilityMessage:
                'Does not deliver to your location',
              orderabilityCommunication: {
                title: { text: 'Wish you were' },
                subTitle: { text: 'CLOSER!' },
                message: {
                  text: "This location is outside the outlet's delivery area",
                  textColour: 'negative',
                },
                customIcon: {
                  bgGradientColorStart: '#F64C41',
                  bgGradientColorEnd: '#E53554',
                },
              },
              hasBestsellerItems: true,
              hasGuiltfreeItems: true,
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              latLong: '12.940751,77.5704',
            },
            analytics: {},
          },
          relevance: {
            type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD',
            sectionId: 'POP_UP_CROUTON_MENU',
          },
        },
      },
      {
        card: {
          card: {
            '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: 'offerCollectionWidget_UX4',
            gridElements: {
              infoWithStyle: {
                '@type':
                  'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
                offers: [
                  {
                    info: {
                      header: '10% OFF UPTO ₹40',
                      offerTagColor: '#E46D47',
                      offerIds: ['ffc32167-fdb1-4417-b0a4-3b39c8bbfa0a'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE TRYNEW',
                      description: 'ABOVE ₹159',
                      offerType: 'offers',
                      restId: '56428',
                      offerLogo: 'offers/generic',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: { type: 'OFFER_HALF_CARD' },
                  },
                  {
                    info: {
                      header: 'FLAT 10% OFF',
                      offerTag: 'FLAT DEAL',
                      offerTagColor: '#E46D47',
                      offerIds: ['928b88ae-c1d0-433f-9bf6-37242a0f2af9'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE PARTY',
                      description: 'ABOVE ₹750',
                      offerType: 'offers',
                      restId: '56428',
                      offerLogo: 'offers/generic',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: { type: 'OFFER_HALF_CARD' },
                  },
                  {
                    info: {
                      header: '10% OFF UPTO ₹100',
                      offerTag: 'SAVE BIG',
                      offerTagColor: '#E46D47',
                      offerIds: ['e72dc81d-9fe6-4bf7-a76c-bc459cb491f7'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE JUMBO',
                      description: 'ABOVE ₹479',
                      offerType: 'offers',
                      restId: '56428',
                      offerLogo: 'offers/save-big',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: { type: 'OFFER_HALF_CARD' },
                  },
                  {
                    info: {
                      header: 'FLAT ₹120 OFF',
                      offerTagColor: '#E46D47',
                      logoBottom:
                        'rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77',
                      offerIds: ['0681e750-4d60-4066-9e7d-be11d720f180'],
                      expiryTime: '1970-01-01T00:00:00Z',
                      couponCode: 'USE AXIS120',
                      description: 'ABOVE ₹500',
                      offerType: 'offers',
                      restId: '56428',
                      offerLogo:
                        'rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77',
                      descriptionTextColor: '#7302060C',
                    },
                    cta: { type: 'OFFER_HALF_CARD' },
                  },
                ],
                habitMilestoneInfo: { callout: {} },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                      isPureVeg: true,
                      badges: {},
                      vegOnlyDetails: {
                        imageId: 'AutoVegOnly_qkjowj',
                        title: 'Showing only vegetarian options.',
                        description:
                          'Tap on the VEG ONLY button to turn off the setting',
                      },
                      topRatedFilter: {},
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: 'Kids Favourites',
                          tooltip: {
                            enabled: true,
                            displayText:
                              'Kids Favourites Filter applied. Remove this filter to see the full Menu.',
                          },
                        },
                      },
                      vegFilter: { attributes: { displayText: 'VEG' } },
                      nonvegFilter: { attributes: { displayText: 'NONVEG' } },
                    },
                    relevance: {
                      type: 'RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED',
                      sectionId: 'MENU_FILTER_TOGGLE',
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
                      title: 'Combos',
                      categories: [
                        {
                          title: '3 In 1 Combo',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021950',
                                  name: 'Veg Pulao 3 In 1 Combo',
                                  category: 'Combos',
                                  description:
                                    'Veg pulao, sakkar pongal, curd rice, ambode [2 pieces].',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '194 ratings',
                                      ratingCountV2: '194',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021944',
                                  name: 'Coconut Rice 3 In 1 Combo',
                                  category: 'Combos',
                                  description:
                                    'Coconut rice, sakkar pongal, curd rice, ambode [2 pieces].',
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.8',
                                      ratingCount: '22 ratings',
                                      ratingCountV2: '22',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021945',
                                  name: 'Ghee Rice 3 In 1 Combo',
                                  category: 'Combos',
                                  description:
                                    'Ghee Rice + Sakkar Pongal + Curd Rice + Ambode [2 Pieces]',
                                  isVeg: 1,
                                  price: 13500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '2.0',
                                      ratingCount: '8 ratings',
                                      ratingCountV2: '8',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021946',
                                  name: 'Mango Rice 3 In 1 Combo',
                                  category: 'Combos',
                                  description:
                                    'Mango rice, sakkar pongal, curd rice, ambode [2 pieces].',
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '110 ratings',
                                      ratingCountV2: '110',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021948',
                                  name: 'Tomato Bath 3 In 1 Combo',
                                  category: 'Combos',
                                  description:
                                    'Tomato bath, sakkar pongal, curd rice, ambode [2 pieces].',
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '3.5',
                                      ratingCount: '18 ratings',
                                      ratingCountV2: '18',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021949',
                                  name: 'Vangi Bath 3 In 1 Combo',
                                  category: 'Combos',
                                  description:
                                    'Vangi bath, sakkar pongal, curd rice, ambode [2 pieces].',
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.2',
                                      ratingCount: '145 ratings',
                                      ratingCountV2: '145',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Combos',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '31211857',
                                  name: 'Lemon Rice Combo',
                                  category: 'Combos',
                                  description:
                                    'Serves 1,300 ml|lemon rice, curd rice, ambode [1 piece].',
                                  imageId: 'e0f4qwh5cq3s1bwyjrux',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.3',
                                      ratingCount: '1385 ratings',
                                      ratingCountV2: '1385',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '31211858',
                                  name: 'Sakkar Pongal Combo',
                                  category: 'Combos',
                                  description:
                                    'Serves 1,300 ml|sakkar pongal, puliyogare, ambode [1 piece].',
                                  imageId: 'ucsawdqy9vz28vvhd7pp',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '3569 ratings',
                                      ratingCountV2: '3569',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '31211859',
                                  name: 'Puliyogare Combo',
                                  category: 'Combos',
                                  description:
                                    'Medium Spicy | Serves 1,300 ml|puliyogare, curd rice, ambode [1 piece].',
                                  imageId: 'grloxbkoscorx8cqyhq5',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                    spiceLevel: 'MEDIUMSPICY',
                                  },
                                  ribbon: {
                                    text: 'Bestseller',
                                    textColor: '#ffffff',
                                    topBackgroundColor: '#d53d4c',
                                    bottomBackgroundColor: '#b02331',
                                  },
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.4',
                                      ratingCount: '6893 ratings',
                                      ratingCountV2: '6893',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021951',
                                  name: 'Bisi Bele Bath Combo',
                                  category: 'Combos',
                                  description:
                                    'Medium Spicy | Serves 1|bisi bele bath, curd rice, ambode [1 piece].',
                                  imageId: 'wboobkv2nkbv8zgqe7i7',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: 'VEG',
                                    spiceLevel: 'MEDIUMSPICY',
                                  },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '3138 ratings',
                                      ratingCountV2: '3138',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021952',
                                  name: 'Pongal & Sakkar Pongal Combo',
                                  category: 'Combos',
                                  description:
                                    'Pongal, sakkar pongal, ambode [1 piece].',
                                  imageId: 'l6ijf2cikuoku3mnyjtr',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '106 ratings',
                                      ratingCountV2: '106',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021953',
                                  name: 'Puliyogare Point Special Combo',
                                  category: 'Combos',
                                  description:
                                    'Puliyogare, sakkar pongal, bisi bele bhat, curd rice, ambode [2 pieces].',
                                  imageId: 'ospjjhn7nmkdvoileqkr',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '711 ratings',
                                      ratingCountV2: '711',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Snacks Combos',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021937',
                                  name: 'Akki Roti Combo',
                                  category: 'Combos',
                                  description:
                                    'Akki roti, kanchipuram idli, sajjige.',
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021938',
                                  name: 'Kanchipuram Idli Combo',
                                  category: 'Combos',
                                  description:
                                    'Kanchipuram idli, vada, medu dosa.',
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021939',
                                  name: 'Shavige Bath With Akki Rotti Combo',
                                  category: 'Combos',
                                  description:
                                    'Shavige bath, akki rotti, sajjige.',
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Breakfasts Combo',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '40453576',
                                  name: 'Pongal Combo',
                                  category: 'Combos',
                                  description: 'Pongal, vada, sajjige.',
                                  imageId: 'mr63u4mq7dwgbgkowfad',
                                  isVeg: 1,
                                  price: 11500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.4',
                                      ratingCount: '297 ratings',
                                      ratingCountV2: '297',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '40453577',
                                  name: 'Idli Vada Combo',
                                  category: 'Combos',
                                  description: 'Idli, vada, pongal.',
                                  imageId: 'ml8y47sipsoiosfvjtkv',
                                  isVeg: 1,
                                  price: 11500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '401 ratings',
                                      ratingCountV2: '401',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021940',
                                  name: 'Avalakki Combo',
                                  category: 'Combos',
                                  description: 'Avalakki bath, sajjige, vada.',
                                  isVeg: 1,
                                  price: 11500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '2.4',
                                      ratingCount: '24 ratings',
                                      ratingCountV2: '24',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021942',
                                  name: 'Shavige Bath Combo',
                                  category: 'Combos',
                                  description: 'Shavige bath, sajjige, vada.',
                                  isVeg: 1,
                                  price: 11500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.9',
                                      ratingCount: '25 ratings',
                                      ratingCountV2: '25',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021943',
                                  name: 'Uppittu Combo',
                                  category: 'Combos',
                                  description: 'Uppittu, sajjige, vada.',
                                  isVeg: 1,
                                  price: 11500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '78 ratings',
                                      ratingCountV2: '78',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Breakfast',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500480',
                              name: 'Uppittu',
                              category: 'Breakfast',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '1276 ratings',
                                  ratingCountV2: '1276',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500481',
                              name: 'Sajjige',
                              category: 'Breakfast',
                              description: 'Medium Spicy | |serves 1,300 ml|',
                              imageId: 'dqmtjl72fe3uzkof1kac',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                spiceLevel: 'MEDIUMSPICY',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '3133 ratings',
                                  ratingCountV2: '3133',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500489',
                              name: 'Mini Idli Sambar',
                              category: 'Breakfast',
                              description:
                                'Served in 10 pcs idly and chutney sambar.',
                              imageId: 'uulgo8cidkcoc7kwdxkh',
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '1765 ratings',
                                  ratingCountV2: '1765',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021896',
                              name: 'Idli (2 Pieces)',
                              category: 'Breakfast',
                              description: 'Served with sambar and chutney.',
                              imageId: 't98khqo4oqkx26kuomgh',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '624 ratings',
                                  ratingCountV2: '624',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983024',
                              name: 'Vada (1 Pc)',
                              category: 'Breakfast',
                              description: 'Serves 1, 1 pc.',
                              imageId: 'nbyyv4tmsuwjmzybizin',
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '4614 ratings',
                                  ratingCountV2: '4614',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934758',
                              name: 'Avalakki Bath',
                              category: 'Breakfast',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '413 ratings',
                                  ratingCountV2: '413',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021897',
                              name: 'Shavige Bath',
                              category: 'Breakfast',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '445 ratings',
                                  ratingCountV2: '445',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '92828172',
                              name: 'Onion Uddina Vada [2 Pcs]',
                              category: 'Breakfast',
                              isVeg: 1,
                              price: 3800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '101 ratings',
                                  ratingCountV2: '101',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '119494815',
                              name: 'Bread Uppittu',
                              category: 'Breakfast',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '124546249',
                              name: 'Jaggery [bella] Kesari Bath',
                              category: 'Breakfast',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Lunch',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983026',
                              name: 'Pongal',
                              category: 'Lunch',
                              description: 'Serves 1, 300 ml.',
                              imageId: 'rxxtbfqvta3iwga51w1u',
                              inStock: 1,
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '6035 ratings',
                                  ratingCountV2: '6035',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983028',
                              name: 'Puliyogare',
                              category: 'Lunch',
                              description: 'Medium Spicy | Serves 1, 300 ml.',
                              imageId: 'kqvgpxkqzbmpypnuhk0r',
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                spiceLevel: 'MEDIUMSPICY',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '30554 ratings',
                                  ratingCountV2: '30554',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983029',
                              name: 'Bisi Bele Bath',
                              category: 'Lunch',
                              description: 'Medium Spicy | Serves 1, 300 ml.',
                              imageId: 'sgvvspbcx4n4zglmrow4',
                              inStock: 1,
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                spiceLevel: 'MEDIUMSPICY',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '10099 ratings',
                                  ratingCountV2: '10099',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983030',
                              name: 'Curd Rice',
                              category: 'Lunch',
                              description: '|serves 1,300 ml|',
                              imageId: 'syhvkaq93ymczfxclgrh',
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '7891 ratings',
                                  ratingCountV2: '7891',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983033',
                              name: 'Bajji',
                              category: 'Lunch',
                              description: 'Serves 1, 2 pcs.',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '1983 ratings',
                                  ratingCountV2: '1983',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500482',
                              name: 'Sakkar Pongal',
                              category: 'Lunch',
                              description: 'Serves 1, 300 ml.',
                              imageId: 'nbwbhafmrdouank3ntlf',
                              inStock: 1,
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '10853 ratings',
                                  ratingCountV2: '10853',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500483',
                              name: 'Lemon Rice',
                              category: 'Lunch',
                              description: 'Serves 1, 300 ml.',
                              imageId: 'xckb305lhkjz9qjixjg4',
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '3652 ratings',
                                  ratingCountV2: '3652',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500485',
                              name: 'Curd Vada',
                              category: 'Lunch',
                              description: 'Serves 1, 1 Pc.',
                              imageId: 'edo8yi3ibzeggjpkx0k6',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '1328 ratings',
                                  ratingCountV2: '1328',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934762',
                              name: 'Veg Pulao',
                              category: 'Lunch',
                              description: 'Serves 1, 300 ml.',
                              imageId: 'sntgwg7ey7uqyfi5y435',
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '4264 ratings',
                                  ratingCountV2: '4264',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '17174818',
                              name: 'Mix Kaalu Usli',
                              category: 'Lunch',
                              description: 'Medium Spicy | Serves 1, 300 ml.',
                              imageId: 'ju0yz7rypbavgbwonywb',
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                spiceLevel: 'MEDIUMSPICY',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '2380 ratings',
                                  ratingCountV2: '2380',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '51708758',
                              name: 'Thove',
                              category: 'Lunch',
                              imageId: 'gkthy60vnxodp6962two',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '409 ratings',
                                  ratingCountV2: '409',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '61713114',
                              name: 'Rasam',
                              category: 'Lunch',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '468 ratings',
                                  ratingCountV2: '468',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '61713115',
                              name: 'Sambar',
                              category: 'Lunch',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '356 ratings',
                                  ratingCountV2: '356',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021899',
                              name: 'Ambode (2 Pieces)',
                              category: 'Lunch',
                              description: 'Serves 1, 2 pcs.',
                              imageId: 'vt2mustmzvjnyiuu9bkx',
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '2073 ratings',
                                  ratingCountV2: '2073',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021903',
                              name: '3 Chapati',
                              category: 'Lunch',
                              description: '|serves 1,3 Pc|Sagu + chatney',
                              imageId: 'gspikvfgjm1gq5blukoz',
                              inStock: 1,
                              isVeg: 1,
                              price: 5800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '457 ratings',
                                  ratingCountV2: '457',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021909',
                              name: 'Mini Meals',
                              category: 'Lunch',
                              description:
                                'Rice, sambar, rasam, palya, chapathi 2 pcs, curd rice, sagu and more.',
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '322 ratings',
                                  ratingCountV2: '322',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021912',
                              name: 'Rava Vangi Bath',
                              category: 'Lunch',
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '81 ratings',
                                  ratingCountV2: '81',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021917',
                              name: 'White Rice',
                              category: 'Lunch',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '200 ratings',
                                  ratingCountV2: '200',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '13983034',
                              name: 'Pakoda',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '765 ratings',
                                  ratingCountV2: '765',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934763',
                              name: 'Vangi Bath',
                              category: 'Lunch',
                              description: 'Medium Spicy | Serves 1, 300 ml.',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                spiceLevel: 'MEDIUMSPICY',
                              },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '1111 ratings',
                                  ratingCountV2: '1111',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934768',
                              name: 'Tomato Bath',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '410 ratings',
                                  ratingCountV2: '410',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934769',
                              name: 'Ghee Rice',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '119 ratings',
                                  ratingCountV2: '119',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '17174815',
                              name: 'Rava Pongal',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '31211849',
                              name: 'Gojju Avalakki',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 4800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '412 ratings',
                                  ratingCountV2: '412',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '31211854',
                              name: 'Mango Rice',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '712 ratings',
                                  ratingCountV2: '712',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '46816931',
                              name: 'Curd Shavige',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '39 ratings',
                                  ratingCountV2: '39',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021898',
                              name: 'Aloo Bonda (1 Piece)',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 2100,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '24 ratings',
                                  ratingCountV2: '24',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021901',
                              name: 'Avarekalu Kadubu',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021904',
                              name: 'Coconut Rice',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '40 ratings',
                                  ratingCountV2: '40',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021905',
                              name: 'Curd Aavalakki',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '29 ratings',
                                  ratingCountV2: '29',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021908',
                              name: 'Maddur Vada (1 Piece)',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '61 ratings',
                                  ratingCountV2: '61',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021911',
                              name: 'Rava Vada (2 Pieces)',
                              category: 'Lunch',
                              description: '2 pcs.',
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '75 ratings',
                                  ratingCountV2: '75',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '82381559',
                              name: 'Avial',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.0',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '82381560',
                              name: 'Majjige Huli',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '124 ratings',
                                  ratingCountV2: '124',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '94246663',
                              name: 'Menthya Bath',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '132227703',
                              name: 'Avarebeleambode (2pcs)',
                              category: 'Lunch',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Jumbo Family Pack',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78791690',
                              name: 'Bisi Bele Bath  Jumbo',
                              category: 'Jumbo Family Pack',
                              description: 'Serve 10-12.',
                              inStock: 1,
                              isVeg: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78791692',
                              name: 'Pongal  Jumbo',
                              category: 'Jumbo Family Pack',
                              description: 'Serve 10-12.',
                              inStock: 1,
                              isVeg: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78791693',
                              name: 'Puliyogare Jumbo',
                              category: 'Jumbo Family Pack',
                              description: 'Serve 10-12.',
                              inStock: 1,
                              isVeg: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78791694',
                              name: 'Veg Pulao Jumbo',
                              category: 'Jumbo Family Pack',
                              description: 'Serve 10-12.',
                              inStock: 1,
                              isVeg: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78791691',
                              name: 'Lemon Rice  Jumbo',
                              category: 'Jumbo Family Pack',
                              description: 'Serve 10-12.',
                              isVeg: 1,
                              price: 54900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Snacks',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '88080941',
                              name: 'Padavalakai Palya',
                              category: 'Snacks',
                              inStock: 1,
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '8 ratings',
                                  ratingCountV2: '8',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '17174816',
                              name: 'Kadale Kaalu Usli',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '469 ratings',
                                  ratingCountV2: '469',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021932',
                              name: 'Green Paes Akkitari Uppittu',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '146 ratings',
                                  ratingCountV2: '146',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021957',
                              name: 'Kanchipuram Idli',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '84 ratings',
                                  ratingCountV2: '84',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '84200923',
                              name: 'Balekai Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '23 ratings',
                                  ratingCountV2: '23',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '86272689',
                              name: 'Cabbage Carrot Mix Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '42 ratings',
                                  ratingCountV2: '42',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '86340878',
                              name: 'Aloo Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '13 ratings',
                                  ratingCountV2: '13',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '86476740',
                              name: 'Thondekai Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '22 ratings',
                                  ratingCountV2: '22',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '86527930',
                              name: 'Bendekai  Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '10 ratings',
                                  ratingCountV2: '10',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '87641708',
                              name: 'Beetroot Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '26 ratings',
                                  ratingCountV2: '26',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '87841468',
                              name: 'Beans Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '9 ratings',
                                  ratingCountV2: '9',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '87877710',
                              name: 'Mixed Vegetables Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '39 ratings',
                                  ratingCountV2: '39',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '87973625',
                              name: 'Badanekai Aloo Ennegayi Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '59 ratings',
                                  ratingCountV2: '59',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '88354977',
                              name: 'Heerekai Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.1',
                                  ratingCount: '4 ratings',
                                  ratingCountV2: '4',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '89161185',
                              name: 'Soppu Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '11 ratings',
                                  ratingCountV2: '11',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '97953652',
                              name: 'Gorikayi Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.2',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '108642892',
                              name: 'Kumbalakai Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '5 ratings',
                                  ratingCountV2: '5',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '119842848',
                              name: 'Karamani Palya',
                              category: 'Snacks',
                              isVeg: 1,
                              price: 3500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Accompaniments',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '31211851',
                              name: 'Kosambari',
                              category: 'Accompaniments',
                              description: 'Medium Spicy | Serves 1, 300 ml.',
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: 'VEG',
                                spiceLevel: 'MEDIUMSPICY',
                              },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '1572 ratings',
                                  ratingCountV2: '1572',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '15982040',
                              name: 'Curd',
                              category: 'Accompaniments',
                              isVeg: 1,
                              price: 2000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '895 ratings',
                                  ratingCountV2: '895',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021936',
                              name: 'Chutney (1 Cup)',
                              category: 'Accompaniments',
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
                      title: 'Desserts And Beverages',
                      categories: [
                        {
                          title: 'Desserts',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '15982036',
                                  name: 'Godhi Thari Payasa',
                                  category: 'Desserts And Beverages',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 4000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.8',
                                      ratingCount: '195 ratings',
                                      ratingCountV2: '195',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '15982037',
                                  name: 'Pal Payasa',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 4000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '81 ratings',
                                      ratingCountV2: '81',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '15982038',
                                  name: 'Shavige Payasa',
                                  category: 'Desserts And Beverages',
                                  imageId: 'gvifjxwrntgpot17eg3o',
                                  isVeg: 1,
                                  price: 4000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '728 ratings',
                                      ratingCountV2: '728',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '17174810',
                                  name: 'Hesaru Bele Payasa',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 4000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '39 ratings',
                                      ratingCountV2: '39',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '17174811',
                                  name: 'Kadale Bele Payasa',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 4000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '213 ratings',
                                      ratingCountV2: '213',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021965',
                                  name: 'Sabakki Payasa',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 4000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '65 ratings',
                                      ratingCountV2: '65',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: 'Sweets',
                          itemCards: [
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021963',
                                  name: 'Jamun (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  imageId: 'znycyrvo0pnmjauwkqn5',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 3000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '404 ratings',
                                      ratingCountV2: '404',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021969',
                                  name: 'Badusha (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 2300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.3',
                                      ratingCount: '166 ratings',
                                      ratingCountV2: '166',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021976',
                                  name: 'Mysore Pak (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 2600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.4',
                                      ratingCount: '77 ratings',
                                      ratingCountV2: '77',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021977',
                                  name: 'Rava Unde (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 2600,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '97 ratings',
                                      ratingCountV2: '97',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '77302702',
                                  name: 'Kashi Halwa',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 4500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '11 ratings',
                                      ratingCountV2: '11',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021967',
                                  name: 'Athi Rasa (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 2000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '5.0',
                                      ratingCount: '3 ratings',
                                      ratingCountV2: '3',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021968',
                                  name: 'Badam Puri (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 2300,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.6',
                                      ratingCount: '87 ratings',
                                      ratingCountV2: '87',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021970',
                                  name: 'Carrot Halwa',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 4500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.7',
                                      ratingCount: '24 ratings',
                                      ratingCountV2: '24',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021973',
                                  name: 'Jangir (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 2200,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.4',
                                      ratingCount: '91 ratings',
                                      ratingCountV2: '91',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021974',
                                  name: 'Laadu (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 2500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.8',
                                      ratingCount: '11 ratings',
                                      ratingCountV2: '11',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                '@type':
                                  'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                info: {
                                  id: '78021978',
                                  name: 'Sajjappa (1 Piece)',
                                  category: 'Desserts And Beverages',
                                  isVeg: 1,
                                  price: 3500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    'Next available at 7:30 am, tomorrow',
                                  itemAttribute: { vegClassifier: 'VEG' },
                                  ribbon: {},
                                  type: 'ITEM',
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: '4.5',
                                      ratingCount: '43 ratings',
                                      ratingCountV2: '43',
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Large 750 Ml Box',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021918',
                              name: 'Bisi Bele Bath (large 750)',
                              category: 'Large 750 Ml Box',
                              description: '|serves 1,300 ml|',
                              imageId: 'nzffay1ftkzqiophvxbd',
                              inStock: 1,
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '365 ratings',
                                  ratingCountV2: '365',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021919',
                              name: 'Curd Rice (large 750)',
                              category: 'Large 750 Ml Box',
                              description: 'Serve 2-3.',
                              imageId: 'r3xa6klwukkoygzy4bah',
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '296 ratings',
                                  ratingCountV2: '296',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021920',
                              name: 'Lemon Rice (large 750)',
                              category: 'Large 750 Ml Box',
                              description: 'Serve 2-3.',
                              imageId: 'bmzp6ssbz4ngxfwwzyab',
                              inStock: 1,
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '219 ratings',
                                  ratingCountV2: '219',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021921',
                              name: 'Pongal (large 750)',
                              category: 'Large 750 Ml Box',
                              description: 'Serve 2-3.',
                              imageId: 'n3pzrqdtg6ygukbbzcpm',
                              inStock: 1,
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '221 ratings',
                                  ratingCountV2: '221',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021922',
                              name: 'Puliyogare (large 750)',
                              category: 'Large 750 Ml Box',
                              description: 'Serve 2-3.',
                              imageId: 'pysjzxlbbqbzhwgfsiny',
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {
                                text: 'Bestseller',
                                textColor: '#ffffff',
                                topBackgroundColor: '#d53d4c',
                                bottomBackgroundColor: '#b02331',
                              },
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '1948 ratings',
                                  ratingCountV2: '1948',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021923',
                              name: 'Sakkar Pongal (large 750)',
                              category: 'Large 750 Ml Box',
                              description: 'Serve 2-3.',
                              imageId: 'bmnt8umv4430me1ev67o',
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '370 ratings',
                                  ratingCountV2: '370',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021924',
                              name: 'Veg Pulao (large750)',
                              category: 'Large 750 Ml Box',
                              description: 'Serve 2-3.',
                              imageId: 'k2zytinazujfv6xpzjzq',
                              inStock: 1,
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '349 ratings',
                                  ratingCountV2: '349',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78554307',
                              name: 'Tomato Bath  [large 750]',
                              category: 'Large 750 Ml Box',
                              description: 'Serve  2-3',
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '98130597',
                              name: 'Ghee Rice  [ Large 750 ]',
                              category: 'Large 750 Ml Box',
                              description: 'Serve  2-3',
                              isVeg: 1,
                              price: 14500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Breads',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500488',
                              name: 'Akki Roti',
                              category: 'Breads',
                              description: 'Akki rotti 1 pc, chutney, sagu.',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.1',
                                  ratingCount: '931 ratings',
                                  ratingCountV2: '931',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '46816926',
                              name: 'Avare Kaalu Akki Roti',
                              category: 'Breads',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021925',
                              name: 'Ragi Roti',
                              category: 'Breads',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'South Indian Special',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '40453585',
                              name: 'Pudina Rice',
                              category: 'South Indian Special',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.8',
                                  ratingCount: '14 ratings',
                                  ratingCountV2: '14',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '40453592',
                              name: 'Ulandogare',
                              category: 'South Indian Special',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '7 ratings',
                                  ratingCountV2: '7',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021902',
                              name: 'Bonda Rasam (2 Pieces)',
                              category: 'South Indian Special',
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.9',
                                  ratingCount: '6 ratings',
                                  ratingCountV2: '6',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021907',
                              name: 'Koduguogare',
                              category: 'South Indian Special',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '99209064',
                              name: 'Hayagreeva',
                              category: 'South Indian Special',
                              isVeg: 1,
                              price: 6500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '5.0',
                                  ratingCount: '3 ratings',
                                  ratingCountV2: '3',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '103517814',
                              name: 'Mangalore Bajji 3pc',
                              category: 'South Indian Special',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Dosa',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934759',
                              name: 'Medu Dosa',
                              category: 'Dosa',
                              description: 'Serves 1, 1 Pc.',
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '2056 ratings',
                                  ratingCountV2: '2056',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14934760',
                              name: 'Ragi Dosa',
                              category: 'Dosa',
                              description: 'Serves 1, 1 Pc.',
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              isGuiltfree: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '1223 ratings',
                                  ratingCountV2: '1223',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '40453598',
                              name: 'Vegetable Dosa',
                              category: 'Dosa',
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '3.7',
                                  ratingCount: '28 ratings',
                                  ratingCountV2: '28',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '40453599',
                              name: 'Onion Dosa',
                              category: 'Dosa',
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '139 ratings',
                                  ratingCountV2: '139',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '40453600',
                              name: 'Masala Dosa',
                              category: 'Dosa',
                              description: 'Serves 1, 1 Pc.',
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '447 ratings',
                                  ratingCountV2: '447',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '40453601',
                              name: 'Set Dosa',
                              category: 'Dosa',
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.3',
                                  ratingCount: '424 ratings',
                                  ratingCountV2: '424',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                      title: 'Weekend Special',
                      itemCards: [
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500492',
                              name: 'Lemon Othu Shavige',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.7',
                                  ratingCount: '345 ratings',
                                  ratingCountV2: '345',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '14500493',
                              name: 'Coconut Othu Shavige',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.4',
                                  ratingCount: '400 ratings',
                                  ratingCountV2: '400',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '31211845',
                              name: 'Mango Othu Shavige',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.5',
                                  ratingCount: '33 ratings',
                                  ratingCountV2: '33',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78021964',
                              name: 'Nuchinunde',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '134 ratings',
                                  ratingCountV2: '134',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78440984',
                              name: 'Gasagase Payasa',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: '4.6',
                                  ratingCount: '2088 ratings',
                                  ratingCountV2: '2088',
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78440985',
                              name: 'Godhi Thari Sakkar Pongal',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 6800,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            '@type':
                              'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                            info: {
                              id: '78461948',
                              name: 'Gari Poori With Gasagase Payasa',
                              category: 'Weekend Special',
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                'Next available at 7:30 am, tomorrow',
                              itemAttribute: { vegClassifier: 'VEG' },
                              ribbon: {},
                              type: 'ITEM',
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
                      type: 'FSSAI',
                      imageId: 'fssai_final_edss9i',
                      text: ['License No. 11221334001610'],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      '@type':
                        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
                      name: 'Puliyogare Point',
                      area: 'Basavanagudi',
                      completeAddress:
                        'No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: 'e22351c1-e1b8-4139-92c8-f69ab8569f0f',
  sid: 'bn0e15ac-7a1c-43a0-a2a5-c21dad342497',
  deviceId: 'e745d16e-3060-5ce1-b466-21c1b05dcfb9',
  csrfToken: '0XxJo9pA19ml-4qeS2seFA_gk7ayUmcgd8FISA6Y',
};
