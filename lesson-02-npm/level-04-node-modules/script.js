import { cpus, totalmem, freemem, machine, platform } from "node:os";

const cpuInfo = cpus();
const totalmemInfo = totalmem();
const freememInfo = freemem();
const machineInfo = machine();
const platformInfo = platform();

console.log("CPU:", cpuInfo);
console.log("Total Memory:", totalmemInfo);
console.log("Free Memory:", freememInfo);
console.log("Machine:", machineInfo);
console.log("Platform:", platformInfo);

// const cpuInfo = cpus();
// const totalmemInfo = totalmem();
// const freememInfo = freemem();
// const machineInfo = machine();
// const platformInfo = platform();

// console.log("CPU:", (cpuInfo);
// console.log(totalmemInfo);
// console.log(freememInfo);
// console.log(machineInfo);
// console.log(platformInfo);
