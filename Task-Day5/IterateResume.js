let resume  = {
    heading : {
        name : "MUKESHKHANNA JAYAVEL",
        number: "0123456789",
        email:"mukeshkj2912@gmail.com",
        place:"TamilNadu,India"
    },
    description : `Enthusiastic B-tech undergraduate student with a strong drive to succeed. 
    Seeking internship or entry-level positions to apply technical skills, problem-solving abilities, and solid academic background in a dynamic organization. 
    Dedicated to contributing effectively to the company's goals while advancing professional development.`,
    skillSection : {
        skills : ["JAVA","SQL","JDBC","Hibernate","Agile"],
        familiar:["HTML/CSS","Javascript","C","OOPs"],
        platforms:["Eclipse IDE","GitHub","Atom","Intel-Quartrus Prime"],
        softskills:["Teamworker","Adaptive","Good communication"],
        language:["English","Tamil"]
    },
    educationSection: {
        highSchool : {
            schoolName: "Rasi International School",
            higherSecondary : 92.6,
            secondary : 85
        },
        underGraduate : {
            schoolName : "SASTRA DEEMED UNIVERSITY",
            educations : "B-tech",
            branch : "Electronics and communication",
            percentage : 73.5
        }
    },
    Projects : ["Bus Reservation System","Image Processing using Fuzzy logic","Enterprises Networking with CISCO packet tracer","Research work on AAO"],
    ExtraCurricularActivities : {
        ASCIEE : {
            position : "Senior member",
            description : "Collaborated with other teams and conducted a Circuit building contest, resulting major positive feedbacks from participants. "
        },
        DAKSH : {
            position : "Marketing Executive",
            description : `Raising monetary and non-monetary sponsorships and conducting workshops based on the theme of DAKSH every year. Fulfilling every promised deliverable for the sponsors.`
        }
    }
}
console.log(resume);

//for loop
console.log()
console.log("FOR LOOP")
let keys = Object.keys(resume);
for(let i=0;i<keys.length;i++){
    console.log(`${keys[i]}: ${resume[keys[i]]}`);
}

// for in loop
console.log()
console.log("FOR IN LOOP");
for(let key in resume){
    console.log(resume[key]);
}

// for of loop
console.log()
console.log("FOR OF LOOP")
for(let key of keys){
    console.log(`${key}: ${resume[key]}`);
}

// forEach loop
console.log()
console.log("FOREACH LOOP")
keys.forEach(x => console.log(`${x}: ${resume[x]}`));

 






