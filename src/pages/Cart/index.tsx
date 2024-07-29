import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormSchema, schema } from '../../@types/form';
import useCart from '../../contexts/CartContext';
import CartSummarySection from './sections/CartSummarySection';
import PaymentMethodSection from './sections/PaymentMethodSection';
import ShippingAddressSection from './sections/ShippingAddressSection';

export default function Cart() {
  const navigate = useNavigate();

  const { cartItems, finishCheckout, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.item.price * item.amount;
  }, 0);

  const shipping = 350;

  const controller = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmit = controller.handleSubmit((data) => {
    const order = finishCheckout(data as FormSchema);

    navigate('/success?order=' + order.orderId);

    clearCart();
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-xl mx-auto px-4 pt-8 flex gap-8"
    >
      <FormProvider {...controller}>
        <div className="flex flex-col gap-3 flex-1">
          <h4 className="title-xs mb-1 text-base-800">Complete seu pedido</h4>
          <ShippingAddressSection />
          <PaymentMethodSection />
        </div>
        <div className="flex flex-col gap-3 basis-[26rem]">
          <h4 className="title-xs mb-1 text-base-800">Cafés selecionados</h4>
          <CartSummarySection total={total} shipping={shipping} />
        </div>
      </FormProvider>
    </form>
  );
}
