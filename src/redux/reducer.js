import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition ", action);
      return [action.data, ...data];
      case REMOVE_FROM_CART:
        console.log("REMOVE_FROM_CART condition ", action);
        // data.length= data.length? data.length-1:[];
        console.log(data,"data")
        const remainingItems= data.filter((item)=>item._id!==action.data)
        console.log("remainingItems", remainingItems)
        return [...remainingItems]
    case EMPTY_CART:
      console.log("EMPTY CART condition ", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
