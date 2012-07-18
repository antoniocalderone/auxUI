var selectJS = function() {
	var objs = $('select[readonly]:visible');
	objs.each(function() {
		var obj = $(this),
			isMultiple = obj.is('[multiple]'),
			id = obj.attr('id'),
			val = (isMultiple) ? obj.val().join(', ') : obj.val();
		obj.hide();
		$('span[data-lm-rel='+id+']').html(val).show();
	});
};