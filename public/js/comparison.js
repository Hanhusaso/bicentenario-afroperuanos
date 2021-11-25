function slide () {
    let slideValue = document.getElementById("slider").value
    document.getElementById("last1").style.clipPath = "polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)"
    console.log("polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)");
}