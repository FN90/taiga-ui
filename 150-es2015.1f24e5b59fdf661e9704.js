(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{CUSP:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTablePaginationModule",(function(){return _}));var a=n("2kYt"),i=n("sEIs"),o=n("SVIu"),l=(n("m/Iy"),n("QbRe"),n("D57K")),s=n("EM62"),r=n("wbn3"),p=n("l4xa"),c=n("Qq0t"),m=n("q7Lq"),u=n("yZWP"),d=n("zV1d"),g=n("cVyY"),f=n("xcN3");function h(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",9),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]().$implicit;return s["\u0275\u0275nextContext"](2).onItem(t)})),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e," ")}}function x(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,h,2,1,"button",8),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e!==n.size)}}function b(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-data-list"),s["\u0275\u0275template"](1,x,2,1,"ng-container",7),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.items)}}let C=(()=>{class e{constructor(e,t){this.spinTexts=e,this.texts=t,this.items=[10,20,50,100],this.total=0,this.page=0,this.size=this.items[0],this.pageChange=new s.EventEmitter,this.sizeChange=new s.EventEmitter,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}onItem(e){const{start:t}=this;this.size=e,this.sizeChange.emit(e),this.open=!1,this.page=Math.floor(t/this.size),this.pageChange.emit(this.page)}back(){this.page--,this.pageChange.emit(this.page)}forth(){this.page++,this.pageChange.emit(this.page)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.TUI_SPIN_TEXTS),s["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange"},decls:17,vars:13,consts:[[1,"pages"],[1,"strong"],[3,"content","open","openChange"],["tuiLink",""],["content",""],["tuiIconButton","","type","button","size","xs","appearance","icon","icon","tuiIconChevronLeft",1,"tui-space_left-6","tui-space_right-1",3,"disabled","title","click"],["tuiIconButton","","type","button","size","xs","appearance","icon","icon","tuiIconChevronRight",3,"disabled","title","click"],[4,"ngFor","ngForOf"],["tuiOption","","size","s","class","item",3,"click",4,"ngIf"],["tuiOption","","size","s",1,"item",3,"click"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"span",0),s["\u0275\u0275text"](1),s["\u0275\u0275elementStart"](2,"strong",1),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"span"),s["\u0275\u0275text"](5),s["\u0275\u0275elementStart"](6,"tui-hosted-dropdown",2),s["\u0275\u0275listener"]("openChange",(function(e){return t.open=e})),s["\u0275\u0275elementStart"](7,"button",3),s["\u0275\u0275elementStart"](8,"strong"),s["\u0275\u0275text"](9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](10,b,2,1,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](12),s["\u0275\u0275elementStart"](13,"strong",1),s["\u0275\u0275text"](14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"button",5),s["\u0275\u0275listener"]("click",(function(){return t.back()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"button",6),s["\u0275\u0275listener"]("click",(function(){return t.forth()})),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](11);s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t.texts.pages," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.pages),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",t.texts.linesPerPage," "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("content",e)("open",t.open),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate2"]("",t.start+1,"\u2013",t.end,""),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",t.texts.of," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.total),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("disabled",t.leftDisabled)("title",t.spinTexts[0]),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("disabled",t.rightDisabled)("title",t.spinTexts[1])}},directives:[m.a,u.a,d.a,g.a,a.s,a.t,f.a],styles:["[_nghost-%COMP%]{font-weight:400;font-size:13px;font-family:var(--tui-text-font);line-height:20px;display:flex;align-items:center;color:var(--tui-text-03)}.strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.pages[_ngcontent-%COMP%]{margin-right:auto}.item[_ngcontent-%COMP%]{width:88px;box-sizing:border-box}"]}),Object(l.a)([Object(p.tuiDefaultProp)()],e.prototype,"items",void 0),Object(l.a)([Object(p.tuiDefaultProp)()],e.prototype,"total",void 0),Object(l.a)([Object(p.tuiDefaultProp)()],e.prototype,"page",void 0),Object(l.a)([Object(p.tuiDefaultProp)()],e.prototype,"size",void 0),e})(),v=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c.TuiButtonModule,c.TuiLinkModule,c.TuiHostedDropdownModule,c.TuiDataListModule]]}),e})();var z=n("OZlg"),E=n("e0eB"),y=n("iyc4");let I=(()=>{class e{constructor(){this.page=3,this.size=10}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-table-pagination",0),s["\u0275\u0275listener"]("pageChange",(function(e){return t.page=e}))("sizeChange",(function(e){return t.size=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("total",237)("page",t.page)("size",t.size),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("Current page: ",t.page,""),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("Items per page: ",t.size,""))},directives:[C],styles:[".list[_ngcontent-%COMP%]{width:200px}"],changeDetection:0}),e})();var T=n("u8jZ");const S=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var w;w=$localize`:␟6848d6df5be6ff4b71028617c374e17b8f9c36c8␟1478194324430836348:Component to show pagination in table footer`;const M=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`];function O(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,w),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](3,M),s["\u0275\u0275element"](4,"tui-table-pagination-example-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1)}}var P,D;function j(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,P),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,D),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}P=$localize`:␟c12f10fdacfb94c064f157ce4609a1cddf69d783␟5915922922821149960: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTablePaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,D=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let k=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-table-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTablePaginationExample1 {\n    page = 3;\n    size = 10;\n}\n",HTML:'<tui-table-pagination\n    [total]="237"\n    [(page)]="page"\n    [(size)]="size"\n></tui-table-pagination>\n<p>Current page: {{page}}</p>\n<p>Items per page: {{size}}</p>\n'},this.exampleImportModule="import {TuiTablePaginationModule} from '@taiga-ui/addon-table';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiTablePaginationModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-table-pagination [total]="total" [(page)]="page" [(size)]="size"></tui-table-pagination>\n'}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:[["header","TablePagination","package","ADDON-TABLE"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,O,5,1,"ng-template",1),s["\u0275\u0275template"](2,j,10,2,"ng-template",2),s["\u0275\u0275i18nAttributes"](3,S),s["\u0275\u0275elementEnd"]())},directives:[z.a,E.a,y.a,I,T.a],encapsulation:2,changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,v,...o.e,i.f.forChild(Object(o.n)(k))]]}),e})()}}]);