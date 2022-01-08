import React from 'react';
import { stocks } from './RawMaterial';

export default function Promises() {
  let isShopOpen = true;

  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(console.log('our shop is closed'));
      }
    });
  };
  const onOrder = () => {
    order(2000, () => console.log(`${stocks.fruits[0]} was selected.`))
      .then(() => {
        return order(10, () => console.log('Production has started.'));
      })
      .then(() => {
        return order(2000, () => console.log('the fruit was chopped.'));
      })
      .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`));
      })
      .then(() => {
        return order(1000, () => console.log('The machine was started.'));
      })
      .then(() => {
        return order(2000, () => console.log(`icecream placed on ${stocks.holder[0]}.`));
      })
      .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} was selected.`));
      })
      .then(() => {
        return order(1000, () => console.log('Icecream was served.'));
      })
      .catch(() => console.log('Customer left.'))
      .finally(() => console.log('Day ended, shop is closed.'));
  };
  return (
    <div>
      <h3>Promisses</h3>
      {onOrder()}
    </div>
  );
}
