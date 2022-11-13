



// questions

// manager
const addManager = [
    {
        type: 'input',
        name:'name',
        message: "what is your name?",
        default: 'Manager',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'ID',
        message: "what is your ID?",
        default: 'ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'email',
        message: "what is your email?",
        default: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'office number',
        message: "what is your office number?",
        default: 'office number',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },

   ];
    // engineer
   const addEngineer = [
    {
        type: 'input',
        name:'name',
        message: "what is your name?",
        default: 'Manager',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'ID',
        message: "what is your ID?",
        default: 'ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'email',
        message: "what is your email?",
        default: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'GitHub user name',
        message: "what is your GitHub user name?",
        default: 'GitHub user name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub user name is required.");
            }
            return true;
        }
    },

   ];
   // Intern
   const addIntern = [
    {
        type: 'input',
        name:'name',
        message: "what is your name?",
        default: 'Manager',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'ID',
        message: "what is your ID?",
        default: 'ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'email',
        message: "what is your email?",
        default: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name:'School',
        message: "what is the school you attend too?",
        default: 'School',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid School is required.");
            }
            return true;
        }
    },

   ];

// end of questions