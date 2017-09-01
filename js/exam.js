/**
 * Created by 13995 on 2017/8/28.
 */
$(function () {
    var img = $(".middle_need_company");
    var title = $(".middle_need_title");
    var txt = $(".middle_need_txt");
    $("#middle_icon_focus_1").css('background','url("../img/icon_border_03.png") center no-repeat');
    /*
    $("#middle_icon_focus_1,#middle_icon_focus_2,#middle_icon_focus_3,#middle_icon_focus_4,#middle_icon_focus_5,#middle_icon_focus_6").click(function () {
        $(".middle_icon_focus").css('background',"none");
        $(this).css('background','url("../img/icon_border_03.png") center no-repeat');
    });

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
    $(".register").click(function () {
        window.location.href = "http://42.236.73.28:8981/index.php";
    });
*/
    //触发hover换内容
    $("#middle_icon_focus_1").hover(function () {
        change(this,'../img/exam_comp_1.png','"做公司内部的知识培训简直太省心了！"','培训前把学习资料和考卷上传到平台，员工学习后，直接在线考试，特别方便！考完不用人工判卷，自动出成绩分析，方便下次培训参考！原先，一千 多人的培训要十多天才能完成，现在2天就OK，学习效果也好很多！');
    }, function () {
        
    });
    $("#middle_icon_focus_2").hover(function () {
        change(this,'../img/exam_comp_2.png','"用在线考试系统做招聘笔试，省时省力！"','面试前邀请在线学习并参加笔试，考后自动出成绩，快速完成职业技能初筛，有效节约 时间成本。考后分析更为招聘提供参考，人员招聘更精准，大大提高了初始效率!');
    }, function () {

    });
    $("#middle_icon_focus_3").hover(function () {
        change(this,'../img/exam_comp_3.png','"做经销商培训，在线考试系统最懂！"','以前每次培训、考试、判卷、分析真的要忙很久，10万经销商做下来，至少也要1个月。 现在只需上传培训资料和考核试卷到平台，各地区经销商就可以直接参加， 随时学习。考核后，自动给出分析结果，便于和经销商沟通辅导，更有效的提高了培训 质量。现在经销商培训只要3天就能完成，真是高效太多了！');
    }, function () {

    });
    $("#middle_icon_focus_4").hover(function () {
        change(this,'../img/exam_comp_4.png','"做知识竞赛，当然要用在线考试系统！"','原先线下做知识竞赛，最难的就是组织工作。开赛前，几万人的试卷真的要忙通宵， 赛后又有几万份试卷等着批改，想想都崩溃。现在只需要通知参赛选手 开赛时间和考试地址，考试后直接就能出排名出成绩，根本不用操心成绩的统计！ 也就2~3天，完成原先2~3个月的工作，简直太棒了！');
    }, function () {

    });
    $("#middle_icon_focus_5").hover(function () {
        change(this,'../img/exam_comp_5.png','"在线考试系统就是要学生减负，让老师好用！"','作为一名老师，最希望的是学生在课后完成作业，课前及时反馈，但对于教学机构， 以传统教学方式根本无法做到。还好有在线考试系统，下课前把作业链接发给学生课后完成， 上课前我只需查看分数统计，就能了解学习成果，还能提醒未完成作业的学生尽快完成。 在线考试系统就是事半功倍！');
    }, function () {

    });
    $("#middle_icon_focus_6").hover(function () {
        change(this,'../img/exam_comp_6.png','"想要在手机上模考学习，用在线考试系统啊！"','为了节约时间，很多在职学员都希望通过手机随时可以进行模考练习。但为了解决这个问题， 不得不请人开发手机学习系统，上线后还要费时费力的维护。现在轻松对接到 自己机构的公众号上，考生直接关注就能学习、考试，再也不用为系统操心。真是不能 再省心了！');
    }, function () {

    });
    //触发hover in
    function change(node,src,titleMsg,msg){
        $(".middle_icon_focus").css('background',"none");
        $(node).css('background','url("../img/icon_border_03.png") center no-repeat');
        img.attr('src',src);
        title.html(titleMsg);
        txt.html(msg);
    }
});


