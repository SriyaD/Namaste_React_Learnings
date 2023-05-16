import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenuList from "../components/RestaurantMenuList";

const RestaurantDetails = () => {
  const { resId } = useParams(); /* Read dynamic URL params */

  const restaurant =
    useRestaurant(
      resId
    ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="container">
      <RestaurantInfo {...restaurant?.cards[0]?.card?.card?.info} />
      <RestaurantMenuList menu={restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
      {/* {console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)} */}
    </div>
  );
};

export default RestaurantDetails;
