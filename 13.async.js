webpackJsonp([13],{s432:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Biqn"),r=t.n(n),s=t("En79"),c=t.n(s),u=t("fplo");a.default={namespace:"sessionList",state:{receive:[],send:[]},effects:{fetchReceiveList:c.a.mark(function e(a,t){var n,r,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,s=t.put,e.next=4,r(u.e,n);case 4:return i=e.sent,e.next=7,s({type:"save",payload:{receive:i.data||[]}});case 7:case"end":return e.stop()}},e,this)}),fetchSendList:c.a.mark(function e(a,t){var n,r,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,s=t.put,e.next=4,r(u.h,n);case 4:return i=e.sent,e.next=7,s({type:"save",payload:{send:i.data||[]}});case 7:case"end":return e.stop()}},e,this)}),deleteSend:c.a.mark(function e(a,t){var n,r,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,e.next=4,s(u.a,n);case 4:i=e.sent,r&&r(i,n.index);case 6:case"end":return e.stop()}},e,this)}),receiveBtn:c.a.mark(function e(a,t){var n,r,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,e.next=4,s(u.k,n);case 4:i=e.sent,r&&r(i);case 6:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){return r()({},e,a.payload)}}}}});