import getData from "./index.js";

const user = await getData(1);
console.log("User: ", user);
