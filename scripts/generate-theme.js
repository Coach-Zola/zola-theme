var fs = require('fs');

/**
 * Current theme structure is "theme/Icon=NAME, 12/24=IS24, White/Grey=ISGREY.svg"
 */

const SRC_FOLDER = "raw_theme"
const SPLIT = ',';
const SEPARATOR = '/';

fs.readdirSync(SRC_FOLDER).forEach(folder => {
    let name = folder.split(SPLIT)[0].replace("Icon=", "").toLowerCase();
    fs.readdirSync(SRC_FOLDER + SEPARATOR + folder).forEach(subFolder => {
        let is24 = subFolder.split(SPLIT)[0].replace("24=", "") == "True";
        fs.readdirSync(SRC_FOLDER + SEPARATOR + folder + SEPARATOR + subFolder).forEach(file => {
            let isGrey = file.split(SPLIT)[0].replace("Grey=", "").replace(".svg", "") == "True";
            let dest_fname = "icons" + SEPARATOR + (is24 ? "24x24":"12x12") + SEPARATOR + (isGrey ? "grey":"white") + SEPARATOR + name + ".svg";
            fs.copyFileSync(SRC_FOLDER + SEPARATOR + folder + SEPARATOR + subFolder + SEPARATOR + file, dest_fname);
        });
    });
});