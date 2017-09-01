/**
 * Created by 13995 on 2017/8/28.
 */
$(function () {
    $(".dropdown_li").hover(function () {
        $(".drop_link").css({"color":"#ed670f","font-size":"20px"});
        $(".project_menu").show();
    }, function () {
        $(".drop_link").css({"color":"#FFFFFF","font-size":"18px"});
        $(".project_menu").hide();
    });
});