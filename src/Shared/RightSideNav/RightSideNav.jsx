import React from 'react';
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const RightSideNav = () => {
    return (
        <div>
            {/* Login with */}
            <div className='p-4 space-y-3 mb-5'>
                <h2 className='text-3xl font-bold'>Login with</h2>
                <button className='btn btn-outline w-full'>
                    <FaGoogle className='mr-5'></FaGoogle>
                    Login With Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub className='mr-5'></FaGithub>
                    Login With Github
                </button>
            </div>
            {/* Find us on */}
            <div className='p-4 mb-5'>
                <h2 className='text-3xl font-bold mb-4'>Find Us On</h2>
                <a className='border flex items-center text-lg rounded-t-lg p-3' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='border-x flex items-center text-lg p-3' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='border flex items-center text-lg rounded-b-lg p-3' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Facebook</span>
                </a>
            </div>
            {/* Q zone */}
            <div className='p-4 space-y-3 mb-5'>
                <h2 className='text-3xl font-bold'>Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;