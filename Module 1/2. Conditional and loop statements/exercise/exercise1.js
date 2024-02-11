let date = new Date("2024-02-06")
let day = date.getDay()
console.log(day)

// using if else
if (day === 0) {
    console.log("Minggu")
} else if (day === 1) {
    console.log("Senin")
} else if (day === 2) {
    console.log("Selasa")
} else if (day === 3) {
    console.log("Rabu")
} else if (day === 4) {
    console.log("Kamis")
} else if (day === 5) {
    console.log("Jumat")
} else {
    console.log("Sabtu")
}

// using switch case
switch (day) {
    case 0: console.log("Hari Minggu"); break;
    case 1: console.log("Hari Senin"); break;
    case 2: console.log("Hari Selasa"); break;
    case 3: console.log("Hari Rabu"); break;
    case 4: console.log("Hari Kamis"); break;
    case 5: console.log("Hari Jumat"); break;
    case 6: console.log("Hari Sabtu"); break;
}
