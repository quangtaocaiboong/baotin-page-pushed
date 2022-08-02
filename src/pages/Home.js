import React, {useEffect} from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	useEffect(() => {
		document.title = "ĐẤU GIÁ HỢP DANH BẢO TÍN TRÀ VINH | BPAC"
	 }, []);
	return (
		<>
			<Hero />
			<Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
		</>
	);
};

export default Home;
