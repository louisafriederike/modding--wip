const osc = require('osc');

// Set up the OSC client
const udpPort = new osc.UDPPort({
  localAddress: '192.168.2.4', // Replace with your local IP address
  localPort: 8070, // Replace with your local port
  remoteAddress: '192.168.2.1', // Replace with your server's IP address
  remotePort: 8090 // Replace with your server's port
});

// Open the OSC port
udpPort.open();

// Define the OSC message
const address = '/my/message'; // OSC address
const data = 42; // Data associated with the message

// Send the OSC message
udpPort.send({ address: address, args: [{ type: 'i', value: data }] });


