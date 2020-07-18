const templatePage = "templates/page";
const templateComponent = "templates/component";

const templatePageActions = [
  {
    type: "addMany",
    destination: "packages/web/src/pages/{{name}}",
    base: templatePage,
    templateFiles: templatePage,
  },
  // component
  {
    type: "modify",
    path: "packages/web/src/pages/{{name}}/{{name}}.tsx",
    pattern: /__NAME__/gi,
    template: "{{properCase name}}",
  },
  // index
  {
    type: "modify",
    path: "packages/web/src/pages/{{name}}/index.ts",
    pattern: /__NAME__/gi,
    template: "{{dashCase name}}",
  },
];

const templateComponentActions = [
  {
    type: "addMany",
    destination: "packages/web/src/components/{{name}}",
    base: templateComponent,
    templateFiles: templateComponent,
  },
  // component
  {
    type: "modify",
    path: "packages/web/src/components/{{name}}/{{name}}.tsx",
    pattern: /__NAME__/gi,
    template: "{{properCase name}}",
  },
  // stories
  {
    type: "modify",
    path: "packages/web/src/components/{{name}}/{{name}}.stories.tsx",
    pattern: /__NAME__/gi,
    template: "{{properCase name}}",
  },
  {
    type: "modify",
    path: "packages/web/src/components/{{name}}/{{name}}.stories.tsx",
    pattern: /__PATH__/gi,
    template: "{{dashCase name}}",
  },
  {
    type: "modify",
    path: "packages/web/src/components/{{name}}/{{name}}.stories.tsx",
    pattern: /__TITLE__/gi,
    template: "{{titleCase name}}",
  },
  // tests
  {
    type: "modify",
    path: "packages/web/src/components/{{name}}/{{name}}.test.tsx",
    pattern: /__NAME__/gi,
    template: "{{properCase name}}",
  },
  // index
  {
    type: "modify",
    path: "packages/web/src/components/{{name}}/index.ts",
    pattern: /__NAME__/gi,
    template: "{{dashCase name}}",
  },
];

module.exports = { templatePageActions, templateComponentActions };
