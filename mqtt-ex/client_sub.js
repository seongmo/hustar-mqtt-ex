const mqtt = require("mqtt"); // mqtt client

const { BROKER_HOST = "localhost" } = process.env;

const client = mqtt.connect(`mqtt://${BROKER_HOST}`); // connect to broker

client.on("connect", function() {
  console.log("connected");

  const topic = "hustar/iot/#";
  client.subscribe(topic, function(err) {
    if (err) return;

    console.log(`subscribe ${topic} start`);
  });
});

client.on("message", function(topic, message) {
  // topic /hustar/iot/{name}/{type}
  const arr = topic.split("/");
  const name = arr[2];
  const type = arr[3];

  // message is Buffer
  const msg = message.toString();
  console.log(name, ": \t", type, msg);
});
