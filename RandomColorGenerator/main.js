const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const rgbColorValue = document.querySelector('.rgb-color-value');
const copyRGBColor = document.querySelector('.rgb-copy');
const copyHexColor = document.querySelector('.hex-copy');

//random hex color 
hexBtn.addEventListener('click', ()=> {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";
    for(let i=0, charSetLength = characterSet.length; i<6; ++i){
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength)
        )
    }
    //console.log(hexColorOutput);
    hexColorValue.textContent = `#${hexColorOutput}`;
    leftContainer.style.backgroundColor =  `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`;    
});

function copyHexColorToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert(`Color copied ${hexColorValue.textContent}`)
}
copyHexColor.addEventListener("click", copyHexColorToClipBoard);


//rgb color 
const rgbBtn = document.querySelector('.rgb-btn');
let rgbclr = "";

rgbBtn.addEventListener('click', ()=> {
    let extractRedValue = document.querySelector('.red').value;
    let extractBlueValue = document.querySelector('.blue').value;
    let extractGreenValue = document.querySelector('.green').value;
    let color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
    rgbColorValue.textContent = color;
    rgbclr = color;
    rightContainer.style.backgroundColor = color;    
    rgbBtn.style.color = color;
});

function copyRgbColorToClipBoard() {
    navigator.clipboard.writeText(rgbclr);
    alert(`RGB Color Copied ${rgbclr}`);
}

copyRGBColor.addEventListener("click", copyRgbColorToClipBoard)

