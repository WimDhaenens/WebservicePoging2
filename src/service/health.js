const packackeJSON = require('../../package.json');
const ping = () => ({pong:true});

//naam, versie, connectie met db runt...
const getVersion = () => ({
  version: packackeJSON.version,
  name: packackeJSON.name,
  env: process.env.NODE_ENV,});

module.exports = {  
  ping,   
  getVersion,
};