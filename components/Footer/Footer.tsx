import React from 'react';
import { Github } from 'lucide-react';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className=" bg-[#eaeaea]">
        <div className=" mx-auto text-white p-10">
            <div className="text-center">
                <h3 className="text-3xl mb-3 text-black"> Meet HelpMate: Your 24/7 AI-Powered Customer Support Assistant </h3>
                <div className="flex items-center lg:flex-col gap-5 justify-center my-10">
                <Link href={"mailto:manojkumararumainathan@gmail.com"} className=" px-4 py-2 bg-gradient-to-br from-jade-200 to-jade-600 rounded-xl">Get Your Own Bot</Link>
                </div>
            </div>
            <div className="mt-10 flex lg:flex-col-reverse gap-4 justify-between  items-center text-sm text-gray-400">
                <p className=""> &copy;HelpMate.ai, {new Date().getFullYear()}. All rights reserved. </p>
                <div className="">
                    <Link href={'#how-it-works'} className="px-2">How It Works?</Link>
                    <Link href={'#use-cases'} className="px-2 border-l">Use Cases</Link>
                    <Link href={'mailto:manojkumararumainathan@gmail.com'} className="px-2 border-l">Contact</Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
