import { formidable, IncomingForm } from "formidable";
import http from "http";
import fs from "fs";

http.createServer(function (req, res) {
    if (req.url == "/fileupload") {
      let form = new IncomingForm();
      form.parse(req, function (err, fields, files) {
        let oldpath = files.filetoupload[0].filepath;
        let newpath = "./" + files.filetoupload[0].originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
