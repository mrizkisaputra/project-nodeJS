const fs = require("fs");


const filesystemMahasiswa = (dataMahasiswa) => {
    const readFileDataMahasiswa = fs.readFileSync("../data/data-source-mahasiswa.json", "utf-8");
    const data = JSON.parse(readFileDataMahasiswa);
    data.push(dataMahasiswa);
    fs.writeFileSync("../data/data-source-mahasiswa.json", JSON.stringify(data));
}



module.exports = filesystemMahasiswa;