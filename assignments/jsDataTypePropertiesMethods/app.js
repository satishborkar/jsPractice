// var data = {
//     "properties": [
//         { name: "Prop01", desc: "desc01" },
//         { name: "Prop02", desc: "desc02" }
//     ],
//     "methods": [
//         { name: "Method01", desc: "Methoddesc01" },
//         { name: "Method02", desc: "Methoddesc02" }
//     ],
// }

// var DataProps = data["properties"].map(function(item){
//     console.log(item.name + item.desc);
// });

// var DataMethods = data["methods"].map(function(item){
//     console.log(item.name + item.desc);
// });

var propTbl = document.querySelector(".prop-tbl");
var methodsTbl = document.querySelector(".methods-tbl");
var isPropAvail = document.querySelector(".isPropAvail");
var isMethodsAvail = document.querySelector(".isMethodsAvail");


var htmlPropStr = "";
var renderProp = data.map(function (item) {
    if (item.hasOwnProperty("type") && item["type"] == "prop") {
        htmlPropStr += "<tr><td>" + item.name + "</td>";
        htmlPropStr += "<td>" + item.desc + "</td></tr>";
    }else{
        isPropAvail.style.display = "none";
    }
});

propTbl.innerHTML = htmlPropStr;

var htmlMethodsStr = "";
var renderMethods = data.map(function (item) {
    if (item.hasOwnProperty("type") && item["type"] == "method") {
        htmlMethodsStr += "<tr><td>" + item.name + "</td>";
        htmlMethodsStr += "<td>" + item.desc + "</td></tr>";
    }
});

methodsTbl.innerHTML = htmlMethodsStr;



