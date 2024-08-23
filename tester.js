let a1;
function reqListener() {
    a1 = this.responseText;
    if (a1 != "" && a1 != undefined) {
        console.log("Data retrieved");
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://mps.geo-fs.com/map");
req.send();

let username = "DAL213(meatbroc)"

if (username === "Foo" || username === "foo") {
    console.log("Invalid username!")
}

let a2;
let a4;
let a5;
let a6;
let a7;
let a8;

req.addEventListener("load", function () {
    if (a1.indexOf(`${username}`) !== -1) {
        console.log(a1.indexOf(`${username}`));
        a2 = a1.indexOf(`${username}`)
    } else {
        console.log("Username not found in data");
        return
    }



    var a3 = a2 + 10;
    console.log(a3);
    while (a1[a3] !== "i") {
        a3++
    }
    console.log(a1[a3])
    console.log(a1[a3 + 3])
    console.log(a1[a3 + 4])
    console.log(a1[a3 + 5])

    a3++
    a3++
    a3++
    a3++
    a3++
    a3++

    while (!isNaN(a1[a3]) || a1[a3] === ".") {
        a3++
        console.log(a1[a3]);
    }
    a5 = a1.slice((a1.indexOf(`${username}`)) - 1, a3 + 1);
    a6 = a5.slice(a5.indexOf("co") + 4, a5.indexOf("ve") - 2);
    try {
        a6 = JSON.parse(a6);
    } catch (e) {
        console.error("Error parsing JSON:", e);
    }
    a7 = a6[0]
    a8 = a6[1]

});
