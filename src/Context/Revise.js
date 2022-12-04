const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNiMzEwMDM0LTFiYzYtNGQwYi1hZDlkLWM2ZWE4ZWZmYzE0NyIsImtleSI6ImgyNGx5bDhtIiwiaWF0IjoxNjY5NTUyMjc2fQ.2zvdMd5ZD2Almtkx739yNFXSw5U___W30uXJGIhFUkI"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

async function FetchNFTS(){
const nfts = await revise.fetchNFTs('9f0a8a1e-c20a-45ce-b73b-7c6658e99066');
console.log(nfts.length);
return nfts.length
}
// export async function addNFTtoCollection(name,description){
//   const nft = await revise.addNFT(
//     {
//       image:"Hard-Code",
//       name: {name},
//       tokenId: FetchNFTS(),
//       description: {description},
//     },
//     [],
//     '90a9fe07-9ea1-4773-ba12-f55c0b3067fc'
//     );
//   console.log(nft);
// }

async function addNFTtoCollection(name,description){
  const nfts = await revise.fetchNFTs('90a9fe07-9ea1-4773-ba12-f55c0b3067fc');
console.log(nfts.length);

//   const nft = await revise.addNFT(
//     {
//       image:"Hard-Code",
//       name: "TestRUN TOKEN 13",
//       tokenId: `${nfts.length+1}`,
//       description: "FIRST TEST RUN",
//     },
//     [],
//     '90a9fe07-9ea1-4773-ba12-f55c0b3067fc'
//     );
//   console.log(nft);
}

addNFTtoCollection();


// async function AddProperty() {
//     const nft = await revise.fetchNFT('787369c2-04bd-44e8-b790-7151923e4153');
//     const result = await revise.nft(nft)
//     // .deleteProperty('atatck')
//                       .setProperty({input1}, {input2})
//                     //   .setImage('https://user-images.githubusercontent.com/90423812/204011744-6bc51ecd-1570-4e76-a282-8100ea04b871.jpg')
//                       .save();
//   console.log(nft)
// }

// async function deleteProperty(){
//     const nft = await revise.fetchNFT('787369c2-04bd-44e8-b790-7151923e4153');
//     const result = await revise.nft(nft)
//     // .deleteProperty('atatck')
//                       .deleteProperty({input1})
//                     //   .setImage('https://user-images.githubusercontent.com/90423812/204011744-6bc51ecd-1570-4e76-a282-8100ea04b871.jpg')
//                       .save();
//   console.log(nft)
// }

// async function setImage(){
//     const nft = await revise.fetchNFT('787369c2-04bd-44e8-b790-7151923e4153');
//     const result = await revise.nft(nft)
//     // .deleteProperty('atatck')
//                     //   .setProperty({input1}, {input2})
//                       .setImage({image})
//                       .save();
// }



// FetchNFTS();
    // 90a9fe07-9ea1-4773-ba12-f55c0b3067fc - testnfts22.revise.link