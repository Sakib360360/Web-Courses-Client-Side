import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-100">
                <div className="bg-gray-800 text-white w-64 flex-shrink-0 p-4">
                    <div className="mb-4">
                        <p className="text-2xl font-bold">Menu</p>
                        <ul className="mt-2">
                            <li className="mb-2">
                                <Link  className="text-gray-300 hover:text-white">Dashboard</Link>
                            </li>
                            <li className="mb-2">
                                <Link  className="text-gray-300 hover:text-white">Manage Users</Link>
                            </li>
                            <li>
                                <Link  className="text-gray-300 hover:text-white">Manage Instructors</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="p-4">
                        {/* Your main content goes here */}
                        <p className="text-3xl font-bold mb-4">Welcome to the Dashboard</p>
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;