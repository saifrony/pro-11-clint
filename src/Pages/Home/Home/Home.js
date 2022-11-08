import React from 'react';
import Slider from '../../../Slider';
import Ticket from '../../../Ticket';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <Ticket></Ticket>
        </div>
    );
};

export default Home;