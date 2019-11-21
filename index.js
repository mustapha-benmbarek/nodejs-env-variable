/* @title: <<nodejs-env-variable>> program written in Node.js.
 * @desc: A simple program starter using environment variables.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const dotenv = require('dotenv');
const os = require('os');

dotenv.config();

console.log(`\n----------------------------------------------`);
console.log(`OS Platform :  ${os.platform()}`);
console.log(`CPU Architect. :  ${os.arch()}`);
console.log(`Free memory :  ${os.freemem()}`);
console.log(`Total memory :  ${os.totalmem()}`);
console.log(`Home directory :  ${os.homedir()}`);


console.log(`\n----------------------------------------------`);
console.log(`Env Variable #1 : ${process.env.APP_TITLE}`);
console.log(`Env Variable #1 : ${process.env.APP_DESC}`);
console.log(`Env Variable #1 : ${process.env.APP_AUTHOR}`);
console.log(`Env Variable #1 : ${process.env.APP_COPYRIGHT}`);
console.log(`Env Variable #1 : ${process.env.APP_VERSION}`);