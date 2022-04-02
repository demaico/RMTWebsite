var bar = [document.getElementById("bar1"), document.getElementById("bar2"), document.getElementById("bar3")];
var BarButtonJS = document.getElementById("BarButton");
var MenuIdJS = document.getElementById("MenuId");
var MenuFontSizeJS = document.getElementById("MenuFontSize");




var ButtonColorState = 0;
function Switch() {

    ButtonColorState = ButtonColorState + 1;

    ButtonColorState = ButtonColorState % 2;

    if (ButtonColorState == 0) {
        MenuIdJS.style.height = "0%";
        MenuFontSizeJS.style.fontSize = "0px";
        
    }
    else {
        

        MenuIdJS.style.height = "65%";
        MenuFontSizeJS.style.fontSize = "40px";
    }



};



var picJS = document.getElementById("pic");
var picMem;

var PictureState = 0;


function substract() {  }


function ScrollPicturesAdd() {

    PictureState = PictureState + 1;
    PictureState = PictureState % 3;

    if (PictureState == 0) {
        picJS.innerHTML = "<img class='BasPic' src='picturesPage/1.png'/>  ";

        
    }
    else if (PictureState == 1) {
        picJS.innerHTML = "<img class='BasPic' src='picturesPage/2.png'/>";
    }
    else if (PictureState == 2) {
        picJS.innerHTML = "<img class='BasPic' src='picturesPage/3.png'/>";

    }
};
function ScrollPicturesSub() {

    PictureState = PictureState + 2;
    PictureState = PictureState % 3;

    if (PictureState == 0) {

        picJS.innerHTML = `<img class='BasPic' src='picturesPage/1.png'/>`;

    }
    else if (PictureState == 1) {

        picJS.innerHTML = `<img class='BasPic' src='picturesPage/2.png'/>`;
    }
    else if (PictureState == 2) {

        picJS.innerHTML = `<img class='BasPic' src='picturesPage/3.png'/>`;

    }
};



function hoverOver() {
    bar[0].style.boxShadow = "2px 2px 2px 2px white";
    bar[1].style.boxShadow = "2px 2px 2px 2px white";
    bar[2].style.boxShadow = "2px 2px 2px 2px white";
};

function hoverLeave(){
                                                               
    bar[0].style.boxShadow = "2px 2px 2px 2px rgba(60,60,60,1)";
    bar[1].style.boxShadow = "2px 2px 2px 2px rgba(60,60,60,1)";
    bar[2].style.boxShadow = "2px 2px 2px 2px rgba(60,60,60,1)";
};




function NextPic() {
    
    ScrollPicturesAdd();
    setTimeout(NextPic, 15000);
}

NextPic();

function Submit() {
    let userName = document.getElementById("userName").value;
    let mailAdres = document.getElementById("mailAdres").value;
    let textbox = document.getElementById("textInfo").value;

    console.log(textbox)
}

