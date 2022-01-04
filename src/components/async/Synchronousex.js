import React from 'react';
import { stocks } from './RAWMATERIAL';

export default function Synchronousex() {
  const setCallbackMethod = () => {
    let order = (fruit_name, call_production) => {
      setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
      }, 2000);
      // It will start production before order is placed so we need to move it to order setTimeout
      //   call_production();
    };

    let production = () => {
      return setTimeout(() => {
        console.log('Production has started');
        <div>Hello</div>;
        setTimeout(() => {
          console.log('The food has been chopped');
          setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
            setTimeout(() => {
              console.log('The machine has been started');
              setTimeout(() => {
                console.log(`${stocks.holder[0]} was selected.`);
                setTimeout(() => {
                  console.log(`${stocks.toppings[0]} was added.`);
                  setTimeout(() => {
                    console.log('Icecream was served.');
                  }, 2000);
                }, 3000);
              }, 2000);
            }, 1000);
          }, 1000);
        }, 2000);
      });
    };
    order(0, production);
  };
  return (
    <div>
      <p>Call and check console</p>
      {setCallbackMethod()}
    </div>
  );
}

//   const setConsole = () => {
// console.log('1');
// console.log('2');
// console.log('3');
// for async example
// setTimeout(() => {
//   return console.log('3');
// }, 3000);
// callback example
// console.log('4');
// console.log('5');
//     function one(call_two) {
//       console.log('step 1 completed, please call step 2');
//       setTimeout(() => {
//         call_two();
//       }, 3000);
//     }
//     function two() {
//       console.log('step 2');
//     }

//     one(two);
//   };
//   console.log('order places, please call production');
//   console.log(stocks);
//   {setConsole()}
