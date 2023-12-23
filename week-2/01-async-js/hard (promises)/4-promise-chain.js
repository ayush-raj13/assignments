/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(t1) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, t1 * 1000);
  })
}

function waitTwoSecond(t2) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, t2 * 1000);
  })
}

function waitThreeSecond(t3) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, t3 * 1000);
  })
}

function calculateTime(t1, t2, t3) {
  const initial = new Date().getTime();

  return waitOneSecond(t1)
    .then(() => waitTwoSecond(t2))
    .then(() => waitThreeSecond(t3))
    .then(() => new Date().getTime() - initial);
}

module.exports = calculateTime;
