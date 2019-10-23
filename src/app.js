import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

/** 
 * Configuration
*/

const pathTraining = path.resolve(__dirname, '../training');
const allowExtension = ['.js'];

/**
 * Find all files from training directory
 */
const filesTraining = 
            fs
            .readdirSync(pathTraining)
            .filter(file => (
                    fs.statSync(path.join(pathTraining, file)).isFile()
                    && allowExtension.includes(path.extname(file))
                )
            ); 
/**
 * Create path to latest training script
 */
const pathLatestScript = path.join(pathTraining, filesTraining.slice(-1).toString());

/**
 * Inject latest script
 */
console.log(chalk.bgGreen(`SCRIPT ${chalk.black(pathLatestScript)} IS RUNNING...`))
require(pathLatestScript);
