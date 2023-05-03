import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';

const Chef = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 container mx-auto'>

                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src="http://surl.li/gtswo" alt="Chef" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Arthur Gaon
                        </h2>
                        <p><span className='mr-2 font-semibold'>Likes:</span>370</p>
                        <p><span className='mr-2 font-semibold'>Recipes:</span>50</p>
                        <p><span className='mr-2 font-semibold'>Years of experience:</span>2 Years</p>
                        <div className="card-actions justify-start">
                            <Link to="/chef">
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