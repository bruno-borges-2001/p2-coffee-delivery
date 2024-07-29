import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import useCart from '../contexts/CartContext';

function CheckoutButton() {
  const { cartItems } = useCart();

  const badgeNumber = cartItems.length > 9 ? '9+' : cartItems.length;

  return (
    <NavLink
      to="/cart"
      className="p-2 bg-yellow-light text-yellow-dark rounded-md relative"
    >
      <ShoppingCart size={22} weight="fill" />
      {!!badgeNumber && (
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ts font-bold text-white bg-yellow-dark h-5 w-5 rounded-full grid place-items-center">
          {cartItems.length}
        </div>
      )}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="py-8 flex justify-between max-w-screen-xl mx-auto px-4 sticky top-0 z-50 backdrop-blur-sm">
      <NavLink to="/">
        <img src="/logo.svg" alt="logo" />
      </NavLink>
      <nav className="flex gap-3 items-center">
        <div className="flex items-center gap-1 text-purple bg-purple-light p-2 rounded-md">
          <MapPin size={22} weight="fill" />
          <p className="text-purple-dark ts">Porto Alegre, RS</p>
        </div>
        <CheckoutButton />
      </nav>
    </header>
  );
}
