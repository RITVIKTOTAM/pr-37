class Form{

  constructor(){

    
    this.button = createButton("1.jawaharlalnehru");
    this.button1 = createButton("2.narendra modi");
    this.button2 = createButton("3.ram nath kovind");
    this.button3 = createButton("4.manmohan singh");
    this.button4 = createButton("9");
    this.button5 = createButton("10");
    this.button6 = createButton("11");
    this.button7 = createButton("12");
    
    
    

  }

  display(){

   var title2,title3,title4,title5,title6,title7,title8,title9,title10,title11,title12;
    var title = createElement("h2");
   title.html("1.who is the primeminister of india in 2021?");
   title.position(30,80);
   var title1 = createElement("h2");
   title1.html("MY QUIZ");
   title1.position(180,30);
   this.button.position(80,150);
   this.button.mousePressed(() =>
   {

    
     title2 = createElement("h2");
    title2.html("WRONG ANSWER");
    title2.position(150,350);
   


   })
   
   this.button1.position(80,200);
   this.button1.mousePressed(() =>
   {

    
     title3 = createElement("h2");
    title3.html("RIGHT ANSWER CONGRATS");
    title3.position(100,350);
    title6 = createElement("h2");
    title6.html("how many members walked on the moon ?");
    title6.position(50,80);
    
    this.button4.position(80,150);
    this.button4.mousePressed(() =>
    {

      title11 = createElement("h2");
      title11.html("WRONG ANSWER");
      title11.position(150,350);
      title3.hide();

    })

    

    this.button5.position(80,200);
    this.button5.mousePressed(() =>
    {

      title8 = createElement("h2");
      title8.html("WRONG ANSWER");
      title8.position(150,350);
      

    })

    this.button6.position(180,150);
    this.button6.mousePressed(() =>
    {

      title9 = createElement("h2");
      title9.html("WRONG ANSWER");
      title9.position(150,350);
      title3.hide();
      title10.hide();

    })

    this.button7.position(180,200);
    this.button7.mousePressed(() =>
    {

      title10 = createElement("h2");
      title10.html("RIGHT ANSWER CONGRATS");
      title10.position(100,150);
      title10 = createElement("h2");
      title10.html("GAME OVER");
      title10.position(200,180);
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      this.button7.hide();
      title3.hide();
      title6.hide();
      title11.hide();
      title7.hide();
      title8.hide();
      title9.hide();
     
      

      

    })

    this.button.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    title.hide();
    title2.hide();
    



   })

   this.button2.position(320,150);
   this.button2.mousePressed(() =>
   {

    
     title4 = createElement("h2");
    title4.html("WRONG ANSWER");
    title4.position(150,350);
    title3.hide();


   })

   this.button3.position(320,200);
   this.button3.mousePressed(() =>
   {

    
     title5 = createElement("h2");
    title5.html("WRONG ANSWER");
    title5.position(150,350);
    title3.hide();
  


   })

  }


  
}