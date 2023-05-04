import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';
import Footer from '../../../Shared/Footer/Footer';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError('invalid password, least one letter and one number');
            return;
        }

        registerUser()
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="hero min-h-screen bg-indigo-50">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please register!</h1>
                    </div>
                    <div className="card flex-shrink-0 lg:w-screen max-w-sm mt-5 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                                <label className="label">
                                    <small>{error}</small>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;