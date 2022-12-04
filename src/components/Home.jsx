import { React, useState } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ethers } from "ethers";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Chat } from "@pushprotocol/uiweb";

const Home = () => {
  const { address1 } = useAccount();
  const navigate = useNavigate();
  const [BiconomyAaccount, setBiconomyAccount] = useState([]);

  const handleLogin = async () => {
    try {
      // init wallet
      const socialLoginSDK = new SocialLogin();
      await socialLoginSDK.init("0x5"); // Enter the network id in init() parameter
      socialLoginSDK.showConnectModal();

      // show connect modal
      socialLoginSDK.showWallet();

      if (!socialLoginSDK?.web3auth?.provider) return;
      const provider = new ethers.providers.Web3Provider(
        socialLoginSDK.web3auth.provider
      );
      const accounts = await provider.listAccounts();
      console.log("EOA address", accounts);
      setBiconomyAccount(accounts);
      // socialLoginSDK.hideWallet();
      // navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const Disconnect = async () => {};

  return (
    <div>
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
        <div class="px-6 pt-6 lg:px-8">
          <div>
            <nav
              class="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
              <div class="flex lg:hidden">
                <button
                  type="button"
                  class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a
                  href="#"
                  class="font-semibold text-gray-900 hover:text-gray-900"
                >
                  <NavLink to="/profile"> Profile</NavLink>
                </a>

                <a
                  href="#"
                  class="font-semibold text-gray-900 hover:text-gray-900"
                >
                  <NavLink to="/nft"> Create NFTs</NavLink>
                </a>

                <a
                  href="#"
                  class="font-semibold text-gray-900 hover:text-gray-900"
                >
                  <NavLink to="/covalent"> NFTs Show</NavLink>
                </a>
              </div>
              <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <button
                  onClick={() => handleLogin()}
                  class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Log in
                </button>
              </div>
            </nav>
            <div role="dialog" aria-modal="true">
              <div
                focus="true"
                class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div class="flex h-9 items-center justify-between">
                  <div class="flex">
                    <a href="#" class="-m-1.5 p-1.5">
                      <span class="sr-only">Your Company</span>
                      <img
                        class="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="flex">
                    <button
                      type="button"
                      class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                      <span class="sr-only">Close menu</span>
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <a
                        href="#"
                        class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Features
                      </a>

                      <a
                        href="#"
                        class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Marketplace
                      </a>

                      <a
                        href="#"
                        class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Company
                      </a>
                    </div>
                    <div class="py-6">
                      <a
                        href="#"
                        class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div class="relative px-6 lg:px-8">
            <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
                </div>
                <div>
                  <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    NFTFier
                  </h1>
                  <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    NFTfier helps user to store dynamic NFTs as well as gives
                    them an option to use it as their Professional or
                    Educational Identity card. And its NFT place can be used by
                    the user to mint, retrieve and access NFTs at any time.
                  </p>
                  <div class="mt-8 flex gap-x-4 sm:justify-center">
                    <button
                      onClick={() => handleLogin()}
                      href="#"
                      class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      Login
                      <span class="text-indigo-200" aria-hidden="true">
                        {/* &rarr; */}
                      </span>
                    </button>
                    <a class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <NavLink to="/profile">Profile</NavLink>
                      <span class="text-gray-400" aria-hidden="true">
                        {/* &rarr; */}
                      </span>
                    </a>
                  </div>
                </div>
                <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fill-opacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="bg-white py-24 sm:py-32 lg:py-40">
        <section
          style={{ margin: "100px", marginTop: "-200px" }}
          class=" pt-20 pb-10 lg:pt-[120px] lg:pb-20"
        >
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap justify-center">
              <div class="w-full px-4">
                <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span class="text-primary mb-2 block text-lg font-semibold">
                    Our Blogs
                  </span>
                  <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                    Our Recent News
                  </h2>
                  <p class="text-body-color text-base">
                    There are many different blogs which are available on the
                    web.
                  </p>
                </div>
              </div>
            </div>
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Biconomy
                      </a>
                    </h3>
                    <p class="text-body-color  text-gray-600 text-base">
                      More convenient way of logging in and integrating the dApp
                      is possible since it is powered by the Biconomy.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        PUSH Protocol
                      </a>
                    </h3>
                    <p class="text-body-color  text-gray-600 text-base">
                      Thanks to PUSH, users have ultimate resource of PUSH
                      Protocol web chatting to help them when in need always!
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        NFTs
                      </a>
                    </h3>
                    <p class="text-body-color  text-gray-600 text-base">
                      Different types of NFTs always helps the user to stay on
                      top of their needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between m-4 md:p-6 dark:bg-gray-200">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="/" class="hover:underline">
            NFTFier™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        <Chat
          account={address1} //user address
          supportAddress="0xB7h2NMAcD4B8a745e191b62BA3fcaD87229623P" //support address
          apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
          env="staging"
        />
      </footer>
    </div>
  );
};

export default Home;
