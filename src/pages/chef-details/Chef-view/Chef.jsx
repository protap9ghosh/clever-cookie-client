import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import like from '../../../assets/like.png'

const Chef = () => {
    return (
        <div className='bg-slate-100'>
            <h2 className='text-teal-600 text-center text-4xl font-semibold py-8'>Chef Section</h2>
            <div className='grid lg:grid-cols-3 container lg:pl-8 pb-10 mx-auto'>
                
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">
                            Arthur Gaon
                        </h2>
                        <p className='font-semibold'><span className='mr-1'>2</span>Years of experience</p>
                        <p className='font-semibold'>Famous Recipes:-</p>
                        <p className='font-medium text-amber-500'>Chicken Fajitas, Chocolate Chip Cookies, Greek Yogurt Parfait, Veggie Stir Fry</p>

                        <div className="card-actions justify-between items-center mt-3">
                            <span className='w-8 flex items-center'>
                                <img src={like} alt="" />
                                <p className='text-lg font-semibold ml-3'>500</p>
                            </span>
                            <Link to="/chef">
                                <div className="">
                                    <button className="btn btn-outline btn-accent">View Recipes <FaArrowRight className='ml-3' /></button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Arthur Gaon
                        </h2>
                        <p><span className='mr-2 font-semibold'>Likes:</span>370</p>
                        <p><span className='mr-2 font-semibold'>Recipes:</span>50</p>
                        <p><span className='mr-2 font-semibold'>Years of experience:</span>2 Years</p>
                        <div className="card-actions justify-start">
                            <Link>
                                <button className="btn btn-outline btn-accent">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Arthur Gaon
                        </h2>
                        <p><span className='mr-2 font-semibold'>Likes:</span>370</p>
                        <p><span className='mr-2 font-semibold'>Recipes:</span>50</p>
                        <p><span className='mr-2 font-semibold'>Years of experience:</span>2 Years</p>
                        <div className="card-actions justify-start">
                            <Link>
                                <button className="btn btn-outline btn-accent">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Arthur Gaon
                        </h2>
                        <p><span className='mr-2 font-semibold'>Likes:</span>370</p>
                        <p><span className='mr-2 font-semibold'>Recipes:</span>50</p>
                        <p><span className='mr-2 font-semibold'>Years of experience:</span>2 Years</p>
                        <div className="card-actions justify-start">
                            <Link>
                                <button className="btn btn-outline btn-accent">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Arthur Gaon
                        </h2>
                        <p><span className='mr-2 font-semibold'>Likes:</span>370</p>
                        <p><span className='mr-2 font-semibold'>Recipes:</span>50</p>
                        <p><span className='mr-2 font-semibold'>Years of experience:</span>2 Years</p>
                        <div className="card-actions justify-start">
                            <Link>
                                <button className="btn btn-outline btn-accent">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Arthur Gaon
                        </h2>
                        <p><span className='mr-2 font-semibold'>Likes:</span>370</p>
                        <p><span className='mr-2 font-semibold'>Recipes:</span>50</p>
                        <p><span className='mr-2 font-semibold'>Years of experience:</span>2 Years</p>
                        <div className="card-actions justify-start">
                            <Link>
                                <button className="btn btn-outline btn-accent">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;