// 문서 준비 이벤트
$(document).ready(function(){
  // &는 제이쿼리 함수
var tab = $('.tab');
var list = $('.notice, .pds');
var list_item = $('.board li');

tab.attr('tabindex', 0);
list_item.attr('class', 'icon-dot-circled');
tab.click(function(c){
  // c 라는 기본 이벤트를 실행 안해!!
  c.preventDefault();
  list.removeClass('is-act');
  // tab의 부모로 간다. 
  $(this).parent().addClass('is-act');
});

tab.keyup(function(c){
  c.preventDefault();
  if(c.keyCode == 13){
    list.removeClass('is-act');
    $(this).parent().addClass('is-act');
  }
  else{

  }
})
});