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
            }, function () {
                $(tabOut).show();
                $(tabIn).hide();
            });
        })(i);
    }
});
