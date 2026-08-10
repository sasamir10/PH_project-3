// problem-1
function studentIntroduction(student) {
    if (
        typeof student != "object" ||
        !("name" in student) ||
        !("age" in student) ||
        !("course" in student)
    ) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}
