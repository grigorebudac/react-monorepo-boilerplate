const templates = require("./templates/plop-actions-config");

module.exports = (plop) => {
  // Declare a new generator called "newApp" for use with our react-redux-boilerplate app
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "list",
        name: "option",
        message: "What would you like to add ?",
        choices: [
          { name: "module", value: "module" },
          { name: "component", value: "component" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Write the folder name: ",
        validate: (value) => {
          if (/.+/.test(value)) {
            if (/[\w\-. ]+$/.test(value)) {
              return true;
            }
            return "Name must not have any special characters in it.";
          }
          return "Name is required!";
        },
      },
    ],

    actions: (answers) => {
      if (answers.option === "module") {
        return templates.templateModuleActions;
      }

      if (answers.option === "component") {
        return templates.templateComponentActions;
      }

      return null;
    },
  });
};
