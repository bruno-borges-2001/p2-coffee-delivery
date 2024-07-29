import { MapPinLine } from 'phosphor-react';
import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchema } from '../../../@types/form';
import Input from '../../../components/Input';
import { SectionContainer, SectionTitle } from '../Section';

export default function ShippingAddressSection() {
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormSchema>();

  const [fetching, setFetching] = useState(false);
  const [fetchedCEP, setFetchedCEP] = useState(false);

  const cep = watch('cep');

  const validCEP = cep?.length > 0 && !('cep' in errors);

  const handleCEPRequest = useCallback(async () => {
    try {
      if (!validCEP || fetchedCEP) return;
      setFetching(true);

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        console.error('CEP não encontrado');
        return;
      }

      const { logradouro, bairro, localidade, uf } = data;

      setValue('address', logradouro);
      setValue('neighborhood', bairro);
      setValue('city', localidade);
      setValue('state', uf);

      clearErrors('address');
      clearErrors('neighborhood');
      clearErrors('city');
      clearErrors('state');

      setFetchedCEP(true);
    } finally {
      setFetching(false);
    }
  }, [cep, fetchedCEP, setValue, validCEP]);

  useEffect(() => {
    const timeout = setTimeout(handleCEPRequest, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [handleCEPRequest]);

  return (
    <SectionContainer className="flex flex-col gap-8">
      <SectionTitle
        icon={MapPinLine}
        iconProps={{ className: 'text-yellow-dark' }}
        title="Endereço de Entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />
      <div className="grid grid-cols-6 gap-3 w-full">
        <Input
          {...register('cep', { onChange: () => setFetchedCEP(false) })}
          containerClassName="row-start-1 col-span-2"
          placeholder="CEP"
          disabled={fetching}
          error={errors.cep?.message}
        />
        <Input
          {...register('address')}
          containerClassName="row-start-2 col-span-full"
          placeholder="Rua"
          disabled={fetching}
          error={errors.address?.message}
        />
        <Input
          {...register('number')}
          placeholder="Número"
          containerClassName="row-start-3 col-span-2"
          error={errors.number?.message}
        />
        <Input
          containerClassName="row-start-3 col-span-4"
          placeholder="Complemento"
          error={errors.complement?.message}
        />
        <Input
          {...register('neighborhood')}
          containerClassName="row-start-4 col-span-2"
          placeholder="Bairro"
          disabled={fetching}
          error={errors.neighborhood?.message}
        />
        <Input
          {...register('city')}
          containerClassName="row-start-4 col-span-3"
          placeholder="Cidade"
          disabled={fetching}
          error={errors.city?.message}
        />
        <Input
          {...register('state')}
          placeholder="UF"
          containerClassName="row-start-4"
          disabled={fetching}
          error={errors.state?.message}
        />
      </div>
    </SectionContainer>
  );
}
