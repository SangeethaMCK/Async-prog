const flavourInStock = ["chocolate", "butterscotch", "blackforest", "vanilla"];

function preheatOven() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("oven preheated");
      resolve();
    }, 3000);
  });
}

function mixIngredients(flavour) {
    if (!flavourInStock.includes(flavour)) {
       return Promise.reject("Flavour not in stock");
    }
    else{
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("mix the ingredients for the cake batter");
      resolve();
    }, 1000);
  });
}}

function putBatterIntoTin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("put the batter into the cake tin.");
      resolve();
    }, 1000);
  });
}

async function bakeCake() {
  await preheatOven();
  console.log("Start baking the cake");
}

function prepareFrosting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("prepare the frosting.");
      resolve();
    }, 2000);
  });
}

function cakeShop(flavour) {
  mixIngredients(flavour)
    .then(() => putBatterIntoTin())
    .then(() => bakeCake())
    .then(async () => {
      await prepareFrosting();
      console.log(`Your ${flavour} cake is ready`);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    })
    .finally(() => {
      console.log("shop closed");
    });
}

cakeShop("chocolate");
