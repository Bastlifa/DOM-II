let aBlocks = [".block--red", ".block--blue", ".block--green",  ".block--pink", ".block--gray"];



document.querySelector(".blocks").addEventListener("click", event =>
{
    
    if(event.target.className.includes("blocks")) {return;}

    //set all blocks not targeted to have order equal to their index.
    aBlocks.filter(elem => !(event.target.className).includes(elem)).forEach((elem, index) => document.querySelector(elem).style.order = index);

    
    TweenMax.set(event.target, {order: -1, y: "auto"});
    TweenMax.from(event.target, 1, {y: (-110*event.target.style.order)});
    

    let reArrangedaBlocks = aBlocks.sort(function(a,b) {return document.querySelector(a).style.order - document.querySelector(b).style.order})
    

    // let reArBlockEls = reArrangedaBlocks.map(elem => document.querySelector(elem));
    
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
