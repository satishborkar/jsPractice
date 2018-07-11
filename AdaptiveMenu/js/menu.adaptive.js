/*!
 * Adaptive menu example based on jQuery.
 * Author: Satish Borkar (http://github.com/satishborkar)
 * MIT license: https://opensource.org/licenses/MIT
 */

function getMenuDynamic(updatedWidth) {

    var linkList = [];
    var wrapper = updatedWidth - 80;
    var menuContainer = $(".menu-inline");
    var primaryMenu = $(".menu-inline li");
    var listArr = Array.from(primaryMenu);
    var subMenu = $(".menu-dropdown");

    listArr.forEach((list) => {
        if (!list.hasAttribute('class')) {
            linkList.push({
                "requiredHeight": list.clientHeight,
                "requiredWidth": list.clientWidth,
                "text": list.innerText,
                "className": list.className,
                "childClassName": list.children[0].className,
                "href": list.children[0].href,
                "data": list.children[0].dataset.section
            });
            list.remove();
        }
    });

    var wrapperWidth = wrapper;

    if (linkList.length > 0) {
        linkList.forEach((link) => {
            
            let linkString = `<li><a href="${link.href}" data-section="${link.data}"> ${link.text} </a></li>`;

            wrapperWidth = wrapperWidth - link.requiredWidth;
            if (wrapperWidth >= link.requiredWidth) {
                $(linkString).insertBefore(menuContainer.find("li.hamburger"));
                return;
            }
            subMenu.append(linkString);
        });
    }
    wrapperWidth = 0;

    //update submenu count
    $(".count").html($(".menu-dropdown li").length);
}

var prevWidth = $("#wrapper").width();

function isWindowChanged() {
    if ($("#wrapper").css("width") != prevWidth) {
        var currentWidth = $("#wrapper").width();
        prevWidth = $("#wrapper").width();
        
        getMenuDynamic(currentWidth);
    }
}


// var handheld = window.matchMedia("(min-device-width: 320px) and (max-device-width: 480px)");
// var tablets = window.matchMedia("(min-device-width: 768px) and (max-device-width: 1024px)");

// function updateMenu(handheld, tablets) {

//     console.log("tablets 01", tablets.matches);
//     console.log("handheld 01", handheld.matches);
//     if (handheld.matches) {
//         getMenuDynamic();
//         document.body.style.backgroundColor = "yellow";
//         return;
//     }

//     if (tablets.matches) {
//         getMenuDynamic();
//         document.body.style.backgroundColor = "pink";
//         return;
//     }
//     getMenuDynamic();
// }



// // Call listener function at run time
// updateMenu(handheld, tablets);

// // Attach listener function on state changes
// handheld.addListener(updateMenu);
// tablets.addListener(updateMenu);