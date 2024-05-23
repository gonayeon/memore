$(function(){

    $("#images_wrap > li:gt(0)" ).hide();

    setInterval(function(){
        $("#images_wrap > li:first-child").fadeOut()
        .next("li").fadeIn()
        .end()
        .appendTo("#images_wrap");
    },3000);

    $("#images_wrap2 > li:gt(0)" ).hide();

    setInterval(function(){
        $("#images_wrap2 > li:first-child").fadeOut()
        .next("li").fadeIn()
        .end()
        .appendTo("#images_wrap2");
    },3000);


    

    $(document).on('click', function(event) {
        // 메뉴 영역을 제외한 영역 클릭 시 메뉴 닫기
        if (!$(event.target).closest('#m_nav').length && $('#m_nav').is(':visible')) {
            $("#m_nav").animate({ left: "-300px" });
            event.stopPropagation();
        }
    });

    $("#ham").click(function(){
        $("#m_nav").animate({ left:0 });
    });

    $('#ham').on('click', function(event) {
        // 메뉴 버튼 클릭 시 메뉴 열기
        event.stopPropagation();
        });



    $(document).ready(function() {
        $('.search-box i').click(function() {
          $('.toggle').toggle();
          $('.search-box input').toggle();
        });
      });

      $("#shop_menu > li").eq(0).click(function(){
        $("#shop_list > li").show();
      });
     
      $("#shop_menu > li").eq(1).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.pottery").show();
      });

      $("#shop_menu > li").eq(2).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.glass").show();
      });

      $("#shop_menu > li").eq(3).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.living").show();
      });

      $("#shop_menu > li").eq(4).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.rug").show();
      });


      $("#m_select_menu ul > li").eq(0).click(function(){
        $("#shop_list > li").show();
      });
     
      $("#m_select_menu ul > li").eq(1).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.pottery").show();
      });

      $("#m_select_menu ul > li").eq(2).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.glass").show();
      });

      $("#m_select_menu ul > li").eq(3).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.living").show();
      });

      $("#m_select_menu ul > li").eq(4).click(function(){
        $("#shop_list > li").hide();
        $("#shop_list > li.rug").show();
      });



       // 초기화
  $('#m_select_menu ul').hide();
  $('#m_select_menu .toggle-button span').text($('#m_select_menu li:first-child').text());
 
  
  // toggle 버튼 클릭 시 리스트 토글
  $('.toggle-button').click(function() {
    $(this).toggleClass('active');
    $('#m_select_menu ul').toggle();
  });
  
  // 리스트에서 선택한 항목으로 내용 변경 후 리스트 숨김
  $('#m_select_menu li').click(function() {
    var selected = $(this).text();
    $('#m_select_menu span').text(selected);
    $('#m_select_menu ul').hide();
    $('#m_select_menu .toggle-button').removeClass('active');
  });

  $('.name').each(function() {
    var text = $(this).text();
    if (text.length > 1) {
      var newText = text.substring(0, 1) + '**';
      $(this).text(newText);
    }
  });


  $(".aa").click(function(){
		alert("비밀글은 읽을 수 없습니다.");
	});
  

    
});