var Links = {
    setColor: function (color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length)
      {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
  
  var Body = {
    setColor:function (color){
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }

  var Pic = {
    BgSetColor: function (color){
      if(document.title.indexOf === "Telematics"){
        document.getElementById('background1').style.color = color;
      }
    }
  }

  function nightDayHandler(self){
    var target = document.querySelector('body');

    var testTarget = document.getElementById('background1');

    console.log(testTarget);
    console.log('night day handler started');

    if(self.value === 'Night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      if (document.title.indexOf === "Telematics"){
        Pic.BgSetColor('black');
      }
      self.value = 'Day';
      console.log('it is night');
      Links.setColor('powderblue');
    }
     else {
      console.log('it is day');

      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'Night';
      Links.setColor('blue');
     }
  }