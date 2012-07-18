$('body').html('');
view.insert([
	{
		items: [
			{
				tmpl:			'container',
				data: {
					id:					'main'
				}
			}
		]
	},
	{
		target:				'#main',
		items: [
			{
				tmpl:			'page-header',
				data: {
					title:				'Form elements'
				}
			},
			{
				tmpl:			'nav-pills',
				data: {
					id:					'formElementsNavPills',
					subnavContainer:	true,
					nav: [
						{
							active:			true,
							link:			'#input-text',
							label:			'Text'
						},
						{
							link:			'#input-select',
							label:			'Select'
						}
					]
				}
			},
			{
				tmpl:			'section',
				data: {
					sections: [
						{
							id:			'mainSection'
						}
					]
				}
			}
		]
	},
	{
		target:				'#mainSection',
		items: [
			{
				tmpl:			'form',
				data: {
					id:					'myForm',
					disposition:		'horizontal'
				}
			}
		]
	},
	{
		target:				'#myForm',
		items: [
			{
				tmpl:				'layout',
				data: {
					rows: [
						{
							rowId:			'first',
							columns: [
								{
									colId:		'left-side',
									span:		6
								},
								{
									colId:		'right-side',
									span:		6
								}
							]
						}
					]
				}
			}
		]
	},
	{
		target:				'#left-side',
		items: [
			{
				tmpl:				'title',
				data: {
					title:				'Input type text and variants elements'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextNormal',
					label:					'Input text (Normal)',
					placeholder:			'This is a text input..',
					type:					'text',
					size:					'xlarge'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextFocused',
					label:					'Input text (focused)',
					placeholder:			'This is focused..',
					type:					'text',
					size:					'xlarge',
					focused:				true
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextReadOnly',
					label:					'Input text (readonly)',
					value:					'This is not editable...',
					type:					'text',
					size:					'xlarge',
					readonly:				true
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextDisabled',
					label:					'Input text (disabled)',
					value:					'This is not editable...',
					type:					'text',
					size:					'xlarge',
					disabled:				true
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextWarning',
					label:					'Input text (warning)',
					placeholder:			'Warning styled...',
					type:					'text',
					size:					'xlarge',
					appereance:				'warning'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextError',
					label:					'Input text (error)',
					placeholder:			'Error styled...',
					type:					'text',
					size:					'xlarge',
					appereance:				'error'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextSuccess',
					label:					'Input text (success)',
					placeholder:			'Success styled...',
					type:					'text',
					size:					'xlarge',
					appereance:				'success'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextPrepend',
					label:					'Prepend input text',
					placeholder:			'Prepend text...',
					type:					'text',
					size:					'large',
					addonPrepend:			true,
					addonPrependText:		'Pre',
					addonPrependIcon:		'star',
					helpType:				'inline',
					help:					'Icon and text of the prepend area are optionals'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextAppend',
					label:					'Append input text',
					placeholder:			'Append text...',
					type:					'text',
					size:					'large',
					addonAppend:			true,
					addonAppendText:		'Post',
					addonAppendIcon:		'star',
					helpType:				'inline',
					help:					'Icon and text of the append area are optionals'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextPrependAppend',
					label:					'Prepend and Append input text',
					placeholder:			'Prepend and Append text...',
					type:					'text',
					size:					'medium',
					addonPrepend:			true,
					addonPrependText:		'Pre',
					addonPrependIcon:		'star',
					addonAppend:			true,
					addonAppendText:		'Post',
					addonAppendIcon:		'star',
					helpType:				'inline',
					help:					'Icon and text of the pre and append area are optionals'
				}
			},
			{
				tmpl:				'input-text',
				data: {
					id:						'inputTextPrependButtonAppend',
					label:					'Prepend and Button append input text',
					placeholder:			'Prepend and Button append text...',
					type:					'text',
					size:					'medium',
					addonPrepend:			true,
					addonPrependText:		'Pre',
					addonPrependIcon:		'star',
					buttonAppend:			true,
					buttonAppendText:		'Post',
					buttonAppendIcon:		'star',
					buttonAppendCallback:	'alert(\'buttonClicked\')',
					helpType:				'inline',
					help:					'Icon and text of the pre and append area are optionals'
				}
			},
			{
				tmpl:				'title',
				data: {
					title:					'Radiobutton and Checkboxes'
				}
			},
			{
				tmpl:				'input-checkboxes',
				data: {
					id:						'myCheckboxesGroup',
					label:					'Checkboxes',
					//disposition:			'inline',
					//disabled:				true,
					options: [
						{
							id:					'element1',
							label:				'Item One',
							value:				'one',
							disabled:			true
						},
						{
							id:					'element2',
							label:				'Item Two',
							value:				'two',
							checked:			true
						},
						{
							id:					'element3',
							label:				'Item Three',
							value:				'three'
						},
						{
							id:					'element4',
							label:				'Item Four',
							value:				'four',
							disabled:			true
						},
						{
							id:					'element5',
							label:				'Item Five',
							value:				'five',
							checked:			true
						},
						{
							id:					'element6',
							label:				'Item Six',
							value:				'six',
							checked:			true,
							disabled:			true
						}
					]
				}
			},
			{
				tmpl:				'input-checkboxes',
				data: {
					id:						'myCheckboxesGroupInline',
					label:					'Checkboxes (inline)',
					disposition:			'inline',
					options: [
						{
							id:					'element1',
							label:				'Item One',
							value:				'one',
							disabled:			true
						},
						{
							id:					'element2',
							label:				'Item Two',
							value:				'two',
							checked:			true
						},
						{
							id:					'element3',
							label:				'Item Three',
							value:				'three'
						}
					]
				}
			},
			{
				tmpl:				'input-radio',
				data: {
					id:						'myRadiobuttonsGroup',
					label:					'Radio Buttons',
					//disposition:			'inline',
					//disabled:				true,
					options: [
						{
							id:					'element1',
							label:				'Item One',
							value:				'one',
							disabled:			true
						},
						{
							id:					'element2',
							label:				'Item Two',
							value:				'two',
							checked:			true
						},
						{
							id:					'element3',
							label:				'Item Three',
							value:				'three'
						},
						{
							id:					'element4',
							label:				'Item Four',
							value:				'four',
							disabled:			true
						},
						{
							id:					'element5',
							label:				'Item Five',
							value:				'five',
							checked:			true
						},
						{
							id:					'element6',
							label:				'Item Six',
							value:				'six',
							checked:			true,
							disabled:			true
						}
					]
				}
			},
			{
				tmpl:				'input-radio',
				data: {
					id:						'myRadiobuttonsGroupInline',
					label:					'Radio Buttons (inline, all disabled)',
					disposition:			'inline',
					disabled:				true,
					options: [
						{
							id:					'element1',
							label:				'Item One',
							value:				'one',
							disabled:			true
						},
						{
							id:					'element2',
							label:				'Item Two',
							value:				'two',
							checked:			true
						},
						{
							id:					'element3',
							label:				'Item Three',
							value:				'three'
						}
					]
				}
			}
		]
	},
	{
		target:				'#right-side',
		items: [
			{
				tmpl:				'title',
				data: {
					title:				'Select and variants elements'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectNormal',
					label:					'Select (normal)',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					]
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectFocused',
					label:					'Select (focused)',
					focused:				true,
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					]
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectReadOnly',
					label:					'Select (readonly)',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					readonly:				true,
					size:					'xlarge',
					help:					'Readonly select',
					helpType:				'inline'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectDisabled',
					label:					'Select (disabled)',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					disabled:				true,
					size:					'xlarge',
					help:					'Disabled select',
					helpType:				'inline'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectWarning',
					label:					'Select (warning)',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					appereance:				'warning'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectError',
					label:					'Select (error)',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					appereance:				'error'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectSuccess',
					label:					'Select (success)',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					appereance:				'success'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectPrepend',
					label:					'Select (prepend)',
					size:					'large',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					addonPrepend:			true,
					addonPrependText:		'Pre',
					addonPrependIcon:		'star',
					help:					'Icon and text of the prepend area are optionals',
					helpType:				'inline'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectAppend',
					label:					'Select (append)',
					size:					'large',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					addonAppend:			true,
					addonAppendText:		'Post',
					addonAppendIcon:		'star',
					help:					'Icon and text of the append area are optionals',
					helpType:				'inline'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectPrependAppend',
					label:					'Select (prepend and append)',
					size:					'medium',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					addonPrepend:			true,
					addonPrependText:		'Pre',
					addonPrependIcon:		'star',
					addonAppend:			true,
					addonAppendText:		'Post',
					addonAppendIcon:		'star',
					help:					'Icon and text of the pre and append area are optionals',
					helpType:				'inline'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectPrependButtonAppend',
					label:					'Select (prepend and button append)',
					size:					'medium',
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second'
						},
						{
							label:					'Third',
							value:					'third'
						}
					],
					addonPrepend:			true,
					addonPrependText:		'Pre',
					addonPrependIcon:		'star',
					buttonAppend:			true,
					buttonAppendText:		'Post',
					buttonAppendIcon:		'star',
					buttonAppendCallback:	'alert(\'Button clicked\')',

					help:					'Icon and text of the pre and append area are optionals',
					helpType:				'inline'
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectMultiple',
					label:					'Select (multiple)',
					multiple:				true,
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second',
							selected:				true
						},
						{
							label:					'Third',
							value:					'third'
						},
						{
							label:					'Fourth',
							value:					'fourth',
							selected:				true
						},
						{
							label:					'Fifth',
							value:					'fifth'
						},
						{
							label:					'Sixth',
							value:					'sixth'
						}
					]
				}
			},
			{
				tmpl:				'input-select',
				data: {
					id:						'selectMultipleReadonly',
					label:					'Select (multiple readonly)',
					multiple:				true,
					readonly:				true,
					options: [
						{
							label:					'First',
							value:					'first'
						},
						{
							label:					'Second',
							value:					'second',
							selected:				true
						},
						{
							label:					'Third',
							value:					'third'
						},
						{
							label:					'Fourth',
							value:					'fourth',
							selected:				true
						},
						{
							label:					'Fifth',
							value:					'fifth'
						},
						{
							label:					'Sixth',
							value:					'sixth'
						}
					]
				}
			}
		]
	}
]);