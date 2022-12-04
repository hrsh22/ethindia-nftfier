import { React, useState, useEffect } from "react";
import { NFT, NFTAbi } from "../constants/constants";
import Web3 from "web3";
import { addNFTtoCollection } from "../Context/Revise";
import { waitFor } from "@testing-library/dom";
import Addnft from "./addnft.jsx";
import { ethers } from "ethers";

/// only used for creating your custom paymaster
import { IPaymaster, ChainId } from "@biconomy/core-types";

// import { ChainId } from "@biconomy/core-types";

import SmartAccount from "@biconomy/smart-account";

var arrayyy = [];
var useraddress = "";
var owneraddress = "";
var inputName = "";
var inputDesc = "";
var inputpropname = "";
var inputpropvalue = "";
var ismodal = false;
const Profile = () => {
  // async function Biconomy() {
  //   // Get the EOA provider for choice of your wallet which manages your signer
  //   // This provider can also come from the Social login module or libraries like web3Modal
  //   const provider = new HDWalletProvider(
  //     "4601c2290d507b3ddc5e17235d8debfe12dca1282d2a63f481c6f628a28f4e43",
  //     "https://polygon-mainnet.g.alchemy.com/v2/"
  //   );

  //   // Initialize the Smart Account

  //   // All values are optional except networkConfig only in the case of gasless dappAPIKey is required
  //   let options = {
  //     activeNetworkId: ChainId.GOERLI,
  //     supportedNetworksIds: [
  //       ChainId.GOERLI,
  //       ChainId.POLYGON_MAINNET,
  //       ChainId.POLYGON_MUMBAI,
  //     ],
  //     networkConfig: [
  //       {
  //         chainId: ChainId.POLYGON_MUMBAI,
  //         // Optional dappAPIKey (only required if you're using Gasless)
  //         dappAPIKey: "59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3",
  //         // if need to override Rpc you can add providerUrl:
  //       },
  //       {
  //         chainId: ChainId.BNB_TESTNET,
  //         // Optional dappAPIKey (only required if you're using Gasless)
  //         dappAPIKey: "xIogoMZ7n.65cb71d2-afbe-4792-b68f-f653bd65765b",
  //         providerUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  //       },
  //     ],
  //   };

  //   const walletProvider = new ethers.providers.Web3Provider(provider);
  //   let smartAccount = new SmartAccount(walletProvider, options);
  //   // Initialised smartAccount by getting configurations, setting up necessary smart contract instances and account abstraction APIs/ providers etc for default chain
  //   smartAccount = await SmartAccount.init();

  //   const address = smartAccount.address;
  //   console.log("address", address);

  //   // one can subscribe to socket events prior to sending transaction

  //   const erc20Interface = new ethers.utils.Interface(["function getNFTs()"]);

  //   const data = erc20Interface.encodeFunctionData("transfer", []);

  //   const tx1 = {
  //     to: usdcAddress,
  //     data,
  //   };

  //   // Transaction subscription

  //   smartAccount.on("txHashGenerated", () => {
  //     console.log("txHashGenerated event received via emitter");
  //     // showSuccessMessage(`Transaction sent: ${response.hash}`);
  //   });

  //   smartAccount.on("txMined", () => {
  //     console.log("txMined event received via emitter");
  //     // showSuccessMessage(`Transaction mined: ${response.hash}`);
  //   });

  //   smartAccount.on("error", () => {
  //     console.log("error event received via emitter");
  //   });

  //   // your transaction action

  //   // const tx1 = {
  //   // to: <DESTINATION_CONTRACT>,
  //   // data: <ENCODED_DATA>
  //   // // value can also be added for example ethers.utils.parseEther("1")
  //   // }

  //   // Gasless
  //   const txResponse = await smartAccount.sendGasLessTransaction({
  //     transaction: tx1,
  //   });
  // }

  // <Router>
  //   <Routes>
  //     <Route path="/nft" element={<Addnft />} />
  //   </Routes>
  // </Router>;

  const count = 0;
  const [x, setX] = useState([]);
  const [images, setImages] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [property, setProperty] = useState([]);
  const [nftOwner, setNftOwner] = useState([]);

  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setUserAddress] = useState();

  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  // const [inputName_, setInputName] = "";
  // const [inputDesc_, setInputDesc] = "";

  const parseURL = async (url) => {
    const data = await fetch(`https://${url}`);
    const json = await data.json();
    // console.log(json);
    return json;
  };

  const getNFTImage = async (url) => {
    let imageURL = await parseURL(url);
    let image = imageURL.image;
    image = image.toString();
    return "https://" + image.slice(8);
  };

  const getNFTdesc = async (url) => {
    let descURL = await parseURL(url);
    let desc = descURL.description;
    return desc;
  };

  const getNFTName = async (url) => {
    let nameURL = await parseURL(url);
    let name = nameURL.name;
    return name;
  };

  const getNFTprops = async (url) => {
    let propsURL = await parseURL(url);
    let attributes = propsURL.attributes;
    return attributes;
  };

  const getNFTs = async () => {
    const web3 = window.web3;
    console.log(web3);
    const professionalNFT = new web3.eth.Contract(NFTAbi, NFT);

    let tokenCount = await professionalNFT.methods.tokenCount().call();
    console.log("Token Count: ", tokenCount);

    let nameList = [];
    let imageList = [];
    let descriptionList = [];
    let verifiedList = [];
    let propertyList = [];

    for (var i = 1; i <= tokenCount; i++) {
      const tokenUri = await professionalNFT.methods.tokenURI(i).call();
      const owner = await professionalNFT.methods.ownerOf(i).call();
      setNftOwner((owner) => owner);
      owneraddress = owner;

      // console.log("Token URI: ", tokenUri);
      console.log("User: ", useraddress);
      console.log("Owner: ", owneraddress);
      // console.log(owner)
      // console.log(address)

      if (owneraddress == useraddress) {
        const img = await getNFTImage(tokenUri);
        // console.log("Image: ", img);
        imageList.push(img);

        const desc = await getNFTdesc(tokenUri);
        // setDescription(desc);
        descriptionList.push(desc);
        // console.log(desc);

        const name = await getNFTName(tokenUri);
        nameList.push(name);
        // console.log(name);

        const property01 = await getNFTprops(tokenUri);
        // console.log(property01);
        // setProperty(property01);
        propertyList.push(property01);
        console.log("pass1");
      }
    }

    setImages(imageList);
    setName(nameList);
    setDescription(descriptionList);
    setLoading(false);
    // console.log(propertyList);
    arrayyy = propertyList;
    setProperty(propertyList);
    setX(propertyList);

    // console.log(x)
    console.log("USESTATE PROPERTY:", arrayyy);
  };

  const connectWallet = async () => {
    setLoading(true);
    // console.log(loading);
    // console.log("== Connecting Wallet ==");

    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // console.log(window.web3);
      await window.ethereum.enable();
      await accountChangeHandler();
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      await accountChangeHandler();
    }
    // Non-dapp browsers...
    else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const accountChangeHandler = async () => {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    // Setting an address data
    const accAdd = accounts[0];
    // console.log("User Address: ", accounts[0]);
    setUserAddress(accounts[0]);
    useraddress = accounts[0];
    console.log("wdefrgthyj" + useraddress);
    await getNFTs();
    setConnected(true);
    setLoading(false);
  };
  useEffect(() => {
    connectWallet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch("http://localhost:3000/image", {
      method: "POST",
      body: formData,
    });
    if (response) setStatus(response.statusText);
    // const nftName = document.getElementById("nft-name");
    // const nftDesc = document.getElementById("Desc");

    // const x = await addNFTtoCollection(nftName, nftDesc);
    // console.log(x);
  };

  const handleFinalSubmit = async (e) => {
    try {
      console.log(inputName);
      console.log(inputDesc);
      console.log(inputpropname);
      console.log(inputpropvalue);
      // const x = await addNFTtoCollection(nftName, nftDesc);
      // console.log(x);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
    document.getElementById("uploads").style.display = "none";
  };

  return (
    <div class="isolate bg-white">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        style={{ margin: "50px" }}
        class="overflow-hidden bg-white shadow sm:rounded-lg"
      >
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Applicant Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {useraddress}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">NFT Address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {nftOwner}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div
        id="modal"
        style={{ margin: "50px" }}
        class="block w-600 p-6  m-400 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
      >
        <form style={{ margin: "auto" }} class="" onSubmit={handleFinalSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="nft-name"
              >
                NFT Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border d q rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="nft-name"
                type="text"
                // placeholder=""
                // value={inputName}
                onInput={(e) => (inputName = e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Desc"
              >
                NFT Desc
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Desc"
                type="text"
                placeholder=""
                // value={inputDesc}
                onInput={(e) => (inputDesc = e.target.value)}
              />
            </div>
          </div>
          <div>
            <div style={{ margin: "auto" }}>
              {image.preview && (
                <img src={image.preview} width="100" height="100" />
              )}
            </div>

            <div class="flex items-center justify-center w-full" id="uploads">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 ">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 ">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleFileChange}
                    class="hidden"
                  />
                </form>
              </label>
            </div>
          </div>
          <div style={{ margin: "20px" }} class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Prop_Name"
              >
                Prop Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Prop_Name"
                type="text"
                placeholder=""
                onInput={(e) => (inputpropname = e.target.value)}
              />
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Prop_value"
              >
                Prop Value
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Prop_value"
                type="text"
                placeholder=""
                onInput={(e) => (inputpropvalue = e.target.value)}
              />
            </div>

            {/* <div>

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Prop_value">Add</label>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+</button>
</div> */}
          </div>
          <div>
            <button
              onClick={() => handleFinalSubmit}
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div style={{ margin: "50px" }}>
        {images.map((e, key) => (
          <a
            href="#"
            class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xxxl hover:bg-gray-100 "
            key={key}
          >
            <img
              class="object-cover w-5/12 rounded-t-lg  md:h-auto md:rounded-none md:rounded-l-lgx"
              src={images[key]}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {name[key]}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description[key]}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {arrayyy.map((e, key2) => (
                  <span>
                    {arrayyy[key][key2].trait_type +
                      " : " +
                      arrayyy[key][key2].value}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
