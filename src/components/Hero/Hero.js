import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
// import HeroImg from "../../../src/assets/logo.png"
const Hero = () => {
	return (
		<HeroSection>
			<HeroImage/>
			<Container>
				<MainHeading>ĐẤU GIÁ HỢP DANH BẢO TÍN TRÀ VINH</MainHeading>
				<HeroText>
					ĐẢM BẢO LÂU DÀI – UY TÍN MÃI MÃI
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						{/* <Button>Get Started</Button> */}
					</Link>
					<HeroButton>
						<Link to="signup">
							<Button> Tìm Hiểu Thêm </Button>
						</Link>

					</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
