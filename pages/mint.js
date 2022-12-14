import { useState, useEffect } from "react"
import { initOnboard } from "../utils/onboard"
import { config } from '../dapp.config'
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'
import Head from "next/head"

export default function Mint() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const connectedWallets = useWallets()
  
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    setOnboard(initOnboard)
  }, [])

  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background ">
      <Head>
        <title>DuiDui</title>
        <meta name="description" content='Testing Demo' />
        <link rel="icon" href="/image/ICON.png" />
      </Head>

      <div className="flex flex-col items-center max-w-5xl w-full ">
          <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-white px-4 md:px-0 py-5 mt-2">
            <h2 className="font-bold text-2xl md:text-4xl uppercase">
                Mint Details
            </h2>
            <p>Total supply: 0/5555</p>
            <p>Max mints: 0/2</p>
            <p>Mint Price: - - ETH</p>
            <p>Minting Stage: Whitelist Sale / Public Sale</p>
          </div>  
        </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/image/Backround.png"
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover"
        />
        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="relative z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
            <h1 className="font-coiny uppercase font-bold text-3xl md:text-4xl bg-gradient-to-br  from-brand-green to-brand-blue bg-clip-text text-transparent mt-3">
              Whitelist Sale
            </h1>
            <h3 className="text-sm text-pink-200 tracking-widest">
                                             
            </h3>

            <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
              {/*<div className="relative w-full">
                <div className="font-coiny z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    <span className="text-brand-pink">0</span> / 5555
                  </p>
                </div>

                <img
                  src="/image/imgpsh_fullsize_anim.jfif"
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />
  </div>*/}

              <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                <div className="font-coiny flex items-center justify-between w-full">
                  <button
                    className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>

                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-pink text-3xl md:text-4xl">
                    1
                  </p>

                  <button
                    className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-gray-300 font-bold rounded-md"
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-sm text-pink-200 tracking-widest mt-3">
                  Max Mint Amount: 2
                </p>

                <div className="border-t border-b py-4 mt-16 w-full">
                  <div className="w-full text-xl font-coiny flex items-center justify-between text-brand-yellow">
                    <p>Total</p>

                    <div className="flex items-center space-x-3">
                      <p>
                        0.01
                        ETH
                      </p>
                      <span className="text-gray-400">+ GAS</span>
                    </div>
                  </div>
                </div>

                {/* Mint Button && Connect Wallet Button */}
                <button
                    className="font-coiny mt-12 w-full bg-gradient-to-br from-brand-purple to-brand-pink shadow-lg px-6 py-3 rounded-md text-2xl text-white hover:shadow-pink-400/50 mx-4 tracking-wide uppercase"
                    onClick={() => connect()}
                    >
                    Connect Wallet
                  </button>
                
              </div>

              <div className="relative w-full">
                <div className="font-coiny z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    <span className="text-brand-pink">0</span> / 5555
                  </p>
                </div>

                <img
                  src="/image/imgpsh_fullsize_anim.jfif"
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />
  </div>
            </div>

            {/* Status 
            {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500' : 'border-brand-pink-400 '
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4"`}
              >
                <p className="flex flex-col space-y-2 text-white text-sm md:text-base break-words ...">
                  {status.message}
                </p>
              </div>
            )}*/}

            {/* Contract Address */}
            <div className="border-t border-gray-800 flex flex-col items-center mt-10 py-2 w-full">
              <h3 className="font-coiny text-2xl text-brand-pink uppercase mt-6">
                Contract Address
              </h3>
              <a
                href={`https://rinkeby.etherscan.io/address/${config.contractAddress}#readContract`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 mt-4"
              >
                <span className="break-all ...">{config.contractAddress}</span>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}


