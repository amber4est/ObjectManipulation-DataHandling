partSeperation="--------------------------------------";
//Part 1: Understanding and Creating Objects
student = {
    name: "Amber",
    age: 22,
    enrolled: true,
    courses: ["Writing", "JavaScript", "Web Programming", "Databases","Algorithms", "Operating Systems"],

    displayInformation() {
        return `\nStudent: ${this.name}\nAge: ${this.age}\nEnrolled: ${this.enrolled}\nCourses: ${this.courses}\n`
    }
}

console.log(partSeperation);
console.log(`Basic information about a student:\nStudent Name: ${student.name}`);
console.log(`Student Age: ${student.age}\n`);
console.log("Student's complete information:", student.displayInformation());

//Part 2: Working with JSON
console.log(partSeperation);

const studentJSON = JSON.stringify(student);
console.log("Student's information as a JSON string:\n", studentJSON);

const studentFromJSON = JSON.parse(studentJSON);
console.log("\nStudent's information back in an object:\n", studentFromJSON);

console.log("\nOriginal Student Information:\n", student);

console.log("\nThe student's information in an object from the JSON is missing the method that is in the original student object!");

//Part 3: Using Destructuring Assignment
console.log(partSeperation);

let { name, courses } = student;
console.log("Destructured Name: ", name);
console.log("\nDestructured Courses: ", courses);

const scores = [85, 92, 78, 90, 56, 76];
let [firstScore, secondScore] = scores;
console.log("\nStudent's Scores:", scores);
console.log("Destructured first two scores:", firstScore, secondScore);
