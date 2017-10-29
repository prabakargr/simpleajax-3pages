$(document).ready(function(){
	// $("#btn_submit_details").click(function(){
		
	// })
	$("#submitdetails").validate({
        rules:{
          stname:{
          	required:true,
          	minlength:4
          },
          stdob:"required",
          stgender:"required",
          stgname:"required",
          stcontact:{
          	required:true,
          	minlength:10
          }
          
        },
        messages:{
        	stname:{
        		required:"enter name",
        		minlength:"atleast 4"
        	},
        	stdob:"select DOB",
        	stgender:"select gender",
        	stgname:"enter name",
        	stcontact:{
          	required:"enter contact",
          	minlength:"atlest 10"
          }

        	
        },
        submitHandler:function(form){
         var schooladmis={
			name:$("#sname").val(),
			dob:$("#dob").val(),
			gender:$("#gender").val(),
			gname:$("#gname").val(),
			contact:$("#contact").val(),
		}
		$.post("https://59f2eed296bf410012f8c4fa.mockapi.io/school",
			schooladmis,function(){
			$("#sname").val("");
			$("#dob").val("");
			$("#gender").val("");
			$("#gname").val("");
			$("#contact").val("");
		});
		console.log(schooladmis);
        }
	});
	$.ajax({
       type:"GET",
       url:"https://59f2eed296bf410012f8c4fa.mockapi.io/school",
       dataType:"json",
       success:function(result){
       	var list="";
           for (i = 0; i < result.length; i++) {
           	list+="<tr><td>"+result[i].id+"</td><td>"+result[i].name+"</td><td>"+result[i].dob+
           	"</td><td>"+result[i].gender+"</td><td>"+result[i].gname+
           	"</td><td>"+result[i].contact+"</td></tr>"
           }
           $("#tbody").html(list);
       }
	});
});