function result() {
  

    var fnum = parseInt(calcForm.firstNum.value);
    var snum = parseInt(calcForm.secondNum.value);

    var chosenOp = calcForm.arithmeticOp.value;

    if (chosenOp == "+") {
    let result = fnum + snum;
    document.getElementById("finalRes").innerHTML = result;
       
    }
    else if (chosenOp == "-") {

    let result = (fnum > snum) ? (fnum - snum) : (snum - fnum);
       document.getElementById("finalRes").innerHTML = result;
       
    }
    else if (chosenOp == "*") {
      let  result = (fnum > snum) ? (fnum * snum) : (snum * fnum);
    document.getElementById("finalRes").innerHTML = result;
    }
    else if (chosenOp == "/") {
     let   result = (fnum > snum) ? (fnum / snum) : (snum / fnum);
     document.getElementById("finalRes").innerHTML = result;


    }

}








