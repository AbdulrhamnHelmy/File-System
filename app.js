const http = require("http");
const fs = require("fs");

// كود ازاي تكريت سيرفر
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello world I am modey salah");
  })
  .listen(3005);
console.log("server is runing on port 80");

// =============================

// كود ازاي تقرأ الداتا
http
  .createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(80);
console.log("server is runing on port 80");

// =========================================================

// Synchronous and Asynchronous
// غير تزامني   و      تزامني

Synchronous;
const listItem = function (items) {
  items.forEach(function (item) {
    console.log(item);
  });
};

const items = ["Buy milk", "Buy coffee"];
listItem(items);

setTimeout(function () {
  console.log("hello");
}, 5000);

// ================

// امثله
let one = function () {
  setTimeout(function () {
    console.log("one");
  });
};

let two = function () {
  setTimeout(function () {
    console.log("two");
  });
};

let three = function () {
  console.log("three");
};

one();
two();
three();
// تم تنفيذ التالته الاول لانها تزامنيه
