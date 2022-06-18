//file system in nodejs

// read files

//create files

//update files

//delete files

//rename files

//create files...to make file exist in your local path/directory
var fs = require('fs');
//==================================================================
/*
//fs.writeFile  //fs.openFile() //fs.appendFile()

fs.writeFile('myfirstfile.txt', 'hello world', (err) => {
    //displays error if present
    if (err) throw err;
    console.log('file reated suessfully');
})*/
//=========================================================================
/*
//to add to an already existing file or append or update
fs.writeFile('myfirstfile.txt', 'Hello world! \nwe are making progress \nThank you Zuri', (err) => {
    if(err) throw err;
    console.log('file update successful');
})
*/
//=============================================================
/*
fs.appendFile('myfirstfile.txt', '\nHello world! \nwe are making progress \nLearning Nodejs \nThank you Zuri', (err) => {
    if(err) throw err;
    console.log('file update successful');
})*/

//==============================================================
//read file
/*fs.readFile('test.html', (err, data)=> {
    if(err) throw err;
    console.log(data);
})*/

//to read file, create a server, pass in the filename
/*
const http = require('http');
const server = http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
}).listen(4000);*///set port to listen from
//=====================================================================
/*
//TO DELETE FILES
fs.unlink('lily.txt', (err) => {
    if (err) throw err;
    console.log('file deleted');
}); 
*/
//=====================================================================

//TO RENAME FILES
//fs.rename('old path', 'new path', error throw)
fs.rename('times.txt', 'tames.txt', (err) => {
    if (err) throw err;
    console.log('file renamed sucessfuly');

});
