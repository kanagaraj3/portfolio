let btn = document.querySelector(".ham");
let navi = document.querySelector("nav");
btn.addEventListener('click', () =>
{
    navi.classList.toggle("showmenu");
});
document.querySelector('.ham').addEventListener('click', function() 
{
  this.classList.toggle('active');
});
//PDF
let pdfbtn = document.getElementById("pdfbtn");
  let obj = document.getElementById("pdfObject");
  let isExpanded = false;

  pdfbtn.addEventListener('click', togglePdf);

  function togglePdf()
{
    if (isExpanded)
    {
      obj.style.width = "0px";
      obj.style.height = "0px";
      pdfbtn.innerText="Click here to view My Resume";
    } 
    else 
    {
      obj.style.width = "700px";
      obj.style.height="700px";
      pdfbtn.innerText="Click here to close";
    }
    isExpanded=!isExpanded;
}

var introVideo = document.getElementById('intro-video');

    introVideo.addEventListener('mouseover', function() {
      introVideo.volume = 1;
        introVideo.play();
       
    });

    introVideo.addEventListener('mouseout', function() {
        introVideo.volume = 1;
        introVideo.pause();
        introVideo.currentTime = 0;
       
    });