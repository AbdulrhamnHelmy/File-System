const fs = require("fs");
// fs هي مكتبة واختصارها كلمة file system

// ========== creat and update ========
// append
// يمكن استخدامها في تسجيل ملف ويمكن ايضا استخدامها في تعديل الملف

fs.appendFile("myfile.txt", "Hello world!", function (err) {
  if (err) console.log(err);
  else console.log("saved");
});

// =============================

//===========  creat method 2 =========

fs.writeFile("myfile2.txt", "Hello world!2", function (err) {
  if (err) console.log(err);
  else console.log("saved");
});

// =============================

// =========== Delete file ============

fs.unlink("myfile.txt", function (err) {
  if (err) console.log(err);
  else console.log("file deleted");
});

// =============================

// =========== rename file ============

fs.rename("myfile2.txt", "myfile22", function (err) {
  if (err) console.log(err);
  else console.log("file name updated");
});

// =============================
