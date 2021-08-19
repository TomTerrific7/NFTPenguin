const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "The Purple Wizard",
      attributes: {
        slippery: 100
      },
      image: "https://gateway.ipfs.io/ipfs/QmZ9vsdGYwoKynQtRcyDF3ALx2kVxRH9QtxbLxkWEDeBiP",
      description: "Master of all Wizards"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
