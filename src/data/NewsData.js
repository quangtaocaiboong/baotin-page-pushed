// Import images
import newsImage2 from "../assets/newsTwoImg.jpeg";
import newsPDF from "../assets/newsPDF.png";
import newsPDF2 from "../assets/newsPDF2.png";
import newsPDFOne1 from "../assets/newsPDFOne1.png";
import newsPDFOne2 from "../assets/newsPDFOne2.png";

// Import PDFs
import pdf1 from "../assets/pdf/TBDG 92_Benh vien Cai Lay_Nha xe 2 banh.pdf";
import pdf2 from "../assets/pdf/TB 93_Benh vien DKKV Cau Ngang_Nha xe.pdf";
import pdf3 from "../assets/pdf/Thong bao 94_So tai chinh_Ghe go.pdf";
import pdf4 from "../assets/pdf/TBDG 58_So tai chinh Tra Vinh_Phong CC so 1.pdf";
import pdf5 from "../assets/pdf/Thong bao 96_ Văn phòng Tỉnh uỷ Trà Vinh.pdf";
import pdf6 from "../assets/pdf/Thong-bao_Benh-vien-lao-phoi-TV-_Thue-MB.pdf";
import pdf7 from "../assets/pdf/Thong-bao_CTy-thuy-loi-Tra-Vinh_sắt-cống.pdf";
import pdf8 from "../assets/pdf/Thông-bao-56_BQL-Cang-ca.pdf";
import pdf9 from "../assets/pdf/Thông-bao_UBND-xã-Vinh-Kim.pdf";

// Create an array of news objects
export const newsItems = [
  {
    reverse: false,
    inverse: false,
    topLine: {
      text: "Thông Tin",
    },
    headline: "BỆNH VIỆN ĐA KHOA KHU VỰC CAI LẬY",
    description: "Cho thuê mặt bằng nhà xe 2 bánh của Bệnh viện Đa khoa khu vực Cai Lậy",
    buttonLabel: "Thông Tin Thêm >",
    linkToOne: "",
    img: newsImage2,
    imgDecOne1: newsPDFOne1,
    imgDecOne2: newsPDFOne2,
    start: "true",
    pdf: pdf1, // Existing PDF
    dateNote: "",
  },
  {
    reverse: true,
    inverse: true,
    topLine: {
      text: "Thông Tin",
    },
    headline: "BỆNH VIỆN ĐA KHOA KHU VỰC CẦU NGANG",
    description: "Cho thuê mặt bằng nhà xe của Bệnh viện Đa khoa khu vực Cầu Ngang",
    buttonLabel: "Thông Tin Thêm >",
    linkToOne: "",
    img: newsImage2,
    imgDecOne1: newsPDFOne1,
    imgDecOne2: newsPDFOne2,
    start: "true",
    pdf: pdf2, // Initialized PDF
    dateNote: "",
  },
  {
    reverse: false,
    inverse: false,
    topLine: {
      text: "Thông Tin",
    },
    headline: "SỞ TÀI CHÍNH TỈNH TRÀ VINH",
    description: "Đấu giá ghe gỗ và cát sông do Sở Tài chính quản lý",
    buttonLabel: "Tìm Hiểu Thêm >",
    linkTo: "#",
    imgStart: "start",
    img: newsImage2,
    start: "true",
    pdf: pdf3, // Initialized PDF
    imgDec1: newsPDF,
    imgDec2: newsPDF2,
    dateNote: "",
  },
  {
    reverse: true,
    inverse: true,
    topLine: {
      text: "Thông Tin",
    },
    headline: "SỞ TÀI CHÍNH TỈNH TRÀ VINH",
    description: "Đấu giá cơ sở nhà đất Phòng Công chứng số 1 (cũ)",
    buttonLabel: "Tải về >",
    linkTo: "#",
    imgStart: "start",
    img: newsImage2,
    start: "true",
    pdf: pdf4, // Initialized PDF
    imgDec1: newsPDF,
    imgDec2: newsPDF2,
  },
  {
    reverse: false,
    inverse: false,
    topLine: {
      text: "Thông Tin",
    },
    headline: "VĂN PHÒNG TỈNH UỶ TRÀ VINH",
    description: "Thanh lý Hội trường Tỉnh uỷ (cũ) và một phần dãy nhà làm việc 03 tầng của Văn phòng Tỉnh uỷ Trà Vinh",
    buttonLabel: "Tải về >",
    linkTo: "#",
    imgStart: "start",
    img: newsImage2,
    start: "true",
    pdf: pdf5, // Initialized PDF
    imgDec1: newsPDF,
    imgDec2: newsPDF2,
  },
  
];


// Export pdf array for additional use
export const pdfArray = [pdf1, pdf2, pdf3, pdf4, pdf5, pdf6, pdf7, pdf8, pdf9];
