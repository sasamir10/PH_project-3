// problem-5

function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (let i of students) {
        if (!("name" in i) || !("score" in i)) {
            return "Invalid";
        }

        if (typeof i.score !== "number") {
            return "Invalid";
        }
    }

    const qualified = students.filter((student) => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}
