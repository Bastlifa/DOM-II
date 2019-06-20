let aBlocks = [".block--red", ".block--blue", ".block--green",  ".block--pink", ".block--gray"];

document.querySelector(".blocks").style.display = "block";
// document.querySelector(".blocks").style.position = "relative";
// document.querySelector(".block").style.position = "absolute";
// document.querySelector(".block").style.

function getPos(el) {
    var rect=el.getBoundingClientRect();
    return {y: rect.top};
}

let aTopPositions = aBlocks.map(elem => getPos(document.querySelector(elem)).y);

document.querySelector(".blocks").addEventListener("click", event =>
{
    // console.log(event.target.className);
    if(!(event.target.className.includes("block-"))) {return;}

    aBlocks.filter(elem => !(event.target.className).includes(elem)).forEach((elem, index) => document.querySelector(elem).style.order = index);

    event.target.style.order = -1;

    aBlocks.forEach(elem => console.log(document.querySelector(elem).style.order));

    let reArrangedaBlocks = aBlocks.sort(function(a,b) {return document.querySelector(a).style.order - document.querySelector(b).style.order})
    console.log(reArrangedaBlocks)

    let reArBlockEls = reArrangedaBlocks.map(elem => document.querySelector(elem));
    reArBlockEls.forEach((elem, index) => 
        {
            TweenMax.to(elem, 2, {y: aTopPositions[index]});
        })
})

let startLeftPos = 0;

document.querySelector(".blocks").addEventListener("mousedown", event =>
{
    startLeftPos = event.target.offsetLeft;
    TweenMax.to(event.target, 5, {x: window.innerWidth - 280})

    document.querySelector(".blocks").addEventListener("mouseup", event =>
    {
        TweenMax.to(event.target, 3, {x: startLeftPos})
    });
});



