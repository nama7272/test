(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{598:function(t,e,n){"use strict";n.r(e);var o={layout:"style",data:function(){return{tabCurrent:0,tabItems:[{id:1,tab:"Tab1",content:"コンテンツ1"},{id:2,tab:"Tab2",content:"コンテンツ2"},{id:3,tab:"Tab3",content:"コンテンツ3"}]}},methods:{ttt:function(){this.tabCurrent=this.tabCurrent+1}}},r=n(0),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BaseStyleTitle",{attrs:{h1:""}},[t._v("text-field")]),t._v(" "),n("BaseSection",[n("BaseStyleSubtitle",{attrs:{h2:""}},[t._v("component")]),t._v(" "),n("BaseRow",{attrs:{grid:""}},[n("BaseCol",[n("BaseChip",[t._v("BaseTab")])],1)],1)],1),t._v(" "),n("BaseSection",[n("BaseStyleSubtitle",[t._v("prop")]),t._v(" "),n("BaseRow",{attrs:{table:""}},[n("BaseRow",[n("BaseCol",[t._v("open")]),t._v(" "),n("BaseCol",{attrs:{grow:""}},[t._v("最初から表示状態にする")])],1),t._v(" "),n("BaseRow",[n("BaseCol",[t._v("aaa")]),t._v(" "),n("BaseCol",{attrs:{grow:""}},[t._v("aaaaaa")])],1)],1)],1),t._v(" "),n("BaseSection",[n("BaseStyleSubtitle",[t._v("slot")]),t._v(" "),n("BaseRow",{attrs:{table:""}},[n("BaseRow",[n("BaseCol",[t._v("trigger")]),t._v(" "),n("BaseCol",{attrs:{grow:""}},[t._v("アコーディオンのKEY")])],1),t._v(" "),n("BaseRow",[n("BaseCol",[t._v("container")]),t._v(" "),n("BaseCol",{attrs:{grow:""}},[t._v("アコーディオンのコンテンツ")])],1)],1)],1),t._v(" "),n("BaseSection",[n("BaseStyleSubtitle",{attrs:{h2:""}},[t._v("preview")]),t._v(" "),n("BaseSection",[n("BaseStyleSecondtitle",{attrs:{h2:""}},[t._v("default")]),t._v(" "),n("BaseCard",{attrs:{outline:""}},[n("BaseCardText",[n("BaseTabs",[t._l(t.tabItems,(function(e,o){return n("BaseTab",{key:o,on:{click:function(n){t.tabCurrent=e.id}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.tab)+"\n\t\t\t\t\t\t\t")])})),t._v(" "),n("BaseTab",{on:{click:function(e){t.tabCurrent=2}},model:{value:t.tabCurrent,callback:function(e){t.tabCurrent=e},expression:"tabCurrent"}},[t._v("aaaaaa")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.tabCurrent)+"\n\t\t\t\t\t\t")],2),t._v(" "),n("BaseTabsItems",t._l(t.tabItems,(function(e,o){return o==t.tabCurrent?n("BaseTabItem",{key:o},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t\t\t\t")]):t._e()})),1)],1)],1),t._v(" "),n("BaseCode",{attrs:{value:"<BaseAccordion open>\n    <template v-slot:trigger>\n        トリガー\n    </template>\n    <template v-slot:container>\n        中身\n    </template>\n</BaseAccordion>\n"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);