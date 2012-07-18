(function($) {
	window.auxConstructor = window.auxConstructor || function(options) {
		var version = 'aux: Auxiliary User Expirience template manager v1.0',
		ctx = {
			component: {},
			path: {
				components:			"components/"
			},
			opts: {
				debugmode:			false
			}
		},
		temp = {
			component: {},
			timers: {},
			assets: {
				css: {
					all: ''
				},
				js: {
					all: ''
				}
			}
		},
		utils = {
			regex: {
				assets:					/({{#.*?#}})/,
				assetsContainer:		/({{#|#}})/g,
				comments:				/(\/\*.*?\*\/)/g,
				defaultValueContainer:	/({{\%\w*|:|\%}})/g,
				loops:					/{{\$loop:\w*\$}}/g,
				loopVars:				/{{\&loop:\w*\&}}/g,
				loopVarsContainer:		/({{\&loop:|\&}})/g,
				deepLoops:				/{{\$loop:\w*\$}}(?:.(?!{{\$loop:))*?{{\$\/loop:\w*\$}}/g,
				opts:					/({{\$.*?\$}})/g,
				options:				/({{\$.*?\$}})/,
				optContainer:			/({{\$|\$}})/g,
				vars:					/({{\%.*?\%}})/g,
				variable:				/({{\%.*?\%}})/,
				varContainer:			/({{\%|\%}}|:.*)/g
			}
		}, method = {
			init: function() {
				if(options.callback) {
					method.callback = $.extend(true, method.callback, options.callback);
					delete options.callback;
				};
				ctx = $.extend(true, ctx, options);
				method.callback.onInit(ctx);
			},
			callback: {
				onInit: function() {
					/*
					*	Patch to avoid errors in IE when the javascript console
					*	is closed and substitute non recognized methods in
					*	other browsers
					*/
					window.console = window.console || {};
					console.log = (console.log) ? console.log : function() {return true;};
					console.group = console.group || console.log;
					console.groupEnd = console.groupEnd || console.log;
					console.info = console.info || console.log;
					console.console = console.console || console.log;
					console.warn = console.warn || console.log;
					console.error = console.error || console.log;
					console.dir = console.dir || console.log;

					if(ctx.opts.debugmode) {
						console.group('Aux initialized');
							console.info('version: '+version);
							console.log('Context');
							console.dir(ctx);
						console.groupEnd();
					};
				},
				onError: function(errorCode, msg) {
					var error = '';
					switch(errorCode) {
						case '999':
							error = 'Loading error';
						break;
						default:
							error = 'Generic Error. Is not possible to determinate the cause.'
						break;
					};
					var res = (msg) ? error+': '+msg : error;
					if(ctx.opts.debugmode) console.warn(res);
					return res;
				},
				onEndComponentsLoading: function() {
					if(ctx.opts.debugmode) {
						console.group('Component Loading Finished');
							console.info('internal callback');
							console.dir(ctx);
						console.groupEnd();
					};
				}
			},
			get: {
				templates: function(componentList) {
					if(typeof componentList === 'string') {
						if(ctx.opts.debugmode) {
							console.info('Single component loading start');
						};

						var isInternal = (/^#/.test(componentList)) ? true : false;

						temp.component.queue = 1;
						if(!ctx.component[componentList]) {
							if(!isInternal) {
								method.call({
									name:		componentList
								});
							} else {
								var tmpl = document.getElementById(componentList.substring(1)).innerHTML.replace(/[\n|\t|\r]/g,'');
								temp.component.queue--;
								method.process.template(tmpl, componentList);
							};
						};
					} else {
						if(ctx.opts.debugmode) {
							console.info('Component list loading start');
						};
						temp.component.queue = componentList.length;
						for(var i = 0, tot = componentList.length;i<tot; i++) {
							var item = componentList[i];
							if(!ctx.component[item]) {
								method.call({
									name:		item
								});
							} else {
								temp.component.queue--;
							};
						};
					};
				},
				assets: function(opts, name) {
					/* ***********************************************************************************************************
					* To be developed
					* Load one or more assets depending on the typeof of the variable value
					* Add capabilities to load common assets marked as "common:assetname.ext"
					* Add capability to understand the asset type (css or js)
					* Add context data to jsThrower function jsThrower(ctx) with call or apply method
					*********************************************************************************************************** */
					ctx.component[name].assets.loaded = false;
					var assets = opts,
						isCSSArray = (typeof assets.css === 'object'),
						isJSArray = (typeof assets.js === 'object'),
						tpl = {
							css: function(stylesheet) { return '<link rel="stylesheet" type="text/css" href="'+stylesheet+'" />'; },
							js: function(jsfile) { return '<script src="'+jsfile+'"></script>'; }
						},
						cPath = ctx.path.components+name+'/';

					var getAssetData = function(asset) {
						var item = asset,
							isCommon = (/:/.test(item)),
							cId = (isCommon) ? item.substring(0,item.indexOf(':')) : false,
							fileName = item.substring(item.indexOf(':')+1),
							fileNameReg = new RegExp('('+fileName+'\\#)'),
							fullPath = ctx.path.components+name+'/'+fileName,
							fullPathReg = new RegExp('('+fullPath+'\\#)');

						var res = {
							isCommon:				isCommon,
							cId:					cId,
							fileName:				fileName,
							fileNameReg:			fileNameReg,
							fullPath:				fullPath,
							fullPathReg:			fullPathReg
						};
						return res;	
					};

					var addScriptTags = function(path) {
						var scriptTag = document.createElement('script');
							scriptTag.setAttribute('src',path);
							scriptTag.onload = function() {
								ctx.component[name].assets.loaded = true;
								temp.loading = false;
							};
						document.getElementsByTagName("head")[0].appendChild(scriptTag);
					};

					if(isCSSArray) {
						for(c in assets.css) {
							var item = assets.css[c],
								iData = getAssetData(item);
							if(iData.isCommon) {
								if(!temp.assets.css[iData.cId] || !iData.fileNameReg.test(temp.assets.css[iData.cId])) {
									temp.assets.css[iData.cId] = temp.assets.css[iData.cId] || '';
									temp.assets.css[iData.cId]+= iData.fileName+'#';
									$('head').append(tpl.css(cPath+iData.fileName));
								};
							} else {
								if(!iData.fullPathReg.test(temp.assets.css.all)) {
									temp.assets.css.all+= iData.fullPath+'#';
									$('head').append(tpl.css(cPath+iData.fileName));
								};
							};
						};
					} else {
						var item = assets.css,
							iData = getAssetData(item);
						if(iData.isCommon) {
							if(!temp.assets.css[iData.cId] || !iData.fileNameReg.test(temp.assets.css[iData.cId])) {
								temp.assets.css[iData.cId] = temp.assets.css[iData.cId] || '';
								temp.assets.css[iData.cId]+= iData.fileName+'#';
								$('head').append(tpl.css(cPath+iData.fileName));
							};
						} else {
							if(!iData.fullPathReg.test(temp.assets.css.all)) {
								temp.assets.css.all+= iData.fullPath+'#';
								$('head').append(tpl.css(cPath+iData.fileName));
							};
						};
					};

					if(isJSArray) {
						for(c in assets.js) {
							var item = assets.js[c],
								iData = getAssetData(item);
							if(iData.isCommon) {
								console.log(cPath+iData.fileName);
								if(!temp.assets.js[iData.cId] || !iData.fileNameReg.test(temp.assets.js[iData.cId])) {
									temp.assets.js[iData.cId] = temp.assets.js[iData.cId] || '';
									temp.assets.js[iData.cId]+= iData.fileName+'#';
									addScriptTags(tpl.js(cPath+iData.fileName));
								};
							} else {
								if(!iData.fullPathReg.test(temp.assets.js.all)) {
									temp.assets.js.all+= iData.fullPath+'#';
									addScriptTags(cPath+iData.fileName);
								};
							};
						};
					} else {
						var item = assets.js,
							iData = getAssetData(item);
						if(iData.isCommon) {
							if(!temp.assets.js[iData.cId] || !iData.fileNameReg.test(temp.assets.js[iData.cId])) {
								temp.assets.js[iData.cId] = temp.assets.js[iData.cId] || '';
								temp.assets.js[iData.cId]+= iData.fileName+'#';
								addScriptTags(cPath+iData.fileName);
							};
						} else {
							if(!iData.fileNameReg.test(temp.assets.js.all)) {
								temp.assets.js.all+= iData.fileName+'#';
								addScriptTags(cPath+iData.fileName);
							};
						};
					};
				}
			},
			set: {
				elements: function(opts) {
					for(var o in opts) {
						var opt = opts[o];
						temp.exec = {
							target:			(opt.target) ? opt.target : 'body',
							method:			(opt.method) ? opt.method : 'add',
							observable:		(opt.observable) ? opt.observable : false
						};
						for(var i in opt.items) {
							method.process.exec(opt.items[i]);
						};
					};
				}
			},
			process: {
				template: function(tmpl, name) {
					var res = tmpl.replace(utils.regex.comments, ''),
						obj = {
							loops: {}
						};

					/* Assets rescue */
					var assets = res.match(utils.regex.assets);
						assets = (assets != null) ? JSON.parse('{'+assets[0].replace(utils.regex.assetsContainer, '').replace(/'/g,'"')+'}') : false;
						obj.assets = assets;

					res = res.replace(utils.regex.assets, '');
					do {
						var deepLoops = res.match(utils.regex.deepLoops);
						for(var d in deepLoops) {
							var item = deepLoops[d],
								info = {
									id:			item.substring(item.indexOf('{{$loop:')+8, item.indexOf('$}}')),
									val:		item.substring(item.indexOf('$}}')+3, item.lastIndexOf('{{$'))
								};
							res = res.replace(item, '{{&loop:'+info.id+'&}}');
							obj.loops[info.id] = info.val;
						};
					} while(utils.regex.loops.test(res) || utils.regex.deepLoops.test(res));
					obj.tpl = res;
					ctx.component[name] = obj;
					if(obj.assets) {
						method.get.assets(obj.assets, name);
					} else {
						temp.loading = false;
					};
				},
				exec: function(opts) {
					if(ctx.opts.debugmode) {
						console.group('Template execution');
							//console.log(opts.tmpl);
							var alreadyLoaded = (ctx.component[opts.tmpl]) ? 'already loaded' : 'will be loaded';
							console.log('the component '+opts.tmpl+' is '+alreadyLoaded);
							console.dir(opts.data);
						console.groupEnd();
					};

					var procTmpl = function() {
						var tmpl = JSON.parse(JSON.stringify(ctx.component[opts.tmpl])),
							loops = tmpl.tpl.match(utils.regex.loopVars),
							vars = tmpl.tpl.match(utils.regex.vars),
							swapper = function(tpl, data) {
								var res = tpl,
									vars = res.match(utils.regex.vars);

								if(vars != null) {
									for(var v in vars) {
										var item = vars[v],
											key = item.replace(utils.regex.varContainer, ''),
											defaultValue = item.replace(utils.regex.defaultValueContainer, ''),
											optional = new RegExp('({{\\$op:'+key+'\\$}}(?:.(?!{{\\$op:'+key+'\\$}}))*?{{\\$\/op:'+key+'\\$}})','g'),
											replaceWith = (data[key]) ? data[key] : (defaultValue != '') ? defaultValue : '';

										if(replaceWith == '' && optional.test(res)) {
											res = res.replace(optional, '');
										};
										res = res.replace(item, replaceWith);
									};
								};

								res = res.replace(utils.regex.opts, '');

								return res;
							},
							procLoops = function(loopKey, data) {
								var tpl = tmpl.loops[loopKey],
									res = '';

								for(var d in data) {
									var item = data[d];
									res+= swapper(tpl,item);
									if(utils.regex.loopVars.test(res)) {
										var intLoops = res.match(utils.regex.loopVars);
										for(var il in intLoops) {
											var key = intLoops[il].replace(utils.regex.loopVarsContainer, '');
											res = res.replace(intLoops[il], procLoops(key, item[key]));
										};
									};
								};
								return res;
							};

						tmpl.tpl = swapper(tmpl.tpl, opts.data);

						for(var l in loops) {
							var key = loops[l].replace(utils.regex.loopVarsContainer, '');
							tmpl.tpl = tmpl.tpl.replace(loops[l],procLoops(key, opts.data[key]));
						};
						
						method.insert(tmpl.tpl);
					},
					throwScriptAsap = function() {
						if(ctx.component[opts.tmpl].assets.loaded) {
							clearTimeout(temp.timers[opts.tmpl]);
							eval(ctx.component[opts.tmpl].assets.jsthrower);
						} else {
							temp.timers[opts.tmpl] = setTimeout(throwScriptAsap, 10);
						};
					};

					if(ctx.component[opts.tmpl]) {
						procTmpl();
						if(ctx.component[opts.tmpl].assets.jsthrower) {
							if(ctx.component[opts.tmpl].assets.loaded) {
								eval(ctx.component[opts.tmpl].assets.jsthrower);
							} else {
								throwScriptAsap();
							};
						};
					} else {
						temp.loading = true;
						method.get.templates(opts.tmpl);
						var doAsap = function() {
							if(ctx.component[opts.tmpl]) {
								if(temp.timers[opts.tmpl]) {
									clearTimeout(temp.timers[opts.tmpl]);
								};
								procTmpl();
								if(ctx.component[opts.tmpl].assets.loaded) {
									eval(ctx.component[opts.tmpl].assets.jsthrower);
								} else {
									throwScriptAsap();
								};
							} else {
								temp.timers = temp.timers.proc || {};
								temp.timers[opts.tmpl] = setTimeout(doAsap, 10);
							};
						};
						doAsap();
					};

				}
			},
			insert: function(tmpl) {
				/* ***********************************************************
				* Add insertion switch and delete temp.exec when the
				* processing is finished
				*********************************************************** */
				var target = (!/:/.test(temp.exec.target)) ?  $(temp.exec.target) : $(document.getElementsByTagName(temp.exec.target));
				switch(temp.exec.method) {
					case 'before':
						target.before(tmpl);
					break;
					case 'after':
						target.after(tmpl);
					break;
					case 'replace':
						target.replaceWith(tmpl);
					break;
					case 'prepend':
						target.prepend(tmpl);
					break;
					default:
						target.append(tmpl);
					break;
				};
			},
			call: function(opts) {
				var patchPath = (/\/$/.test(ctx.path.components)) ? ctx.path.components : ctx.path.components+'/';
				$.ajax({
					async:			false,
					dataType:		"text",
					url:			patchPath+opts.name+"/template.aux",
					success: function(tmpl) {
						temp.component.queue--;
						var res = tmpl.replace(/[\n|\t|\r]/g,'');
						method.process.template(res, opts.name);
						if(temp.component.queue === 0) {
							method.callback.onEndComponentsLoading(ctx);
						};
					},
					error: function() {
						temp.component.queue--;
						//method.process.template('',opts.name);
						method.callback.onError('999', 'Unable to find the component [ '+opts.name+' ]. Please, review the component list.');
						if(temp.component.queue === 0) {
							method.callback.onEndComponentsLoading(ctx);
						};
					}
				});
			}
		}, pub = {};
		method.init();
		return pub = {
			insert:				method.set.elements,
			ctx:				ctx,
			get:				method.get,
			require:			method.get.templates,
			temp:				temp
		};
	};
})(jQuery || $);