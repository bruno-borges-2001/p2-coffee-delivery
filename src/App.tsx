import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
