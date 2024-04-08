const express = require("express");
const fs = require("fs").promises;

const app = express();

// Task 1
app.get("/", (req, res) => {
  res.send("Hello, World!\n");
});

async function countWordsInFile(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    const words = data.split(/\s+/).filter((word) => word !== "");
    console.log("Total word count:", words.length);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Task 3
app.get("/countWord", async (req, res) => {
  await countWordsInFile("data.txt");
  res.send("In Console");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
