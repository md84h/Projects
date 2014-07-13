var don1={};
var tap=1;
var height;
var id,myClass;
var a={},b={};
var i=1;
var checka,checkb;
var str=[];
var str1=[];
var check;
var set;
var change;
var noPointer=[];
$(document).ready(function(){
    $("#play").click(play);
    height=$(window).height();
    alert(height);
  
    //$("#a1111").click(test);
    //$("body").css('background','red');
});
function colorChange() {
      if(id && set==1){
      $("."+id).css('background-color','#ccc');
      $("."+id).css("pointer-events","none");
      }
      check=0;
      set=1;
      myClass=$(this).attr("class");
      myClass=myClass.substr(0,2);
      var myId=$(this).attr("id");
      id=myId.substr(2,4);
      if(tap==1)
          {
              if(myClass in a)
                  {
                      a[myClass]=a[myClass]+","+id;
                      checka=a[myClass].split(',');
               if(checka.length>2)
                          {
                      if(checka.indexOf("11")>-1)
                          {
                              if((checka.indexOf("12")>-1 && checka.indexOf("13")>-1) || (checka.indexOf("21")>-1 && checka.indexOf("31")>-1) || (checka.indexOf("22")>-1 && checka.indexOf("33")>-1))
                               {   str.push(myClass);
                              check=1;
                                  $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>X</p>");
                          }}
                          else if(checka.indexOf("12")>-1 && checka.indexOf("22")>-1 && checka.indexOf("32")>-1)
                              {
                                  str.push(myClass);
                              check=1;
                                  $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>X</p>");
                              }
                              else if(checka.indexOf("13")>-1)
                                  {
                                      if((checka.indexOf("22")>-1 && checka.indexOf("31")>-1) || (checka.indexOf("23")>-1 && checka.indexOf("33")>-1))
                                          {
                                              str.push(myClass);
                              check=1;
                                          $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>X</p>");
                                          }
                                  }
                                  else if(checka.indexOf("21")>-1 && checka.indexOf("22")>-1 && checka.indexOf("23")>-1)
                                      {
                                          str.push(myClass);
                              check=1;
                                          $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>X</p>");
                                      }
                                      else if(checka.indexOf("31")>-1 && checka.indexOf("32")>-1 && checka.indexOf("33")>-1)
                                          {
                                              str.push(myClass);
                              check=1;
                                              $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>X</p>");
                                          }
                           }
                  }
                  else{
                      a[myClass]=id;
                     }
              $(this).html("X");
      tap=2;
      $("#not").html("Player B");
          }
          else
              {
                  if(myClass in b)
                  {
                      b[myClass]=b[myClass]+","+id;
                      checkb=b[myClass].split(',');
                      if(checkb.length>2)
                          {
                      if(checkb.indexOf("11")>-1)
                          {
                              if((checkb.indexOf("12")>-1 && checkb.indexOf("13")>-1) || (checkb.indexOf("21")>-1 && checkb.indexOf("31")>-1) || (checkb.indexOf("22")>-1 && checkb.indexOf("33")>-1))
                                  {str1.push(myClass);
                                   check=1;   
                                  $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>O</p>");
                          }
                          }
                          else if(checkb.indexOf("12")>-1 && checkb.indexOf("22")>-1 && checkb.indexOf("32")>-1)
                              {
                                  str1.push(myClass);
                                   check=1; 
                                  $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>O</p>");
                              }
                              else if(checkb.indexOf("13")>-1)
                                  {
                                      if((checkb.indexOf("22")>-1 && checkb.indexOf("31")>-1) || (checkb.indexOf("23")>-1 && checkb.indexOf("33")>-1))
                                          {
                                             str1.push(myClass);
                                   check=1;   
                                          $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>O</p>");
                                          }
                                  }
                                  else if(checkb.indexOf("21")>-1 && checkb.indexOf("22")>-1 && checkb.indexOf("23")>-1)
                                      {
                                          str1.push(myClass);
                                   check=1;  
                                          $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>O</p>");
                                      }
                                      else if(checkb.indexOf("31")>-1 && checkb.indexOf("32")>-1 && checkb.indexOf("33")>-1)
                                          {
                                              str1.push(myClass);
                                   check=1;  
                                              $("#a"+myClass).html("<p style='font-size:500%;margin-left:auto;margin-right:auto' align:'center'>O</p>");
                                          }
                      }
                  }
                  else{
                      b[myClass]=id;
                      i++;
                  }
              $(this).html("O");
              tap=1;
              $("#not").html("Player A");
              }
      noPointer.push(myId);
      $("."+id).css('background-color','white');
      $("."+id).css("pointer-events","auto");
      var x;
      for(x=0; x<noPointer.length; x++)
          {
              $("#"+noPointer[x]).css('pointer-events','none');
          }
      if(str.indexOf(id)>-1 || str1.indexOf(id)>-1)
          {
              console.log("bbbb");
              $(".mainTab").css("background-color","white");
                                      $(".abc").css("background-color","white");
                                      $(".abc").css("pointer-events","auto");
                                      change=1;
                                      for(x=0; x<noPointer.length; x++)
          {
              $("#"+noPointer[x]).css('pointer-events','none');
          }
          }
          else{
      if(id==myClass && check==1)
                                  {
                                      console.log("aaa");
                                      $(".mainTab").css("background-color","white");
                                      $(".abc").css("background-color","white");
                                      $(".abc").css("pointer-events","auto");
                                      check=0;
                                      set=0;
                                      change=1;
                                      
                                  }
                                  else{
                                      if(change==1)
                                          {
                                           $(".abc").css("background-color","#ccc");
                                      $(".abc").css("pointer-events","none");
                                      $("."+id).css("background-color","white");
                                      $("."+id).css("pointer-events","auto");
                                         change=2;
                                          }
      $(".mainTab").css("background-color","#ccc");
      $(".miniTab").css("background-color","#ccc");
      $(".miniTab").css("pointer-events","none");
                                  }
          }
          if(str.length>2)
              {
          if(str.indexOf("11")>-1)
              {
                if((str.indexOf("12")>-1 && str.indexOf("13")>-1) || (str.indexOf("21")>-1 && str.indexOf("31")>-1) || (str.indexOf("22")>-1 && str.indexOf("33")>-1))  
                    winner("A");
                        //console.log("won1");
              }
              else if(str.indexOf("12")>-1 && str.indexOf("22")>-1 && str.indexOf("32")>-1)
                              {
                                  winner("A");
                                  //console.log("won2");
                              }
                              else if(str.indexOf("13")>-1)
                                  {
                                      if((str.indexOf("22")>-1 && str.indexOf("31")>-1) || (str.indexOf("23")>-1 && str.indexOf("33")>-1))
                                          {
                                              winner("A");
                                          
                                          //console.log("won3");
                                          }
                                  }
                                  else if(str.indexOf("21")>-1 && str.indexOf("22")>-1 && str.indexOf("23")>-1)
                                      {
                                          winner("A");
                                          //console.log("won4");
                                      }
                                      else if(str.indexOf("31")>-1 && str.indexOf("32")>-1 && str.indexOf("33")>-1)
                                          {
                                              winner("A");
                                              //console.log("won5");
                                          }
                     }
              else if(str1.length>2)
              {
          if(str1.indexOf("11")>-1)
              {
                if((str1.indexOf("12")>-1 && str1.indexOf("13")>-1) || (str1.indexOf("21")>-1 && str1.indexOf("31")>-1) || (str1.indexOf("22")>-1 && str1.indexOf("33")>-1))  
                    winner("B");
                    //console.log("won6");
              }
              else if(str1.indexOf("12")>-1 && str1.indexOf("22")>-1 && str1.indexOf("32")>-1)
                              {
                                  winner("B");
                                  //console.log("won7");
                              }
                              else if(str1.indexOf("13")>-1)
                                  {
                                      if((str1.indexOf("22")>-1 && str1.indexOf("31")>-1) || (str1.indexOf("23")>-1 && str1.indexOf("33")>-1))
                                          {
                                              winner("B");
                                          //console.log("won8");
                                          }
                                  }
                                  else if(str1.indexOf("21")>-1 && str1.indexOf("22")>-1 && str1.indexOf("23")>-1)
                                      {
                                          winner("B");
                                          //console.log("won9");
                                      }
                                      else if(str1.indexOf("31")>-1 && str1.indexOf("32")>-1 && str1.indexOf("33")>-1)
                                          {
                                              winner("B");
                                              //console.log("won10");
                                          }
                     }
                  } 
function play(){
    
    var main=$("<div>",{class:"container"});
    var mainTable=$("<table>",{class:"table table-bordered mainTab"});
    var row,col,miniTable,miniCol,miniRow;
    for(i=1;i<4;i++)
        {
            row=$("<tr>",{});
            for(j=1;j<4;j++)
                {
                    col=$("<td>",{});
                    miniTable=$("<table>",{class:"table table-bordered miniTab",id:"a"+i+j});
                    for(k=1;k<4;k++)
                        {
                            miniRow=$("<tr>",{});
                            for(l=1;l<4;l++)
                                {
                                    miniCol=$("<td>",{click:colorChange,id:""+i+j+k+l,class:""+i+j+" abc"});
                                    miniRow.append(miniCol);
                                }
                            miniTable.append(miniRow);
                        }
                        col.append(miniTable);
                        row.append(col);
                }
            mainTable.append(row);
        }
    main.append(mainTable);
    var not=$("<h1>",{id:"not",style:"margin-left:30%",text:"Player A"});
    main.append(not);
    transition(main);
    
}
function winner(str)
{
      var play=$("<div>",{id:"main"});
  var list=$("<div>",{class:"list-group",id:"mainMenu"});
  var val=$("<a>",{href:"#",class:"list-group-item",text:str+" is Winner"});
  list.append(val);
   val=$("<a>",{href:"#",class:"list-group-item",id:"play",text:"Play Again"});
  list.append(val);
  play.append(list);
  transition(play);
}
function transition(newHtml){
      $("#app_wrapper").fadeOut(400,function(){
            $("#app_wrapper").html(newHtml);
            $("#app_wrapper").fadeIn(300);
      });
}
