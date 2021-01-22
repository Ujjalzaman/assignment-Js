//Github --->   https://github.com/Ujjalzaman/assignment-Js/blob/main/assignment.js

//Problem 1 ----> covert kilometer to Meter

function kilometerToMeter(kilometer){
    if(kilometer<0){                                    
        return "please input valid number";             //to avoid negative number
    }
    else{
        var meter = kilometer*1000;                     //1kilometer == 1000 meter 
    }
    return meter;
}

//Problem 2 ----> budgetcalculatr shoping watch, phone and leptop                                                                       
function budgetCalculator(watch, phone, leptop){
    if(watch <0 || phone <0 || leptop <0){              //to avoid negative value
        console.log("Please input possitive value")
        return false;
    }
    else{
        sum = (watch*50) + (phone*100) + (leptop*500);
    }
    return sum
}

//Problem 3 ----> hotelCost - stay pernight for 1000 after 10 days dicount will apply 
function hotelCost(days) {
    let discountPrice = 0;
    if(days<=10){                                               //first 10days start from 1-9
        discountPrice = days*100;
    }
    else if (days<=20) {                                        
        first10days = 10*100;
        reminingDays = days-10;                                 
        second20days = reminingDays*100;
        discount = 20/100;                        
        price = second20days - (second20days*discount);          
        discountPrice = price + first10days;                     //initial vallue included 20% discount
    }
    else if(days>=21){
        first10days = 10*100;                                    
        second20days = 10*100;                                    
        reminingDays = days-20;                                   
        thirdDays = reminingDays*100;
        discount = 50/100;
        price = thirdDays - (thirdDays*discount);                  //discount third  days off 50%
        discountPrice = price + first10days + second20days;
    }
    else{
        return "please Enter a valid quantiti"                     //extra part here

    }
    return discountPrice;
}

//Problem 4 ----> megaFriend - get the larget string in an array
function megaFriend(nameList) {
    var LargeName = [0];                                       
    if(nameList.length>0){
        for(var i = 0; i<nameList.length; i++){                    
            var element = nameList[i];
            if (element.length>LargeName.length){                  //get big length of array and pass it to largeName variable
                LargeName = element;
            }
        }    
        return LargeName;
    }
    else{
        return("Please Provide a valid name List");             //extra part here 
    }
}



