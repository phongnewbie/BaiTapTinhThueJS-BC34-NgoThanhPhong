 
function calcTheDuty(){
    var fullName = document.getElementById("fullName").value;
    var theRevunue = document.getElementById("theReveune").value*1 *1000000;
    var amountMember = document.getElementById("theMember").value*1;
    var format = new Intl.NumberFormat("vn-VN")
   var totalDuty = "";
    if(theRevunue <= 60000000){
        totalDuty = theRevunue*0.05;
    }else if(theRevunue > 60000000 && theRevunue <= 120000000){
        totalDuty = theRevunue*0.1
    }else if(theRevunue > 120000000 && theRevunue <= 210000000){
        totalDuty = theRevunue*0.15
    }else if(theRevunue > 210000000 && theRevunue <= 384000000){
        totalDuty = theRevunue* 0.2
    }else if (theRevunue > 384000000 && theRevunue <= 624000000 ){
        totalDuty = theRevunue* 0.25
    }else if(theRevunue > 624000000  && theRevunue <= 960000000){
        totalDuty = theRevunue* 0.3
    }else if(theRevunue > 960000000){
        totalDuty = theRevunue* 0.35
    }
    document.getElementById("yourTotalMoney").innerHTML = ` ${fullName} thue phai tra la ${format.format(totalDuty)}  VND`;
}





