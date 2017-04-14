/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
$(document).ready(function(){
    $("#login").click(function(){
       location.href='reglog.html';
    });

    $("#btnlogin").click(function(){
       location.href='login.html';
    });
    $("#btnback").click(function(){
       location.href='index.html';
    });
    $("#btnloginback").click(function(){
       location.href='reglog.html';
    });
    $("#btnregister").click(function(){
       location.href='register.html';
    });
    $("#registerback").click(function(){
       location.href='reglog.html';
    });
    

    $("#twendemarket").click(function(event){
        event.preventDefault();
        //send data with ajax
      
            $.ajax({
            url: "php/server.php",
            method: "post",
            data: $('form').serialize(),
            dataType: "text",
            success: function(strMessage){
                    $("#message").text(strMessage);
                    location.href='marketplace.html';
                }
            
        
          
      });
   });
    /*/login button
    $("#btnloginto").click(function(event){
        event.preventDefault();
        $.ajax({
            url: "php/login.php";
            method: "post";
            data: $('form').serialize(),
            dataType: "text",
            success: function(strMessages){
                $('#loginmessage').text(strMessages);
                
            }
        });*/

        /*function login(str){
            if (str=="") {
                document.getElementById("loginmessage").innerHTML="";
                return;
            }else{
                xmlhttp=new XMLHttpRequest();

                xmlhttp.onreadystatechange=function(){
            if (this.readyState==4 && this.status==200) {
                document.getElementById("txtHint").innerHTML=this.responseText;
            }
            };
            xmlhttp.open("POST","php/login.php?q="+str,true);
            xmlhttp.send();
            }
        }*/
   
        
});
$(document).ready(function(){
    $("#btnsubmit").click(function(event){
        event.preventDefault();
        //send data with ajax
      
            $.ajax({
            url: "php/marketplace.php",
            method: "post",
            data: $('form').serialize(),
            dataType: "text",
            success: function(strMessage){
                    
                    location.href='meetpoint.html';
                    $("#display").text(strMessage);
                }
            
        
          
      });
   });
});
$(document).ready(function(){
//   $("#btnOnchange").click(function(event){
//        event.preventDefault();
//         var url="php/meetpoint.php";
//    $.getJSON(url,function(data){
//        $.each(data,function(index,data){
//            $('#tablebody').append('<tr>');
//            $('#tablebody').append('<td>'+data.product+'</td>');
//            $('#tablebody').append('<td>'+data.location+'</td>');
//            $('#tablebody').append('<td>'+data.amount+'</td>');
//            $('#tablebody').append('<td>'+data.units+'</td>');
//            $('#tablebody').append('<td>'+data.desc+'</td>');
//            $('#tablebody').append('<tr>');
//        });
//    });
//    });
$("#btnOnchange").click(function(event){
    event.preventDefault();
    $.ajax({
            url:"php/meetpoint.php",
            data:"",
            dataType:"text",
            success: function(data){
                $("#output").html(data);
            }
            
            
    });
});

});
$(document).ready(function(){
   $("#btnSupply").click(function(event){
       event.preventDefault();
       $.ajax({
          url:"php/supply.php",
          data:$('#form_supply').serialize(),
          method:"post",
          dataType:"text",
          success:function(data){
              $('#supplyspace').html(data);
          }
       });
   });
   
 
});
function news(){
    if($("#mode").bind("click",function()
  {
    location.href='supply_modal.html';
    }));
}