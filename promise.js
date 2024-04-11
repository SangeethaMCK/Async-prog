const flavourInStock = ["chocolate", "butterscotch", "blackforest", "vanilla"];

function preheatOven(flavour) {
    return new Promise((resolve, reject) => {
        if (!flavourInStock.includes(flavour)) {
            reject("Flavour not in stock");
        } else {
            setTimeout(() => {
                console.log("preheating the oven");
                resolve();
                setTimeout(() => {
                    console.log("oven preheated");
                }, 3000);
            }, 1000);
        }
    });
}

function mixIngredients() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("mix the ingredients for the cake batter");
            resolve();
        }, 1000);
    });
}

function putBatterIntoTin() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("put the batter into the cake tin.");
            resolve();
        }, 1000);
    });
}

function bakeCake() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Start baking the cake");
            resolve();
        }, 2000);
    });
}

function prepareFrosting() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("prepare the frosting.");
            resolve();
        }, 1000);
    });
}

function cakeShop(flavour) {
    preheatOven(flavour)
        .then(() => mixIngredients())
        .then(() => putBatterIntoTin())
        .then(() => bakeCake())
        .then(() => prepareFrosting())
        .then(() => {
            console.log(`Your ${flavour} cake is ready`);
        })
        .catch(error => {
            console.error("Error occurred:", error);
            reject(error);
        })
        .finally(() => {
            console.log("shop closed")
        });
}
cakeShop("chocolate");
