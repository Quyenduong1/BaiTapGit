// Bài 1: Tính tiền lương nhân viên. 
//  B1: tạo 2 biến : 1 biến: x của lương 1 ngày và 1 biến y của người dùng nhập vào số ngày làm và gán giá trị cho nó
var x = 100000, y = 24 ; 

// B2: tạo 1 biến và gán công thức tính
var a =  x * y ;

// B3: Xuất kết quả 
console.log(" Tiền Lương Nhân Viên : ",a);



// Bài 2 : Tính Giá Trị Trung Bình 
// B1: Tạo 5 biến và gán giá trị cho biến là số thực

var a = -2 , b= -1 , c = 0 , d = 8 , e = 10;

// B2: tạo biến x và gán công thức tính giá trị trung bình 

var x  = (a + b + c + d + e) /5;

// B3 : Xuất kết quả 
console.log("Giá trị trung bình của x : ", x);



// Bài 3: Quy đổi tiền 
// B1: Tạo 1 biến a là Giá USD hiện nay , tạo 1 biến b là người dùng nhập vào số tiền USD 
var a =  23500, b = 4;

// B2: Tạo biến x và gán công thức tính 
var x = b * a;

// B3 xuất kết quả 
console.log("Quy đổi từ USD sang VND là: ",x);





// Bài 4: Tính diện tính , chu vi hcn
// B1: tạo 2 biến cho chiều dài ,chiều rộng của hcn 
var a = 4 , b = 8;
// B2: Tạo biến x , y và gán công thức tính diện tính , chu vi hcn
var x = a * b ;
var y= ( a + b ) * 2;

// B3: Xuất kết quả 
console.log(" Diện tính hcn : ",x);
console.log(" Chu vi hcn: ",y);






// Bài 5: Tính tổng 2 ký số 
// B1: tạo 1 biến nhập vào có 2 chữ số 
let number = 83;
// B2: tách 2 chữ số để tính tổng
let tong = 0;
tong += number %10; // tong = tong + 3
// console.log(tong); 
number = Math.round(number/10);
// console.log(tong,a); 
tong += number; // tong = tong + 8
// console.log(tong,a); 

// b3: xuat ket qua
console.log("Tổng 2 kí số: ",tong);



