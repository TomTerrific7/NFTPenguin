const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "ChainShot Penguin",
      attributes: {
        slippery: 100
      },
      image: "https://gateway.ipfs.io/ipfs/QmP6j55fWoep9ENvQzkBDDAfUFfb7EogbaPTpzRfNpA638",
      description: "Because we love penguins!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
