const Employee = require("./Employee");

const engineerQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the employee?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the employee's name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What's the ID of the engineer?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter an ID!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the engineer's email?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter an email!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What's the GitHub user name?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter a GitHub user name!");
                return false; 
            }
        }
    },

]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

	getRole() {
		return 'Engineer';
	}
	getGithub() {
		return this.github;
	}

}

module.exports = { Engineer, engineerQuestionsArr };