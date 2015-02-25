/**
 * Created by doncredas on 25/02/15.
 */
function theCarrousel(config){
    var myCarrousel = $("#myCarrousel"),
        img = $("#myCarrousel img"),
        imgLength = img.length - 1,
        i = 0,
        currentImg = img.eq(i);
    img.hide();

    currentImg.css("display", "block");

    function slideImg(slideTime){
        setTimeout(function () {
            if(i == imgLength){
                i = 0;
            }else{
                i++;
            }
            currentImg.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.css('display', 'block');
            slideImg(slideTime);
        } , slideTime);
    }

    var time = config.time;
    slideImg(time);
}
