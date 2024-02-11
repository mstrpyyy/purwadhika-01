//RECTANGLE
const length = 5
const width = 3
//Area
const rectangleArea = length * width
//Perimeter
const rectanglePerimeter = (length * 2) + (width * 2)
//result
console.log(rectangleArea)
console.log(rectanglePerimeter)




//CIRCLE
const radius = 5
//Diameter
const circleDiameter = radius * 2
//Circumference
const circleCircumference = 2 * Math.PI * radius
//Area
const circleArea = Math.PI * (Math.pow(radius, 2))
//result
console.log(circleDiameter)
console.log(circleCircumference)
console.log(circleArea)




//TRIANGLE
const a = 80
const b = 65
//angles
const triangleAngle = 180 - (a + b)
//result
console.log(triangleAngle)




//DATE DIFFERENCE
// date
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
// calculation
const timeDifference = date2 - date1;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// result
console.log(daysDifference);




//CONVERT
const days1 = 400
const days2 = 366
//notes
const daysInYear = 365
const daysInMonth = 30
//calculation days1
//years
const years = Math.floor(days1 / daysInYear)
const remainingDaysAfterYears = days1 % daysInYear
//months
const months = Math.floor(remainingDaysAfterYears / daysInMonth);
const remainingDaysAfterMonths = remainingDaysAfterYears % daysInMonth;
//days
const daysRemaining = remainingDaysAfterMonths;
//result
console.log(`${years} years, ${months} months, ${daysRemaining} days`)
// //calculation days2
// //years
// const years = Math.floor(days2 / daysInYear)
// const remainingDaysAfterYears = days2 % daysInYear
// //months
// const months = Math.floor(remainingDaysAfterYears / daysInMonth);
// const remainingDaysAfterMonths = remainingDaysAfterYears % daysInMonth;
// //days
// const daysRemaining = remainingDaysAfterMonths;
// //result
// console.log(`${years} years, ${months} months, ${daysRemaining} days`)




//DATE DIFFERENCE TO 2025
// date
const tanggal1 = new Date();
const tanggal2 = new Date("2025-01-01");
// calculation
const timeDifferences = tanggal2 - tanggal1;
const daysDifferences = Math.floor(timeDifferences / (1000 * 60 * 60 * 24));
// result
console.log(daysDifferences);