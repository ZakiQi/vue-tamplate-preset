module.exports = [
  {
    name: 'cssPreprocessor',
    type: 'list',
    message: 'Add support for CSS pre-processors like Sass or Less',
    choices: [
      {
        name: 'Less',
        value: 'less'
      },
      {
        name: 'Sass/SCSS',
        value: 'sass'
      }
    ],
    default: 'less'
  },
  {
    name: 'Vue Router mode',
    type: 'list',
    message: 'Choice Vue Router History mode',
    choices: [
      {
        name: 'Hash',
        value: 'hash'
      },
      {
        name: 'history',
        value: 'history'
      }
    ],
    default: 'hash'
  },
  {
    name: 'Typescript',
    type: 'confirm',
    message: 'Add support for the TypeScript language (default: None)',
    default: false
  },
  {
    name: 'ui-framework',
    type: 'list',
    message: 'choice UI Framework',
    choices: [
      {
        name: 'iView',
        value: 'iview'
      },
      {
        name: 'Element UI',
        value: 'element-ui'
      }
    ],
    default: 'element-ui'
  },
  {
    name: 'Mock Server',
    type: 'list',
    message: 'choice mock server',
    choices: [
      {
        name: 'Easy Mock',
        value: 'easymock'
      },
      {
        name: 'Kuaizi db',
        value: 'kzdb'
      }
    ],
    default: 'easymock'
  },
  {
    name: 'Server Port',
    type: 'input',
    message: 'Input DevServer Port(default: 8081)',
    default: '8081',
    validate: (n) => {
      return !isNaN(+n)
    }
  }
]