//3 random courses
const coursesGrid = document.getElementById("home-top-courses");

function generateRandomNumbers(len) {
    const numbers = new Set();
    while (numbers.size < 3) {
        numbers.add(Math.floor(Math.random() * len));
    }
    return Array.from(numbers);
}
const randomNumbers = generateRandomNumbers(courses.length);
console.log(randomNumbers);
for (let i = 0; i < 3; i++) {
    coursesGrid.innerHTML +=
        '<div class="home-courses-top-info"><img src="' +
        courses[randomNumbers[i]].img +
        '" alt="' +
        courses[randomNumbers[i]].titre +
        '" /><p>' +
        courses[randomNumbers[i]].titre +
        "</p><p><b>$" +
        courses[randomNumbers[i]].prix +
        "</b></p></div>";
}

//Set Current Year
document.getElementById("footer-year").innerText = new Date().getFullYear();
