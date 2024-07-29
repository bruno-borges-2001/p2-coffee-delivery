import { ShoppingCart } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { Coffee } from '../../@types';
import Counter from '../../components/Counter';
import useCart from '../../contexts/CartContext';

interface CoffeeItemProps {
  coffee: Coffee;
}

export default function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { addItemToCart } = useCart();

  const [counter, setCounter] = useState(1);

  const handleIncrement = useCallback(
    () => setCounter((prevState) => prevState + 1),
    []
  );

  const handleDecrement = useCallback(
    () => setCounter((prevState) => Math.max(1, prevState - 1)),
    []
  );

  const handleSubmit = () => {
    addItemToCart(coffee, counter);
    setCounter(1);
  };

  return (
    <article className="rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md bg-base-200 flex flex-col items-center text-center p-5 pt-0 h-full min-h-[310px]">
      <img
        src={'/images/' + coffee.image}
        alt={coffee.name}
        className="-mt-5"
      />

      <div className="flex gap-1 mt-3 mb-4">
        {coffee.tags.map((el) => (
          <Tag key={`${coffee.id}-${el}`} text={el} />
        ))}
      </div>
      <h4 className="text-base-800 title-s">{coffee.name}</h4>
      <p className="text-base-600 ts mt-2 mb-4">{coffee.description}</p>
      <footer className="mt-auto flex items-center gap-2 w-full">
        <p className="ts whitespace-nowrap">
          R${' '}
          <span className="title-m">
            {(coffee.price / 100).toFixed(2).replace('.', ',')}
          </span>
        </p>

        <Counter
          count={counter}
          onPlusClick={handleIncrement}
          onMinusClick={handleDecrement}
          className="ml-auto"
        />

        <button
          onClick={handleSubmit}
          className="p-2 bg-purple-dark hover:bg-purple text-base-100 rounded-md"
        >
          <ShoppingCart weight="fill" size={22} />
        </button>
      </footer>
    </article>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="uppercase text-yellow-dark bg-yellow-light rounded-[100px] whitespace-nowrap tag px-2 py-1">
      {text}
    </span>
  );
}
