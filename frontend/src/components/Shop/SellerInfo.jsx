import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import Header from '../Layout/Header';

const SellerInfo = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register as a seller
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            <div>
                                Vendor Detail Upload for TradeFromFactory is a streamlined process that allows sellers to submit their shop information swiftly. Vendors are required to provide comprehensive shop details via the link below. Once the information is submitted, it undergoes a rigorous review process for quality assurance and adherence to our guidelines. Vendors can expect a 24-hour waiting period for approval, during which our team ensures that all provided data aligns with our standards. This meticulous verification process is crucial in maintaining the integrity of our marketplace, ensuring a secure and trustworthy environment for both sellers and buyers alike.
                            </div>
                            <h1 className="text-blue-600 flex items-center">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHEc4uri1QWEw_XXDWl51MwN8hN95AZ1EkvHyTaMl5syQF4A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                                    Upload Shop Details Here
                                </a>
                            </h1>
                            <div className={`${styles.noramlFlex} w-full`}>
                                <h4>Already have an account?</h4>
                                <Link to="/shop-login" className="text-blue-600 pl-2">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerInfo
