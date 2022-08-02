import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';
import logoImg from "../../assets/logo.png"


function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src={logoImg} alt="BẢO TÍN TRÀ VINH" />

						</FooterLogo>
						<FooterAddress>
							<h2>
								CÔNG TY ĐẤU GIÁ HỢP DANH BẢO TÍN TRÀ VINH
							</h2>
							<h5>SỐ 561, PHAN ĐÌNH PHÙNG, PHƯỜNG 6, THÀNH PHỐ TRÀ VINH
							</h5>
							</FooterAddress>
						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href={social.direct}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>CÔNG TY ĐẤU GIÁ HỢP DANH BẢO TÍN TRÀ VINH © 2022</FooterRights>
				<p style={{color:'gray', float: 'right', fontSize:'8px'}}>Powered by Quang Huy | Hibernatecat Labs</p>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
