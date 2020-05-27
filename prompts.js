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
    message: 'choice UI ui-framework',
    choices: [
      {
        name: 'Element UI',
        value: 'element-ui'
      },
      {
        name: 'iView',
        value: 'iview'
      },
      {
        name: 'none',
        value: 'none'
      }
    ],
    default: 'none'
  },
  // {
  //   name: 'Mock Server',
  //   type: 'list',
  //   message: 'choice mock server',
  //   choices: [
  //     {
  //       name: 'Easy Mock',
  //       value: 'easymock'
  //     },
  //     {
  //       name: 'Kuaizi db',
  //       value: 'kzdb'
  //     }
  //   ],
  //   default: 'easymock'
  // },
  // {
]