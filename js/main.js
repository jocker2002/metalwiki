$(document).ready(function () {
    let pathname = window.location.pathname; // get the file path name
    let filename = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.lastIndexOf(".")); // get the file name without extension

    $("header .container ul li a").each(function () {
        if ($(this).attr("href").includes(filename)) { // if href of tag has the same value as page file name
            $(this).siblings().removeClass("active"); // remove class "active" from sibling tags
            $(this).addClass("active"); // add class "active" to the matched tag
        }
    });
});