import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from "react";
import lamitron from "../public/lamitron_black_on_circle.png";
import styles from "./navbar.module.css";
import Head from 'next/head';

const Navbar: () => JSX.Element = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
            </Head>
            <nav className='flex items-center flex-wrap bg-gray-600 p-3 '>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-2xl text-white font-bold uppercase tracking-wide items-center'>
                            <div>
                                <Image
                                    className='align-center block m-auto'
                                    alt="lamitron logo"
                                    src={lamitron}
                                    width={28}
                                    height={28}
                                />
                                <p className={`float-right px-5 ${styles.title}`}>Matthew Savin</p>
                            </div>
                        </span>
                    </a>
                </Link>

                <button className='inline-flex p-3 hover:bg-gray-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                    <a onClick={showSidebar}>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </a>
                </button>

                <div className={'w-full lg:inline-flex lg:flex-grow lg:w-auto'}>
                    <div className={`${!sidebar ? 'hidden': ''} lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-500 hover:text-white '>
                                Home
                            </a>
                        </Link>
                        <Link href={'/portfolio'}>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-500 hover:text-white'>
                                Portfolio
                            </a>
                        </Link>
                        <Link href={'/about'}>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-500 hover:text-white'>
                                About me
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
