function includePopupHTML()
{
    let html = '<div id="vis-popup"><span id="close" onclick="closePopup()"><img id="npop" src="images/close.png" alt=""></span><img id="leftArrow" src="images/left-arrow.png" alt=""><img id="rightArrow" src="images/right-arrow.png" alt=""><img id="mainPopImage" src="images/image1.jpg" alt=""></div>'
    let popDiv = document.createElement("div");
    popDiv.innerHTML = html;
    document.body.insertBefore(popDiv, document.body.firstChild);
}
let img;
let currentImage;
// Function to init plugin
function imagePopupInit(target)
{
    // Select all images with class target
    img = document.getElementsByClassName(target);
    // Add event listner on all selected images
    for(let i = 0; i < img.length; i++)
    {
        // Add Pointer
        img[i].style.cursor = 'pointer';
        // Add Event Listner
        img[i].addEventListener("click", function(){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("vis-popup").style.display = "block";
            checkArrow();
        });
    }
    includePopupHTML();
    // Next Button
    document.getElementById("rightArrow").addEventListener('click', function(){
        nextImage();
    });
    // Previous Button
    document.getElementById("leftArrow").addEventListener('click', function(){
        prevImage();
    });
}
// Close Button
function closePopup()
{
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = "none";
}
// Next Image
function nextImage()
{
    getCurrentImage();
    currentImage++;
    document.getElementById("mainPopImage").src = img[currentImage].src;
    checkArrow();
}
// Previous Image
function prevImage()
{
    getCurrentImage();
    currentImage--;
    document.getElementById("mainPopImage").src = img[currentImage].src;
    checkArrow();
}
function getCurrentImage()
{
    for(let i = 0; i < img.length; i++)
    {
        if(img[i].src == document.getElementById("mainPopImage").src)
        {
            currentImage = i;
        }
    }
}
function checkArrow()
{
    getCurrentImage();
    if(currentImage == "0")
    {
        document.getElementById("leftArrow").style.display = "none";
        document.getElementById("rightArrow").style.display = "block";
    }
    else if(currentImage == img.length - 1)
    {
        document.getElementById("rightArrow").style.display = "none";
        document.getElementById("leftArrow").style.display = "block";
    }
    else
    {
        document.getElementById("leftArrow").style.display = "block";
        document.getElementById("rightArrow").style.display = "block";
    }
}