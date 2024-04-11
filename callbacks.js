let BakeCake = (flavour, callback) => {
  setTimeout(() => {
    console.log("preheating the oven");
    setTimeout(() => {
      console.log("oven preheated");
    }, 3000);
    setTimeout(() => {
      console.log("mix the ingredients for the cake batter");

      setTimeout(() => {
        console.log("put the batter into the cake tin.");

        setTimeout(() => {
          console.log("Start baking the cake");

          setTimeout(() => {
            console.log("prepare the frosting.");

            setTimeout(() => {
              callback(flavour);           //

            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};
let Readycake = (flavour) => {
  console.log(`Your ${flavour} cake is ready`);
};
BakeCake("chocolate", Readycake);
