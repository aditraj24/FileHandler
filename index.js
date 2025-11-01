const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (!err) {
      res.render("index", { files: files });
    } else {
      res.send("Error reading files");
    }
  });
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    if (!err) {
      res.render("file", { filename: req.params.filename, filedata: filedata });
    } else {
      res.send("Error reading file");
    }
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      if (!err) {
        res.redirect("/");
      } else {
        res.send("Error creating file");
      }
    }
  );
});

// Edit page route
app.get("/edit/:filename", (req, res) => {
  const filePath = `./files/${req.params.filename}`;
  fs.readFile(filePath, "utf-8", (err, filedata) => {
    if (err) return res.send("Error reading file");
    res.render("edit", { oldFilename: req.params.filename, filedata });
  });
});

// Update file
app.post("/update", (req, res) => {
  const oldPath = `./files/${req.body.oldFilename}`;
  const newPath = `./files/${req.body.newFilename.split(" ").join("")}`;
  const data = req.body.details;

  // If filename changed, rename first
  if (req.body.oldFilename !== req.body.newFilename) {
    fs.rename(oldPath, newPath, (err) => {
      if (err) return res.send("Error renaming file");
      fs.writeFile(newPath, data, (err) => {
        if (err) return res.send("Error updating file");
        res.redirect("/");
      });
    });
  } else {
    fs.writeFile(oldPath, data, (err) => {
      if (err) return res.send("Error updating file");
      res.redirect("/");
    });
  }
});

// Delete file
app.post("/delete/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "files", filename);
  
  fs.unlink(filePath, (err) => {
    if (err) console.error("Error deleting file:", err);
    res.redirect("/");
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.get("/", (req, res)=>{
//     res.render("index", {name: "Buggu"});
// });
// app.get("/:username", (req, res)=>{
//     res.send(`Welcome, ${req.params.username}`);
// });
// app.get("/:username/:age", (req, res)=>{
//     res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
// });
