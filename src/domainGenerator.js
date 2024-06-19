
let pronouns = ["michael","cristiano","rafael"];
let adjs = ["jordan", "ronaldo", "nadal"];
let extensions = [".com", ".net", ".es"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjs.length; j++) {
    for (let k = 0; k < extensions.length; k++) {
        console.log(`${pronouns[i]}${adjs[j]}${extensions[k]}`);
    }
  }
}
