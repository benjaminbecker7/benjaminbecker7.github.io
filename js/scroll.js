header = document.getElementById("header");
headerImg = document.getElementById("header-img");

fontsize = parseFloat(window.getComputedStyle(header, null).getPropertyValue('font-size'));
imgwidth = parseFloat(window.getComputedStyle(headerImg, null).getPropertyValue('width'));
imgheight = parseFloat(window.getComputedStyle(headerImg, null).getPropertyValue('height'));
small = false;


bigheader = parseFloat(getComputedStyle(document.getElementById("header"), null).getPropertyValue('height'));
smallheader = bigheader / 2;

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {

    if (document.documentElement.scrollTop != 0) {
        if (!small) {
            fontsize /= 2;
            imgwidth /= 2;
            imgheight /= 2;
            small = true;
            document.body.style.paddingTop = smallheader + 'px';
        } 
    } else {
        fontsize *= 2;
        imgwidth *= 2;
        imgheight *= 2;
        small = false;
        document.body.style.paddingTop = bigheader + 'px';
    }

    header.style.fontSize = fontsize + "px";
    headerImg.style.width = imgwidth + "px";
    headerImg.style.height = imgheight + "px";
}