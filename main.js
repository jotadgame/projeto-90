canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeigh = 90;

backgroundImage = "mars.jpg";

roveImage = "rover.png";

roverX = 10;
roverY = 10;
function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadbackgroud
    backgroundImgTag.src = backgroudImage;


    roverImgTag = new Image();
    roverImgTag.onload = uploadrover
    roverImgTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.Width, canvas.Height);

}
    function uploaddrover() {
        ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverheight);
    }