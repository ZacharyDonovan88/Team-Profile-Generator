const Employee = require("./Employee");

const internQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What's the name of the intern?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What's the intern's ID?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's ID!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the intern's email?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's email!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What's the intern's school?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's school!");
                return false; 
            }
        }
    },

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = { Intern, internQuestionsArr };