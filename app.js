const userInput = document.querySelector('.userInput');
const button = document.querySelector('button');
const qrHolder = document.querySelector('#ImgBox');
const qrImage = document.querySelector('#qrImage');


function generateQR() {
    if (userInput.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`
        qrHolder.classList.add('showImage')
    }
    else { 
        userInput.classList.add('error')
        setTimeout(() => { 
            userInput.classList.remove('error')
        }, 1000)
    }
    
}



