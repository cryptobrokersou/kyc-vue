(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{203:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("378e1eeb",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var o=n(203);n.n(o).a},225:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,".clickable:hover{color:#5efc8d}",""])},257:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{ids:["Passport","Driver license","Identity card"],docs:["Utility bill","Bank statement","Rental agreement"],show:!1,contacts:"memory",url:"tg://resolve?domain=telegrampassport&bot_id=901198298&scope=%7B%22v%22%3A%201%2C%20%22d%22%3A%20%5B%22pd%22%2C%20%22ad%22%2C%20%22em%22%2C%20%7B%22_%22%3A%20%5B%22passport%22%2C%20%22driver_license%22%2C%20%22identity_card%22%5D%7D%2C%20%7B%22_%22%3A%20%5B%22utility_bill%22%2C%20%22bank_statement%22%2C%20%22rental_agreement%22%5D%7D%5D%7D&public_key=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxFgESPAnVHvJCtxUnDEp%0A5KEqFJYstd08Wu0rNxXok1MsS6NUgxCtiPAqb%2By8Bt4qpGJmFEv%2Fo%2FZiTXILeD4a%0A%2BJJR1I2uYnZwXMAQ9weLhbwcjIJECciVINUEegg%2FHEsK9DBvHkrUZA2%2FMGvrU7sP%0A8oLuymOaUG5At2rTnhHuukINQO90dYhzHybIE6nsj3eDcpkxG5ExTUw%2F2BwITucT%0AFsxPbjEf%2Bw2DH%2F%2FEFXK9YMXJ7MLOPd%2BJN01LlGqqknVPPyE7CrrreX1Cn7Y2slOK%0AyT9iwY%2FZWsJCR74l8CsEzmeVFQp2%2FLr4XLocY6f0fQ18843bvM089OQKmUILhGTb%0ASwIDAQAB%0A-----END%20PUBLIC%20KEY-----%0A&nonce=0b462081738dee13&callback_url=tg%3A//resolve%3Fdomain%3Dkycdemo_bot&payload=nonce",about:"https://telegram.org/blog/passport"}}},r=(n(224),n(44)),l=n(76),c=n.n(l),v=n(258),d=n(222),m=n(215),_=n(255),f=n(259),C=n(216),A=n(256),h=n(219),y=n(223),w=n(207),x=n(206),k=n(201),I=n(208),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("h2",{staticClass:"headline pb-5"},[t._v("\n    Share your Passport data\n  ")]),t._v(" "),n("v-flex",{staticClass:"pb-5 mb-5",attrs:{xs12:"",sm8:"",md6:"","d-flex":""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"text-xs-center elevation-"+(o?10:2),attrs:{extended:""}},[[n("v-btn",{staticClass:"clickable",staticStyle:{left:"40%",right:"40%"},attrs:{fab:"",absolute:"",bottom:""},on:{click:function(e){t.show=!t.show}}},[n("v-icon",{staticClass:"clickable"},[t._v("\n              mdi-"+t._s(t.show?"arrow-up":"arrow-down")+"\n            ")])],1)],t._v(" "),n("a",{attrs:{to:t.url}},[n("v-icon",{staticClass:"clickable pt-1 pl-6 pr-6 mt-4 ml-4 mr-4",attrs:{href:t.url,size:"248px"}},[t._v("\n            mdi-telegram\n          ")])],1),t._v(" "),n("v-card-title",{staticClass:"text-xs-center pt-0 pb-4 mb-4 justify-center body-1"},[t._v("\n          What data is being shared?\n        ")]),t._v(" "),n("v-slide-y-transition",[n("v-list",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"pt-0 pb-4 mb-4"},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-contacts")])],1),t._v(" "),n("v-list-item-title",[t._v("Personal Details")])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-title",[t._v("Residential Address")])],1),t._v(" "),n("v-list-group",{attrs:{"prepend-icon":"mdi-account-card-details",value:"true","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("A valid ID (one of)")])]},proxy:!0}],null,!0)},[t._v(" "),t._l(t.ids,function(e,i){return n("v-list-item",{key:i},[n("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})],2),t._v(" "),n("v-list-group",{attrs:{"prepend-icon":"mdi-file-document",value:"true","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Proof of address (one of)")])]},proxy:!0}],null,!0)},[t._v(" "),t._l(t.docs,function(e,i){return n("v-list-item",{key:i},[n("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})],2)],1)],1)],2)}}])})],1),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"#5efc8d",href:t.about}},[t._v("\n    What is Telegram Passport?\n  ")])],1)},[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardTitle:m.a,VFlex:_.a,VHover:f.a,VIcon:C.a,VLayout:A.a,VList:h.a,VListGroup:y.a,VListItem:w.a,VListItemIcon:x.a,VListItemTitle:k.a,VSlideYTransition:I.d})}}]);