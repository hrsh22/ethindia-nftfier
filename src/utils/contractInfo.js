
import { NFTPORT_APIKEY, COVALENT_APIKEY, ADDRESS } from "../config";

export const getContractInfo = async () => {
    console.log('data');
    // const nft = await fetch(`https://api.covalenthq.com/v1/1/address/0xd9a65dc49cbd030b193bc62088b7be6687bc2d73/transactions_v2/?key=${COVALENT_APIKEY}`);
    const nft = await fetch(`https://api.covalenthq.com/v1/1/tokens/0xd9a65dc49cbd030b193bc62088b7be6687bc2d73/nft_metadata/123/?key=${COVALENT_APIKEY}`);
    // const nft = await fetch(`https://api.covalenthq.com/v1/1/nft_market/collection/0xd9a65dc49cbd030b193bc62088b7be6687bc2d73/?&key=${COVALENT_APIKEY}`);

      const { data } = await nft.json();
      console.log(data);
      console.log(data.items[0]);
    //   setContractData(data.items[0]);
  }