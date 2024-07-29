import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { BannerBackground, BannerImg } from '../../assets/images';
import { Badge } from '../../components/Badge';

export default function Banner() {
  return (
    <section className="relative">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center gap-14 py-24 ">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="title-xl text-base-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <h3 className="tl text-base-800">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </div>
          <ul className="grid grid-cols-2 gap-10 gap-y-5 [&_p]:tm">
            <li className="flex gap-3 items-center">
              <Badge icon={ShoppingCart} color="bg-yellow-dark" />
              <p>Compra simples e segura</p>
            </li>
            <li className="flex gap-3 items-center">
              <Badge icon={Package} color="bg-base-700" />
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li className="flex gap-3 items-center">
              <Badge icon={Timer} color="bg-yellow" />
              <p>Entrega rápida e rastreada</p>
            </li>
            <li className="flex gap-3 items-center">
              <Badge icon={Coffee} color="bg-purple" />
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </div>
        <img src={BannerImg} alt="banner" className="h-[360px] w-auto" />
      </div>
      <img
        src={BannerBackground}
        className="absolute inset-0 h-full w-screen object-cover -z-10"
      />
    </section>
  );
}
