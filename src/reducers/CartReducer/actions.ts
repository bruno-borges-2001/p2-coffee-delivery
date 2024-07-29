import { Coffee } from "../../@types"

export enum CartReducerActions {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM_AMOUNT = 'UPDATE_ITEM_AMOUNT',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

export function AddItemAction(item: Coffee, amount: number) {
  return {
    type: CartReducerActions.ADD_ITEM,
    payload: {
      item,
      amount
    }
  }
}

export function UpdateItemAmountAction(itemId: number, amount: number) {
  return {
    type: CartReducerActions.UPDATE_ITEM_AMOUNT,
    payload: {
      itemId,
      amount
    }
  }
}

export function RemoveItemAction(itemId: number) {
  return {
    type: CartReducerActions.REMOVE_ITEM,
    payload: {
      itemId
    }
  }
}

export function ClearCartAction() {
  return { type: CartReducerActions.CLEAR_CART }
}