(function($) {
	//Setup framework to preload background images:
	var framework = '<div id="rTooltip"><div id="arrow"></div><div class="row"><div id="tCornerTL" class="tCorner"></div><div id="tBorderTop" class="tBorder"></div><div id="tCornerTR" class="tCorner"></div></div><div class="row"><div id="tVertBorderLeft" class="tVertBorder"></div><div id="tContent"></div><div id="tVertBorderRight" class="tVertBorder"></div><div class="clearfix"></div></div><div class="row"><div id="tCornerBL" class="tCorner"></div><div id="tBorderBottom" class="tBorder"></div><div id="tCornerBR" class="tCorner"></div></div></div>';
	$(document).ready(function() {
		$('body').append($(framework));
		console.log($(framework));
		$('#rTooltip').remove();
	});
	//Display element in a modal dialog:
	$.fn.rTooltip = function(content) {
		var elem = this;
		elem.data('rTooltipContent', $(content));
		function quadrant() {
			var wHeight = $(window).height();
			var wWidth = $(window).width();
			var ePos = elem.offset();
			var arrow = $('#arrow');
			var tooltip = $('#rTooltip');
			var r1 = (ePos.top <= wHeight / 2) ? "top": "bottom";
			if (r1 == "top") {
				var pushDiv = $('#tBorderTop');
				arrow.css('top', - 47);
				tooltip.css('top', ePos.top + elem.outerHeight()+47);
			} else {
				var pushDiv = $('#tBorderBottom');
				arrow.css('bottom', - 47);
				tooltip.css('top', ePos.top - tooltip.outerHeight()-47);
			}
			var r2 = (ePos.left <= wWidth / 2) ? "left": "right";
			if (r2 == "left") {
				pushDiv.css('marginLeft', 67);
				arrow.css('left', 20);
				tooltip.css('left', ePos.left + (elem.outerWidth() / 2) - 20);
			} else {
				pushDiv.css('marginRight', 67);
				arrow.css('right', 20);
				tooltip.css('left', ePos.left + (elem.outerWidth() / 2) - (tooltip.outerWidth() - 20));
			}
            console.log("reached");
			pushDiv.width(pushDiv.width() - 67);
			arrow.css('backgroundPosition', r1 + ' ' + r2);
			return r1 + ' ' + r2;
		}
		elem.hover(function() {
			var elem = $(this);
			$('body').append($(framework));
			var tContent = $('#tContent');
			var tTooltip = $('#tTooltip');
			tContent.append($(elem.data('rTooltipContent')).show());
			$('.tBorder').width(tContent.width());
			$('.tVertBorder').height(tContent.height());
			quadrant();

			//IE fixes for inline-block:
			if ($.browser.msie && $.browser.version <= 7.0) {
				$('#modal').css('width', $('#dia').width() + 20 + 'px').center();
			}

		},
		function() {
			$('#rTooltip').remove();
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

