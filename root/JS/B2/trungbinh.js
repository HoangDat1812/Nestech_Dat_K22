
let vatly = prompt("Mời nhập điểm Vật Lý");
document.writeln('Điểm vật lý = ' + vatly ); 
let hoahoc = prompt("Mời nhập điểm Hóa Học");
document.writeln('Điểm hóa học=' + hoahoc);
let sinhhoc = prompt("Mời nhập điểm Sinh Học");
document.writeln('Điểm sinh học=' + sinhhoc);

// Ép kiểu từ String sang Number
let diemTrungBinh = (Number(vatly) + Number(hoahoc) + Number(sinhhoc)) / 3;

// Lấy chữ số thập phân đầu tiên sau dấu phẩy
// console.log(diemTrungBinh.toFixed(1));
document.writeln('Điểm trung bình =' + diemTrungBinh.toFixed (1))