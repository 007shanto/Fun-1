$(document).ready(function(){
    
     $("button").click(function(){
         const name =$("#nameId").val();

         $("#imgChan").attr(`src`,`https://joeschmoe.io/api/v1/${name}`);
     })

});