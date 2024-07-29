import { CheckoutItem } from "../../@types";
import { CartReducerActions } from "./actions";

export interface CartData {
  cartItems: CheckoutItem[]
}

export default function CartReducer(state: CartData, action: { type: string, payload?: unknown }): CartData {
  switch (action.type) {
    case CartReducerActions.ADD_ITEM: {
      const item = action.payload as CheckoutItem;

      const itemIndex = state.cartItems.findIndex((i) => i.item.id === item.item.id);
      if (itemIndex === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

      const newCartItems = [...state.cartItems];
      newCartItems[itemIndex] = {
        item: item.item,
        amount: newCartItems[itemIndex].amount + item.amount,
      };

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case CartReducerActions.UPDATE_ITEM_AMOUNT: {
      const { itemId, amount } = action.payload as { itemId: number, amount: number };
      const itemIndex = state.cartItems.findIndex((i) => i.item.id === itemId);

      if (itemIndex === -1) {
        return state;
      }

      const newCartItems = [...state.cartItems];
      newCartItems[itemIndex] = {
        ...newCartItems[itemIndex],
        amount: newCartItems[itemIndex].amount + amount,
      };

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case CartReducerActions.REMOVE_ITEM: {
      const { itemId } = action.payload as { itemId: number };
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.item.id !== itemId),
      };
    }
    case CartReducerActions.CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
  }
  return state;
} 