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
