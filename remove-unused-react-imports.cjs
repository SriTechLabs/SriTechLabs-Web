const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walkDir(filepath, callback);
    } else if (filepath.endsWith(".tsx")) {
      callback(filepath);
    }
  });
}

function cleanReactImport(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const reactImport = `import React from "react";`;
  if (content.includes(reactImport)) {
    const used = content.includes("React.");
    if (!used) {
      const updated = content.replace(reactImport, "").trimStart();
      fs.writeFileSync(filePath, updated, "utf-8");
      console.log(`🧹 Cleaned: ${filePath}`);
    }
  }
}

walkDir("src", cleanReactImport);
