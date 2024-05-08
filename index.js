const express = require('express')
const app = express()

app.use(express.static('src'))
app.listen(4000, () => {
    console.log('Server is running')
})

// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice> npm --version
// 10.2.4
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice> cd .\sppuNodeAssignment\
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> npm -y  init
// Wrote to C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment\package.json:

// {
//   "name": "sppunodeassignment",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }


// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> npm install express --save   

// added 64 packages, and audited 65 packages in 4s

// 12 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> node index.js
// Server is running


// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice> git --version
// git version 2.45.0.windows.1
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice> cd .\sppuNodeAssignment\
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git init
// Initialized empty Git repository in C:/Users/siddh/Desktop/Coding/WebDev/NodePratice/sppuNodeAssignment/.git/
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git status
// On branch master

// No commits yet

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         index.js
//         node_modules/
//         package-lock.json
//         package.json
//         src/

// nothing added to commit but untracked files present (use "git add" to track)
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git add index.js
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git add package-lock.json
// warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git add package.json
// warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git add src/
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git status
// On branch master

// No commits yet

// Changes to be committed:
//   (use "git rm --cached <file>..." to unstage)
//         new file:   index.js
//         new file:   package-lock.json
//         new file:   package.json
//         new file:   src/index.html
//         new file:   src/script.js
//         new file:   src/style.css

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         node_modules/

// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git commit -m "First comming without node modules because node modules is heavy and no need to upload it"
// [master (root-commit) eabb068] First comming without node modules because node modules is heavy and no need to upload it
//  6 files changed, 938 insertions(+)
//  create mode 100644 index.js
//  create mode 100644 package-lock.json
//  create mode 100644 package.json
//  create mode 100644 src/index.html
//  create mode 100644 src/script.js
//  create mode 100644 src/style.css
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git status
// On branch master
// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         node_modules/

// nothing added to commit but untracked files present (use "git add" to track)
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git remote add origin "https://github.com/siddhesh2017/sppuNodeJsAssignment.git"
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git push -u origin master
// Enumerating objects: 9, done.
// Counting objects: 100% (9/9), done.
// Delta compression using up to 12 threads
// Compressing objects: 100% (9/9), done.
// Writing objects: 100% (9/9), 9.71 KiB | 1.21 MiB/s, done.
// Total 9 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
// To https://github.com/siddhesh2017/sppuNodeJsAssignment.git
//  * [new branch]      master -> master
// branch 'master' set up to track 'origin/master'.
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> git status
// On branch master
// Your branch is up to date with 'origin/master'.

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         node_modules/

// nothing added to commit but untracked files present (use "git add" to track)
// PS C:\Users\siddh\Desktop\Coding\WebDev\NodePratice\sppuNodeAssignment> 