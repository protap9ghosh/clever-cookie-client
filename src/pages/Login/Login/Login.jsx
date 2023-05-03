import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-screen max-w-sm mt-5 shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className=" ml-9"><small>New to Auth Master?</small>
                            <Link to="/register" className="label-text-alt link link-hover text-sm text-blue-500"> Please Register
                            </Link>
                        </p>

                        <p className="ml-9">
                            <Link className="label-text-alt link link-hover text-sm text-blue-500">Continue With Google</Link>
                        </p>
                        <p className="mb-4 ml-9">
                            <Link className="label-text-alt link link-hover text-sm text-blue-500">Continue With Github</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;