const { spawn } = require('child_process');

// Replace 'path/to/your/script.py' with the actual path to your Python script
// and 'arg1', 'arg2' with any arguments your script needs.
const pythonProcess = spawn('python', ['app.py', 'arg1', 'arg2']);

pythonProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

pythonProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});