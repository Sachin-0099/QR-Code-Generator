const qrinput=document.getElementById('qr-input');
const qrimage=document.getElementById('qr-image');
const qrbutton=document.getElementById('qr-button');
console.log(qrbutton,qrimage,qrinput)


qrbutton.addEventListener('click',() =>{
    const inputValue=qrinput.value;
    console.log(inputValue)

    if(!inputValue){
        alert("please enter a valid URL");
        return;
    }else{
      qrimage.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
      qrimage.alt=`QR Code for ${inputValue}`;
    }
})

