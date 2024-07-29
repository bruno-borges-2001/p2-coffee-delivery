import Banner from './Banner';

import coffeeList from '../../assets/coffee-list.json';
import CoffeeItem from './CoffeeItem';

export default function Home() {
  return (
    <>
      <Banner />
      <section className="max-w-screen-xl mx-auto px-4 pt-8">
        <h2 className="text-base-800 title-l mb-14">Nossos cafés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10 place-items-center">
          {coffeeList.map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </>
  );
}
