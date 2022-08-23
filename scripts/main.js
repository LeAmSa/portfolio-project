const qrcodeCt = document.getElementsByClassName('qrcode-ct')
const btnQrOpen = document.getElementsByClassName('btn-qr-open')
const btnQrClose = document.getElementsByClassName('btn-qr-close')

//Open and close qrcode images
for (let i = 0; i < qrcodeCt.length; i++) {
    btnQrOpen[i].addEventListener('click', () => {
        qrcodeCt[i].classList.add('active')
    })

    btnQrClose[i].addEventListener('click', () => {
        qrcodeCt[i].classList.remove('active')
    })
}

