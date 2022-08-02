import vanPhongImg1 from "../assets/vanPhongImg1.jpeg"
import vanPhongImg2 from "../assets/vanPhongImg2.jpeg"
import vanPhongImg3 from "../assets/vanPhongImg3.jpeg"
import vanPhongImg4 from "../assets/vanPhongImg4.jpeg"
import vanPhongImg5 from "../assets/vanPhongImg5.jpeg"
export const data = [
	{
		title: 'Văn phòng đại diện tại KIÊN GIANG',
		description:
			'',
		image: vanPhongImg1,
	},
	{
		title: 'Văn phòng đại diện tại AN GIANG',
		description: '',
		image: vanPhongImg4,
	},
	{
		title: 'Văn phòng đại diện tại BẾN TRE',
		description: '',
		image: vanPhongImg2,
	},
	{
		title: 'Văn phòng đại diện tại ĐỒNG THÁP',
		description: '',
		image: vanPhongImg3,
	},
	{
		title: 'Văn phòng đại diện tại PHÚ YÊN',
		description: '',
		image: vanPhongImg5,
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
