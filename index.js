const fs = require('fs/promises');
const path = require('path');

const sortFolder = async (readFolder, gender,writeFolder) => {
    try {
        const folderPath = path.join(__dirname, readFolder);

        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const pathFile = path.join(folderPath, file);

            const data = await fs.readFile(pathFile);

            const user = JSON.parse(data.toString());

            if (user.gender !== gender) {
               await fs.rename(pathFile, path.join(__dirname, writeFolder, file));
            }
        }

    } catch (e) {
        console.error(e)
    }

};

sortFolder('girls', 'female', 'boys');
