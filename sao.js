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
    author: {
      message: 'What is your name',
      default: ':gitUser:',
      store: true
    },
    username: {
      message: 'What is your GitHub username',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email',
      default: ':gitEmail:',
      store: true,
      validate: v => /.+@.+/.test(v)
    },
    website: {
      message: 'What is the url of your website',
      default(answers) {
        return `https://github.com/${answers.username}`
      },
      store: true
    },
    cli: {
      message: 'Is a cli project?',
      type: 'confirm',
      default: false
    },
    test: {
      message: 'Choose test :',
      choices: ['travis', 'wercker', 'none'],
      type: 'list',
      default: 'none'
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  filters: {
    'main_test.go': 'test !== "none"',
    '.travis.yml': 'test === "travis"',
    'wercker.yml': 'test === "wercker"',
    'build.sh': 'cli',
    'Makefile': 'cli'
  },
  showTip: true,
  gitInit: true,
  installDependencies: false
}
