var isSP = true;
var mql = window.matchMedia('screen and (max-width: 767px)');
function checkBreakPoint(mql) {
	if (mql.matches) {
		isSP = true;
	} else {
		isSP = false;
	}
}
mql.addListener(checkBreakPoint);
checkBreakPoint(mql);

$(function () {
  $('.catch').on('click', function () {
    if (isSP) {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
    }
  });
});


$(function () {
  $('.faq-item').on('click', function () {
		$(this).find('.accordion').toggleClass('active');
		$(this).find('.detail').slideToggle();
  });
});