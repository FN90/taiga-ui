(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{ATc4:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTextfieldControllerModule",(function(){return M}));var i=n("2kYt"),l=n("nIj0"),a=n("sEIs"),o=n("SVIu"),r=n("Qq0t"),d=n("EM62"),c=n("OZlg"),m=n("e0eB"),p=n("yZWP"),u=n("iyc4"),s=n("eB8V"),f=n("luNI"),x=n("pQcr");let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-textfield-controller-example-1"]],decls:3,vars:1,consts:[[1,"wrapper","tui-space_top-3",3,"tuiTextfieldCleaner"],["tuiTextfieldExampleText","Hello"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"tui-primitive-textfield",1),d["\u0275\u0275text"](2," Cool "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("tuiTextfieldCleaner",!0)},directives:[s.b,f.a,x.b],encapsulation:2,changeDetection:0}),e})();var v=n("u8jZ");const C=["header","TextfieldController"],b=["pageTab","Setup"];var E,h,S;E=" Directive allows to customize " + "\ufffd#2\ufffd" + "" + "\ufffd#3\ufffd" + "TuiPrimitiveTextfield" + "\ufffd/#3\ufffd" + "" + "\ufffd/#2\ufffd" + " with parameters that it adds into DI tree ",h=" That means that you can use the directive on any root element and it will be customize all textfields in this scope ",S=" If there are several controllers above textfield, their values will be merged. The nearest directives are in priority ";const g=["heading","Basic"];function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,E),d["\u0275\u0275elementStart"](2,"a",3),d["\u0275\u0275element"](3,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275i18n"](5,h),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275i18n"](7,S),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](9,g),d["\u0275\u0275element"](10,"tui-textfield-controller-example-1"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("content",e.example1)}}var y,_;function $(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",5),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,y),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18nStart"](8,_),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"tui-doc-code",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleImportModule),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}y=" Import an Angular module for forms and " + "\ufffd#4\ufffd" + "TuiTextfieldControllerModule" + "\ufffd/#4\ufffd" + " in the same module where you want to use our directive: ",_=" Use it on " + "\ufffd#9\ufffd" + "tui-primitive-textfield" + "\ufffd/#9\ufffd" + " or its parent elements ";let A=(()=>{class e{constructor(){this.exampleImportModule="import {TuiTextfieldControllerModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiTextfieldControllerModule,\n    ],\n...\n",this.exampleInsertTemplate='<div class="wrapper" [tuiTextfieldCleaner]="true">\n    <tui-primitive-textfield>...</tui-primitive-textfield>\n</div>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-textfield-controller-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTextfieldControllerExample1 {}\n",HTML:'\x3c!-- Works in several levels--\x3e\n<div class="wrapper tui-space_top-3" [tuiTextfieldCleaner]="true">\n    \x3c!-- You can also custoize textfield on itself --\x3e\n    <tui-primitive-textfield tuiTextfieldExampleText="Hello">\n        Cool\n    </tui-primitive-textfield>\n</div>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-textfield-controller"]],decls:5,vars:0,consts:[["package","CORE",6,"header"],["pageTab",""],[6,"pageTab"],["tuiLink","","target","_blank","routerLink","/tui-primitive-textfield"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,C),d["\u0275\u0275template"](2,w,11,1,"ng-template",1),d["\u0275\u0275template"](3,$,11,2,"ng-template",2),d["\u0275\u0275i18nAttributes"](4,b),d["\u0275\u0275elementEnd"]())},directives:[c.a,m.a,p.a,a.e,u.a,T,v.a],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,l.FormsModule,r.TuiLinkModule,r.TuiPrimitiveTextfieldModule,r.TuiTextfieldControllerModule,r.TuiHintControllerModule,...o.d,a.f.forChild(Object(o.m)(A))]]}),e})()}}]);