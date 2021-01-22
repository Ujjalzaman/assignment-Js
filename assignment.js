


//Problem 1 ----> covert kilometer to Meter

function kilometerToMeter(kilometer){
    if(kilometer<0){                                    //to avoid negative number
        console.log("please input valid number")
        return false;
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
    else if (days<=20) {                                        //second 10 days start from 11-20
        first10days = 10*100;
        reminingDays = days-10;                                 //confirm second 10days
        second20days = reminingDays*100;
        discount = 20/100;                        
        price = second20days - (second20days*discount);          //discount second 10 days off 20%
        discountPrice = price + first10days;                     //initial vallue included 20% discount
    }
    else{
        first10days = 10*100;                                    //first 10days 
        second20days = 10*100;                                    //second 10 days 
        reminingDays = days-20;                                   //confirm third days which will be 21 to infinity
        thirdDays = reminingDays*100;
        discount = 50/100;
        price = thirdDays - (thirdDays*discount);                  //discount third  days off 50%
        discountPrice = price + first10days + second20days;        //initial vallue included 50% discount

    }
    return discountPrice;
}

//Problem 4 ----> megaFriend - get the larget string in an array
function megaFriend(nameList) {
    var LargeName = [0];                                       // empty variable here will be the big element
    for(var i = 0; i<nameList.length; i++){                    //friend list in array
        var element = nameList[i];
        if (element.length>LargeName.length){                  //get big length of array and pass it to largeName variable
            LargeName = element;
        }
    }    
    return LargeName;
}




