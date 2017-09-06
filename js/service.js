/**
 * Created by 13995 on 2017/8/28.
 */
$(function () {
    for(var i=1;i<5;i++){
        (function(i){
            var tab = "#m_tab_"+i;
            var tabOut = "#m_tab_"+i+"_out";
            var tabIn = "#m_tab_"+i+"_in";
            $(tab).hover(function () {
                $(tabOut).hide();
                $(tabIn).show();
                $(tabIn).css({'background':'#09a5ff','color':'white'});
                $(tabIn).addClass('animated fadeInUp');
            }, function () {
                $(tabOut).show();
                $(tabIn).hide();
            });
        })(i);
    }

});
