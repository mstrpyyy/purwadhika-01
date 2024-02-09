// //Rectangle
// const width = 5
// const length = 3
// //area
// const rectangleArea = width * length
// //perimeter
// const rectanglePerimeter = (width * 2) + (length * 2)
// //result
// console.log(rectangleArea)
// console.log(rectanglePerimeter)


// //Circle
// const radius = 5
// //diameter
// const circleDiameter = radius * 2
// //area
// const circleArea = (Math.PI) * Math.pow(radius, 2)
// //circumference
// const circleCircumference = 2 * (Math.PI) * radius
// //result
// console.log(circleDiameter)
// console.log(circleArea)
// console.log(circleCircumference)


// //Triangle
// const a = 80
// const b = 65
// //angle
// const angle = 180 - a - b
// //result
// console.log(angle)


// //Date difference
// const date1 = new Date("2022-01-20")
// const date2 = new Date("2022-01-22")
// //calculate
// const dateCalc = date2 - date1
// const dateDifference = dateCalc / (1000 * 60 * 60 * 24)
// //result
// console.log(dateDifference)

//Date difference to 2025
const now = new Date()
const date3 = new Date ("2025-01-01")
//calculate
const dateCalc2 = date3 - now
const dateDifference2 = dateCalc2 / (1000 * 60 * 60 *24)
//result
console.log(Math.floor(dateDifference2))


//CONVERT
const day1 = 400
const day2 = 366
//notes
const dayEachYear = 365
const dayEachMonth = 30
//calculate
//year
const years = Math.floor(day1 / dayEachYear)
const dayRemaining = day1 % dayEachYear
//month
const months = Math.floor(dayRemaining / dayEachMonth)
const days = dayRemaining % dayEachMonth
//result
console.log(`${years} year(s), ${months} month(s), ${days} day(s)`)


//CONVERT
const Day2 = 366
//notes
const DayEachYear = 365
const DayEachMonth = 30
//calculate
//year
const Years = Math.floor(Day2 / DayEachYear) //=1
const DayRemaining = Day2 - (Years * DayEachYear)
//month
const Months = Math.floor(DayRemaining / DayEachMonth)
const Days = DayRemaining - (Months * DayEachMonth)
//result
console.log(`${Years} year(s), ${Months} month(s), ${Days} day(s)`)