webpackJsonp([6],{IedU:function(e,t,a){"use strict";function n(e){}var l=a("TzDa"),u=a("byc1");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a("l1kM"));a("8Ra0");var d=u(a("aOXL"));a("dU1j");var c=u(a("fnaJ"));a("T1UU");var o=u(a("NvbV")),i=u(a("hLHU")),s=u(a("REWq")),f=u(a("ILJ3")),m=u(a("vm+1")),p=u(a("fgva"));a("FWCK");var v=u(a("e52p")),h=l(a("hhHP")),y=a("NmwX");a("oCAJ");var E=v.default.Option,_={onChange:function(e,t){},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},g=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,f.default)(this,(0,m.default)(t).call(this,e)),a.state={data:[],arr:[],list:[]},a.state={columns:[{title:"\u59d3\u540d",dataIndex:"student_name",render:function(e){return h.default.createElement("a",{href:"javascript:;"},e)}},{title:"\u5b66\u53f7",dataIndex:"student_id"},{title:"\u73ed\u7ea7",dataIndex:"grade_name"},{title:"\u6559\u5ba4",dataIndex:"room_text"},{title:"\u5bc6\u7801",dataIndex:"student_pwd"},{title:"\u64cd\u4f5c",render:function(t,a){function n(t){e.adduser(t)}return h.default.createElement("span",null,h.default.createElement("a",{href:"javascript:;",onClick:function(){n(t.student_id)}},"\u5220\u9664 ",a.name))}}]},a}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.adduser()}},{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.students,arr:e.romms,list:e.grades})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.arr,l=e.list,u=e.columns;return h.default.createElement("div",{className:"content"},h.default.createElement("h2",{style:{marginTop:"10px"}},"\u5b66\u751f\u7ba1\u7406"),h.default.createElement("div",{className:"nav el_conent",style:{height:"auto"}},h.default.createElement(o.default,{placeholder:"\u8f93\u5165\u5b66\u751f\u59d3\u540d"}),h.default.createElement(v.default,{labelInValue:!0,defaultValue:{key:"\u8bf7\u9009\u62e9\u6559\u5ba4\u53f7"},style:{width:120},onChange:n,className:"select"},a&&a.map(function(e,t){return h.default.createElement(E,{key:t,value:e.room_id},e.room_text)})),h.default.createElement(v.default,{labelInValue:!0,defaultValue:{key:"\u73ed\u7ea7\u540d"},style:{width:120},onChange:n,className:"select"},l&&l.map(function(e,t){return h.default.createElement(E,{key:t,value:e.grade_id},e.grade_name)})),h.default.createElement(c.default,{type:"primary"},"\u641c\u7d22"),h.default.createElement(c.default,{type:"primary"},"\u91cd\u7f6e")),h.default.createElement("div",{className:"el_conent"},h.default.createElement(d.default,{rowSelection:_,columns:u,dataSource:t})))}}]),t}(h.Component),k=function(e){return(0,r.default)({},e.management)},x=function(e){return{adduser:function(t){e({type:"management/examTypes",payload:t})}}},b=(0,y.connect)(k,x)(g);t.default=b},oCAJ:function(e,t){}});