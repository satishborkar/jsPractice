/*!
 * Adaptive menu example based on jQuery.
 * Author: Satish Borkar (http://github.com/satishborkar)
 * MIT license: https://opensource.org/licenses/MIT
 */

function getMenuDynamic(menuWidth) {
    var linkList = [];
    var wrapper = menuWidth - 80;
    var menuContainer = $(".menu-inline");
    var listCount = menuContainer.find("li");
    var primaryMenu = $(".menu-inline > li");
    var primaryMenuLinks = $(".menu-inline > li a");
    var listArr = Array.from(primaryMenu);
    var subMenu = $(".menu-dropdown");
    var subMenuCount = subMenu.find("li").length;

    listArr.forEach((list, index) => {
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

    if (linkList.length > 0) {
        linkList.forEach((link) => {
            let linkString = `<li><a href="${link.href}" data-section="${link.data}"> ${link.text} </a></li>`;
            wrapper = wrapper - link.requiredWidth
            if (wrapper > link.requiredWidth) {
                $(linkString).insertBefore(menuContainer.find("li.hamburger"));
            } else {
                subMenu.append(linkString)
            }
        });

    };

    //update submenu count
    $(".count").html($(".menu-dropdown li").length)
}


$(document).ready(function () {

    $(".hamburger a").hover(function () {
        $(this).addClass('active');
        $(".hamburger ul").fadeIn();
        $(".menu-dropdown a").click(() => {
            $(".hamburger ul").hide();
            $(this).removeClass('active');
        })
    });

    $(".menu-dropdown").hover(() => { }, () => {
        $(".hamburger ul").hide();
        $(".hamburger a").removeClass('active');
    })

    var mWidth = $("#wrapper").width();
    getMenuDynamic(mWidth);

    $(".section-container").eq(0).show();
    $(".menu-inline li:first-child a").focus();


    // accordian menu
    $(".menu-inline a").not("a.sub").click(function () {
        var dataTarget = $(this).attr("data-section");
        $(".section-container").hide();
        $("div[data-target='" + dataTarget + "']").fadeIn();
    });

});

var init;
$(window).resize(function () {
    clearTimeout(init);
    init = setTimeout(() => {
        var newWidth = $("#wrapper").width();
        getMenuDynamic(newWidth)
    }, 500);
});