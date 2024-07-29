import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SuccessBanner } from '../../assets/images';
import { Badge } from '../../components/Badge';
import useCart from '../../contexts/CartContext';

function formatPaymentOption(option: string) {
  switch (option) {
    case 'credit':
      return 'Cartão de Crédito';
    case 'debit':
      return 'Cartão de Débito';
    case 'money':
      return 'Dinheiro';
    default:
      return 'Não informado';
  }
}

export default function CheckoutResult() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const { getOrder } = useCart();
  const order = getOrder(params.get('order')!);

  useEffect(() => {
    if (!params.has('order') || !order) {
      navigate('/', { replace: true });
    }
  }, [navigate, params, order]);

  return (
    <section className="flex flex-col max-w-screen-xl mx-auto px-4 pt-8">
      <h1 className="title-l text-yellow-dark">Uhu! Pedido confirmado</h1>
      <p className="tl text-base-800">
        Agora é só aguardar que logo o café chegará até você
      </p>
      <div className="flex justify-between mt-10 items-center">
        <div className="bg-gradient-to-br from-yellow to-purple p-px rounded-md rounded-tr-[36px] rounded-bl-[36px] overflow-hidden">
          <ul className="bg-white w-full p-10 flex flex-col gap-8 rounded-[5px] rounded-tr-[34px] rounded-bl-[34px]">
            <li className="flex gap-3 items-start">
              <Badge icon={MapPin} color="bg-purple" />
              <p>
                Entrega em{' '}
                <strong>
                  {order?.address}, {order?.number}
                </strong>
                <br />
                {order?.neighborhood} - {order?.city}, {order?.state}
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <Badge icon={Timer} color="bg-yellow" />
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <Badge icon={CurrencyDollar} color="bg-yellow-dark" />
              <p>
                Pagamento na entrega
                <br />
                <strong>
                  {formatPaymentOption(order?.paymentMethod ?? '')}
                </strong>
              </p>
            </li>
          </ul>
        </div>
        <img src={SuccessBanner} className="h-full w-auto" />
      </div>
    </section>
  );
}
