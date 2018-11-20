var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            document.getElementById('bas').style.marginTop = "10vmax";
        } else {
            content.style.display = "block";
            document.getElementById("bas").style.marginTop = "0px";
        }
    });
}

// quand on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// quand on clic sur le bouton pour remonter
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}