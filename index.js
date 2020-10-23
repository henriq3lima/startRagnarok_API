const express = require("express");

const viewRouter = require("./mongodb/view.js");

const app = express();

app.use("/view", viewRouter);


app.listen(process.env.PORT || 8010, function () {
  console.log("A API está funcionando!");

});

app.get("/", (_, res) => {
  res.status(200).send("APP");
});


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// cron.schedule('0 3 * * *', () => {
//   async function repetir() {
//     var tagEn = ``;
//     for (let i = 1; i <= 100; i++) {
//       tagEn = `https://stackoverflow.com/tags?page=${i}&tab=popular`
//       await sleep(10000).then(scrapStack(tagEn));
//       console.log(tagEn);
//     }
//   }
//   repetir()

// }, {
//   scheduled: true,
//   timezone: "America/Sao_Paulo"
// });

// cron.schedule('0 15 * * *', () => {
//   async function repetir() {
//     var tagEn = ``;
//     for (let i = 1; i <= 100; i++) {
//       tagEn = `https://stackoverflow.com/tags?page=${i}&tab=popular`
//       await sleep(10000).then(scrapStack(tagEn));
//       console.log(tagEn);
//     }
//   }
//   repetir()

// }, {
//   scheduled: true,
//   timezone: "America/Sao_Paulo"
// });