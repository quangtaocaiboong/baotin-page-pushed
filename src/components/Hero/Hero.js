import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import HeroOneImg from "../../../src/assets/heroTwoImg.jpeg"
const Hero = () => {
	return (
		<HeroSection>
			<HeroImage style={{
				backgroundImage: `url(${HeroOneImg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover", // adjust as needed
				backgroundPosition: "center" // adjust as needed
			}} />
			<Container>
				<MainHeading>ĐẤU GIÁ HỢP DANH<br/> BẢO TÍN TRÀ VINH</MainHeading>
				<HeroText>
					ĐẢM BẢO LÂU DÀI – UY TÍN MÃI MÃI
				</HeroText>
				<ButtonWrapper>
					<HeroButton>
						<Link to="contact">
							<Button> Tìm Hiểu Thêm </Button>
						</Link>

					</HeroButton>
					<HeroButton>
						<Link to="news">
							<Button> Thông Tin Đấu Giá </Button>
						</Link>
					</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
