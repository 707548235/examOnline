/**
 * Created by 13995 on 2017/8/28.
 */
$(function () {
    $("#middle_icon_focus_1").css('background','url("../img/icon_border_03.png") center no-repeat');
    $("#middle_icon_focus_1,#middle_icon_focus_2,#middle_icon_focus_3,#middle_icon_focus_4,#middle_icon_focus_5,#middle_icon_focus_6").click(function () {
        $(".middle_icon_focus").css('background',"none");
        $(this).css('background','url("../img/icon_border_03.png") center no-repeat');
    });
    var img = $(".middle_need_company");
    var title = $(".middle_need_title");
    var txt = $(".middle_need_txt");
    $("#middle_icon_focus_1").on('click', function () {
        img.attr('src','../img/exam_comp_1.png');
        title.html('“用在线考试系统做招聘笔试，省时省力！”');
        txt.html('面试前邀请在线学习并参加笔试，考后自动出成绩，快速完成职业技能初筛，有效节约 时间成本。考后分析更为招聘提供参考，人员招聘更精准，大大提高了初始效率。');
    });
    $("#middle_icon_focus_2").on('click', function () {
        img.attr('src','../img/exam_comp_2.png');
    });
    $("#middle_icon_focus_3").on('click', function () {
        img.attr('src','../img/exam_comp_3.png');
    });
    $("#middle_icon_focus_4").on('click', function () {
        img.attr('src','../img/exam_comp_4.png');
    });
    $("#middle_icon_focus_5").on('click', function () {
        img.attr('src','../img/exam_comp_5.png');
    });
    $("#middle_icon_focus_6").on('click', function () {
        img.attr('src','../img/exam_comp_6.png');
    });
});
