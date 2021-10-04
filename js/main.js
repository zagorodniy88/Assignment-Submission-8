
document.getElementById("btn1").onclick = function () {
    let text1, text2, text3, phrase;
    text1 = "I ";
    text2 = "Love ";
    text3 = "JS";
    phrase = document.getElementById("parent").innerHTML = text1.concat(text2, text3);
}


document.getElementById("btn2").onclick = function () {
    let text = "It is text to cut";
    let res = text.slice(12, 15);
    document.getElementById("parent").innerHTML = res;
}

document.getElementById("btn3").onclick = function () {
    let data = document.getElementById("data");
    let str = data.value;
    let res = document.getElementById("parent").innerHTML = str.toString();
    console.log(typeof res);
}

document.getElementById("btn4").onclick = function () {
    let num = 45143.54467;
    document.getElementById("parent").innerHTML = num.toPrecision(10);
}

