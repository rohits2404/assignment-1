import React from 'react'

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-sm space-y-6">
                <div className="text-left">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Signin to your<br />PopX account
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-purple-600 mb-1">
                            Email Address
                        </label>
                        <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-purple-600 mb-1">
                            Password
                        </label>
                        <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <button
                    className="w-full py-3 bg-gray-300 text-white rounded-md font-semibold cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
