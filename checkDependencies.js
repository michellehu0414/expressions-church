// checkDependencies.js
const checkDependencies = require('check-dependencies');

// Configuration options
const config = {
  packageManager: 'npm', // Specify package manager: npm, yarn, pnpm, etc.
  install: false,        // Do not automatically install missing dependencies
  verbose: true          // Show logs
};

// Callback function to handle the result
checkDependencies(config, (result) => {
  if (result.status === 0) {
    console.log('All dependencies are satisfied');
  } else {
    console.error('There are dependency issues:');
    console.log(result.log.join('\n'));
    console.error(result.error.join('\n'));
  }
});
