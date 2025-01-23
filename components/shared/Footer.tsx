'use client'

import React from 'react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import BackToTopButton from './BackToTop';

const Footer = () => {
    const [currentYear, setCurrentYear] = React.useState('');

    React.useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className='bg-black  text-white underline-link'>
            <div className='w-full'>
                <BackToTopButton />
            </div>
                <div className='p-4'>
                <div className='flex justify-center  gap-3 text-sm'>
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'> Privacy Notice</Link>
                    <Link href='/page/help'>Help</Link>
                </div>
                <div className='mt-4 flex justify-center text-sm text-gray-400'>
                    123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
                </div>
                <div className='flex justify-center text-sm p-4'>
                    <p> © {currentYear}, {APP_NAME}, Inc. or its affiliates </p>
                    <span> &nbsp;|&nbsp; Developed By&nbsp; </span>
                    <span>
                        <a
                            href='https://devziaus.xyz'
                            className='text-[#0095da] hover:text-[#e68324] transition-colors duration-300'
                        >
                            DevZiaus
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
