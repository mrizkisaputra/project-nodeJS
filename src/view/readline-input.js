const fs = require("fs");
const rl = require("./readline-interface.js");
const filesystemMahasiswa = require("./filesystem-data.js");



const inputData = (strQuery) => {
    return new Promise((resolve, reject) => {
        rl.question(strQuery, answerQuery => {
            resolve(answerQuery);
        });
    });
}

const handleSync = async () => {
    try {
        const strNameData = await inputData("input name data mahasiswa :");
        const strEmailData = await inputData("input email data mahasiswa :");
        const strProgramStudyData = await inputData("input program study mahasiswa :");
        const dataMahasiswa = {
            name: strNameData, 
            email: strEmailData, 
            programStudy: strProgramStudyData
        };
        filesystemMahasiswa(dataMahasiswa);
    } catch(err) {

    }
}

handleSync();