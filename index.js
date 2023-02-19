
var feet = document.getElementById("feet");
var inch = document.getElementById("inch");
var cm = document.getElementById("cm");
var meter = document.getElementById("meter");

feet.addEventListener("input",function () {
    let f =  this.value;
    let i  = f * 12;
    inch.value = i;
});


inch.addEventListener("input",function () {
    let i =  this.value;
    let  f = i/12;
  

    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});


meter.addEventListener("input",function () {
    let mt =  this.value;
    let cmt  = mt * 100;
    cm.value = cmt;
});

cm.addEventListener("input",function(){
    let cmt = this.value;
    let mt = cmt / 100;
    meter.value = mt;
})