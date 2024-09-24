function getId(student) {
    return new Promise((resolve, reject) => {
        console.log(`Fetch ${student} id`)
        let id;
        let success;

        setTimeout(() => {
            success = true;
            id = "jdoe123";
            
            if (success) {
                console.log(`Got ${student} id`)
                resolve(id);
            } else {
                const error = new Error(`Unable to fetch ${student} id`)
                reject(error);
            }
        }, 1000);
    });
}

function getCourses(student_id) {
    return new Promise((resolve, reject) => {
        console.log(`Fetch ${student_id} courses`)
        let success, courses;
        
        setTimeout(() => {
            success = true;
            courses = ["course-1", "course-2"];
            if (success) {
                console.log(`Got ${student_id} courses`)
                resolve(courses);
            } else {
                reject(new Error(`Unable to get ${student_id} courses`))
            }
        }, 1000);
    });
}

console.log("Listening to events");

getId("John Doe")
    .then((id) => {
        // console.log(id)
        return getCourses(id)
    })
    .then((courses) => {
        console.log(courses);
    })
    .catch((err) => {
        console.error(err)
    })

console.log("Still listening to events");

