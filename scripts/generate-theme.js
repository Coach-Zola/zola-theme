var fs = require('fs');

/**
 * Current theme structure is "theme/Icon=NAME, 12/24=IS24, White/Grey=ISGREY.svg"
 */

const SRC_FOLDER = "raw_theme"
const SPLIT = ',';
const SEPARATOR = '/';

colors = [
    ["danger", "#ED1C24"],
    ["warn", "#FF931E"],
    ["success", "#22B573"],
    ["alernative", "#58DBCB"],

    ["white", "#FEFDFF"],
    ["black", "#070214"],

    ["xdark", "#383838"],
    ["dark", "#7B797D"],
    ["grey", "#CECECE"],
    ["light", "#EAEAEA"],
    ["xlight", "#F3F3F3"],

    ["primary", "#776BFF"]
]

fs.readdirSync(SRC_FOLDER).forEach(folder => {
    let name = folder.split(SPLIT)[0].replace("Icon=", "").toLowerCase();
    fs.readdirSync(SRC_FOLDER + SEPARATOR + folder).forEach(subFolder => {
        let is24 = subFolder.split(SPLIT)[0].replace("24=", "") == "True";
        fs.readdirSync(SRC_FOLDER + SEPARATOR + folder + SEPARATOR + subFolder).forEach(file => {
            let isGrey = file.split(SPLIT)[0].replace("Grey=", "").replace(".svg", "") == "True";

            let src_name = SRC_FOLDER + SEPARATOR + folder + SEPARATOR + subFolder + SEPARATOR + file;
            
            if (!isGrey) {
                colors.forEach(color => {
                    let dest_dir = "icons" + SEPARATOR + (is24 ? "24x24":"12x12") + SEPARATOR + color[0];
                    let dest_fname = dest_dir + SEPARATOR + name + ".svg";
                   
                    try {
                        fs.mkdirSync(dest_dir);
                    } catch(err) {}
                    let data = fs.readFileSync(src_name, 'utf8');
                    let result = data.replace("#FEFDFF", color[1]);
                    fs.writeFileSync(dest_fname, result, 'utf8');
                });
            }
        });
    });
});