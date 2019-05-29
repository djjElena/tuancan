$(function(){
    var get_chose_type = 0;
    var get_chose_first = 0;
    var get_chose_second = 0;
    var get_chose_type_name = '';
    var get_chose_first_name = '';
    var get_chose_second_name = '';

    $(".zizhi").click(function(e) {
        $("._aptitude").show();
    });
//������������б�
    $("._aptitude_type").find('a').click(function(){
        get_chose_type = $(this).attr("data-id");
        get_chose_type_name = $(this).attr("data-name");
        get_chose_aptitude_first_html();
    });
//��������б�
    $(document).on('click',"._aptitude_first>a",function(){
        get_chose_first = $(this).attr("data-id");
        get_chose_first_name = $(this).text();
        get_chose_aptitude_second_html();
    });
//���רҵ�б� �������ѡ��
    $(document).on('click',"._aptitude_second>a",function(){
        get_chose_second = $(this).attr("data-id");
        get_chose_second_name = $(this).text();
        get_chose_aptitude_data();
        get_chose_aptitude_close();
        $('.login-input-aptitude').removeClass('login-input-item-hover');
    });
//�ر�ѡ����
    $("#cColse").click(function(){
        get_chose_aptitude_data();
        get_chose_aptitude_close();
        $('.login-input-aptitude').removeClass('login-input-item-hover');
    })
//���ͷ����
    $("#_citysheng").find("li:eq(0)").click(function(){
        $("#_citysheng").find("li").removeClass("citySel");
        $("#_citysheng").find("li:eq(0)").addClass("citySel");
        $("._aptitude_type").show();
        $("._aptitude_first").hide();
        $("._aptitude_second").hide();
    });
//���ͷ������
    $("#_citysheng").find("li:eq(1)").click(function(){
        get_chose_aptitude_first_html();
    });
//���ͷ��רҵ
    $("#_citysheng").find("li:eq(2)").click(function(){
        get_chose_aptitude_second_html();
    });

//������ഥ���¼�
    function get_chose_aptitude_first_html(){
        if(get_chose_type == 0){
            layer.msg('��ѡ������', {icon: 0})
            return false;
        }
        get_chose_second = 0;
        get_chose_second_name = '';
        $("#_citysheng").find("li").removeClass("citySel");
        $("#_citysheng").find("li:eq(1)").addClass("citySel");
        $("._aptitude_type").hide();
        $("._aptitude_second").hide();
        var get_chose_aptitude_first_str = '';

        for(i=0;i< aptitude_data .length;i++){
            if(get_chose_first == aptitude_data[i]['id']){
                get_chose_aptitude_first_str += '<a class="active" data-level="2" data-id="'+aptitude_data[i]['id']+'">' +aptitude_data[i]['ap_name']+ '</a>';
            }else{
                get_chose_aptitude_first_str += '<a data-level="2" data-id="'+aptitude_data[i]['id']+'">' +aptitude_data[i]['ap_name']+ '</a>';
            }
        }
        $("._aptitude_first").html(get_chose_aptitude_first_str);
        $("._aptitude_first").show();
    }
//���רҵ�����¼�
    function get_chose_aptitude_second_html(){
        if(get_chose_type == 0){
            layer.msg('��ѡ������', {icon: 0})
            return false;
        }
        if(get_chose_first == 0){
            layer.msg('��ѡ�����', {icon: 0})
            return false;
        }
        $("#_citysheng").find("li").removeClass("citySel");
        $("#_citysheng").find("li:eq(2)").addClass("citySel");
        $("._aptitude_type").hide();
        $("._aptitude_first").hide();
        var get_chose_aptitude_secode_str = '';
        for(i=0;i<aptitude_data.length;i++){
            if(get_chose_first == aptitude_data[i]['id']){
                for (j=0;j<aptitude_data[i]['second'].length;j++) {
                    if(get_chose_second == aptitude_data[i]['second'][j]['id']){
                        get_chose_aptitude_secode_str += '<a class="active" data-level="3" data-id="'+aptitude_data[i]['second'][j]['id']+'">' +aptitude_data[i]['second'][j]['ap_name']+ '</a>';
                    }else{
                        get_chose_aptitude_secode_str += '<a data-level="3" data-id="'+aptitude_data[i]['second'][j]['id']+'">' +aptitude_data[i]['second'][j]['ap_name']+ '</a>';
                    }
                }
            }
        }
        $("._aptitude_second").html(get_chose_aptitude_secode_str);
        $("._aptitude_second").show();
    }

//�������ѡ��
    function get_chose_aptitude_data(){
        $("input[name=aptitude_type]").val(get_chose_type);
        $("input[name=aptitude_first]").val(get_chose_first);
        $("input[name=aptitude_second]").val(get_chose_second);
        var chose_aptitude_name  = '';
        if(get_chose_type_name){
            chose_aptitude_name += get_chose_type_name;
        }
        if(get_chose_first_name){
            chose_aptitude_name += '-'+get_chose_first_name;
        }
        if(get_chose_second_name){
            chose_aptitude_name += '-'+get_chose_second_name;
        }
        $("input[name=zizhi]").val(chose_aptitude_name);
    }
//�ر�����ѡ����
    function get_chose_aptitude_close(){
        $("._aptitude").hide();
    }
//ѡ����������
    $('.login-input-aptitude').click(function(e){
        $(this).addClass('login-input-item-hover');
        e.stopPropagation();
    });
//����&�绰
    $(" body").click(function(){
        $('.login-input-box').removeClass('login-input-item-hover');
    });
    $('.login-input-box').click(function(e){
        $('.login-input-box').removeClass('login-input-item-hover');
        $(this).addClass('login-input-item-hover');
        e.stopPropagation();
    });


//��ʾʡ��������
    $('.ser-sel-choose').click(function(){
        if($(this).next('.ser-sel-ul').hasClass('hide')){
            $(this).next('.ser-sel-ul').removeClass('hide');
            $(this).addClass('login-input-item-hover');
        }else{
            $(this).next('.ser-sel-ul').addClass('hide');
            $(this).removeClass('login-input-item-hover');
        }
    });

    $(document).on('click','.ser-sel-ul li a',function(){
        $(this).parents('.ser-sel-ul').addClass('hide');
        $(this).parents('.ser-sel-ul').prev().removeClass('login-input-item-hover');
        var selVal = $(this).text();
        $(this).parents('.ser-sel-ul').siblings('.ser-sel-choose').find('a').text(selVal);
    });
//ʡ�ݳ���
    $('.province-box a').click(function() {
        var parent_id = $(this).attr('data-value');
        var subject = $(this).attr('data-type');
        $('input[name=province_id]').val(parent_id);
        $('input[name=city_id]').val('');
        if (parent_id == '100' || parent_id == '200' || parent_id == '500' || parent_id == '770') {
            if (subject == 'subject') {
                $('.ser-sel-list').hide();
            } else {
                $('.ser-sel-list').eq(2).hide();
            }
        } else {
            $.post("/servicer/index/getCity", {
                id: parent_id,
                type: 1
            }, function(data) {
                $('.ser-sel-choose-w1').removeAttr('style');
                $('.city-box').html(data);
                if (subject == 'subject') {
                    $('.ser-sel-list').show();
                } else {
                    $('.ser-sel-list').eq(2).show();
                }
            })
        }
    });

//����
    $(document).on('click','.city-box a',function(){
        $('input[name=city_id]').val($(this).attr('data-value'));
    });


//���ie8�� placeholder������
    if( !('placeholder' in document.createElement('input')) ){
        $('input[placeholder],textarea[placeholder]').each(function(){
            var that = $(this),
                text= that.attr('placeholder');
            if(that.val()===""){
                that.val(text).addClass('placeholder');
            }
            that.focus(function(){
                if(that.val()===text){
                    that.val("").removeClass('placeholder');
                }
            })
                .blur(function(){
                    if(that.val()===""){
                        that.val(text).addClass('placeholder');
                    }
                })
                .closest('form').submit(function(){
                    if(that.val() === text){
                        that.val('');
                    }
                });
        });
    }
});
