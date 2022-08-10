// import newsImage1 from "../assets/newsOneImg.jpg"
import newsImage2 from "../assets/newsTwoImg.jpeg"
// import newsImage3 from "../assets/newsThreeImg.jpeg"
import newsPDF from "../assets/newsPDF.png"
import newsPDF2 from "../assets/newsPDF2.png"
import newsPDFOne1 from "../assets/newsPDFOne1.png"
import newsPDFOne2 from "../assets/newsPDFOne2.png"
export const newsOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Thông Tin Đấu Giá',
	},
	headline: "THÔNG BÁO VIỆC ĐẤU GIÁ QUYỀN SỬ DỤNG ĐẤT",
	description: 'TỔ CHỨC BÁN ĐẤU GIÁ TÀI SẢN DO CHI CỤC THI HÀNH ÁN DÂN SỰ THÀNH PHỐ TRÀ VINH',
	buttonLabel: 'Thông Tin Thêm >',
	linkToOne: '',
	img: newsImage2,
	imgDecOne1:newsPDFOne1,
	imgDecOne2:newsPDFOne2,
	start: 'true',
	dateNote: "Thời gian tổ chức: 9:00 12/08/2022"

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
	dateNote: "Thời gian tổ chức: 14:00 19/09/2022"
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
