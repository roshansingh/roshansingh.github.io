Guide = {
	currentState: {},
	config : {
		demo: [
			{
				'selector': '.row1',
				'title': 'Row1',
				'body': 'This is the first row.<br/>',
				'button': 'Next',	
				'placement': 'bottom',
				'next': 1
			},
		    {
		    	'selector': '.row2',
		    	'title': 'Row2',
		    	'body': 'This is the second row.<br/>',
		    	'button': 'Next',
		    	'placement': 'left',
		    	'next': 2
		    },
		    {
		    	'selector': '.row3',
		    	'title': 'Row3',
		    	'body': 'This is the third row.<br/>',
		    	'button': 'Next',
		    	'placement': 'right',
		    	'next': 3
		    },
		    {
		    	'selector': '.row4',
		    	'title': 'Row2',
		    	'body': 'This is the fourth row.<br/>',
		    	'button': 'Finish',
		    	'placement': 'top'
		    }

		]
	},
	getBody: function(item, type) {
		var content = '<div class="guide-body">' + item.body + '</div>';
		content += '<div class="guide-action"><button onclick="Guide.getNext(event);" class="btn btn-success" data-selector="'+ item.selector + '" data-type="'+ type + '"';
		if (item.next) {
			content += 'data-next="'+ item.next + '"';
		}
		content += '>' + item.button + '</button><div>';
		return content;
	},
	getNext: function(e) {
		var type = $(e.target).attr('data-type');
		var next = $(e.target).attr('data-next');
		var selector = $(e.target).attr('data-selector');
		
		$(selector).popover('destroy');
		$(selector).removeClass('guide-highlight');
		$(selector).off('click', Guide.stop);
		$('#guide-layer').hide();
		
		if (next) {
			Guide.place(type, next);
		}
	},
	place: function(type, next) {
		var cur = Guide.config[type][next];
		if ($(cur.selector).length > 0) {
			$(cur.selector).popover({title:cur.title, content: Guide.getBody(cur, type), 
				html:true, 'placement': cur.placement});
			$(cur.selector).addClass('guide-highlight');
			$('#guide-layer').show();
			
			$(cur.selector).on('click', Guide.stop);
			$('#guide-layer').on('click', Guide.stop);

			$(cur.selector).popover('show');
			$("html, body").animate({ scrollTop: $(cur.selector).offset().top - 200 }, 600);
			
			Guide.currentState = {selector:cur.selector, next: cur.next, type: type};
		} else {
			Guide.stop();
		}
	},
	stop: function() {
		$('#guide-layer').hide();
		if (Guide.currentState.selector) {
			$(Guide.currentState.selector).off('click', Guide.stop);
			$(Guide.currentState.selector).popover('destroy');
			$(Guide.currentState.selector).removeClass('guide-highlight');	
		}
	}
}