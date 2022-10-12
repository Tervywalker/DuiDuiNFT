import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-background overflow-hidden">
      <Head>
        <title>DuiDui</title>
        <meta name="description" content='Testing Demo' />
        <link rel="icon" href="/image/ICON.png" />        
      </Head>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

      <video
            src="/video/Final_audio_length.mp4" muted loop autoPlay
            className="fixed -Z-10 inset-auto max-w-full w-full min-h-screen object-cover opacity-30"
          >
          </video>

      <header className="min-w-full text-white py-14 px-4 md:px-0 z-40">
        <div className="flex items-center container mx-auto max-w-8xl justify-between h-full">
          {/* Logo */}
          <Link href="/min.js">
            <a className="font-coiny text-xl md:text-3xl font-bold">
              <span className="bg-gradient-to-br from-brand-blue to-brand-purple pr-2 bg-clip-text text-transparent ">
                DuiDui
              </span>
              NFT
            </a>
          </Link>

          {/* Opensea Twitter Discord Links */}
          <nav aria-label="Contact Menu">
            <div className='flex justify-between items-center'>
              <span className='text-3xl cursor-pointer md:hidden block z-50'>
                <ion-icon name='menu'></ion-icon>
              </span>
            </div>

            <ul className="flex items-center space-x-4 md:flex md:items-center md:z-auto md:static absolute md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0">
              <li className='cursor-pointer'>
                <Link href="#">
                <a className="font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-1xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white"
                >
                Mint soon
                </a>           
                </Link>
              </li>

              <li className="cursor-pointer">
                <a href="https://opensea.io" target="_blank" rel="noreferrer">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
                      fill={'currentColor'}
                    ></path>
                  </svg>
                </a>
              </li>
              
              <li className="cursor-pointer">
                <a
                  href="https://twitter.com/DuiDuiNFT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://discord.com/invite/Pkxqb2Pkbg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a 
                  href="#_" 
                  className="relative inline-flex items-center justify-center p-2 px-2 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                >
                <span 
                  className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path>
                    </path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Music OFF</span>
                <span className="relative invisible">Button Text</span>
                </a>
              </li>

            </ul>
          </nav>
        </div>
      </header>

      <div className="h-full w-full container max-w-srceen mx-auto flex flex-col items-center pt-1 z-10">
        <div className="flex flex-row items-center max-w-8xl w-full">
          <img
            src='/image/Background1.svg'
          />
          {/*<Link href="/mint" passHref>
            <a className="mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-3xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white">
              Go to minting page              
            </a>
          </Link>

          <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 items-center mt-20 w-full">
            {/*Image 
            <img
              src="/images/9.png"
              className="w-64 h-64 rounded-md object-cover"
            />

            <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-gray-800 px-4 md:px-0 py-10 mt-14">
              <h2 className="font-bold text-2xl md:text-4xl uppercase">
                About DuiDui
              </h2>
            </div>
          {/*</div>*/}         
          
        </div>

        <div className="flex flex-col items-center max-w-5xl w-full ">
          <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny px-4 md:px-0 py-5 mt-2">
              <h2 className="font-bold text-2xl md:text-4xl uppercase">
                        
              </h2>
            </div>  
          </div>

        <div className="flex flex-col items-center max-w-7xl w-full ">
          <img
            src='/image/story.png'
          />
        </div>

        <div className="flex flex-col items-center max-w-5xl w-full ">
          <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny px-4 md:px-0 py-5 mt-2">
              <h2 className="font-bold text-2xl md:text-4xl uppercase">
                        
              </h2>
            </div>  
          </div>

        <div className='flex max-w-screen max-h-50'>
          <Marquee 
            play
            speed={100}
            gradientColor={[0,0,0]}
            >
            <div>
              <img 
                src='/image/loop1-0.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-1.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-2.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-3.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-4.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-5.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-6.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-7.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop1-8.png'
                className='max-h-80'
              ></img>
            </div>
          </Marquee>
        </div>

        <div className='flex max-w-screen max-h-50'>
          <Marquee 
            play
            speed={100}
            gradientColor={[0,0,0]}
            direction='right'
            >
            <div>
              <img 
                src='/image/loop2-0.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-1.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-2.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-3.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-4.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-5.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-6.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-7.png'
                className='max-h-80'
              ></img>
            </div>
            <div>
              <img 
                src='/image/loop2-8.png'
                className='max-h-80'
              ></img>
            </div>
          </Marquee>
        </div>

        <div className="flex flex-col items-center max-w-7xl w-full ">
          <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-white px-4 md:px-0 py-5 mt-2">
              <h2 className="font-bold text-2xl md:text-4xl uppercase">
                Team Info      
              </h2>

              <div className='mt-8 grid lg:grid-cols-1 item-cneter justifly-center'>
                <div className='card'>
                  <img src='/image/Aaron.png' className='w-full h-80 sm:h-80 object-cover'></img>
                  <div className='m-4'>
                    <span className='font-bold'>Founder - Wallstreet</span>
                    <span className='block text-gray-500 text-sm'>Art & Story Enthusiast. Believing that stories are at the heart of consensus and having fun is vital! DuiDui 妖精の旅 is a trip to the most magical world where anything is possible. Enjoy this journey and focus on the experience. Let's dive in!</span>
                  </div>
                </div>
              </div>

              <div className='mt-8 grid lg:grid-cols-2 gap-10'>
                <div className='card'>
                  <img src='/image/Ken.png' className='w-full h-80 sm:h-80 object-cover'></img>
                  <div className='m-4'>
                    <span className='font-bold'>Artist</span>
                    <span className='block text-gray-500 text-sm'>Detail</span>
                  </div>
                </div>
                <div className='card'>
                  <img src='/image/Tervy.png' className='w-full h-80 sm:h-80 object-cover'></img>
                  <div className='m-4'>
                    <span className='font-bold'>Developer</span>
                    <span className='block text-gray-500 text-sm'>Detail</span>
                  </div>
                </div>
              </div>
                
              <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                <div className='card'>
                  <img src='/image/Molly.png' className='w-full h-80 sm:h-80 object-cover'></img>
                  <div className='m-4'>
                    <span className='font-bold'>Marketing Specialist</span>
                    <span className='block text-gray-500 text-sm'>Detail</span>
                  </div>
                </div>
                <div className='card'>
                  <img src='/image/Resita.png' className='w-full h-80 sm:h-80 object-cover'></img>
                  <div className='m-4'>
                    <span className='font-bold'>Community Manager</span>
                    <span className='block text-gray-500 text-sm'>Detail</span>
                  </div>
                </div>
                <div className='card'>
                  <img src='/image/Zhihao.png' className='w-full h-80 sm:h-80 object-cover'></img>
                  <div className='m-4'>
                    <span className='font-bold'>Discord Expert</span>
                    <span className='block text-gray-500 text-sm'>Detail</span>
                  </div>
                </div>
              </div>
            </div>  
          </div>

        <div className="flex flex-col items-center max-w-5xl w-full h-500">          
          <video
            src="/video/roadmap.mp4" muted loop autoPlay
            className="absolute inset-auto max-w-7xl w-full min-h-screen object-cover"
          >
          </video>

          

          <div className="flex flex-col z-40 md:items-start items-center justify-center text-center font-coiny text-white px-4 md:px-0 py-5 mt-2">
            <h2 className="font-bold text-2xl md:text-4xl uppercase">
              Roadmap
            </h2>             
          </div>
        </div>
      </div>

      <footer className="min-w-full text-white py-14 px-4 md:px-0 z-40 item-center justify-center text-center">
        <h3 className='uppercase'>
          Copyright © 2022 DuiDui™ | All rights reserved.
        </h3>
      </footer> 
          
   </div>
   
    
  )
}
