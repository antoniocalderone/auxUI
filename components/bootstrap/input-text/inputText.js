var inputTextJS = function() {
	var objs = $('input[readonly]:visible');
	objs.each(function() {
		var obj = $(this),
			id = obj.attr('id'),
			val = obj.val();
		obj.hide();
		$('span[data-lm-rel='+id+']').html(val).show();
	});
};