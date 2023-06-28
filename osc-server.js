const osc = require('osc');

// Create an OSC UDP Server listening on port 8080
const udpPort = new osc.UDPPort({
  localAddress: '192.168.2.4',
  localPort: 8080
});

// Start the UDP server
udpPort.open();

// Listen for incoming OSC messages
udpPort.on('message', (oscMessage) => {
  console.log('Received OSC message:');
  console.log(oscMessage);
});

// Example function to send an OSC message
function sendOSCMessage(address, data) {
  const oscMessage = {
    address: address,
    args: [
      { type: 'f', value: data } // Assuming single float value
    ]
  };

  // Send the OSC message to a specific IP address and port
  udpPort.send(oscMessage, '192.168.2.1', 9000); // Replace with your server IP and port
}

// Example usage: Sending an OSC message
sendOSCMessage('/my/message', 42.0); // Replace with your desired address and data
