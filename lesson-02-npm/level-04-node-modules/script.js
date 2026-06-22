import { cpus, totalmem, freemem, machine, platform } from "node:os";
import { resolve, parse } from "node:path";

// --- Tasks 2 & 3: Operating System (OS) Information ---
const cpuList = cpus();
const totalMemory = totalmem();
const freeMemory = freemem();
const arch = machine();
const osPlatform = platform();

console.log("Operating System Info");
console.log("Architecture:", arch);
console.log("Platform:", osPlatform);
console.log("Total Memory (Bytes):", totalMemory);
console.log("Free Memory (Bytes):", freeMemory);
console.log("CPU Cores Count:", cpuList.length);
console.log("Primary CPU Model:", cpuList[0].model);

// --- Tasks 6 & 7: Path Management Utilities ---
const fullPath = resolve("./script.js");
const pathParts = parse(fullPath);

console.log("Path Module Utilities");
console.log("Absolute File Path:", fullPath);
console.log("Parsed Path Object", pathParts);
// const absoluteScriptPath = resolve("./script.js");
// const scriptPathDetails = parse(absoluteScriptPath);

// // 7. Use console.log to display the value of each variable
// console.log("=== Path Module Utilities ===");
// console.log("Absolute File Path:", absoluteScriptPath);
// console.log("Parsed Path Object Details:", scriptPathDetails);
