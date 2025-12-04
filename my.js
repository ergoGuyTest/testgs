
function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbw96ReVvu3F3F6VByIox61LO9uWqwYuSPx8vch_B5vGZi1jI6TXCEqNnIBBdpS_7R0XYg/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
    
               document.getElementById("app").textContent = d[0].status;
    
        });

}

function addGS(){

    const url = "https://script.google.com/macros/s/AKfycbw96ReVvu3F3F6VByIox61LO9uWqwYuSPx8vch_B5vGZi1jI6TXCEqNnIBBdpS_7R0XYg/exec";

    fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        //credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
            //not required!
        },
        redirect: 'follow',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify({first:"Michael",last:"Jordan",number:"312-006-1998"})
    });

}

document.getElementById("btn2").addEventListener("click",addGS);


document.getElementById("btn").addEventListener("click",testGS);


