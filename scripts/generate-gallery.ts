import { existsSync, mkdirSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export interface FileSource {
  name: string;
  webpPath: string;
  thumbPath: string;
}

const inputDir = path.join(__dirname, '../images');
const outputDir = path.join(__dirname, '../../public/images');

// extensions autorisées (images courantes)
const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp'];
const fileList: { [key: string]: FileSource } = {};

async function main() {
  // Création de l'inputDir s'il n'existe pas
  createDirIfNotExists(inputDir);

  // Nettoyage du dossier de sortie
  if (existsSync(outputDir)) {
    await fs.rm(outputDir, { recursive: true });
  }
  await fs.mkdir(outputDir, { recursive: true });

  await processDirectory(inputDir, outputDir);

  const json = JSON.stringify(Object.values(fileList));
  await fs.writeFile(`${outputDir}/images.json`, json, 'utf8');
}

main().catch((err) => {
  console.error('Erreur dans le traitement :', err);
});

async function processDirectory(inputPath: string, outputPath: string) {
  const entries = await fs.readdir(inputPath, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(inputPath, entry.name);
    const baseName = path.parse(entry.name).name;
    const destBasePath = path.join(outputPath, baseName);

    if (entry.isDirectory()) {
      await fs.mkdir(destBasePath, { recursive: true });
      await processDirectory(srcPath, destBasePath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (validExtensions.includes(ext)) {
        await fs.mkdir(outputPath, { recursive: true });
        await processImage(srcPath, destBasePath);
      }
    }
  }
}

async function processImage(src: string, destBasePath: string) {
  try {
    console.log('src', src);

    const webpPath = `${destBasePath}.webp`;
    const thumbPath = `${destBasePath}_thumb.webp`;

    fileList[destBasePath] = {
      name: path.basename(destBasePath),
      webpPath: 'images' + webpPath.replace(outputDir, ''),
      thumbPath: 'images' + thumbPath.replace(outputDir, ''),
    };

    await sharp(src)
      .resize({
        width: 800,
        height: 800,
        fit: 'inside',
      })
      .webp({ quality: 80 })
      .toFile(webpPath);

    await sharp(src)
      .resize({
        width: 320,
        height: 320,
        fit: 'cover',
      })
      .webp({ quality: 70 })
      .toFile(thumbPath);

    console.log(`Traitée : ${webpPath} + thumbnail`);
  } catch (err) {
    console.error(`Erreur sur ${src} :`, err);
  }
}

function createDirIfNotExists(dirPath: string) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}
