import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		direct: 'https://www.facebook.com'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		direct: 'https://www.instagram.com'
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		direct: 'https://www.youtube.com'
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		direct: 'https://www.twitter.com'
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		direct: 'https://www.linkedin.com'
	},
];

export const footerData = [
	{
		title: 'Thông tin chung',
		links: ['Email: daugiabaotintravinh@gmail.com', 'Điện thoại: 02493. 864668', 'Đại diện theo pháp luật: ông. Huỳnh Quốc Chiến', 'Hotline: 0978 910555 - 0964881919'],
	},
	{
		title: 'Trụ sở',
		links: ['Trụ sở chính: Số 561, Phan Đình Phùng, Khóm 3, Phường 6, thành phố Trà  Vinh, tỉnh Trà Vinh.', 'Các Chi nhánh và Văn phòng đại diện:', 'Văn phòng đại diện tại KIÊN GIANG', 'Văn phòng đại diện tại AN GIANG', 'Văn phòng đại diện tại BẾN TRE', 'Văn phòng đại diện tại ĐỒNG THÁP',' Văn phòng đại diện tại PHÚ YÊN'],
	},
];
