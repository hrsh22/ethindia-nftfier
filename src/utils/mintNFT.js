// import axios from "axios";
import { NFTPORT_APIKEY, ADDRESS } from "../config";

export const MintNFT = async (Name, desc, img) => {
    const options = {
        method: 'POST',
        url: "https://api.nftport.xyz/v0/mints/easy/urls",
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: NFTPORT_APIKEY
        },
        body: JSON.stringify({
          name: 'Test NFT3',
          description: 'desc of nft3',
          file_url: 'https://ipfs.io/ipfs/bafkreift2liwd3arnd6s7xar44kyi4a53kutdqq7qteiyh3as73jfhw6hu',
          mint_to_address: ADDRESS,
          chain: 'goerli'
        })
      };

      fetch('https://api.nftport.xyz/v0/mints/easy/urls', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  
//   return axios.request(options);
};


