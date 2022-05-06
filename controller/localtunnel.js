const localtunnel = require('localtunnel');

const LocalTunnel = async () => {
  const tunnel = await localtunnel({ port: 8080 });
 if(tunnel){
         // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url)

  tunnel.on('close', () => {
    // tunnels are closed
    console.log('tunnels are closed')
  }); 
 }
 
};
module.exports = LocalTunnel