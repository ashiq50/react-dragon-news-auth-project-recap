import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map(aNews => <NewsCard 
                            to={aNews._id}
                            aNews={aNews}
                            ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;