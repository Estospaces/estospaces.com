import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import BigPromise from '../components/landing/BigPromise';
import SneakPeek from '../components/landing/SneakPeek';
import Problem from '../components/landing/Problem';
import Solution from '../components/landing/Solution';
import SocialProof from '../components/landing/SocialProof';
import Testimonials from '../components/landing/Testimonials';
import WhyJoin from '../components/landing/WhyJoin';
import Countdown from '../components/landing/Countdown';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';
import ChatWidget from '../components/landing/LiveChat/ChatWidget';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Navbar />
                <Hero />
                <BigPromise />
                <SneakPeek />
                <Problem />
                <Solution />
                <SocialProof />
                <Testimonials />
                <WhyJoin />
                <Countdown />
                <FAQ />
                <FinalCTA />
                <Footer />
                <ChatWidget />
            </div>
    );
};

export default Home;
