 // จงเขียนโปรแกรมตรวจสอบปีที่มีกุมภาพันธ์ 29 วัน
// ตัวอย่าง
// ปีที่มี 29 คือ 2000, 2004, 2008
// ทุก 4 ปี มี 29 วัน
// ยกเว้น
// ทุก 100 ปี มี 28 วัน
// ทุก 400 ปี มี 29 วัน
// (สามารถใช้ภาษาอะไรในการเขียนโปรแกรมก็ได้หรือเขียนเป็น Pseudocode)

//  มองภาพใหญ่ก่อน
//  is / 4 = 0     >    is /100 = 0         > is / 400 > is leap year
//  > No                > no                >no
// not leap year        > is leap year      > not leap year

function findLeapYear(year) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is leap year`;
      } else {
        return `${year} is not a leap year`;
      }
    } else {
      if (year % 4 === 0) {
        return `${year} is leap year`;
      } else {
        return `${year} is not a leap year`;
      }
    }
  }
  
  console.log(findLeapYear(2999)); 