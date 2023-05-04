import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='text-center bg-slate-700 min-h-screen flex justify-center items-center'>
                <div>
                    <h1 className='text-9xl font-bold mb-5'>404</h1>
                    <div className='text-white'>
                        <p className='text-2xl font-semibold'>We can&apos;t find that page</p>
                        <p className='w-96 mx-auto pt-2 pb-6'>We&apos;pe fairly sure that page used to be here but seems to have go missing. We do apologise on it&apos;s behalf.</p>
                        <Link to="/">
                            <button className="btn btn-outline btn-info"> <FaArrowLeft className='mr-2'/> Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;