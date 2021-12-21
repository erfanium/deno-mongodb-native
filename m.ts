const files: string[] = [];

function readDir(currentDir: string) {
  const src = Deno.readDirSync(currentDir);
  for (const path of src) {
    if (path.isFile) {
      files.push(currentDir + "/" + path.name);
    } else {
      readDir(currentDir + "/" + path.name);
    }
  }
}

readDir("./src");

for (const fileSrc of files) {
  const file = Deno.readTextFileSync(fileSrc);
  const lines = file.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('from ".')) {
      // remove two last chars
      const newLine = line.substring(0, line.length - 2) + `.ts";`;
      lines[i] = newLine;
    }
    if (line.includes("from '.")) {
      // remove two last chars
      const newLine = line.substring(0, line.length - 2) + ".ts';";
      lines[i] = newLine;
    }
  }

  const newFile = lines.join("\n");
  Deno.writeTextFileSync(fileSrc, newFile);
}
