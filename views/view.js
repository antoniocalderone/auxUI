/* Main layout */
view.insert([
	{
		target:			'body',
		method:			'add',
		items: [
			{
				tmpl:			'navbar',
				data: {
					id:					'headerNavbar',
					title:				'Application Name',
					fixedTop:			true,
					//fixedBottom:		true,
					navGroup: [
						{
							nav: [
								{
									active:			true,
									link:			'#first',
									label:			'First',
									//icon:			'briefcase'
									icon:			'home'
								},
								{
									link:			'#',
									label:			'Second',
									icon:			'road',
									subnav: [
										{
											link:			'#second-one',
											label:			'Left Item 2.1',
											icon:			'glass'
										},
										{
											link:			'#second-two',
											label:			'Left Item 2.2 (without icon)'
										},
										{
											link:			'#second-three',
											label:			'Left Item 2.3',
											divider:		true,
											icon:			'facetime-video'
										},
										{
											link:			'#second-four',
											label:			'Left Item 2.4',
											icon:			'time'
										}
									]
								},
								{
									link:			'#',
									label:			'Third',
									icon:			'hdd',
									subnav: [
										{
											link:			'#second-one',
											label:			'Left Item 3.1'
										},
										{
											link:			'#second-two',
											label:			'Left Item 3.2',
											icon:			'bookmark'
										},
										{
											link:			'#second-three',
											label:			'Left Item 3.3',
											divider:		true
										},
										{
											link:			'#second-four',
											label:			'Left Item 3.4'
										}
									]
								}
							]
						},
						{
							right:			true,
							nav: [
								{
									link:			'#right-first',
									label:			'Right First',
									icon:			'map-marker'
								},
								{
									label:			'Right (without icon)',
									subnav: [
										{
											link:			'#second-one',
											label:			'Right Item 2.1',
											icon:			'inbox'
										},
										{
											link:			'#second-two',
											label:			'Right Item 2.2',
											icon:			'user'
										},
										{
											link:			'#second-three',
											label:			'Right Item 2.3',
											divider:		true,
											icon:			'leaf'
										},
										{
											link:			'#second-four',
											label:			'Right Item 2.4',
											icon:			'fire'
										}
									]
								}
							]
						}
					]
				}
			},
			{
				tmpl:			'container',
				data: {
					id:				'main'
				}
			}
		]
	},
	{
		target:			'#main',
		items: [
			{
				tmpl:			'page-header',
				data: {
					title:				'My page title example',
					subtitle:			'this is the subtitle to test the behavior'
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
		target:			'#mainSection',
		items: [
			{
				tmpl:			'layout',
				data: {
					rows: [
						{
							rowId:			'top',
							columns: [
								{
									colId:			'top-left',
									span:			7
								},
								{
									colId:			'top-right',
									span:			5
								}
							]
						},
						{
							rowId:			'second',
							columns: [
								{
									colId:			'second-left',
									span:			3
								},
								{
									colId:			'second-center',
									span:			3
								},
								{
									colId:			'second-right',
									span:			3
								},
								{
									colId:			'second-sidebar',
									span:			3/*,
									content:		'<div class="well" style="padding: 8px 0;"></div>'*/
								}
							]
						},
						{
							rowId:			'third',
							columns: [
								{
									colId:			'third-left',
									span:			8
								},
								{
									colId:			'third-right',
									span:			4
								}
							]
						}
					]
				}
			}
		]
	}
]);

/* Blockquote */
view.insert([
	{
		target:			'#top-left',
		items: [
			{
				tmpl:			'navbar',
				data: {
					id:					'MainNavbar',
					title:				'First navbar',
					fixedTop:			false,
					fixedBottom:		false,
					navGroup: [
						{
							nav: [
								{
									active:			true,
									link:			'#first',
									label:			'First',
									icon:			'qrcode'
								},
								{
									link:			'#',
									label:			'Second',
									icon:			'barcode',
									subnav: [
										{
											link:			'#second-one',
											label:			'Left Item 2.1'
										},
										{
											link:			'#second-two',
											label:			'Left Item 2.2'
										},
										{
											link:			'#second-three',
											label:			'Left Item 2.3',
											divider:		true
										},
										{
											link:			'#second-four',
											label:			'Left Item 2.4'
										}
									]
								},
								{
									link:			'#third',
									label:			'Third',
									icon:			'envelope'
								}
							]
						},
						{
							right:			true,
							nav: [
								{
									link:			'#right-first',
									label:			'Right First',
									icon:			'heart'
								},
								{
									label:			'Right Second',
									icon:			'refresh',
									subnav: [
										{
											link:			'#second-one',
											label:			'Right Item 2.1'
										},
										{
											link:			'#second-two',
											label:			'Right Item 2.2'
										},
										{
											link:			'#second-three',
											label:			'Right Item 2.3',
											divider:		true
										},
										{
											link:			'#second-four',
											label:			'Right Item 2.4',
											divider:		true
										},
										{
											link:			'#second-five',
											label:			'Right Item 2.5'
										}
									]
								}
							]
						}
					]
				}
			},
			{
				tmpl:			'nav-pills',
				data: {
					id:					'internalNavigation',
					subnavContainer:	true,
					nav: [
						{
							active:				true,
							link:				'#formInput',
							label:				'Input elements',
							icon:				'book'
						},
						{
							link:				'#selectInput',
							label:				'Select elements'
						}
					]
				}
			}
		]
	},
	{
		target:			'#top-right',
		items: [
			{
				tmpl:			'nav-pills',
				data: {
					id:					'myNavPills',
					nav: [
						{
							active:				true,
							link:				'#testPill1',
							label:				'Pill item 1'
						},
						{
							link:				'#testPill2',
							label:				'Pill item 2'
						},
						{
							link:				'#',
							label:				'Pill item 3',
							subnav: [
								{
									link:				'#subnav3-1',
									label:				'Subnav item 3.1',
									divider:			true
								},
								{
									link:				'#subnav3-2',
									label:				'Subnav item 3.2'
								},
								{
									link:				'#subnav3-3',
									label:				'Subnav item 3.3',
									divider:			true
								},
								{
									link:				'#subnav3-4',
									label:				'Subnav item 3.4',
								}
							]
						},
						{
							link:				'#testPill4',
							label:				'Pill item 4'
						},
						{
							link:				'#testPill5',
							label:				'Pill item 5'
						}
					]
				}
			},
			{
				tmpl:			'title',
				data: {
					title:			'Quote from "Faith (left aligned)"'
				}
			},
			{
				tmpl:			'blockquote',
				data: {
					content:			'The important thing is not to stop questioning. Curiosity has its own reason for existing. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery every day. Never lose a holy curiosity.',
					quote:				'Albert Einstein',
					cite:				'Questioning'
				}
			},
			{
				tmpl:			'title',
				data: {
					title:			'Quote from "Questioning" (right aligned)'
				}
			},
			{
				tmpl:			'blockquote',
				data: {
					content:			'To punish me for my contempt for authority, fate made me an authority myself.',
					quote:				'Albert Einstein',
					right:				true
				}
			}
		]
	}
]);


var reusableList = [
	{
		label:			'First item',
		subitems: [
			{
				label:			'First subitem'
			},
			{
				label:			'Second subitem'
			},
			{
				label:			'Third subitem'
			},
			{
				label:			'Fourth subitem'
			},
			{
				label:			'Fifth subitem'
			}
		]
	},
	{
		label:			'Second item'
	},
	{
		label:			'Third item'
	},
	{
		label:			'Fourth item',
		subitems: [
			{
				label:			'First subitem of fourth item'
			},
			{
				label:			'Second subitem of fourth item'
			},
			{
				label:			'Third subitem of fourth item'
			},
			{
				label:			'Fourth subitem of fourth item'
			},
			{
				label:			'Fifth subitem of fourth item'
			}
		]
	},
	{
		label:			'Fifth item'
	}
];


/* List width reusable data */
view.insert([
	{
		target:			'#second-left',
		items: [
			{
				tmpl:			'title',
				data: {
					title:				'Unordered List'
				}
			},
			{
				tmpl:			'list',
				data: {
					items:				reusableList
				}
			}
		]
	},
	{
		target:			'#second-center',
		items: [
			{
				tmpl:			'title',
				data: {
					title:				'Unordered List (unstyled)'
				}
			},
			{
				tmpl:			'list',
				data: {
					unstyled:			true,
					items:				reusableList
				}
			}
		]
	},
	{
		target:			'#second-right',
		items: [
			{
				tmpl:			'title',
				data: {
					title:				'Ordered List'
				}
			},
			{
				tmpl:			'list',
				data: {
					type:				'ol',
					items:				reusableList
				}
			}
		]
	}
]);

/* Navigation */
view.insert([
	{
		target:			'#second-sidebar',//'#second-sidebar .well',//'#third-right .well',
		items: [
			{
				tmpl:			'nav-list',
				data: {
					well:				true,
					group: [
						{
							navHeader:			'First group',
							items: [
								{
									link:				'#',
									label:				'Navigation item 1',
									icon:				'home'
								},
								{
									link:				'#',
									label:				'Navigation item 2',
									icon:				'book'
								},
								{
									link:				'#',
									label:				'Navigation item 3',
									icon:				'pencil',
									divider:			true
								}
							]
						},
						{
							navHeader:			'Second group',
							items: [
								{
									link:				'#',
									label:				'Navigation item 4',
									icon:				'user'
								},
								{
									link:				'#',
									label:				'Navigation item 5',
									icon:				'cog',
									divider:			true
								},
								{
									link:				'#',
									label:				'Navigation item 6 without icon'
								}
							]
						}
					]
				}
			}
		]
	}
]);

view.insert([
	{
		target:			'#third-left',
		items: [
			{
				tmpl:			'title',
				data: {
					title:				'Thumbnail component'
				}
			},
			{
				tmpl:			'thumbnail',
				data: {
					id:					'myThumb',
					thumbs: [
						{
							span:			4,
							url:			'http://placehold.it/360x268',
							alt:			'Fake image',
							title:			'My Image title 1',
							description:	'Image description test 1'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Fake image 2',
							title:			'My Image title 2',
							description:	'The important thing is not to stop questioning. Curiosity has its own reason for existing. One cannot help but be in awe when he contemplates the mysteries of eternity, of life,of the marvelous structure of reality...'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Fake image 3',
							title:			'My Image title 3',
							description:	'this is a sample text'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Without anything'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Without anything 2'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Without anything 3'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Without anything 4'
						},
						{
							span:			2,
							url:			'http://placehold.it/160x120',
							alt:			'Without anything 5'
						}
					]
				}
			},
			{
				tmpl:			'title',
				data: {
					title:				'Definition list'
				}
			},
			{
				tmpl:			'definition-list',
				data: {
					id:					'animals-definition',
					horizontal:			false,
					items: [
						{
							term:				'Cat',
							desc:				'From Middle English cat, catte, from Old English catt (“male cat”) and catte (“female cat”), both from Proto-Germanic *kattuz (“cat”), from Late Latin cattus (“domestic cat”), from Latin catta (c.75 B.C., Martial)[1], from Afro-Asiatic (compare Nubian kadís, Berber kaddîska "wildcat"), from Late Egyptian čaute,[2] feminine of čaus "jungle cat, African wildcat", from earlier Egyptian tešau "female cat". Cognate with Dutch kat, German Katze, Swedish katt.'
						},
						{
							term:				'Dog',
							desc:				'Middle English dogge, from Old English docga (“hound, powerful breed of dog”), a pet-form diminutive of Old English -docce (“muscle”) (compare fingerdocce (“finger-muscle”) with suffix -ga (compare frocga (“frog”), picga (“pig”)), from Proto-Germanic *dukkōn "power, strength, muscle". More at dock. In the 16th century, it superseded Old English hund and was adopted by many continental European languages.'
						},
						{
							term:				'Monkey',
							desc:				'Middle Low German Moneke (compare Old French Monequin), name of the son of Martin the Ape in Reynard the Fox, from Old Spanish mona "mona monkey", shortening of mamona, variant of maimón, from Arabic ميمون (maimūn) "monkey", literally "blessed", used to ward off the monkey´s bad luck.'
						},
						{
							term:				'Horse',
							desc:				'From Middle English, from Old English hors, from Proto-Germanic *hrussan (compare West Frisian hoars, Dutch ros, German Ross (“steed”), Icelandic and Old Norse hross (“horse”) and Old Swedish and Gotlandic russ ("horse")), from Proto-Indo-European *ḱr̥sos (compare Welsh car (“wagon”), Latin currus (“chariot”)), from *ḱers- (“to run”). More at hurry.'
						},
						{
							term:				'Elephant',
							desc:				'Middle English elefant, elefaunt, from Middle French elephant, learned borrowing from Latin elephantus, from Ancient Greek ἐλέφας (eléphās) (gen. ἐλέφαντος (eléphantos)), compound of Berber *eḷu ‘elephant’ (compare Tamahaq (Tahaggart) êlu, (Ghat) alu) and Egyptian 𓍋𓃀𓅱𓌟 (ȝbw) (ābu) ‘elephant; ivory’. More at ivory. Replaced Middle English olifant, which replaced Old English elpend, olfend.'
						}
					]
				}
			}
		]
	}
]);

view.insert([
	{
		target:				'#third-right',//'#main .page-header',
		method:				'add',
		items: [
			{
				tmpl:				'title',
				data: {
					title:				'Message boxes'
				}
			},
			{
				tmpl:				'message',
				data: {
					id:					'myInfoMessage',
					close:				false,
					type:				'info', /* false | 'error' | 'success' | 'info' */
					title:				'Information',
					message:			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sem id egestas dictum, nisl nunc luctus augue, in aliquam massa massa vitae arcu. Integer iaculis vestibulum leo sed volutpat. Suspendisse porttitor erat ac nisi congue in lacinia lectus sollicitudin. Vivamus elementum, enim ut venenatis auctor, ipsum nunc pulvinar eros, sed interdum risus odio a nulla. Etiam at elit massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc rutrum aliquam vestibulum. Nunc iaculis lacinia dolor.'
				}
			},
			{
				tmpl:				'message',
				data: {
					id:					'myErrorMessage',
					close:				true,
					type:				'error', /* false | 'error' | 'success' | 'info' */
					title:				'Error',
					message:			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis.'
				}
			},
			{
				tmpl:				'message',
				data: {
					id:					'mySuccessMessage',
					close:				true,
					type:				'success', /* false | 'error' | 'success' | 'info' */
					title:				'Success',
					message:			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis.'
				}
			}
		]
	},
	{
		target:				'#main .page-header',
		method:				'after',
		items: [
			{
				tmpl:				'message',
				data: {
					id:					'myAlertMessage',
					close:				true,
					title:				'Warning',
					message:			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sem id egestas dictum, nisl nunc luctus augue, in aliquam massa massa vitae arcu. Integer iaculis vestibulum leo sed volutpat. Suspendisse porttitor erat ac nisi congue in lacinia lectus sollicitudin. Vivamus elementum, enim ut venenatis auctor, ipsum nunc pulvinar eros, sed interdum risus odio a nulla. Etiam at elit massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc rutrum aliquam vestibulum. Nunc iaculis lacinia dolor.'
				}
			}
		]
	}
]);


/* Forms */
view.insert([
	{
		target:				'#top-left',
		items: [
			{
				tmpl:				'form',
				data: {
					id:					'myForm',
					disposition:		'horizontal'/*,
					well:				true*/
				}
			}
		]
	},
	{
		target:				'#myForm',
		items: [
			{
				tmpl:				'title',
				data: {
					title:				'Form elements'
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
			}
		]
	}
]);

/* To test aux */
/*

view.insert([
	{
		target:			'#myNavPills',
		method:			'after',
		items: [
			{
				tmpl:			'nav-pills',
				data: {
					id:					'internalNavigation',
					subnavContainer:	true,
					nav: [
						{
							active:				true,
							link:				'#formInput',
							label:				'Input elements',
							icon:				'book'
						},
						{
							link:				'#selectInput',
							label:				'Select elements'
						}
					]
				}
			}
		]
	}
]);

*/