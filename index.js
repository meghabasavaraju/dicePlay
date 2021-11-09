var ran =Math.random()*6;
ran=(Math.floor(ran))+1;
 var ranimg1= "dice"+ran+".png";
 var ranimg="images/"+ranimg1;
 var image = document.querySelectorAll("img")[0];
 image.setAttribute("src",ranimg);

 
 var ran1 =Math.random()*5;
ran1=(Math.floor(ran1))+2;
 var ranimg2= "dice"+ran1+".png";
 var ranimg3="images/"+ranimg2;
 var image1 = document.querySelectorAll("img")[1];
 image1.setAttribute("src",ranimg3);

 if(ran==ran1){

    document.querySelector("h1").innerHTML="Draw";
 }
 else if(ran>ran1)
 {
document.querySelector("h1").innerHTML="player1 wins";
 }
 else {
document.querySelector("h1").innerHTML="player2 wins";
 }
