/* atoms v0.03.11 - 2014/3/11
   http://atomic.tapquo.com
   Copyright (c) 2014 Tapquo S.L. - Licensed  */
(function(){var _ref,_ref1,_ref2,_ref3,_ref4,_ref5,_ref6,_ref7,_ref8,__hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child},__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;l>i;i++)if(i in this&&this[i]===item)return i;return-1},__slice=[].slice;Atoms.App={Article:{},Aside:{},Modal:{},Section:{},Url:null},Atoms.App.Url=function(a){var _activeSection,_addStepHistory,_article,_aside,_onChangeRoute,_options,_stepHistory;return _article=void 0,_options=Atoms.Url.options,_onChangeRoute=function(properties){var article;return article=a.App.Article[properties.article.toClassName()],article.el||article.render(),setTimeout(function(){return _options.forward||_stepHistory(0),_activeSection(article,properties.section),_article!==article?(_options.forward?(_stepHistory(1),article.state("in"),_article&&_article.state("back-in")):(_article.state("out"),article.state("back-out")),_article=article):void 0},10)},_aside=function(){return _article.aside()},_activeSection=function(article,section){return _addStepHistory(),article.section(section)},_addStepHistory=function(){var state;return state=window.history.state||{steps:0},state.steps++,window.history.replaceState(state)},_stepHistory=function(value){return window.history.replaceState({steps:value})},function(){return Atoms.Url.listen("/:article/:section",_onChangeRoute)}(),{aside:_aside}}(Atoms),Atoms.Atom.Button=function(_super){function Button(){this["default"]={events:["touch"]},Button.__super__.constructor.apply(this,arguments)}return __extends(Button,_super),Button.template='<button class="{{style}}{{^if.text}} icon{{/if.text}}" {{#if.disabled}}disabled{{/if.disabled}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{#if.text}}<abbr>{{text}}</abbr>{{/if.text}}\n</button>',Button.base="Button",Button}(Atoms.Class.Atom),Atoms.Atom.Figure=function(_super){function Figure(){return _ref=Figure.__super__.constructor.apply(this,arguments)}return __extends(Figure,_super),Figure.template='<figure {{#if.style}}class="{{style}}"{{/if.style}} {{#if.url}}style="background-image: url({{url}});"{{/if.url}}></figure>',Figure.base="Figure",Figure}(Atoms.Class.Atom),Atoms.Atom.Heading=function(_super){function Heading(){this["default"]={size:"h1"},Heading.__super__.constructor.apply(this,arguments)}return __extends(Heading,_super),Heading.template='<{{size}} {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}<img src="image" />{{/if.image}}\n  {{#if.text}}{{text}}{{/if.text}}\n</{{size}}>',Heading.base="Heading",Heading}(Atoms.Class.Atom),Atoms.Atom.Icon=function(_super){function Icon(){return _ref1=Icon.__super__.constructor.apply(this,arguments)}return __extends(Icon,_super),Icon.template='<span class="icon {{#if.icon}}{{icon}}{{/if.icon}} {{#if.style}}{{style}}{{/if.style}}"></span>',Icon.base="Icon",Icon}(Atoms.Class.Atom),Atoms.Atom.Image=function(_super){function Image(){return _ref2=Image.__super__.constructor.apply(this,arguments)}return __extends(Image,_super),Image.template='<img src="{{url}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#if.alt}}alt="{{alt}}"{{/if.alt}}/>',Image.base="Image",Image}(Atoms.Class.Atom),Atoms.Atom.Input=function(_super){function Input(){this["default"]={type:"text"},Input.__super__.constructor.apply(this,arguments)}return __extends(Input,_super),Input.template='<input type="{{type}}" name="{{name}}" placeholder="{{placeholder}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#if.value}}value="{{value}}"{{/if.value}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} />',Input.base="Input",Input.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Input.prototype.error=function(value){return null!=value?this.el.filter("input").addClass("error"):this.el.filter("input").removeClass("error")},Input}(Atoms.Class.Atom),Atoms.Atom.Label=function(_super){function Label(){return _ref3=Label.__super__.constructor.apply(this,arguments)}return __extends(Label,_super),Label.template='<label {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{text}}\n  {{#if.count}}<strong>{{count}}</strong>{{/if.count}}\n</label>',Label.base="Label",Label}(Atoms.Class.Atom),Atoms.Atom.Li=function(_super){function Li(){return _ref4=Li.__super__.constructor.apply(this,arguments)}return __extends(Li,_super),Li.template='<li {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}\n  <figure style="background-image: {{image}}"></figure>\n  {{/if.image}}\n  <div>\n    {{#if.date}}\n      <span>{{date}}</span>\n    {{/if.date}}\n    {{#if.text}}\n      <strong>{{text}}</strong>\n    {{/if.text}}\n    {{#if.description}}\n      <small>{{description}}</small>\n    {{/if.description}}\n  </div>\n</li>',Li.base="Li",Li}(Atoms.Class.Atom),Atoms.Atom.Link=function(_super){function Link(){return _ref5=Link.__super__.constructor.apply(this,arguments)}return __extends(Link,_super),Link.template='<a href="{{href}}" {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{#if.text}}{{text}}{{/if.text}}\n</a>',Link.base="Link",Link}(Atoms.Class.Atom),Atoms.Atom.Select=function(_super){function Select(){Select.__super__.constructor.apply(this,arguments),null!=this.attributes.value&&this.value(this.attributes.value)}return __extends(Select,_super),Select.template='<select name="{{name}}" {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#options}}\n    <option value="{{value}}">{{label}}</option>\n  {{/options}}\n</select>',Select.base="Select",Select.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Select}(Atoms.Class.Atom),Atoms.Atom.Switch=function(_super){function Switch(){this.onTouch=__bind(this.onTouch,this),Switch.__super__.constructor.apply(this,arguments),null!=this.attributes.value&&this.value(this.attributes.value),this.el.bind("tap",this.onTouch)}return __extends(Switch,_super),Switch.template='<input type="checkbox"/>',Switch.base="Switch",Switch.prototype.value=function(value){return value===!0?this.el.attr("checked","true"):value===!1?this.el.removeAttr("checked"):null!=this.el.attr("checked")},Switch.prototype.error=function(value){var method;return method=null!=value?"addClass":"removeClass",this.el[method]("error")},Switch.prototype.onTouch=function(event){return this.value(!this.el.attr("checked")),__indexOf.call(this.attributes.events,"change")>=0?this.bubble("change",event):void 0},Switch}(Atoms.Class.Atom),Atoms.Atom.Textarea=function(_super){function Textarea(){return _ref6=Textarea.__super__.constructor.apply(this,arguments)}return __extends(Textarea,_super),Textarea.template='<textarea name="{{name}}" {{#if.placeholder}}placeholder="{{placeholder}}"{{/if.placeholder}} {{#if.style}}class="{{style}}"{{/if.style}}  {{#required}}required{{/required}}>{{#if.value}}{{value}}{{/if.value}}</textarea>',Textarea.base="Textarea",Textarea.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Textarea.prototype.error=function(value){return null!=value?this.el.addClass("error"):this.el.removeClass("error")},Textarea}(Atoms.Class.Atom),Atoms.Molecule.Form=function(_super){function Form(){this.onSwitchChange=__bind(this.onSwitchChange,this),this.onSelectChange=__bind(this.onSelectChange,this),this.onButtonTouch=__bind(this.onButtonTouch,this),this.onInputKeyup=__bind(this.onInputKeyup,this),this.onInputKeypress=__bind(this.onInputKeypress,this),Form.__super__.constructor.apply(this,arguments)}return __extends(Form,_super),Form.template='<form {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></form>',Form.available=["Atom.Label","Atom.Input","Atom.Textarea","Atom.Select","Atom.Switch","Atom.Button"],Form.base="Form",Form.prototype.value=function(){var child,properties,_i,_len,_ref7;for(properties={},_ref7=this.children,_i=0,_len=_ref7.length;_len>_i;_i++)child=_ref7[_i],null!=child.value&&(properties[child.attributes.name]=child.value());return properties},Form.prototype.onInputKeypress=function(event){return this.bubble("keypress",event)},Form.prototype.onInputKeyup=function(event){return this.bubble("keyup",event)},Form.prototype.onButtonTouch=function(event){var child,required,_i,_len,_ref7;for(event.preventDefault(),required=!0,_ref7=this.children,_i=0,_len=_ref7.length;_len>_i;_i++)child=_ref7[_i],null!=child.value&&(child.attributes.required&&!child.value()?(child.el.addClass("error"),required=!1):child.el.removeClass("error"));return required&&null!=this.attributes.events&&__indexOf.call(this.attributes.events,"submit")>=0?(required&&this.bubble("submit",event),!1):void 0},Form.prototype.onSelectChange=function(event){return event.preventDefault(),this.bubble("change",event)},Form.prototype.onSwitchChange=function(event){return event.preventDefault(),this.bubble("change",event)},Form}(Atoms.Class.Molecule),Atoms.Molecule.List=function(_super){function List(){return _ref7=List.__super__.constructor.apply(this,arguments)}return __extends(List,_super),List.template='<ul {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></ul>',List.available=["Atom.Li"],List.base="List",List.prototype.filter=function(){return this},List.prototype.clean=function(){return this},List}(Atoms.Class.Molecule),Atoms.Molecule.Navigation=function(_super){function Navigation(){this.onButtonTouch=__bind(this.onButtonTouch,this),this["default"]={style:"left"},Navigation.__super__.constructor.apply(this,arguments)}return __extends(Navigation,_super),Navigation.template='<nav {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></nav>',Navigation.available=["Atom.Button","Atom.Link"],Navigation.base="Navigation",Navigation.prototype.onButtonTouch=function(event,atom){var path;return this.__activeChild(atom),null!=this.attributes.events&&__indexOf.call(this.attributes.events,"select")>=0&&this.bubble("select",event),path=atom.attributes.path,path?("aside"===path?Atoms.App.Url.aside():"back"===path?Atoms.Url.back():null!=path&&Atoms.Url.path(path),!1):void 0},Navigation.prototype.onArticleNavigation=function(){var article,child,event,hierarchy,path,_i,_len,_ref8;for(event=arguments[0],article=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],path=Atoms.Url.path().substr(1),_ref8=this.children,_i=0,_len=_ref8.length;_len>_i;_i++)if(child=_ref8[_i],child.attributes.path===path){this.__activeChild(child);break}return!1},Navigation.prototype.__activeChild=function(atom){return this.el.parent().find("[data-atom=button]").removeClass("active"),atom.el.addClass("active")},Navigation}(Atoms.Class.Molecule),Atoms.Molecule.Search=function(_super){function Search(){this.buttonTouch=__bind(this.buttonTouch,this),this.inputKeyup=__bind(this.inputKeyup,this),this["default"]={children:[{"Atom.Input":{type:"search",placeholder:"Type your search...",events:["keyup"]}},{"Atom.Button":{icon:"Search"}}]},Search.__super__.constructor.apply(this,arguments)}return __extends(Search,_super),Search.template='<fieldset {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></fieldset>',Search.available=["Atom.Input","Atom.Button"],Search.base="Search",Search.prototype.inputKeyup=function(event,atom){return this.trigger("keyup",event.keyCode),13===event.keyCode?this._search(event,atom):void 0},Search.prototype.buttonTouch=function(event,atom){return this._search(event,atom)},Search.prototype._search=function(event,atom){var value;return value=this.input[0].el.val(),""!==value?this.bubble("enter",value,atom):void 0},Search}(Atoms.Class.Molecule),Atoms.Organism.Article=function(_super){function Article(){this.onAnimationEnd=__bind(this.onAnimationEnd,this),Article.__super__.constructor.apply(this,arguments),Atoms.App.Article[this.constructor.name]=this}return __extends(Article,_super),Article.template='<article {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></article>',Article.available=["Organism.Header","Organism.Section","Organism.Footer","Molecule.Navigation"],Article.base="Article",Article.prototype.render=function(){var animation_end,_i,_len,_ref8,_results;for(Article.__super__.render.apply(this,arguments),_ref8=Atoms.Core.Constants.ANIMATION.END.split(" "),_results=[],_i=0,_len=_ref8.length;_len>_i;_i++)animation_end=_ref8[_i],_results.push(this.el.bind(animation_end,this.onAnimationEnd));return _results},Article.prototype["in"]=function(){return this.state("in")},Article.prototype.out=function(){return this.state("out")},Article.prototype.backIn=function(){return this.state("back-in")},Article.prototype.backOut=function(){return this.state("back-out")},Article.prototype.state=function(name){return this.el.addClass("active").attr("data-state",name)},Article.prototype.section=function(id){return this.tunnel("navigation",this),this.el.children("#"+id).addClass("active").siblings("section").removeClass("active"),"aside-in"===this.el.attr("data-state")?this.aside():void 0},Article.prototype.aside=function(){var method;return method=this.el.hasClass("aside")?"out":"in",null!=this.attributes.aside&&Atoms.App.Aside[this.attributes.aside][method](),"out"===method&&this.el.removeClass("aside"),this.state("aside-"+method)},Article.prototype.onAnimationEnd=function(){var state;return state=this.el.attr("data-state"),this.trigger(state),"in"===state||"back-out"===state?this.trigger("active"):("out"===state||"back-in"===state)&&this.trigger("inactive"),"in"!==state&&"back-out"!==state&&"aside-in"!==state&&"aside-out"!==state&&this.el.removeClass("active"),"aside-in"===state&&this.el.addClass("aside"),this.el.removeAttr("data-state")},Article}(Atoms.Class.Organism),Atoms.Organism.Aside=function(_super){function Aside(attributes){null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),attributes.method="prepend",Aside.__super__.constructor.call(this,attributes),Atoms.App.Aside[this.constructor.name]=this}return __extends(Aside,_super),Aside.template='<aside {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></aside>',Aside.available=["Organism.Header","Organism.Section","Organism.Footer","Molecule.Navigation"],Aside.base="Aside",Aside.prototype.render=function(){var animation_end,_i,_len,_ref8,_results;for(Aside.__super__.render.apply(this,arguments),_ref8=Atoms.Core.Constants.ANIMATION.END.split(" "),_results=[],_i=0,_len=_ref8.length;_len>_i;_i++)animation_end=_ref8[_i],_results.push(this.el.bind(animation_end,this.onAnimationEnd));return _results},Aside.prototype["in"]=function(){return this.el||this.render(),this.el.addClass("active"),this.el.attr("data-state","in")},Aside.prototype.out=function(){var _ref8;return(null!=(_ref8=this.el)?_ref8.hasClass("active"):void 0)?this.el.attr("data-state","out"):void 0},Aside.prototype.onAnimationEnd=function(){var state;return state=this.el.attr("data-state"),this.trigger(state),this.el.removeAttr("data-state"),"out"===state?this.el.removeClass("active"):void 0},Aside}(Atoms.Class.Organism),Atoms.Organism.Footer=function(_super){function Footer(){Footer.__super__.constructor.apply(this,arguments),this.render()}return __extends(Footer,_super),Footer.template='<footer {{#if.style}}class="{{style}}"{{/if.style}}></footer>',Footer.available=["Molecule.Navigation"],Footer.base="Footer",Footer}(Atoms.Class.Organism),Atoms.Organism.Header=function(_super){function Header(){Header.__super__.constructor.apply(this,arguments),this.render()}return __extends(Header,_super),Header.template='<header {{#if.style}}class="{{style}}"{{/if.style}}></header>',Header.available=["Atom.Heading","Atom.Icon","Molecule.Navigation"],Header.base="Header",Header}(Atoms.Class.Organism),Atoms.Organism.Modal=function(_super){function Modal(attributes){var animation_end,block_el,_i,_len,_ref8;for(null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),Modal.__super__.constructor.call(this,attributes),block_el=Atoms.$(document.createElement("div")).data("system","modal"),Atoms.$(this.attributes.container||document.body).prepend(block_el),this.attributes.container=block_el,this.render(),_ref8=Atoms.Core.Constants.ANIMATION.END.split(" "),_i=0,_len=_ref8.length;_len>_i;_i++)animation_end=_ref8[_i],this.el.bind(animation_end,this.onAnimationEnd);Atoms.App.Modal[this.constructor.name]=this}return __extends(Modal,_super),Modal.template='<article {{#if.style}}class="{{style}}"{{/if.style}}></article>',Modal.available=["Organism.Header","Organism.Section","Organism.Footer"],Modal.base="Modal",Modal.prototype.show=function(){return this.el.parent().addClass("active"),this.el.addClass("show"),this.trigger("show")},Modal.prototype.hide=function(){return this.el.addClass("hide"),this.trigger("hide")},Modal.prototype.onAnimationEnd=function(){return this.el.hasClass("show")&&this.el.removeClass("show"),this.el.hasClass("hide")?(this.el.removeClass("hide"),this.el.parent().removeClass("active")):void 0},Modal}(Atoms.Class.Organism),Atoms.Organism.Loading=function(_super){function Loading(){return _ref8=Loading.__super__.constructor.apply(this,arguments)}return __extends(Loading,_super),Loading}(Atoms.Organism.Modal),new Atoms.Organism.Loading,Atoms.Organism.Section=function(_super){function Section(){Section.__super__.constructor.apply(this,arguments),this.render()}return __extends(Section,_super),Section.template='<section {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></section>',Section.available=["Molecule.Form","Molecule.Navigation","Molecule.List","Molecule.Search","Atom.Button","Atom.Heading","Atom.Label"],Section.base="Section",Section}(Atoms.Class.Organism)}).call(this);