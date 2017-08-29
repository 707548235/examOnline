/**
 * Created by 13995 on 2017/8/28.
 */
$(function () {
    $(".dropdown_li").hover(function () {
        $(".drop_link").css({"color":"#0248c9","font-size":"18px"});
        $(".project_menu").show();
    }, function () {
        $(".drop_link").css({"color":"#363636","font-size":"16px"});
        $(".project_menu").hide();
    });
});