// import newsImage1 from "../assets/newsOneImg.jpg"
import newsImage2 from "../assets/newsTwoImg.jpeg"
// import newsImage3 from "../assets/newsThreeImg.jpeg"
import newsPDF from "../assets/newsPDF.png"
import newsPDF2 from "../assets/newsPDF2.png"
export const newsOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Thành lập vào năm 2016',
	},
	headline: "Chúng tôi luôn trân trọng sự hợp tác của các Đối tác và Quý Khách hàng trong mọi phương diện",
	description: 'Chất lượng dịch vụ hàng đầu, phương châm làm việc của Công ty Đấu Giá Hợp Danh Bảo Tín Trà Vinh đã nêu lên được hiệu quả, trách nhiệm và tinh thần hợp tác với Quý khách hàng',
	buttonLabel: 'Liên hệ với chúng tôi',
	imgStart: 'start',
	img: newsImage2,
	start: 'true',
};

export const newsTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Thông Tin Đấu Giá',
	},
	headline: 'THÔNG BÁO VIỆC ĐẤU GIÁ ĐỐI VỚI DANH MỤC TÀI SẢN',
	description: 'MẶT BẰNG CHO THUÊ VĂN PHÒNG ĐÀO TẠO NGHỀ (VĂN PHÒNG LÀM VIỆC 4)',
	buttonLabel: 'Tìm Hiểu Thêm >',

	linkTo: 'https://dgts.moj.gov.vn/thong-bao-cong-khai-viec-dau-gia/mat-bang-cho-thue-van-phong-dao-tao-nghe-van-phong-lam-viec-4-149015.html',
	imgStart: 'start',
	img: newsImage2,
	start: 'true',
	imgDec1: newsPDF,
	imgDec2: newsPDF2,
};

export const newsThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Công ty Đấu Giá Hợp Danh Bảo Tín Trà Vinh (BPAC) ',
	},
	headline: 'Đồng Hành Đáng Tin Cậy',
	description:
		'Trân trọng gửi đến Quý Khách hàng/Đối tác hồ sơ năng lực bán đấu giá tài sản của Công ty Đấu Giá Hợp Danh Bảo Tín Trà Vinh (BAPC) và lời đề nghị hợp tác.',
	buttonLabel: '',

	linkTo: '/download',
	imgStart: '',
	img: newsImage2,
	start: 'true',
};
