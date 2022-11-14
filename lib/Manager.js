const Employee = require("./Employee");

const managerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What's the name of the manager?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the manager's name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What's the ID of the manager?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the manager's ID!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the manager's email?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the manager's email!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's the manager's office number?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the manager's office number!");
                return false; 
            }
        }
    },

]

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerQuestionsArr } ;