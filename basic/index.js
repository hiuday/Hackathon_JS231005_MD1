const numbers = "98869"
function findNumber(numbers) {
    //chuyển đổi chuỗi thành mảng
    const numberArray = numbers.split("").map((number) => parseInt(number));
     // khởi tạo biến đệm

     let MaxNumber = numberArray[0];
     for (const number of numberArray) {
        if (number > MaxNumber) {
            MaxNumber = number;
        }
        //
        if(number !== MaxNumber && numberArray.filter((n) => n === number).length === 1) {
            MaxNumber = number;
            break;
            };
        }
        return MaxNumber;
     }
     
     const MaxNumber = findNumber(numbers);
     console.log(MaxNumber,"số lớn nhất và duy nhất");


// bài 2 tìm số nguyên tố 

function isPrimeNumber(number) {
    // Nếu  nhỏ hơn 2, thì không phải là số nguyên tố
    if (number < 2) {
      return false;
    }
  
    // Nếu số bằng 2, thì là số nguyên tố
    if (number == 2) {
      return true;
    }
  
    // Duyệt qua các số từ 2 đến căn bậc hai của số
    for (let i = 2; i * i <= number; i++) {
      // Nếu số chia hết cho một số khác 1 và chính nó, thì là số nguyên tố
      if (number % i === 0) {
        return false;
      }
    }
  
    // Nếu không chia hết cho bất kỳ số nào, thì là số nguyên tố
    return true;
  }
// Hàm tính tổng các số nguyên tố trong một chuỗi
  function sumPrimeNumbers(numbers) {
    // Chuyển đổi chuỗi thành mảng số nguyên
    const numberArray = numbers.split("").map((number) => parseInt(number));
  
    // Khởi tạo biến để lưu trữ tổng các số nguyên tố
    let sum = 0;
  
    // Duyệt qua mảng số
    for (const number of numberArray) {
      // Nếu số là số nguyên tố và chưa xuất hiện trước đó
      if (isPrimeNumber(number) && numberArray.filter((n) => n === number).length === 1) {
        // Thêm số vào tổng
        sum += number;
      }
    }
  
    // Nếu không có số nguyên tố nào
    if (sum === 0) {
      // Trả về 0
      return 0;
    }
  
    return sum;
  }
  
  const PrimeNumber = "12345";
  const CountPrimeNumber = sumPrimeNumbers(PrimeNumber);
  console.log(CountPrimeNumber,"tổng các số nguyên tô"); // 2+3+5 = 10


// bài 4
// Hàm xóa ký tự số trong chuỗi
function removeNumbers() {
    // Khởi tạo biến để lưu trữ chuỗi kết quả
    let result = "";
  
    // Duyệt qua chuỗi
    for (const character of string) {
      // Nếu đó là không phải số
      if (!Number(character)) {
        // Thêm ký tự vào chuỗi kết quả
        result += character;
      }
    }
  
    return result;
  }
  
  const string = "Hello, 12345 World!";
  const result = removeNumbers(string);
  console.log(result); // Hello, World!


//   bài 5 đảo ngược
  // Hàm đảo ngược các thành phần trong chuỗi
function reverseString() {
    // Khởi tạo biến để lưu trữ chuỗi kết quả
    let resultReverse = "";
  
    // Duyệt qua chuỗi
    for (const word of string1.split(" ")) {
      // Đảo ngược chuỗi
      const reversedWord = word.split("").reverse().join("");
  
      // Thêm chuỗi đảo ngược vào chuỗi kết quả
      resultReverse += reversedWord + " ";
    }
  
    
    return resultReverse;
  }
  const string1 = "Hello, world!";
  const resultReverse = reverseString(string);
  console.log(resultReverse); // ,olleH !dlrow 
  
// function createheart() {
//     let resultHeart = "";
//     const Heart_height = i;
//     const Heart_witdh = j;
//     for (let i = 0; i < Heart_height; i++) {
//            if (i === 0) {
            
//            }
        
//     }
// }





 
