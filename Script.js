

function firstLast6(num){

    if(num[0] == 6 || num[num.length -1] == 6){
        return true;
    }else{
        return false;
    }
}

function has23(num){
    if(num[0] == 2 || num[0] == 3 || num[1] ==3 || num[1] == 2 ){
        return true;
    }
    return false;

}

function fix_23(dylan){
    var arr = dylan;
    if(dylan[0] == 2 && dylan[1] == 3){
        dylan[1] = 0;
    }
    if(dylan[1] == 2 && dylan[2] == 3){
        dylan[2] = 0;
    }

    return arr;

}

function countYZ(words) {
    var count = 0;
    var words = words.toLowerCase();
    for(var i = 0; i <= words.length; i++) {
        if (words[i] === " " && (words[i - 1] === "y" || words[i - 1] === "z")) {
            count += 1;
        }
    }
        if(words[words.length - 1] === "y" || words[words.length - 1] === "z"){
            count += 1;
        }
        return count;
}

function endOther(first, second){
    var first = first.toLowerCase();
    var second = second.toLowerCase();
    var match = first.endsWith(second);
    var match2 = second.endsWith(first);
    if(match == true || match2 == true){
        return true;
    }else{
        return false;
    }
}

function starOut(string){
    var jag = "";
    var array = string.toLowerCase;
    for(var i = 0; i < string.length; i++){
        if(string[i] !== "*" && string[i + 1] !== "*" && string[i - 1] !== "*"){
             jag = jag + string[i];
           
        }
    }
              return jag;
}

function getSandwich(words) {
    var first = words.indexOf("bread");
    var second = words.lastIndexOf("bread");
    var jag = "";
    if(first == -1) {
        jag;
    }
    if(first == second){
        return jag;
    }

    return words.substring(first + 5, second);
}

function canBalance(array){
    var total1 = 0;
    var total2 = 0;
    for(var i = 0; i < array.length; i++){
        total1 += array[i];
        for(var x = i + 1; x < array.length; x++){
            total2 += array[x];

        }
        if(total1 == total2){
            return true;
        }
        total2 = 0;
    }
    return false;
}

function countClumps(numbers){
    var count = 0;
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] == numbers[i + 1] && numbers[i] !== numbers[i + 2]) {
            count ++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c){
    if((a-b == b-c) || (b-a == a-c) || (a-c === c-b) || (c-a == a-b)){
        return true;
    }else{
        return false;
    }
}


function tester() {

    document.getElementById("ouput").innerHTML = lastFirst6(1, 2, 6);
    document.getElementById("output2").innerHTML = (true, false);
    document.getElementById("output3").innerHTML = fix_23(1, 2, 3);
    document.getElementById("output4").innerHTML = endOther(heem, dreem);
    document.getElementById("output5").innerHTML = starOut(ahahshhs);
    document.getElementById("output6").innerHTML = getSandwhich(bread);
    document.getElementById("output7").innerHTML = canBalance(some);
    document.getElementById("output8").innerHTML = countClumps(1,2,3,4);
    document.getElementsById("output9").innerHTML = evenlySpaced(2, 4, 6);


    //test third method, etc
}
