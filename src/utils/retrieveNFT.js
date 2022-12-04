import { NFTPORT_APIKEY } from "../config";

export const retrieveNFT = async () => {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: NFTPORT_APIKEY
    //     }
    //   };
      
    //   fetch('https://api.nftport.xyz/v0/mints/0x9620a79f6506dcad70fb60810c40e2d527a6ce40e6528b087fcebb513267e390?chain=goerli', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: '758829cf-b950-451e-8ad6-6f39d28e75eb'
        }
      };
      
      fetch('https://api.nftport.xyz/v0/mints/0xf0588c71f424589b4103570538a67d7066255ce18e8bb12e2493e446cdd52716?chain=goerli', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}