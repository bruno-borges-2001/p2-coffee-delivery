import { Trash } from 'phosphor-react';
import { Coffee } from '../../@types';
import Counter from '../../components/Counter';
import useCart from '../../contexts/CartContext';
import { formatPrice } from '../../utils';

interface CartItemProps {
  item: Coffee;
  amount: number;
}

export default function CartItem({ item, amount }: CartItemProps) {
  const { updateItemAmount, removeItemFromCart } = useCart();

  const handleIncrease = () => {
    updateItemAmount(item.id, 1);
  };

  const handleDecrease = () => {
    updateItemAmount(item.id, -1);
  };

  const handleDelete = () => {
    const result = confirm('Tem certeza que deseja remover este item?');

    if (result) {
      removeItemFromCart(item.id);
    }
  };

  return (
    <article className="flex py-2 px-1 gap-10">
      <div className="flex gap-2">
        <img className="h-16 w-16" src={'/images/' + item.image} />
        <div className="flex flex-col gap-2">
          <p className="whitespace-nowrap">{item.name}</p>
          <div className="flex gap-2">
            <Counter
              count={amount}
              onPlusClick={handleIncrease}
              onMinusClick={handleDecrease}
            />
            <button
              type="button"
              onClick={handleDelete}
              className="flex gap-1 px-2 py-1.5 items-center text-button-m rounded-md bg-base-400 hover:bg-base-500"
            >
              <Trash size={16} className="text-purple" />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <div className="ml-auto whitespace-nowrap">
        <p className="tm font-bold">R$ {formatPrice(item.price)}</p>
      </div>
    </article>
  );
}
