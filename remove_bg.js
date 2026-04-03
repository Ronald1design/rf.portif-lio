import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function main() {
    const inputPath = path.resolve('public/img/download__20_-removebg-preview (1).png');
    const outputPath = path.resolve('public/img/profile-nobg.png');

    console.log('Starting background removal...');
    try {
        const bufferIn = fs.readFileSync(inputPath);
        const blobIn = new Blob([bufferIn], { type: 'image/png' });
        const blob = await removeBackground(blobIn, { progress: () => { }, debug: true });
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync(outputPath, buffer);
        console.log('Background removed successfully! Saved to', outputPath);
    } catch (error) {
        console.error('Error during background removal:', error);
        fs.writeFileSync('error.txt', String(error?.stack || error));
    }
}

main();
