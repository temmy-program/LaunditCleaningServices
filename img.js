let images = ["image/floor.jpg","image/commerical.jpg","image/office.jpg"];
        let img = document.querySelector(".hero");
        let i = 0;

        function changeImage(){
            img.style.backgroundImage ="url(" + images[i]+")"
        
            i++

            if ( i > images.length -1){
                i=0;
            }
            setTimeout(changeImage, 2000)
        }

        
        changeImage();