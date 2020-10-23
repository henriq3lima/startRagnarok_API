const express = require("express"),
  router = express.Router();

router.get("/", (_, res) => {
  console.log("mongodb/send");
  const { MongoClient } = require("mongodb");
  console.log("functionSendMong");

  const mongodbURL = s3;
  const client = new MongoClient(mongodbURL);
  const dbName = "2020UM";

  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      const col = db.collection("questionStack");
      const query = {};

      const dados_mongo = col.find(query);
      //const dados_mongo2 = JSON.parse(dados_mongo);
      //await console.log(dados_mongo);
      //dados_mongo.forEach(dado => console.log(dado));

      const lista = [];
      await dados_mongo.forEach(dado => lista.push(dado));
      console.log(lista.length);
      res.status(200).send(lista);


    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }

  run().catch(console.dir);

});

global.viewMongo = function viewMongo() {

};

module.exports = router;
