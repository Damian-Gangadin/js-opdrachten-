console.log("het werkt");

import os from 'node:os';

const gpuArchitectuur = os.arch();
const freeMemoryinBytes = os.freemem();
const freeMemoryinGB = os.freemem()/1000000000;
const MachineOs = os.machine();
console.log('free memory in bytes:', freeMemoryinBytes);
console.log('fee memory in GB:', freeMemoryinGB);
console.log('gpu architecture');
console.log('machine is:' , MachineOs);