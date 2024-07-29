import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchema } from '../../../@types/form';
import PaymentOptionButton from '../PaymentOptionButton';
import { SectionContainer, SectionTitle } from '../Section';

export default function PaymentMethodSection() {
  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormSchema>();

  const paymentMethod = watch('paymentMethod');

  useEffect(() => {
    clearErrors('paymentMethod');
  }, [paymentMethod, clearErrors]);

  return (
    <SectionContainer
      className={errors.paymentMethod && 'border border-red-500'}
    >
      <SectionTitle
        icon={CurrencyDollar}
        iconProps={{ className: 'text-purple' }}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <div className="grid grid-cols-3 gap-3 mt-8">
        <PaymentOptionButton
          label="Cartão de Crédito"
          icon={CreditCard}
          selected={paymentMethod === 'credit'}
          onClick={() => setValue('paymentMethod', 'credit')}
        />
        <PaymentOptionButton
          label="Cartão de Débito"
          icon={Bank}
          selected={paymentMethod === 'debit'}
          onClick={() => setValue('paymentMethod', 'debit')}
        />
        <PaymentOptionButton
          label="Dinheiro"
          icon={Money}
          selected={paymentMethod === 'money'}
          onClick={() => setValue('paymentMethod', 'money')}
        />
      </div>
    </SectionContainer>
  );
}
