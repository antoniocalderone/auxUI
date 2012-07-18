var radiobuttonsJS = function() {
    var groups = $('[data-lm-type=radiobuttons]:not([data-lm-processed])');
    groups.each(function() {
        var group = $(this),
            groupStyle = group.attr('data-lm-style'),
            groupName = group.attr('id'),
            isDisabled = group.is('[data-lm-disabled]'),
            objs = group.find('.controls label');
        objs.each(function() {
            var obj = $(this),
                objInput = obj.find('input');
                obj.addClass(groupStyle);
            objInput.attr('name', groupName);
            if(isDisabled) {
                objInput.attr('disabled', 'disabled');
            };
        });
        group.attr('data-lm-processed', 'true');
    });
};