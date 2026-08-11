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

// problem-2
function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    for (let i of users) {
        if (!("isActive" in i)) {
            return "Invalid";
        }
    }

    let active = users.filter((user) => {
        return user.isActive === true;
    });

    return active;
}

// problem-3
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }

    let word = caption.split(" ");
    let count = 0;
    let longTag = "";

    for (let i of word) {
        if (i.startsWith("#")) {
            count++;

            let tag = i.slice(1);

            if (tag.length > longTag.length) {
                longTag = tag;
            }
        }
    }

    return {
        hashtagCount: count,
        longestTag: longTag,
    };
}

// problem-4
function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    let total = 0;

    for (let i of scores) {
        if (typeof i !== "number") {
            return "Invalid";
        }

        total += i + 10;
    }

    return total;
}

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
