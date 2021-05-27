var x, y, z;

document.getElementById("rectangle").onclick= function(){
    //hide all form( calculationfigname)
    hide("calculationrec");
    hide("calculationsqr");
    hide("calculationcir");
    hide("calculationtri");
    //show the req form( calculationfigname)
    show("calculationrec");
    //hide all info( fignameInfo)
    hide("squareInfo"); 
    hide("circleInfo"); 
    hide("triangleInfo"); 
    //show the req info(fignameInfo)
    show("rectangleInfo"); 
}
document.getElementById("square").onclick= function(){
    hide("calculationsqr");
    hide("calculationrec");
    hide("calculationcir");
    hide("calculationtri");
    show("calculationsqr");
    hide("rectangleInfo");
    hide("circleInfo");
    hide("triangleInfo"); 
    show("squareInfo");
}
document.getElementById("circle").onclick= function(){
    hide("calculationcir");
    hide("calculationrec");
    hide("calculationsqr");
    hide("calculationtri");
    show("calculationcir");
    hide("squareInfo");
    hide("rectangleInfo");
    hide("triangleInfo"); 
    show("circleInfo");
}
document.getElementById("triangle").onclick= function(){
    hide("calculationtri");
    hide("calculationcir");
    hide("calculationrec");
    hide("calculationsqr");
    show("calculationtri");
    hide("squareInfo");
    hide("rectangleInfo");
    hide("circleInfo");
    show("triangleInfo");
}


function findRec(){
    event.preventDefault();
    x= document.getElementById("recfirst").value;
    y= document.getElementById("recsecond").value;
    z= x * y;
    document.getElementById("recans").innerHTML= "Area is :" + z;
    show("recans");
}
function findSqr(){
    event.preventDefault();
    x= document.getElementById("sqrfirst").value;
    z= x * x;
    document.getElementById("sqrans").innerHTML= "Area is :" + z;
    show("sqrans");
}
function findCir(){
    event.preventDefault();
    x= document.getElementById("cirfirst").value;
    z= x * x * 3.14;
    document.getElementById("cirans").innerHTML= "Area is :" + z;
    show("cirans");
}
function findTri(){
    event.preventDefault();
    x= document.getElementById("trifirst").value;
    y= document.getElementById("trisecond").value;
    z= 0.5 * x * y;
    document.getElementById("trians").innerHTML= "Area is :" + z;
    show("trians");
}
//show an element
function show(Id){
    document.getElementById(Id).style.display= "block";
}
//hide an element
function hide(Id){
    document.getElementById(Id).style.display= "none";
}
