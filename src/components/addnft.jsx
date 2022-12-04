import { React, useState, useEffect } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { addNFTtoCollection } from "../Context/Revise";
import axios from "axios";

import fetch from "node-fetch";
import { MintNFT } from "../utils/mintNFT";
import { retrieveNFT, RetrieveNFT } from "../utils/retrieveNFT";
import { getContractInfo } from "../utils/contractInfo";

var arrayyy = [];
var useraddress = "";
var owneraddress = "";
var inputName = "";
var inputDesc = "";
var inputpropname = "";
var inputpropvalue = "";
var ismodal = false;

const Addnft = () => {
  retrieveNFT();
  // getContractInfo();

  const navigate = useNavigate();

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

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
    document.getElementById("uploads").style.display = "none";
  };

  return (
    <>
      <div
        style={{ margin: "50px" }}
        class="block w-600 p-6  m-400 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
      >
        <form class="" onClick={() => MintNFT(inputName, inputDesc, "imgurl")}>
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
            <div class="p-5" style={{ margin: "auto" }}>
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
                <form>
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
          {/* <div class="flex flex-wrap -mx-3 mb-2">
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

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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

        
        </div> */}
          <div style={{ margin: "20px" }}>
            <button class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              {" "}
              <NavLink to="/profile">Back</NavLink>
            </button>
            <a
              onClick={() => MintNFT(inputName, inputDesc, "imgurl")}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </a>
          </div>
        </form>
      </div>
      <div
        style={{ margin: "50px" }}
        class="block w-600 p-6  m-400 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
      >
        <div style={{}}>
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
    </>
  );
};
export default Addnft;
