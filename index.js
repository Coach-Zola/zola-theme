/* Convert RGB to Hex */
var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"); 

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + _hex(rgb[1]) + _hex(rgb[2]) + _hex(rgb[3]);
}

function _hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

/* SCRIPTS */
document.addEventListener('DOMContentLoaded', async () => {
    const multidropdown = new SlimSelect({
        select: "#multidropdown",
        placeholder: "Multidropdown"
    });
});

document.addEventListener('DOMContentLoaded', async () => {
    const multidropdown = new SlimSelect({
        select: "#multidropdown2",
        placeholder: "Multidropdown2"
    });
});

const images = document.getElementsByTagName("img");
for (let i=0; i<images.length; i++) {
    images[i].addEventListener("click", () => {
        navigator.clipboard.writeText(images[i].src);
    });
};

const colors = document.getElementsByClassName("color");
for (let i=0; i<colors.length; i++) {
    colors[i].addEventListener("click", () => {
        const style = window.getComputedStyle(colors[i]);
        navigator.clipboard.writeText(rgb2hex(style.backgroundColor));
    });
};