import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=> (
<div className="header">
    <div className="logo-container"> 
       <img 
          className="logo"
             src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"></img>
      </div>
<div className="nav-items">
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact Us</li>
<li>Cart</li>
</ul>
</div>
</div>); 

const RestaurantCard = (props)=> {
    const { resData } = props; 
    return (
    <div className="res-card">
        <img
        src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.sla.slaString}</h4>
    </div>
)}; 
const resList= [{
    "info": {
      "id": "137500",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "ntqaphalrudmv27nozhu",
      "locality": "Ramada Govind Marg",
      "areaName": "Raja Park",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "2456",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 01:55:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-ramada-govind-marg-raja-park-jaipur-137500",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "58238",
      "name": "Victorian Bakery",
      "cloudinaryImageId": "a39ciucrlhzrcmfjouak",
      "locality": "Sector 7",
      "areaName": "Sindhi Colony",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "223011",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-03 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/victorian-bakery-sector-7-sindhi-colony-jaipur-58238",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "44359",
      "name": "Sethi Bar-Be-Que",
      "cloudinaryImageId": "ypcc8quio98rj9xxwekh",
      "locality": "Raja Park",
      "areaName": "Raja Park",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Chinese",
        "Biryani",
        "Afghani",
        "Kebabs",
        "Punjabi"
      ],
      "avgRating": 4.3,
      "parentId": "180073",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "select": true,
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sethi-bar-be-que-raja-park-jaipur-44359",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "59297",
      "name": "Shankar Samosa",
      "cloudinaryImageId": "d8pqyjprjyp6whgjgzo0",
      "areaName": "Raja Park",
      "costForTwo": "₹80 for two",
      "cuisines": [
        "Snacks"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "181774",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-03 20:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/shankar-samosa-raja-park-jaipur-59297",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "57722",
      "name": "Dmb(Doodh Misthan Bhandar)",
      "cloudinaryImageId": "mwxhhhmz9gdap5zrcojj",
      "locality": "Golpark",
      "areaName": "Bani Park",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Navratri Special",
        "Thalis",
        "Chinese",
        "Continental",
        "Snacks",
        "Punjabi"
      ],
      "avgRating": 4.5,
      "parentId": "7093",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 9.2,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "9.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-03 22:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dmb-doodh-misthan-bhandar-golpark-bani-park-jaipur-57722",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "61560",
      "name": "Bombay Mishthan Bhandar (BMB) - Durapura",
      "cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
      "locality": "Durgapura",
      "areaName": "Durgapura",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Rajasthani",
        "Snacks",
        "Sweets",
        "Indian"
      ],
      "avgRating": 4.5,
      "parentId": "13728",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 7.6,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "7.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-03 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bombay-mishthan-bhandar-bmb-durapura-durgapura-jaipur-61560",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "129366",
      "name": "Ganesh Bhojnalaya - Jyoti Nagar",
      "cloudinaryImageId": "ebqewymo7zx4kdsslxdw",
      "locality": "Lal Kothi",
      "areaName": "Lal Kothi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Chinese",
        "Mughlai",
        "Chaat",
        "Punjabi",
        "Desserts",
        "Snacks",
        "Rajasthani",
        "Tandoor",
        "Sweets",
        "Indian",
        "Beverages",
        "Ice Cream",
        "Italian",
        "Pastas"
      ],
      "avgRating": 4.3,
      "parentId": "85926",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-03 16:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ganesh-bhojnalaya-jyoti-nagar-lal-kothi-jaipur-129366",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "294366",
      "name": "Dil Punjabi Dhaba",
      "cloudinaryImageId": "iqnzq5feas0akd5p5fxe",
      "locality": "Sector 12",
      "areaName": "Malviya Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani"
      ],
      "avgRating": 3.8,
      "parentId": "72660",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 6.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "6.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-0ce03548-3992-41df-abcc-92c1be7660f7"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dil-punjabi-dhaba-sector-12-malviya-nagar-jaipur-294366",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }]; 

const Body =  () => (
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
   {resList.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}

    </div>
    </div>
); 

const AppLayout = ()=> (<div className="app">
<Header />
<Body />
</div>); 

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(<AppLayout />); 





