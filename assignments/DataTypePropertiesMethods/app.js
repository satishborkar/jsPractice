function drawTable(options) {
    var options = options || {}
    options = {
        sectionHeader: options.sectionHeader || "Javascript Global Properties & Methods",
        dataType: options.dataType || undefined,
        isMethods: options.isMethods || false,
        rowCount: options.rowCount || 2,
        rowHeader: options.rowHeader || ['Property', 'Description']
    }

    var sectionHead = document.createElement("h1");
    var app = document.getElementById("app");
    var sectionHeadText = document.createTextNode(options.sectionHeader);
    var abc = sectionHead.appendChild(sectionHeadText);
    //app.appendChild(abc);

    //console.log(Object.prototype.hasOwnProperty.call(options, 'dataType'));

    //const arr = [1, 2, 3, 4];
    //const [first, second] = arr;
    //console.log(first, second)

    const avc = [1, 2, 3];

};

var globalMethods = drawTable({ sectionHeader: 'la la la lalla llalaas lllllllllaaaaaa' });