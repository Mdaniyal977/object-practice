//simple example of object how to initialized and assing and passing values
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};
//you can cheak the value is exist in the objector not,
var cheak = "name" in plan1;
//you can delete the property
delete plan1.price;
//you can assigne the property
plan1.super = "34"
console.log(cheak);
console.log(plan1);


//here we have a book example how to use object in a function

//create object and assigne
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7]
};
 function calcAnnual() {
     var bestPrice = plan1.price;
     var currDate = new Date();
     var thisMo = currDate.getMonth();
     for (var i = 0; i < plan1.discountMonths.length; i++) {
     if (plan1.discountMonths[i] === thisMo) {
     bestPrice = plan1.price * .8;
     break;
     }
     }
     return bestPrice * 12;
     }
// can we use function inside the code
 var plan1 = {
     name: "Basic",
     price: 3.99,
     space: 100,
     transfer: 1000,
     pages: 10,
     discountMonths: [6, 7],
     calcAnnual: function(percentIfDisc) {
     var bestPrice = plan1.price;
     var currDate = new Date();
     var thisMo = currDate.getMonth();
     for (var i = 0; i < plan1.discountMonths.length; i++) {
     if (plan1.discountMonths[i] === thisMo) {
     bestPrice = plan1.price * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
     }
     };

     var asiaCupTeam = {
         Pakistan: { 
             palyerName:["babar azam","fakar","hasan ali","iftekhar","afridi","asad","ali","norr","asda"],
             bowler:["babar azam","fakar","hasan ali"],
             batsman:["babar azam","fakar","hasan ali"],
             keeper:["babar azam","fakar"],
             allRounder:["babar azam","fakar","hasan ali"],
         },
         India:{
            palyerName:["babar azam","fakar","hasan ali","iftekhar","afridi","asad","ali","norr","asda"],
            bowler:["babar azam","fakar","hasan ali"],
            batsman:["babar azam","fakar","hasan ali"],
            keeper:["babar azam","fakar"],
            allRounder:["babar azam","fakar","hasan ali"],
         },
         Afghanistan:{
            palyerName:["babar azam","fakar","hasan ali","iftekhar","afridi","asad","ali","norr","asda"],
            bowler:["babar azam","fakar","hasan ali"],
            batsman:["babar azam","fakar","hasan ali"],
            keeper:["babar azam","fakar"],
            allRounder:["babar azam","fakar","hasan ali"],
         } ,
         Srilanka: {
            palyerName:["babar azam","fakar","hasan ali","iftekhar","afridi","asad","ali","norr","asda"],
            bowler:["babar azam","fakar","hasan ali"],
            batsman:["babar azam","fakar","hasan ali"],
            keeper:["babar azam","fakar"],
            allRounder:["babar azam","fakar","hasan ali"],
         },
        Bangladesh: { palyerName:["babar azam","fakar","hasan ali","iftekhar","afridi","asad","ali","norr","asda"],
        bowler:["babar azam","fakar","hasan ali"],
        batsman:["babar azam","fakar","hasan ali"],
        keeper:["babar azam","fakar"],
        allRounder:["babar azam","fakar","hasan ali"],},

     }
        console.log(asiaCupTeam)