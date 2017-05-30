module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my go project`
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    },
    test: {
      message: 'Choose test :',
      type: 'list',
      choices: [
        'travis',
        'wercker',
        'none'
      ]
    }
  },
  filters: {
    'main_test.go': 'test !== \'none\'',
    '.travis.yml': 'test === \'travis\'',
    'wercker.yml': 'test === \'wercker\''
  },
  showTip: false,
  gitInit: true,
  installDependencies: false
}
