function hideden_bt1(){
  document.getElementById("b1").style.visibility="hidden";
}
function hideden_bt2(){
  document.getElementById("b2").style.visibility="hidden";
}
window.onload=function (){
  var bigimage=[
    "images/001.png",
    "images/002.png",
    "images/003.png",
    "images/004.png",
    "images/005.png",
    "images/006.png"]
  var bigimgDiv=document.getElementById('bigimg');
  var bLabel=bigimgDiv.getElementsByTagName('label');
  var bSpan=bigimgDiv.getElementsByTagName('span');
  var bA=bigimgDiv.getElementsByTagName('a');
  var num=0;
  var timer=null;
  bigimgDiv.style.backgroundImage="url("+bigimage[0]+")";
  bLabel[0].id="bigimglabel";
  bSpan[0].id="bigimgspan";
  bA[0].id="bigimga"
  for (var i = 0; i < bA.length; i++) {
    bA[i].i=i;
    bA[i].onmouseover=function(){
      clearInterval(timer);
      num=this.i;
      activecss();
      bigimgDiv.style.backgroundImage="url("+bigimage[num]+")";
    }
  }
  function activecss(){
      document.getElementById('bigimglabel').id="";
      document.getElementById('bigimgspan').id="";
      document.getElementById('bigimga').id="";
      bLabel[num].id="bigimglabel";
      bSpan[num].id="bigimgspan";
      bA[num].id="bigimga";
  }
  function autoplay(){
    timer=setInterval(function(){
      num++;
      num %= bigimage.length;
      bigimgDiv.style.backgroundImage="url("+bigimage[num]+")";
      activecss();
    },2000);
  }
  autoplay();
  bigimgDiv.getElementsByTagName('div')[0].onmouseout=autoplay;


  var step=189.5
  var n=0
  var s11=document.getElementById('section1_1')
  
  var s10span=document.getElementById('section1_0').getElementsByTagName('span')
  s11.scrollLeft=0
  s10span[0].onclick=function(){
    n=(n+1)%16;
    s11.scrollLeft=step*n;
  }
  s10span[1].onclick=function(){
    n=(n+15)%16;
    s11.scrollLeft=step*n;
  }

}