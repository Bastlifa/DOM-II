// Your code goes here

/* ten events
[√] mouseover
[ ] keydown
[√] wheel 
[√] dragend
[ ] load
[√] focus
[√] blur
[√] click
[√] change
[√] dblclick 
*/


// dblclick
let introImg = document.querySelector(".intro img");

introImg.addEventListener("dblclick", function()
{
    let aImages = ["img/fun-bus.jpg", "img/mountainGetaway.jpg", "img/islandGetaway.jpg"];
    switch(true)
    {
        case (introImg.src.includes(aImages[0])):
            introImg.src = aImages[1];
            break;
        case (introImg.src.includes(aImages[1])):
            introImg.src = aImages[2];
            break;
        case (introImg.src.includes(aImages[2])):
            introImg.src = aImages[0];
            break;
        default:
            break;
    }
});

//load
// window.addEventListener("load", event =>
// {

// });

// wheel
document.addEventListener("wheel", function(event)
{
    let curScroll = document.documentElement.scrollTop;
    let aSectionsTops = [document.querySelector(".intro").offsetTop, 
                    document.querySelector(".content-section").offsetTop, 
                    document.querySelector(".content-destination").offsetTop];


    if (event.deltaY > 0)
    {
        let destScroll = 0;
        if      (curScroll < aSectionsTops[1] - 120) { destScroll = aSectionsTops[1] - 120; }
        else if (curScroll < aSectionsTops[2] ) { destScroll = aSectionsTops[2]; }

        window.scrollTo({top: destScroll, behavior: "smooth"});
        // document.getElementsByTagName("body")[0].animate({
        //     scrollTop: destScroll
        // }, { duration: 500 });
    }
    else if (event.deltaY < 0)
    {
        let destScroll = 0;
        if      (curScroll > aSectionsTops[1] - 120) { destScroll = aSectionsTops[1] - 120; }
        else if (curScroll > aSectionsTops[2] ) { destScroll = aSectionsTops[2]; }

        window.scrollTo({top: destScroll, behavior: "smooth"});
    }
});

// Destination button click
let signupButtons = Array.from(document.querySelectorAll(".btn"));
let startColor = signupButtons[0].style.backgroundColor;
let destForm = document.querySelector(".bottomForm");
let destSelectOpts = Array.from(document.querySelector(".bottomForm select").children);

signupButtons.forEach((elem, index) => elem.addEventListener("click", function(event)
{
    if (event.target.style.backgroundColor === "red")
    {
        event.target.style.backgroundColor = startColor;
        destForm.style.display = "none";
    }
    else
    {
        signupButtons.forEach(elem => elem.style.backgroundColor = startColor);
        event.target.style.backgroundColor = "red";
        destForm.style.display = "flex";
        if      (index === 0) {destSelectOpts[index].selected = true}
        else if (index === 1) {destSelectOpts[index].selected = true}
        else if (index === 2) {destSelectOpts[index].selected = true}   
    }
}));

// nav mouseover, no propogation
document.querySelector("nav").addEventListener("mouseover", function(event) 
{
    event.target.style.backgroundColor = "blue";
    
    setTimeout(function() {
        event.target.style.backgroundColor = "";
    }, 1000);
})

Array.from(document.querySelectorAll("nav a")).forEach(elem => elem.addEventListener("mouseover", function(event) 
{
    event.target.style.backgroundColor = "red";
    event.stopPropagation();
    setTimeout(function() {
        event.target.style.backgroundColor = "";
    }, 1000);
}));

// dragend event
document.querySelector("footer p").addEventListener("dragend", event =>
    event.target.textContent === "Copyright Fun Bus 2018" ? event.target.textContent = "© Fun Bus 2018" : event.target.textContent = "Copyright Fun Bus 2018"
);

// focus event
let formInputs = Array.from(document.querySelector("form").children);

formInputs.forEach(elem => elem.addEventListener("focus", event =>
{
    event.target.style.backgroundColor = "white";
}));

// blur event
formInputs.forEach(elem => elem.addEventListener("blur", event =>
{
    event.target.style.backgroundColor = "lightgray";
}));

// change event
let selectEl = document.querySelector("select");
console.log(selectEl)
selectEl.addEventListener("change", event=>
{
    let aSelVals = ["funInSun", "mntnExcursion", "islandGetaway"];
    let selectIndex = aSelVals.indexOf(event.target.value); console.log(selectIndex);   
    signupButtons.forEach((elem, index) => 
    {
        if (aSelVals[index] === event.target.value) {elem.style.backgroundColor = "red"}
        else                                        {elem.style.backgroundColor = startColor;}
    });
});