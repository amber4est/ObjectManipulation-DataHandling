partSeperation="-----------------------------------------------------------";

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

console.log("\nDoes the student object from JSON match the original student object? ", studentFromJSON===student);
console.log("The student's information in an object from the JSON is missing the method that is in the original student object!");

//Part 3: Using Destructuring Assignment
console.log(partSeperation);

let { name, courses } = student;
console.log("Destructured Name: ", name);
console.log("\nDestructured Courses: ", courses);

const scores = [85, 92, 78, 90, 56, 76];
let [firstScore, secondScore] = scores;
console.log("\nStudent's Scores:", scores);
console.log("Destructured first two scores:", firstScore, secondScore);

//Part 4: The Spread Operator
console.log(partSeperation);

let clonedStudent = { ...student }
clonedStudent.graduationYear = 2027;
console.log("Cloned object with added property: \n", clonedStudent);

const newCourses = ["Developing", "Coding"];
let combinedCourses = [...student.courses, ...newCourses];
console.log("\nOriginal Courses: ", student.courses);
console.log("\nNew Courses: ", newCourses);
console.log("\nCombined Courses: ", combinedCourses);

//Part 5: Object Methods
console.log(partSeperation);

student.addCourses = function(courseName) {
    this.courses.push(courseName);
    return `${courseName}`
};

student.numberOfCourses = function() {
    return this.courses.length;
};

console.log(`The student is taking ${student.numberOfCourses()} courses.`);
console.log("The student has just been added to a new course:", student.addCourses("Computer Science"));
console.log("Now the student's courses are: ", courses);
console.log(`The student is now taking ${student.numberOfCourses()} courses.`);

//Bonus Task
console.log(partSeperation);

const totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

const averageScore = totalScore / scores.length;
    
console.log("Scores: ", scores);
console.log("Average Score", averageScore);
console.log(partSeperation);