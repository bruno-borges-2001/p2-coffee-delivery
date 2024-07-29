import coffeeList from '../assets/coffee-list.json';

export type Coffee = typeof coffeeList[0];

export type CheckoutItem = {
  item: Coffee
  amount: number
}

