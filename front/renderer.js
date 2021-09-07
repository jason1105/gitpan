// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { shell } = require('electron')
const path = require('path');
const child = require('child_process').execFile;

document.querySelector('#start_button').onclick = () => {

    var executablePath = "C:\\my-projects\\rust\\rust-learning\\gitgit\\target\\debug\\gitgit.exe";
    var git_dir_path = document.querySelector('#path').value;
    git_dir_path = path.normalize(git_dir_path)

    console.log(git_dir_path)

    const subprocess = child(executablePath, [git_dir_path], function(err, stdout, stderr) {
        console.log(err)
        console.log(stdout)
        console.log(stderr)
    })


    subprocess.stdout.on('data', (data) => {
      console.log(`Received chunk ${data}`);
    })
}