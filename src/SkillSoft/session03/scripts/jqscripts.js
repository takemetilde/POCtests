$(function(){
    $("#GetRecords").click(function(){
        $.ajax({
            url:"json.txt",
            type:"GET",
            success:function(result){
                console.log(result)
            },
            dataType:"json",
            error:function(err){
                console.log(err)
            }
        })
    })
})
$(function(){
    $("form['frmCollectWeights']").validate({
        rules:{
            empName:"required",
            empWeight:"required"
        },
        messages:{
            empName:"Name is required",
            empWeight:"Weight is required"
        },
        submitHandler:function(form){

        }
    })
})
$(document).ready(function(){
    //alert("Ready to Rock!")
    $("p").mouseover(function(){
        $(this).addClass("liYellow")
    })
    $("p").mouseout(function(){
        $(this).removeClass("liYellow")
    })
})