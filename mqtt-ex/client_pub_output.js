const mqtt = require("mqtt");
const { BROKER_HOST = "localhost" } = process.env;

const client = mqtt.connect(`mqtt://${BROKER_HOST}`);

let on = true;

client.on("connect", function() {
  console.log("connected");

  setInterval(() => {
    client.publish("hustar/iot/esp32/output", on ? "on" : "off");
    console.log("send", on ? "on" : "off");
    i = !i;
  }, 2000);
});
