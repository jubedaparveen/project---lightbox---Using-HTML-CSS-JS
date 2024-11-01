function lightBox(image){
    var output = image.src;
    document.getElementById('lightbox-image').src = output;

    document.getElementById('lightbox').classList.add('show');
    // console.log(output);
}


var close = document.getElementById('close');

close.addEventListener('click',()=> {
    document.getElementById('lightbox').classList.remove('show');
})