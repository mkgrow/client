webpackJsonp([9],{C340:function(e,n,t){"use strict";function c(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000025",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function a(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000026",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function r(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000027",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function o(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000028",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function s(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000029",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function u(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000030",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function T(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000031",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function E(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000032",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function O(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000023",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function _(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel,a=e.untGrade,r=e.untType;return Object(i.f)("20171030000024",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c,UNT_GRADE:a,UNT_TYPE:r})}function d(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel;return Object(i.f)("20171030000121",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c})}function G(e){var n=e.accessToken,t=e.orgCode,c=e.orgLevel;return Object(i.f)("20171030000122",{accessToken:n,ORG_CODE:t,ORG_LEVEL:c})}function f(e){var n=e.accessToken,t=e.shopCode,c=window.localStorage.getItem("state"),a="http://bms.microc.cn/shopguide/api/newTask/getLastFeedbackImg?accessToken=".concat(n,"&authType=").concat(c,"&shopCode=").concat(t);return Object(L.a)(a).then(function(e){return 102===e.code?e:{}})}n.a=c,n.b=a,n.c=r,n.d=o,n.e=s,n.f=u,n.g=T,n.h=E,n.l=O,n.m=_,n.k=d,n.i=G,n.j=f;var i=t("H/Zg"),L=t("vLgD")},ol1f:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t("Biqn"),a=t.n(c),r=t("En79"),o=t.n(r),s=t("C340");n.default={namespace:"achievement",state:{axis:{},data:[]},effects:{fetchAxis:o.a.mark(function e(n,t){var c,a,r,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.payload,a=t.call,r=t.put,e.next=4,a(s.a,c);case 4:return u=e.sent,e.next=7,r({type:"save",payload:{axis:u.data&&u.data[0]||{}}});case 7:case"end":return e.stop()}},e,this)}),fetchData:o.a.mark(function e(n,t){var c,a,r,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.payload,a=t.call,r=t.put,e.next=4,a(s.b,c);case 4:return u=e.sent,e.next=7,r({type:"save",payload:{data:u.data||[]}});case 7:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,n){return a()({},e,n.payload)}}}}});