webpackJsonp([3,13],{B9NO:function(t,e){},HBkg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mvHQ"),i=n.n(a),o=n("7+uW"),s=n("M+Hp"),c=n("gyMJ"),r=n("mtWM"),l=n.n(r),u={name:"DisplayData",components:{DataItem:s.default},data:function(){return{data:[],query:"",tables:[],loading:!1,current_query:"*",indices:[],current_indices:[],page:1,page_size:0,last_source:null,search_input_icon:"el-icon-edit",page_num:0,current_page:1,total_num:0,all_history:{},username:"",history:[],is_focus:!0}},mounted:function(){var t=this,e=this;document.onkeydown=function(t){window.event?t.keyCode:t.which;if(73==t.keyCode&&t.ctrlKey)e.$refs.search_input.focus();else if(78==t.keyCode&&t.ctrlKey){if(e.current_page*e.page_size>=e.total_num)return void e.$message.warning("已在末页");e.current_page+=1,e.on_page_change(e.current_page)}else if(80==t.keyCode&&t.ctrlKey){if(1==e.current_page)return void e.$message.warning("已在首页");e.current_page-=1,e.on_page_change(e.current_page)}};var n=Math.floor((window.innerHeight-170)/44);this.page_size=n>8?n:8,this.get_history(),c.b.get("mgmt/table",{params:{page_size:100,has_read_perm:!0}}).then(function(e){t.tables=e.data.results}).catch(function(t){}),this.search_data([],"*",1,this.page_size)},destroyed:function(){this.save_history()},methods:{on_focus:function(t){console.log("on_focus"),t.currentTarget.select()},history_filter:function(t,e){console.log("query_string:",t);var n=[];(t?this.history.filter(this.filter_function(t)):this.history).map(function(t){n.push({value:t})}),console.log("results:",n),e(n)},filter_function:function(t){return function(e){return-1!=e.toLowerCase().indexOf(t.toLowerCase())}},get_history:function(){var t=JSON.parse(localStorage.getItem("history"));if(t){var e=this.$store.state.username;if(!e)return;this.username=e,this.all_history=t,this.history=t[e]?t[e]:[]}},save_history:function(){this.all_history[this.username]=this.history.splice(0,100),localStorage.setItem("history",i()(this.all_history))},add_data:function(t){console.log("table:",t)},search_data:function(t,e,n,a){var i=this,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.last_source;var r=l.a.CancelToken.source();this.last_source=r;var u=this;this.search_input_icon="el-icon-loading",this.loading=!0,c.b.post("search/data-lucene",{indices:t,query:e,page:n,page_size:a}).then(function(t){i.loading=!1,u.data=t.data.hits,i.total_num=t.data.total,i.search_input_icon="el-icon-edit",i.page_num=Math.ceil(t.data.total/i.page_size),o&&(i.current_page=1),s&&s()}).catch(function(t){i.loading=!1,i.search_input_icon="el-icon-edit"})},on_search:function(){var t=this;this.current_query!=this.query||this.current_indices!=this.indices?(""==this.query&&(this.query="*"),this.is_focus=!1,this.history.includes(this.query)||this.history.unshift(this.query),this.page=1,this.search_data(this.indices,this.query,1,this.page_size,!0,function(){t.current_query=t.query,t.current_indices=t.indices}),document.getElementById("submit").focus()):this.$message.warning("重复搜索")},on_page_change:function(t){console.log("val:",t),this.current_page=t,this.search_data(this.current_indices,this.current_query,t,this.page_size)},delete_data:function(t){this.data.splice(this.data.indexOf(t),1),this.total_num-=1},on_add_data:function(t){var e=this;this.$c_add_dialog(this,"AddData",{table_name:t.name}).$on("add_item",function(n){e.$c_master.get("data/"+t.name+"/"+n).then(function(t){e.data.unshift(t.data)}).catch(function(t){})})},on_show_info:function(t){var e=new(o.default.component("ShowTable"))({propsData:{table:t}});e.$mount(),this.$el.appendChild(e.$el)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("el-autocomplete",{ref:"search_input",staticStyle:{width:"100%"},attrs:{id:"search_input",autofocus:t.is_focus,"trigger-on-focus":!1,"suffix-icon":t.search_input_icon,"fetch-suggestions":t.history_filter,"select-when-unmatched":"",placeholder:"示例：(hostname:huawei* AND price:[20000 TO 40000]) 更多请参阅Lucene语法"},on:{focus:t.on_focus},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.on_search()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},[n("el-select",{staticStyle:{width:"250px"},attrs:{slot:"prepend",multiple:"",filterable:"","default-first-option":"",placeholder:"选择表 默认：all"},slot:"prepend",model:{value:t.indices,callback:function(e){t.indices=e},expression:"indices"}},t._l(t.tables,function(e){return n("el-option",{key:e.id,staticStyle:{padding:"10px",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{label:e.name,value:e.name}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-circle-plus"},on:{click:function(n){n.stopPropagation(),t.on_add_data(e)}}}),t._v(" "),n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-info"},on:{click:function(n){n.stopPropagation(),t.on_show_info(e)}}})],1)])})),t._v(" "),n("el-button",{attrs:{slot:"append",id:"submit",icon:"el-icon-search",loading:t.loading},on:{click:function(e){t.on_search()}},slot:"append"})],1)],1),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{border:"1px #DCDFE6 solid",margin:"10px 0px",width:"100%","overflow-x":"auto"}},t._l(t.data,function(e){return n("data-item",{key:e._id,attrs:{data:e},on:{delete_data:t.delete_data}})})),t._v(" "),n("el-pagination",{staticStyle:{float:"right","margin-right":"100px"},attrs:{background:"",layout:"total, prev, pager, next","page-size":t.page_size,total:t.total_num,"current-page":t.current_page},on:{"update:currentPage":function(e){t.current_page=e},"current-change":t.on_page_change}})],1)},staticRenderFns:[]},h=n("VU/8")(u,d,!1,null,null,null);e.default=h.exports},"M+Hp":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("gyMJ"),o={name:"data-item",props:["data"],methods:{on_show_history:function(t,e){var n=a.default.component("HistoricalRecord");console.log("id:",e);var i=new n({propsData:{data_index:t,data_id:e}});i.$mount(),this.$el.appendChild(i.$el)},on_show_detail:function(t){console.log("on_show_detail.data:",t);var e=new(a.default.component("DataDetail"))({propsData:{data:t,source:t._source}});e.$mount(),this.$el.appendChild(e.$el)},on_change_data:function(t){var e=this;this.$c_add_dialog(this,"ChangeData",{data:t}).$on("update_item",function(t){e.data._source=t})},on_delete:function(){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.c.delete("data/"+t.data._index+"/"+t.data._id).then(function(e){console.log("then"),console.log("response data:",e),t.$message.success("删除成功"),t.$emit("delete_data",t.data)}).catch(function(t){})})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticStyle:{"white-space":"nowrap",margin:"0px",padding:"0px"}},[n("li",{staticStyle:{display:"inline-block",border:"1px solid #E4E7ED",padding:"9px"}},[n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-view"},on:{click:function(e){t.on_show_detail(t.data)}}}),t._v(" "),n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-time"},on:{click:function(e){t.on_show_history(t.data._index,t.data._id)}}}),t._v(" "),n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-edit"},on:{click:function(e){t.on_change_data(t.data)}}}),t._v(" "),n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-delete"},on:{click:function(e){t.on_delete()}}})],1),t._v(" "),t._l(t.data._source,function(e,a,i){return"S"!=a[0]?n("li",{key:i,staticStyle:{display:"inline-block",border:"1px solid #E4E7ED",padding:"0 12px","font-size":"14px",height:"40px","line-height":"40px"},style:{color:null==e?"#C0C4CC":"#606266"}},[t._v("\n    "+t._s(null==e?"null":e)+"\n  ")]):t._e()})],2)},staticRenderFns:[]};var c=n("VU/8")(o,s,!1,function(t){n("B9NO")},"data-v-67dfb156",null);e.default=c.exports}});
//# sourceMappingURL=3.28622916c67366ecc08b.js.map