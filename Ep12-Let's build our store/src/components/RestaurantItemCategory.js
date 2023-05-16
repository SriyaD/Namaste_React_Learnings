import { useState } from "react";
import MenuItem from "./MenuItem.js";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setIsVisible] = useState(true);
 
  const toggleView = () => {
    setIsVisible(!isVisible);
  };
  console.log("itemCards length:", itemCategory?.card?.card?.categories?.itemCards?.length);

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer" onClick={toggleView}>
          {itemCategory?.card?.card?.itemCards?.length > 0 && (
            <>
              {itemCategory?.card?.card?.title} (
              {itemCategory?.card?.card?.itemCards?.length})
            </>
          )}
          {itemCategory?.card?.card?.categories?.[0]?.itemCards?.length > 0 && (
            <>
              {itemCategory?.card?.card?.title} (
              {itemCategory?.card?.card?.categories?.[0]?.itemCards?.length})
            </>
          )}
        </h3>
        {itemCategory?.card?.card?.itemCards?.length > 0 && isVisible ? (
          <SlArrowUp onClick={toggleView} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={toggleView} className="cursor-pointer" />
        )}
        
      </div>
      {isVisible && (
        <div className="flex flex-col justify-evenly">
          {itemCategory?.card?.card?.itemCards?.length > 0 &&
            itemCategory?.card?.card?.itemCards?.map((item) => (
              <MenuItem key={item.id} item={item?.card?.info} />
            ))}

            {itemCategory?.card?.card?.categories?.[0]?.itemCards?.length > 0 &&
              itemCategory?.card?.card?.categories?.[0]?.itemCards?.map((item) => (
              <MenuItem key={item.id} item={item?.card?.info} />
            ))} 

        </div>
        
      )}
    </div>
  );
};

export default RestaurantItemCategory;
