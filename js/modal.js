    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");
    var secondCloseButton1=document.getElementById("tooltip-span-1");
    var secondCloseButton2=document.getElementById("tooltip-span-2");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal || event.target.classList.contains("slide-img")) {

            if(event.target.classList.contains("slide-img-1")){
              $("#includedContent").load("slides/slide-1.html", function() {
              //when document is loaded:
              langChooser();
});
              // return;
            }else{
              if(event.target.classList.contains("slide-img-2")){
              $("#includedContent").load("slides/slide-2.html", function() {
              //when document is loaded:
              langChooser();
});
              // return;
            }else{
              if(event.target.classList.contains("slide-img-3")){
              $("#includedContent").load("slides/slide-3.html", function() {
              //when document is loaded:
              langChooser();
});
              // return;
            }else{
                if(event.target.classList.contains("slide-img-4")){
                $("#includedContent").load("slides/slide-4.html", function() {
                //when document is loaded:
                langChooser();
  });
              // return;
              }else{
                  if(event.target.classList.contains("slide-img-5")){
                  $("#includedContent").load("slides/slide-5.html", function() {
                  //when document is loaded:
                  langChooser();
    });
              // return;
                }else{
              // return;
                  }
                }
              }
            }
            }
            toggleModal();
        }
    }

    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    secondCloseButton1.addEventListener("click", toggleModal);
    secondCloseButton2.addEventListener("click", toggleModal);
    // for window onhover tooltip:
    var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y - 60) + 'px';
    tooltipSpan.style.left = (x -20) + 'px';
};
