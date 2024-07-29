import React from 'react';
import useCart from '../../../contexts/CartContext';
import { formatPrice } from '../../../utils';
import CartItem from '../CartItem';
import { SectionContainer } from '../Section';

export default function CartSummarySection({
  total,
  shipping,
}: {
  total: number;
  shipping: number;
}) {
  const { cartItems } = useCart();

  const totalWithShipping = total + shipping;

  return (
    <SectionContainer className="flex flex-col">
      {cartItems.map((props, index) => (
        <React.Fragment key={props.item.id + '-' + index}>
          <CartItem {...props} />
          <div className="my-6 h-px w-full bg-base-400" />
        </React.Fragment>
      ))}
      <div className="ts flex flex-col gap-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ {formatPrice(total)}</span>
        </div>
        <div className="flex justify-between">
          <span>Frete</span>
          <span>R$ {formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between tl font-bold text-base-800">
          <span>Total</span>
          <span>R$ {formatPrice(totalWithShipping)}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow grid place-items-center uppercase text-white hover:bg-yellow-dark p-3 rounded-md text-button-g mt-6"
        >
          Confirmar Pedido
        </button>
      </div>
    </SectionContainer>
  );
}
