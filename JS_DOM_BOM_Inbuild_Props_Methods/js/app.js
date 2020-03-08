//////////////////////////////////////////////////////////////// Functional Programming
(function() {
    var app = document.getElementById("app");

    var htmlString = '';
    var level = 1;

    function interateArray(data) {
        if (Array.isArray(data) && data.constructor.toString().indexOf("Array") > -1) {

            htmlString += '<ol class="' + 'type-' + level + '">';

            for (let i = 0; i < data.length; i++) {

                if (typeof data[i] == 'object' && data[i].constructor.toString().indexOf("Object") > -1) {
                    if (data[i].hasOwnProperty('name')) {
                        displayDataList(data[i])
                    } else {
                        htmlString += '<li>';
                        iterateObjectData(data[i]);
                        htmlString += '</li>';
                    }
                } else {
                    htmlString += '<li>';
                    htmlString += wrapInHref(data[i]);
                    htmlString += '</li>';
                }

            }
            htmlString += '</ol>';

            app.innerHTML = htmlString;

        }
    };

    function iterateObjectData(data) {
        htmlString += '<ul class="' + 'type-' + level + '">';

        for (key in data) {
            htmlString += '<li>';

            // if (key === 'Properties') {
            //     let length = data[key].length;

            //     let excludeCount = [];

            //     if (Array.isArray(data[key])) {
            //         data[key].filter(function(item, index) {

            //             if (item.name === 'Tips' || item[0] === 'tips') {
            //                 excludeCount.push(item);
            //             }

            //         });
            //     }

            //     let totalLength = length - excludeCount.length;
            // }

            if (typeof data[key] != 'string') {
                htmlString += wrapInHref(key);
            }

            // if (typeof data[key] == 'string') {
            //     htmlString += key + " : " + data[key];
            // }

            if (typeof data[key] == 'object' && data[key].constructor.toString().indexOf("Object") > -1) {
                iterateObjectData(data[key]);
            }

            if (Array.isArray(data[key])) {
                interateArray(data[key]);
            }
            htmlString += '</li>';
        }
        htmlString += '</ul>';
    };

    function displayDataList(obj) {
        htmlString += "<dl>";
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key == 'name') {
                    if (obj[key] == 'Tips' || obj[key] == 'tips') {
                        htmlString += "<dt class='tips'>";
                        htmlString += obj[key];
                        htmlString += "</dt>";
                    } else {
                        htmlString += "<dt>";
                        htmlString += obj[key];
                        htmlString += "</dt>";
                    }
                } else if (key == 'sub-head') {
                    htmlString += "<dd class='sub-head'>";
                    htmlString += obj[key];
                    htmlString += "</dd>";
                } else if (key == 'section') {
                    htmlString += "<dd class='section'>";
                    htmlString += obj[key];
                    htmlString += "</dd>";
                } else if (key == 'keyType') {
                    htmlString += "<span class='kanban'>";
                    htmlString += obj[key];
                    htmlString += "</span>";
                } else {
                    htmlString += "<dd>";
                    htmlString += obj[key];
                    htmlString += "</dd>";
                }

            }
        }
        htmlString += "</dl>";
    };

    function wrapInHref(textString, cssClass) {
        var text = '';
        if (cssClass) {
            text = '<a href="javascript:void(0)" class="' + cssClass + '">' + textString + '</a>';
        } else {
            text = '<a href="javascript:void(0)">' + textString + '</a>';
        }
        return text;
    };



    function toogle(elem) {
        //console.log(elem.target);
        var elem = elem.target;
        if (elem.nextElementSibling != null && elem.nextElementSibling.hasAttribute('style') && elem.nextElementSibling.style.display == 'block') {
            elem.classList.remove("active");
            elem.nextElementSibling.style.display = 'none';
        } else if (elem.nextElementSibling == null) {
            alert("Sorry!, there is no data availabe for this item");
        } else {
            elem.classList.add("active");
            elem.nextElementSibling.style.display = 'block';
        }
    }


    interateArray(jsCollection.data);

    document.querySelectorAll('#app a').forEach(function(item) {
        item.addEventListener('click', toogle);

    });

})();






///////////////////////////////////////////////////////////  Constructor Object Oriented 

(function(id) {
    function TreeTable(id) {
        this.id = document.getElementById(id);
        this.htmlString = "";
        this.level = 1;
    }
    TreeTable.prototype.init = function() {
        //console.log(this.id + "Main Method");
        //this.id.innerHTML = this.interateArray("Jon");
        //console.log(interateArray);

    }
    TreeTable.prototype.interateArray = function(Data) {
        //console.log('Array');
        return Data;
    }
    var a = new TreeTable(id);
    a.init();
})('app2');

//////////////////////////////////////////////////////////////////  Object Oriented
(function(id) {
    var TreeTable = {
        init: function(id) {
            this.id = document.getElementById(id);
            this.htmlString = "";
            this.level = 1;
            this.interateArray();
        },
        interateArray: function() {
            //console.log('interateArray');
        }
    }
    TreeTable.init();
})('app3');