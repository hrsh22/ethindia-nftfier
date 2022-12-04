import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";

import { NFTPORT_APIKEY, COVALENT_APIKEY, ADDRESS } from "../config";
var contractaddress = "0xB78721b29c028B16ab25f4a2adE1d25fbf8B2d74";
var contractData = "";
var contractName = "";
var contract_address = "";
var contracturl = "";
var responsedata = [];

function ContractDetail() {
  // const { contractaddress } = useParams();
  // const [contractData, setContractData] = useState({});
  const [nfts, setNFTs] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "758829cf-b950-451e-8ad6-6f39d28e75eb",
    },
  };

  fetch(
    "https://api.nftport.xyz/v0/nfts?chain=goerli&page_size=50&include=metadata",
    options
  )
    .then((response) => response.json())
    .then((response) => responsedata.push(response))
    .catch((err) => console.error(err));
  console.log(responsedata);

  useEffect(() => {
    if (contractaddress) {
      getContractInfo();
      getContractNFTs();
    }
  }, [contractaddress]);

  const columns = [
    {
      title: "Token ID",
      dataIndex: "token_id",
      render: (text) => <p className="table-p">{text}</p>,
    },
    {
      title: "File URL",
      dataIndex: "file_url",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="table-url">{url}</p>
        </a>
      ),
    },
    {
      title: "Metadata URL",
      dataIndex: "metadata_url",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="table-url">{url}</p>
        </a>
      ),
    },
    {
      title: "Address",
      dataIndex: "address_url",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="table-url">{url}</p>
        </a>
      ),
    },
  ];

  const getContractInfo = async () => {
    console.log(contractaddress);
    console.log(COVALENT_APIKEY);
    const nft = await fetch(
      `https://api.covalenthq.com/v1/5/tokens/0xd9a65dc49cbd030b193bc62088b7be6687bc2d73/nft_metadata/123/?key=ckey_ee6334c9b9054b04a438fb89d51`
    );
    const { data } = await nft.json();
    // console.log(data.items[0]);
    contractData = data.items[0];
    console.log(contractData);
    contractName = contractData.contract_name;
    contract_address = contractData.contract_address;
  };

  const getContractNFTs = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: NFTPORT_APIKEY,
      },
    };

    const res = await fetch(
      `https://api.nftport.xyz/v0/nfts/${contractaddress}?` +
        new URLSearchParams({
          chain: "polygon",
          page_size: 50,
          include: "all",
        }),
      options
    );
    let nftData = await res.json();
    nftData.nfts.forEach((nft, index) => {
      nft.key = index + 1;
    });
    console.log(nftData);
    setNFTs(nftData.nfts);
  };

  return (
    <div class="p-20">
      <Table columns={columns} dataSource={nfts} size="middle" expandable />
    </div>
  );
}

export default ContractDetail;
