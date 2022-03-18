const log = console.log;

// variables
const image = document.getElementById('main-img');
const imgName = document.getElementById('img-name');
const imgFormat = document.getElementById('img-format');


const progreses = document.querySelectorAll('.progress');
const rangeInputs = document.querySelectorAll("input[type='range']")
const inputValues = document.querySelectorAll("#styles > div > p > span")

const clearAll = document.getElementById("clear");

// inputs with range type
rangeInputs.forEach((input, index) => {
    input.addEventListener("input", e => {
        const data = e.target.value;
        const inputName = input.closest(".input-group").children[0].innerHTML;
        progreses[index].style.width = `${data}%`

        switch (inputName) {
            case 'Border-radius':
                inputValues[index].innerHTML = `${data}px`
                image.style.borderRadius = `${data}px`
                break;
            case 'Blur':
                inputValues[index].innerHTML = `${data}px`
                image.style.filter = `blur(${data}px)`
                break;
            case 'Rotate-Y':
                inputValues[index].innerHTML = `${data}deg`
                image.style.transform = `rotateY(${data}deg)`
                break;
            case 'Rotate-X':
                inputValues[index].innerHTML = `${data}deg`
                image.style.transform = `rotateX(${data}deg)`
                break;
            case 'Skew-Y':
                inputValues[index].innerHTML = `${data}deg`
                image.style.transform = `skewY(${data}deg)`
                break;
            case 'Skew-X':
                inputValues[index].innerHTML = `${data}deg`
                image.style.transform = `skewX(${data}deg)`
                break;
            case 'Scale':
                inputValues[index].innerHTML = `${data}`
                image.style.transform = `scale(${data})`
                break;
            case 'Contrast':
                inputValues[index].innerHTML = `${data}%`
                image.style.filter = `contrast(${data}%)`
                break;
            case 'GrayScale':
                inputValues[index].innerHTML = `${data}px`
                image.style.filter = `grayscale(${data}%)`
                break;
            case 'Opacity':
                inputValues[index].innerHTML = `${data}%`
                image.style.opacity = `${data}%`
                break;

            default:
                console.error("Styles not found")
                break;
        }

    })
})


// clear all styles
clearAll.addEventListener('click', () => {
    image.style = null
    rangeInputs.forEach((input, index) => {
        input.value = 0;
        progreses[index].style.width = 0;

    })
    inputValues.forEach(value => {
        value.innerHTML = 0
    })
    color.value = '#EE5F70';
    color.style.backgroundColor = '#EE5F70';
    bgcolor.style.backgroundColor = '#7E75B5';
    bgcolor.value = '#7E75B5';
})


// get name and format the image
function getImgData() {
    const imageSrc = image.getAttribute("src");
    const imageRoutes = imageSrc.split("/");
    const extractImageName = imageRoutes[imageRoutes.length - 1].split(".");
    const name = extractImageName[0];
    const format = extractImageName[1]

    // Update All Data
    imgName.innerHTML = `<span>Name : </span>${name}`
    imgFormat.innerHTML = `<span>Format : </span>${format}`
}
getImgData()