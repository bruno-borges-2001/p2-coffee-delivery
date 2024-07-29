import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Cart from './pages/Cart';
import CheckoutResult from './pages/CheckoutResult';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<CheckoutResult />} />
      </Route>
    </Routes>
  );
}
