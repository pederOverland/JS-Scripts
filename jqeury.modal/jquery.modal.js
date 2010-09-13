(function($) {
	//Display element in a modal dialog:
	$.fn.modal = function() {
		var elem = this;
		var framework = '<div id="modalWrapper"> <div id="modal"> <div id="modalBarTop" class="modalBar"> <div class="modalCorner" id="modalTL"> </div> <div class="modalCorner" id="modalTR"> </div> </div> <div class="modalRow"> <div id="modalContent"> </div> </div> <div id="modalBarBottom" class="modalBar"> <div class="modalCorner" id="modalBL"> </div> <div class="modalCorner" id="modalBR"> </div> </div> </div> </div>'
		var isInitialized = $('#modalWrapper').length;
		if (!isInitialized) {
			$('body').append($(framework).hide());
		}
		if ($('#modalContent').children().length) {
			$('#modalContent').children().hide().appendTo($('body'));
		}
		$('#modalContent').empty().append(elem.show()).parents('#modalWrapper').show();
		$('#modalWrapper').click(function(e) {
			$('#modalWrapper').hide();
		});
		$('#modal').center().click(function(e) {
			e.stopPropagation();
		});
        
		return this;
	}
	$.fn.center = function() {
		this.css('position', 'absolute');
		this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
		this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
		return this;
	}
})(jQuery);

