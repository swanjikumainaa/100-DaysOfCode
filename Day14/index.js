const promise = new Promise((resolve, reject) => {
  const completed = true; 

  if (completed) {
    resolve('You completed todays task!');
  } else {
    reject('Task not completed!');
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
