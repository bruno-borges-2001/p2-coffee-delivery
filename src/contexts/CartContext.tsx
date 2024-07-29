import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { CheckoutItem, Coffee } from '../@types';
import { FormSchema } from '../@types/form';
import {
  AddItemAction,
  ClearCartAction,
  RemoveItemAction,
  UpdateItemAmountAction,
} from '../reducers/CartReducer/actions';
import CartReducer, { CartData } from '../reducers/CartReducer/reducer';

interface CheckoutHistory extends FormSchema {
  orderId: string;
  items: CheckoutItem[];
}

interface ICartContext {
  cartItems: CheckoutItem[];
  addItemToCart: (item: Coffee, amount: number) => void;
  removeItemFromCart: (itemId: number) => void;
  updateItemAmount: (itemId: number, amount: number) => void;
  clearCart: () => void;
  finishCheckout: (data: FormSchema) => CheckoutHistory;
  getOrder: (id: string) => CheckoutHistory | undefined;
}

const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: React.PropsWithChildren) {
  const [cartData, dispatch] = useReducer(
    CartReducer,
    {
      cartItems: [],
    } as CartData,
    (initialState) => {
      const savedData = sessionStorage.getItem(
        '@coffee-delivery/cart-data:1.0.0'
      );

      if (savedData) {
        return JSON.parse(savedData);
      }

      return initialState;
    }
  );

  const [history, setHistory] = useState<CheckoutHistory[]>(() => {
    const savedHistory = sessionStorage.getItem(
      '@coffee-delivery/cart-history:1.0.0'
    );

    if (savedHistory) {
      return JSON.parse(savedHistory);
    }

    return [];
  });

  useEffect(() => {
    sessionStorage.setItem(
      '@coffee-delivery/cart-history:1.0.0',
      JSON.stringify(history)
    );
  }, [history]);

  const { cartItems } = cartData;

  useEffect(() => {
    sessionStorage.setItem(
      '@coffee-delivery/cart-data:1.0.0',
      JSON.stringify(cartData)
    );
  }, [cartData]);

  const addItemToCart = useCallback((item: Coffee, amount: number) => {
    dispatch(AddItemAction(item, amount));
  }, []);

  const removeItemFromCart = useCallback((itemId: number) => {
    dispatch(RemoveItemAction(itemId));
  }, []);

  const updateItemAmount = useCallback((itemId: number, amount: number) => {
    dispatch(UpdateItemAmountAction(itemId, amount));
  }, []);

  const clearCart = useCallback(() => {
    dispatch(ClearCartAction());
  }, []);

  const finishCheckout = useCallback(
    (data: FormSchema) => {
      const id = Math.random().toString(36).substring(2, 9);
      const order: CheckoutHistory = {
        orderId: id,
        ...data,
        items: cartItems,
      };

      setHistory((prev) => [...prev, order]);

      return order;
    },
    [cartItems]
  );

  const getOrder = useCallback(
    (id: string) => {
      return history.find((el) => el.orderId === id);
    },
    [history]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemAmount,
        finishCheckout,
        clearCart,
        getOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default function useCart() {
  return useContext(CartContext);
}
