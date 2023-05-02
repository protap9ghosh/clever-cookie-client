import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="hero py-10 bg-cyan-50">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://recipepress.inspirythemes.com/second/wp-content/uploads/sites/2/2017/01/slider-demo1.jpg" className="lg:max-w-xl lg:mr-12 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Curly Cheese & Vegetable Sandwich</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Leo urna molestie at elementum eu facilisis sed odio. Malesuada fames ac turpis egestas integer. Porttitor massa id neque aliquam vestibulum morbi blandit nisl cursus risus.</p>
                        <button className="btn btn-info">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;