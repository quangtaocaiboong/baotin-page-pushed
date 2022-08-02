import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
// import HeroImg from "../../../src/assets/logo.png"
const Hero = () => {
	return (
		<HeroSection>
			<HeroImage style={{
				backgroundImage: "url(https://d1iibezb83drel.cloudfront.net/wp-content/uploads/2019/10/cuadro-balanza-justicia-derecho-martillo-juez-abogacia-20x30-D_NQ_NP_967577-MLA27477362964_062018-F.jpg)"
			}} />
			<Container>
				<MainHeading>ĐẤU GIÁ HỢP DANH BẢO TÍN TRÀ VINH</MainHeading>
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
