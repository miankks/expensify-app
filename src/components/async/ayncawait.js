import React, { useEffect } from 'react';
import { stocks } from './RawMaterial';

export default function Asyncawait() {
  let isShopOpen = false;
  useEffect(() => {
    let time = (ms) => {
      return new Promise((resolve, reject) => {
        if (isShopOpen) {
          setTimeout(resolve, ms);
        } else {
          reject(console.log('Shop is closed.'));
        }
      });
    };
    const kitchen = async () => {
      try {
        await time(2000);
        console.log(`${stocks.fruits[3]}`);
        await time(1000);
        console.log('Starts the production.');
        await time(2000);
        console.log('Fruit chopped.');
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added.`);
        await time(1000);
        console.log('Machin has been started.');
        await time(2000);
        console.log(`${stocks.holder[1]} is selected.`);
        await time(3000);
        console.log(`${stocks.toppings[0]} is added as toppings`);
        await time(1000);
        console.log('Ice cream served.');
      } catch (error) {
        console.log('customer left', error);
      } finally {
        console.log('Day ended, Shop is closed.');
      }
    };
    kitchen();
  });
  return (
    <div>
      <h3>Async await</h3>
    </div>
  );
}
