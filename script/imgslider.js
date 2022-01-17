const imgblock = document.querySelector("#img")
let images = ["./public/pix/ngo.jpg","./public/pix/ngo1.jpg","./public/pix/ngo2.jpg"]
let num = 0

function Transit(){
    num++;

    if(num<images.length-1){
        imgblock.src = images[num]
        console.log(imgblock.src)
    }

    else if(num==images.lengt-1){   
        num = 0
        imgblock.src=images[num]
    }
        
}

window.setInterval(Transit,1000)