/**
 * Created by 13995 on 2017/8/28.
 */
$(function () {
    $(".submit").click(function () {
        var uname = $("#uname").val();
        var tel = $("#tel").val();
        var desc = $("#desc").val();
        $("#uname").val("");
        $("#tel").val("");
        $("#desc").val("");
        alert("提交成功");
    });
});