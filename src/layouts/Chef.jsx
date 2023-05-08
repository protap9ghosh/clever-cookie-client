import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const Chef = () => {
    // const chef = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/chef-details')
            .then((res) => res.json())
            .then((data) => chef(data))
    }, [])

    const chef = () => {
        chef.map(chefInfo => <ChefDetails
            key={chefInfo.id}
            chefInfo={chefInfo}
        ></ChefDetails>)
    }

    return (
        <div>
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