import React, { useEffect } from 'react';
import { stocks } from './RAWMATERIAL';

export default function Asyncpromise() {
  let isShopOpen = true;
  let onOrder = () => {
    let order = async () => {
      try {
        await abc();
        console.log('try block.');
      } catch (error) {
        console.log("abc doesn't exist", error);
      } finally {
        console.log('runs code anyway.');
      }
    };
  };

  useEffect(() => {
    const otherTasks = () => {
      console.log('Doing the dishes');
      console.log('Cleaning tables');
      console.log('taking other orders.');
    };
    let toppingsChoice = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(console.log('Which topping whould you love to add?'));
        }, 3000);
      });
    };
    let kitchen = async () => {
      console.log('1');
      console.log('2');
      console.log('3');
      await toppingsChoice();
      console.log('4');
      console.log('5');
    };
    {
      kitchen();
    }
    {
      otherTasks();
    }
  });
  return (
    <div>
      <h3>Async await</h3>
    </div>
  );
}
// {onOrder()}

// import React, { Component } from 'react';
// import { stocks } from './RAWMATERIAL';

// export default class Asyncawait extends Component {
//   render() {
//     let isShopOpen = true;

//     let onOrder = () => {
//       let order = async () => {
//         try {
//           await abc();
//           console.log('try block.');
//         } catch (error) {
//           console.log("abc doesn't exist", error);
//         } finally {
//           console.log('runs code anyway.');
//         }
//       };
//     };

//     const otherTasks = () => {
//       console.log('Doing the dishes');
//       console.log('Cleaning tables');
//       console.log('taking other orders.');
//     };
//     let toppingsChoice = () => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(console.log('Which topping whould you love to add?'));
//         }, 3000);
//       });
//     };

//     let kitchen = async () => {
//       console.log('1');
//       console.log('2');
//       console.log('3');
//       await toppingsChoice();
//       console.log('4');
//       console.log('5');
//     };
//     return (
//       <div>
//         <h3>Async await</h3>
//         {kitchen()}
//         {otherTasks()}
//       </div>
//     );
//   }
// }
// {onOrder()}
