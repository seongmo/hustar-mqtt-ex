const mqtt = require("mqtt");

const { BROKER_HOST = "localhost" } = process.env; // or '192.168.0.100'

const client = mqtt.connect(`mqtt://${BROKER_HOST}`); // connect to broker

const name = process.argv[2];
const message = process.argv[3];

client.on("connect", function() {
  console.log("connected");

  const topic = `hustar/iot/${name}/humidity`;
  client.publish(topic, message);

  client.end();
});
