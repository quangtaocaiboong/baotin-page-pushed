// import newsImage1 from "../assets/newsOneImg.jpg"
import newsImage2 from "../assets/newsTwoImg.jpeg";
// import newsImage3 from "../assets/newsThreeImg.jpeg"
import newsPDF from "../assets/newsPDF.png";
import newsPDF2 from "../assets/newsPDF2.png";
import newsPDFOne1 from "../assets/newsPDFOne1.png";
import newsPDFOne2 from "../assets/newsPDFOne2.png";

import pdf1 from "../assets/pdf/TBDG 92_Benh vien Cai Lay_Nha xe 2 banh.pdf";
import pdf2 from "../assets/pdf/TB 93_Benh vien DKKV Cau Ngang_Nha xe.pdf";
import pdf3 from "../assets/pdf/TB-so-1337-TB-TTYT-Chau-Thanh-Bên-Tre.pdf";
import pdf4 from "../assets/pdf/TB18.-ket-qua-lua-to-chuc-dau-gia_BV-Ca-Mau.pdf";
import pdf5 from "../assets/pdf/Thong-bao-57_5-xe-khac_So-tai-chinh-Tra-Vinh.pdf";
import pdf6 from "../assets/pdf/Thong-bao_Benh-vien-lao-phoi-TV-_Thue-MB.pdf";
import pdf7 from "../assets/pdf/Thong-bao_CTy-thuy-loi-Tra-Vinh_sắt-cống.pdf";
import pdf8 from "../assets/pdf/Thông-bao-56_BQL-Cang-ca.pdf";
import pdf9 from "../assets/pdf/Thông-bao_UBND-xã-Vinh-Kim.pdf";

export const newsOne = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Thông Tin",
  },
  headline: "BỆNH VIỆN ĐA KHOA KHU VỰC CAI LẬY",
  description:
    "Cho thuê mặt bằng nhà xe 2 bánh của Bệnh viện Đa khoa khu vực Cai Lậy",
  buttonLabel: "Thông Tin Thêm >",
  linkToOne: "",
  img: newsImage2,
  imgDecOne1: newsPDFOne1,
  imgDecOne2: newsPDFOne2,
  start: "true",
  dateNote: "",
};
export const newsPDFOne = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Thông Tin",
  },
  headline: "BỆNH VIỆN ĐA KHOA KHU VỰC CẦU NGANG",
  description:
    "Cho thuê mặt bằng nhà xe của Bệnh viện Đa khoa khu vực Cầu Ngang",
  buttonLabel: "Thông Tin Thêm >",
  linkToOne: "",
  img: newsImage2,
  imgDecOne1: newsPDFOne1,
  imgDecOne2: newsPDFOne2,
  start: "true",
  dateNote: "",
};

export const newsTwo = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Thông Tin",
  },
  headline: "BỆNH VIỆN ĐA KHOA KHU VỰC CẦU NGANG",
  description:
    "Cho thuê mặt bằng nhà xe của Bệnh viện Đa khoa khu vực Cầu Ngang",
  buttonLabel: "Tìm Hiểu Thêm >",
  linkTo:
    "#",
  imgStart: "start",
  img: newsImage2,
  start: "true",
  imgDec1: newsPDF,
  imgDec2: newsPDF2,
  dateNote: "",
};
export const newsPDFTwo = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Thông Tin",
  },
  headline: "THÔNG BÁO VIỆC ĐẤU GIÁ ĐỐI VỚI DANH MỤC TÀI SẢN",
  description: "",
  buttonLabel: "Tải về >",
  linkTo:
    "#",
  imgStart: "start",
  img: newsImage2,
  start: "true",
  imgDec1: newsPDF,
  imgDec2: newsPDF2,
};
export const newsThree = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Công ty Đấu Giá Hợp Danh Bảo Tín Trà Vinh (BPAC) ",
  },
  headline: "Đồng Hành Đáng Tin Cậy",
  description:
    "Trân trọng gửi đến Quý Khách hàng/Đối tác hồ sơ năng lực bán đấu giá tài sản của Công ty Đấu Giá Hợp Danh Bảo Tín Trà Vinh (BAPC) và lời đề nghị hợp tác.",
  buttonLabel: "",

  linkTo: "/download",
  imgStart: "",
  img: newsImage2,
  start: "true",
};

export const pdfArray = [pdf1, pdf2, pdf3, pdf4, pdf5, pdf6, pdf7, pdf8];
