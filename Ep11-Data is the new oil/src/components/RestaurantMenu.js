import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuShimmer } from "./Shimmer";
import { AiFillStar } from "react-icons/ai";
import { GET_RESTAURANT_MENU, RES_IMG_CDN, ITEM_IMG_CDN } from "../config";

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
    <div className="container">
      <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={
            RES_IMG_CDN +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={restaurant?.cards[0]?.card?.card?.info?.name}
        />
        <div className="flex flex-col basis-[540px] m-5">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {restaurant?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
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

      <div className="flex justify-center">
        <div className="mt-7 w-[848px]">
          <div className="p-5">
            <h3 className="font-bold text-lg">Recommended</h3>
            <p className="mt-3.5 w-3/5 text-gray-desc text-sm">
              {
                restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[1]?.card?.card?.itemCards?.length
              }{" "}
              ITEMS
            </p>
          </div>
          <div className="flex flex-col justify-evenly">
            {Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
            ).map((item) => (
              <div className="flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-gray" key={item?.card?.info?.id}>
                <div className="flex flex-col basis-[400px]">
                  <h3 className="font-bold text-lg w-3/5">{item?.card?.info?.name}</h3>
                  <p className="mt-1 text-base font-normal">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.card?.info?.price / 100)
                      : " "}{" "}
                  </p>
                  <p className="flex flex-col justify-center items-center w-[118px] h-[150px]">{item?.card?.info?.description}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                  {
                    <img
                      className="w-[118px] h-[96px]"
                      src={ITEM_IMG_CDN + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  }
                  <button className="btn btn--primary w-[118px] h-[34px] mt-2.5"> ADD +</button>
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
