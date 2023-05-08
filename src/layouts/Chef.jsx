import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Chef = () => {
    // const chef = useLoaderData();
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef-details')
            .then((res) => res.json())
            .then((data) => setChef(data))
    }, [])



    return (
        <div>
            <div className='bg-slate-100 min-h-screen'>
                <h2 className='text-teal-600 text-center text-4xl font-semibold py-8'>Chef Section</h2>
                <div className='grid lg:grid-cols-3 container lg:pl-8 pb-10 mx-auto'>
                    {
                        chef.map(chef => <Card
                            key={chef.key}
                            chef={chef}
                        ></Card>)
                    }

                </div>
            </div>



            {/* {
                chef.map(chefInfo => <ChefDetails
                    key={chefInfo.id}
                    chefInfo={chefInfo}
                ></ChefDetails>)
            } */}
        </div>
    );
};

export default Chef;