(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{401:function(t,r,a){"use strict";a.r(r);var e=a(44),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库查询"}},[t._v("#")]),t._v(" 数据库查询")]),t._v(" "),a("h2",{attrs:{id:"一、账管库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、账管库"}},[t._v("#")]),t._v(" 一、账管库")]),t._v(" "),a("h3",{attrs:{id:"_1-1账本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1账本配置"}},[t._v("#")]),t._v(" 1.1账本配置")]),t._v(" "),a("h3",{attrs:{id:"_1-2-账单配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-账单配置"}},[t._v("#")]),t._v(" 1.2 账单配置")]),t._v(" "),a("p",[t._v("1.账单科目")]),t._v(" "),a("p",[a("code",[t._v("select t.*,t.rowid from param.am_bill_type t;")])]),t._v(" "),a("h2",{attrs:{id:"二、crm库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、crm库"}},[t._v("#")]),t._v(" 二、crm库")]),t._v(" "),a("h3",{attrs:{id:"_2-1-查资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查资料"}},[t._v("#")]),t._v(" 2.1 查资料")]),t._v(" "),a("h4",{attrs:{id:"_2-1-1-查号码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-查号码"}},[t._v("#")]),t._v(" 2.1.1 查号码")]),t._v(" "),a("p",[t._v("1.预付费号码")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("SELECT t.*,t.rowid FROM crm1.um_subscriber_921 t WHERE t.bill_type=2;")])])]),t._v(" "),a("p",[t._v("2.后付费号码")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("SELECT t.*,t.rowid FROM crm1.um_subscriber_921 t WHERE t.bill_type=1;")])])]),t._v(" "),a("h4",{attrs:{id:"_2-1-2-查账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-查账户"}},[t._v("#")]),t._v(" 2.1.2 查账户")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("select t.*,t.rowid from cp.cm_account t where t.acct_id=100234;")])])]),t._v(" "),a("h4",{attrs:{id:"_2-1-3-查集团"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-查集团"}},[t._v("#")]),t._v(" 2.1.3 查集团")]),t._v(" "),a("p",[a("code",[t._v("select t.ntn_id,t.*,t.rowid from cp.CB_ENTERPRISE t; select * from cp.cb_enterprise_DEPT t WHERE t.ntn_id='4268866-3'; select * from cp.cb_enterprise_mem t WHERE t.dept_id='4268866-3-1';")])])])}),[],!1,null,null,null);r.default=_.exports}}]);