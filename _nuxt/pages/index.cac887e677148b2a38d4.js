webpackJsonp([14],{"/TYz":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("KYf2"),i=e("dLPy"),n=e("VU/8")(s.a,i.a,!1,null,null,null);a.default=n.exports},"/Ud6":function(t,a,e){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-burger",class:{"is-active":this.menuIsActive},attrs:{"data-target":"navMenu"},on:{click:this.toggleMenu}},[a("span"),a("span"),a("span")])},staticRenderFns:[]};a.a=s},"2U+d":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".tight[data-v-a2c4da0c]{padding:16px;padding:1rem}",""])},"2sJ8":function(t,a,e){"use strict";var s=e("Dd8w"),i=e.n(s),n=e("NYxO");a.a={name:"menu-desktop",computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},"57fK":function(t,a,e){"use strict";var s=e("2sJ8"),i=e("8PrW"),n=e("VU/8")(s.a,i.a,!1,null,null,null);a.a=n.exports},"6+GS":function(t,a,e){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar hero is-primary is-bold"},[a("div",{staticClass:"navbar-brand"},[a("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),a("MenuMobile")],1),a("MenuDesktop")],1)])},staticRenderFns:[]};a.a=s},"62JK":function(t,a,e){"use strict";var s=e("Dd8w"),i=e.n(s),n=e("NYxO"),r=e("s9Qj"),l=e("htll"),c=e("npdG");a.a={name:"layout",props:["title","subtitle"],components:{NavBar:r.a,NavBarMobile:l.a,PageHeader:c.a},methods:i()({},Object(n.mapMutations)({setTitle:"title/setTitle"})),computed:i()({},Object(n.mapGetters)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}},"8PrW":function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[e("div",{staticClass:"navbar-start"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("Tables")]),e("div",{staticClass:"navbar-dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("Overall")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"lbar"}}},[t._v("Women")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"jbar"}}},[t._v("Junior")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team")])],1)],1),e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),e("div",{staticClass:"navbar-dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._m(0)],1),e("div",{staticClass:"navbar-end"})])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link",attrs:{href:"http://justinramel.com/ndca-hc-2018/"}},[this._v("Years")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-hc-2018/"}},[this._v("2018")]),a("a",{staticClass:"navbar-item",attrs:{href:"http://justinramel.com/ndca-hc-2017/"}},[this._v("2017")])])])}]};a.a=s},"9YCY":function(t,a,e){"use strict";var s=e("WzV6"),i=e("/Ud6"),n=e("VU/8")(s.a,i.a,!1,null,null,null);a.a=n.exports},AHTq:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t.isMobile?t._e():e("NavBar"),t.isMobile?e("NavBarMobile"):t._e(),t.isMobile?t._e():t._t("header",[e("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[t._t("default")],2)]),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("p",[this._v("Made by "),a("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}]};a.a=s},CTxF:function(t,a,e){"use strict";var s=e("Dd8w"),i=e.n(s),n=e("NYxO"),r=e("9YCY"),l=e("57fK");a.a={name:"nav-bar",components:{MenuMobile:r.a,MenuDesktop:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}},F3Ye:function(t,a,e){"use strict";a.a={name:"header",props:["title","subtitle"]}},KYf2:function(t,a,e){"use strict";var s=e("uZCW");a.a={name:"welcome",components:{Page:s.a}}},Uijt:function(t,a,e){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar-brand"},[a("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),a("MenuMobile")],1),a("MenuDesktop")],1)])},staticRenderFns:[]};a.a=s},WzV6:function(t,a,e){"use strict";var s=e("Dd8w"),i=e.n(s),n=e("NYxO");a.a={name:"menu",methods:i()({},Object(n.mapMutations)({toggleMenu:"menu/toggle"})),computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},dLPy:function(t,a,e){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("Page",{attrs:{title:"Home"}},[a("section",{staticClass:"section small-padding-top small-padding-bottom"},[a("div",{staticClass:"content"},[a("h1",[this._v("N&DCA Hill Climb 2019")]),a("p",[this._v("See the           "),a("a",{attrs:{href:"https://www.nanddca.co.uk/",target:"_blank"}},[this._v("The Northumberland and Durham Cycling Association")]),this._v("\n        (N&DCA) website for full details of the competition.")])])])])},staticRenderFns:[]};a.a=s},fNCm:function(t,a,e){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hero is-primary is-bold"},[a("div",{staticClass:"hero-body tight"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[this._v(this._s(this.title))]),a("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},staticRenderFns:[]};a.a=s},"gZf+":function(t,a,e){var s=e("2U+d");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("81e1fee0",s,!0,{sourceMap:!1})},htll:function(t,a,e){"use strict";var s=e("nr31"),i=e("6+GS"),n=e("VU/8")(s.a,i.a,!1,null,null,null);a.a=n.exports},npdG:function(t,a,e){"use strict";var s=e("F3Ye"),i=e("fNCm");var n=function(t){e("gZf+")},r=e("VU/8")(s.a,i.a,!1,n,"data-v-a2c4da0c",null);a.a=r.exports},nr31:function(t,a,e){"use strict";var s=e("Dd8w"),i=e.n(s),n=e("NYxO"),r=e("57fK"),l=e("9YCY");a.a={name:"nav-bar-mobile",components:{MenuDesktop:r.a,MenuMobile:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}},s9Qj:function(t,a,e){"use strict";var s=e("CTxF"),i=e("Uijt"),n=e("VU/8")(s.a,i.a,!1,null,null,null);a.a=n.exports},uZCW:function(t,a,e){"use strict";var s=e("62JK"),i=e("AHTq"),n=e("VU/8")(s.a,i.a,!1,null,null,null);a.a=n.exports}});