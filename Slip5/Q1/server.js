// 1st insrall = npm install formidable

const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {

        const form = new formidable.IncomingForm({
            uploadDir: './uploads',  
            keepExtensions: true    
        });

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Error during file upload.');
                return;
            }

            const uploadedFile = files.uploadedFile;

            if (!uploadedFile) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('No file uploaded. Make sure the form field name is correct.');
                return;
            }

            const oldPath = uploadedFile.filepath || uploadedFile[0]?.filepath;
            const newPath = path.join('./uploads', uploadedFile.originalFilename || uploadedFile[0]?.originalFilename);

            if (!oldPath || !newPath) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('File path problem. Check if the file is selected.');
                return;
            }

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error moving file.');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('File uploaded successfully!');
                res.end();
            });
        });

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <h2>Upload a File</h2>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="uploadedFile" required><br><br>
                <input type="submit" value="Upload">
            </form>
        `);
        res.end();
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');
