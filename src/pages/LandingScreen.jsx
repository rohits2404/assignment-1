import React from 'react'
import { Link } from 'react-router-dom'

const LandingScreen = () => {

    return (
         <div className="min-h-screen flex flex-col justify-end items-center bg-gray-50 p-6">
            <div className="w-full max-w-sm text-center space-y-4">
                <h1 className="text-2xl font-semibold text-gray-900">Welcome to PopX</h1>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="space-y-3 mt-4">
                    <Link
                    to="/create-account"
                    className="block w-full py-3 bg-purple-600 text-white rounded-md font-semibold text-center shadow-sm hover:bg-purple-700 transition"
                    >
                        Create Account
                    </Link>
                    <Link
                    to="/login"
                    className="block w-full py-3 bg-purple-100 text-purple-800 rounded-md font-semibold text-center shadow-sm hover:bg-purple-200 transition"
                    >
                        Already Registered? Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen