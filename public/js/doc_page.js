$(document).ready(function () {
  $('[data-toggle-selector]').on('click', function (event) {
		event.preventDefault();
    var toToggle = $(event.target).data('toggle-selector');
    var originallyVisible = $(toToggle).hasClass('visible');
    $('.toc').removeClass('visible');
    $(toToggle).toggleClass('visible', !originallyVisible);
    return false;
  });
});
