let landind=document.querySelector('#home')
let images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]

function randomizeImgs(){
    backinterval=setInterval(()=>{
        let random=Math.floor(Math.random() * images.length);
        landind.style.backgroundImage='url("image/' + images[random] + '")';
    },1000)
}
randomizeImgs()




//change color of opera icon when scroll down to section singers


let singerSection=$('#singer').offset().top;
console.log(singerSection)
$(window).on('scroll',function () {
  let scrollTop=$(window).scrollTop()
  if(scrollTop > singerSection -300){
    $('.fa-opera').css("color",localStorage.getItem("color"))
  }else{
    $('.fa-opera').css("color","#fff")

  }
})



//scroll smooth
$('.nav-item a').on('click',function(){
  $('a').removeClass('active')
  $(this).addClass('active')
  let href=$(this).attr('href')
  let sectionOffset=$(href).offset().top;
  $('html,body').animate({scrollTop : sectionOffset},1000)
})


//active nav link








//opera icon open and close

let isOpen=false
$('.navbar').css({'left':'-167.578px'})
$('.fa-opera').on("click",function(){
    if(!isOpen){
        let widthOfNav=$('.nav-move').css('width')
        $('.navbar').css({'left':'-167.578px'})
        isOpen=true
    }else{
        $('.navbar').css({'left':'0px'})
        isOpen=false
    }
    
    // console.log(widthOfNav)
})
$('.fa-circle-xmark').on('click',function(){
    $('.navbar').css({'left':'-167.578px'})
})


$('.nav-item  a').on('click',function(){
    $('.nav-item  a').removeClass('active')
    $(this).addClass('active')
})

let open=""
$('#singer div.border').hide()
$('#singer .bttn').on('click',function(){
    console.log(open)
    console.log($(this))
    if($(this).hasClass('active')){
       $(this).removeClass('active').next().hide(1000)
    }else{
        $('#singer .bttn').removeClass('active')
        $('#singer div.border').hide(1000)
        $(this).addClass('active').next().show(1000)
        open=$(this)
    }
})







// counter of days and seconds and hours and minutes
// $('.e-m-days').html(localStorage.getItem("days"));
// $('.e-m-hours').html(localStorage.getItem("hours"));
// $('.e-m-minutes').html(localStorage.getItem("minutes"));
// $('.e-m-seconds').html(localStorage.getItem("seconds"));

$(function() {
  function getCounterData() {
    if(localStorage.getItem("days")){
      var days=Number(localStorage.getItem("days"));
      var hours =Number( localStorage.getItem("hours"));
      var minutes = Number(localStorage.getItem("minutes"))
      var seconds = Number( localStorage.getItem("seconds"))
      return seconds + (minutes * 60) + (hours * 3600) + (days * 3600 * 24);
    
    }else{
      var days = Number($('.e-m-days' ).text());
    var hours = Number($('.e-m-hours' ).text());
    var minutes = Number($('.e-m-minutes').text());
    var seconds = Number($('.e-m-seconds').text());
    return seconds + (minutes * 60) + (hours * 3600) + (days * 3600 * 24);
    }
  }

  function setCounterData(s) {
    console.log(s)
    var days = Number(Math.floor(s / (3600 * 24)));
    var hours = Number(Math.floor((s % (60 * 60 * 24)) / (3600)));
    var minutes =Number( Math.floor((s % (60 * 60)) / 60));
    var seconds =Number( Math.floor(s % 60));

    console.log(days, hours, minutes, seconds);
    localStorage.setItem("days",days)
    localStorage.setItem("hours",hours)
    localStorage.setItem("minutes",minutes)
    localStorage.setItem("seconds",seconds)


    $('.e-m-days').html(localStorage.getItem("days"));
    $('.e-m-hours').html(localStorage.getItem("hours"));
    $('.e-m-minutes').html(localStorage.getItem("minutes"));
    $('.e-m-seconds').html(localStorage.getItem("seconds"));
  }
  
  var count =Number( getCounterData());
  console.log(count)
  var timer = setInterval(function() {
    count--;
    if (count == 0) {
      clearInterval(timer);
      return;
    }
    setCounterData(count);
  }, 1000);
});








//choose color
$(':root').css('--color', localStorage.getItem("color"))
$(':root').css('--layout', localStorage.getItem("layout"))
$('.choose .color').on('click',function(){
let current=$(this).css('background-color')
console.log(current)
if(current=="rgb(232, 62, 140)")
{
  $(':root').css('--color', current)
  $(':root').css('--layout', "rgb(232, 62, 140,.5)")
  localStorage.setItem("color",current)
  localStorage.setItem("layout","rgb(232, 62, 140,.5)")

}
if(current=="rgb(255, 87, 51)")
{
    $(':root').css('--color', current)
    $(':root').css('--layout', "rgb(255, 87, 51 ,.5)")
    localStorage.setItem("color",current)
    localStorage.setItem("layout","rgb(255, 87, 51 ,.5)")
}
if(current=="rgb(199, 0, 57)")
{
  $(':root').css('--color', current)
  $(':root').css('--layout', "rgb(199, 0, 57,.5)")
  localStorage.setItem("color",current)
  localStorage.setItem("layout","rgb(199, 0, 57,.5)")
}
if(current=="rgb(172, 54, 156)")
{
  $(':root').css('--color', current)
  $(':root').css('--layout', "rgb(172, 54, 156,.5)")
  localStorage.setItem("color",current)
  localStorage.setItem("layout","rgb(172, 54, 156)")
}
    
})






//texrarea 
let textareaCounter=0
$('.textarea').on("input",function(){
  let counter=100;
  counter=counter-$(this).val().length
  textareaCounter=counter
  $('.counter').html(counter)
  if(counter<=0){
    $('.counter').html("end")
  }
})

console.log(textareaCounter)

$('.send').on("click",function(){
  if(textareaCounter<0){
    alert('you can send message with max lenght 100 only')
  }
})













//loader


$(function(){
  $(".loader").fadeOut(1000,function(){
    $('#loading').fadeOut(500)
    $('body').css({"overflow":"auto"})
  })
})


console.log(typeof NaN)