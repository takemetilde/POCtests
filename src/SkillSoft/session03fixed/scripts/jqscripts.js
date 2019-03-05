$(function() { 
    $("#GetRecords").click(function(){ 
        $.ajax({
			//url:"http://localhost:8000/getweights",
			url:"json.txt",
			//type:"GET",
			dataType:"json",
			success:function(result){
				console.log(result);
			},
			error:function(err){
				console.log(err);
			}
		});
    }); 
}); 
//
$(function(){	
	$("form[name='frmCollectWeights']").validate({
		rules:{
			empName:{
				required:true,
				minlength:3
			},
			empWeight:{
				required:true,
				number:true
			}
		},
		messages:{
			empName:{
				required:"Name is required",
				minlength:"Name should be longer"
			},
			empWeight:{
				required:"Weight is required",
				number:"Please enter a valid weight"
			}
		},
		submitHandler:function(form){
			form.submit();
		}
	});
});
//
 $(function(){
	//alert("ready to rock!")
	$("p").mouseover(function(){
		$(this).addClass("liYellow");
	});
	$("p").mouseout(function(){
		$(this).removeClass("liYellow");
	});
});
//
/* $(function(){
	$("form[name='frmCollectWeights']").validate({
		rules:{
			empName:{
				required:true,
				minlength:3
			},
			empWeight:{
				required:true,
				number:true				
			}
		},
		messages:{
			empName:{
				require:"Name is required",
				minlength:"Name too short"
			},
			empWeight:{
				required:"Weight is required",
				number:"Please enter a valid weight"
			}
		},
		submitHandler:function(form){
			form.submit();
		}
	});
}); */
