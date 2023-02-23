// select input tag & generator
const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");


// Function for word generate 
const generateWord =(n)=>{
    let text = "";
    const letter = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

    for(let i = 0; i<n ;i++){
        const random = (Math.random()*25).toFixed(0);
        text += letter[random];

    }
    return text;
};


//variable
let numOfwords;

// create a function 
const generatePara = () => {
numOfwords = Number(input.value);
// create a paragraph Element
const para = document.createElement("p");

let data = "";
for(let i = 0; i<numOfwords; i++){
    const randomNumber =(Math.random()*15).toFixed(0);
    data += generateWord(randomNumber);
    data += " ";
}
para.innerText =data;
//setAttribute for papa 
para.setAttribute("class","paras");
//print at the last
container.append(para);
};
