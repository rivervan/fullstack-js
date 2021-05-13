import {promises as fs} from 'fs';
const sharp = require('sharp');


export const writer = async () => {

    let myFile;
    try {
        myFile = await fs.open('./src/assets/full/file.txt', 'a+');
        await myFile.write('add text y datos');
        console.log('Se grabo mas datos');

        sharp('./src/assets/full/fjord.jpg')
            .resize(400,250).toFile('./src/assets/thumb/image.jpg').catch((err: string) => {console.log('No se pudo resize la image: ' + err)})

    } catch (err) {
        console.log('Error: ' + err);
    } finally {
        await  myFile?.close
    }


}



