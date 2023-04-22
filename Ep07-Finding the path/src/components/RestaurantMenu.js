import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuShimmer } from "./Shimmer";
import { AiFillStar } from "react-icons/ai";
import { GET_RESTAURANT_MENU, RES_IMG_CDN, ITEM_IMG_CDN } from "../config";

// const RestaurantMenu = () => {
//   const { resId } = useParams();/* Read dynamic URL params */
//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     getRestaurantInfo();
//   }, []);

//   const getRestaurantInfo = async () => {
//     try {
//       const response = await fetch(GET_RESTAURANT_MENU + resId);
//       const res_data = await response.json();
//       // setRestaurant(res_data?.data?.cards?.find((o)=>o.card)?.card?.card?.info);
//       setRestaurant(json?.data?.cards
//         ?.find((o)=>o.groupedCard)
//         ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//           (o) => o?.card?.card?.itemCards || o?.card?.card?.categories
//         )
//         );
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return !restaurant ? (
//     <MenuShimmer />
//     ) : (
//     <div className="restaurant-menu">
//       <div className="restaurant-summary">
//         <img className="restaurant-img" src={ RES_IMG_CDN  + restaurant?.cloudinaryImageId } alt={restaurant?.name}/>
//         <div className="restaurant-summary-details">
//           <h2 className="restaurant-title">{restaurant?.name}</h2>
//           <p className="restaurant-tags">{restaurant?.cuisines.join(", ")}</p>
//           <div className="restaurant-details">
//             <div className="restaurant-rating">
//               <AiFillStar /><span>{restaurant?.avgRating}</span>
//             </div>
//             <div>|</div>
//             <div>{restaurant?.sla.slaString}</div>
//             <div>|</div>
//             <div>{restaurant?.costForTwoMsg}</div>
//           </div>
//         </div>
//       </div>

//       <div className="restaurant-menu-content">
//         <div className="menu-items-container">
//           <div className="menu-title-wrap">
//             <h3 className="menu-title">Recommended</h3>
//             <p className="menu-count">{Object.keys(restaurant?.menu?.items).length} ITEMS</p>
//           </div>
//           <div className="menu-items-list">
//             { Object.values(restaurant?.menu?.items).map( item =>
//             <div className="menu-item" key={item?.id}>
//               <div className="menu-item-details">
//                 <h3 className="item-title">{item?.name}</h3>
//                 <p className="item-cost">{(item?.price > 0) ?
//                   new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " } </p>
//                 <p className="item-desc">{item?.description}</p>
//               </div>
//               <div className="menu-img-wrapper">
//                 { item?.cloudinaryImageId  && <img className="menu-item-img" src={ ITEM_IMG_CDN  + item?.cloudinaryImageId } alt={item?.name}/> }
//                 <button className="add-btn"> ADD +</button>
//               </div>
//             </div>
//             )}
//           </div>
//         </div>
//         <div className="cart-widget"></div>

//       </div>
//     </div>
//   )
// }

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(GET_RESTAURANT_MENU + resId);
      const res_data = await response.json();
      console.log(res_data);
      setRestaurant(res_data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={
            RES_IMG_CDN +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={restaurant?.cards[0]?.card?.card?.info?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">
            {restaurant?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="restaurant-tags">
            {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <div className="restaurant-details">
            <div className="restaurant-rating">
              <AiFillStar />
              <span>
                {restaurant?.cards[0]?.card?.card?.info?.avgRatingString}
              </span>
            </div>
            <div>|</div>
            <div>{restaurant?.cards[0]?.card?.card?.info?.sla?.slaString}</div>
            <div>|</div>
            <div>{restaurant?.cards[0]?.card?.card?.info?.costForTwo}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {
                restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[1]?.card?.card?.itemCards?.length
              }{" "}
              ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
            ).map((item) => (
              <div className="menu-item" key={item?.card?.info?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.card?.info?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.card?.info?.price / 100)
                      : " "}{" "}
                  </p>
                  <p className="item-desc">{item?.card?.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  }
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-widget"></div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
