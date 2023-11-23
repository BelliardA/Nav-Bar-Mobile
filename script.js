function derouleNav() {
    var lien1 = document.getElementById("liens-nav-bar-1");
    var lien2 = document.getElementById("liens-nav-bar-2");
    var lien3 = document.getElementById("liens-nav-bar-3");
    var bar1 = document.getElementById("menue-burger-nav-bar1");
    var bar2 = document.getElementById("menue-burger-nav-bar2");
    var bar3 = document.getElementById("menue-burger-nav-bar3");

    var barStyle = window.getComputedStyle(bar1);
    var lien = window.getComputedStyle(lien1);

    if (barStyle.getPropertyValue('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
        bar2.style.transform = "translateX(60px)";
        setTimeout(() => {
            bar1.style.transform = "rotate(45deg) translateY(15px) translateX(0.2px)";
            bar3.style.transform = "rotate(-45deg) translateY(-15px) translateX(0.2px)";
        }, 200);
    } else {
        bar1.style.transform = "rotate(0deg)";
        bar3.style.transform = "rotate(0deg)";
        setTimeout(function() {
            bar2.style.transform = "translateX(0px)";
        }, 200);
    }

    if (lien.getPropertyValue('transform') === "matrix(1, 0, 0, 1, -300, 0)") {
        lien1.style.transform = "translateX(0px)";
        setTimeout(() => {
            lien2.style.transform = "translateX(0px)";
            setTimeout(() => {
            lien3.style.transform = "translateX(0px)";
            }, 300);
        }, 300);
    } else {
        lien1.style.transform = "translateX(-300px)";
        lien2.style.transform = "translateX(-300px)";
        lien3.style.transform = "translateX(-300px)";
    }
}