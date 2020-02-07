(this.webpackJsonpdaily_expense2=this.webpackJsonpdaily_expense2||[]).push([[0],{23:function(e,t,a){},28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),o=(a(33),a(34),a(23),a(2)),i=a(3),l=a(5),u=a(4),m=a(14),d=a(6),h=(a(35),a(13)),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={username:"sample_user",password:"1234567",error:"",redirect:""},e.handlePassChange=e.handlePassChange.bind(Object(m.a)(e)),e.handleUserChange=e.handleUserChange.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e.dismissError=e.dismissError.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"dismissError",value:function(){this.setState({error:""})}},{key:"handleSubmit",value:function(e){return e.preventDefault(),this.state.username?this.state.password?this.setState({error:"",redirect:"/expense"}):this.setState({error:"Password is required"}):this.setState({error:"Username is required"})}},{key:"handleUserChange",value:function(e){switch(e.target.id){case"username":this.setState({username:e.target.value});break;case"password":this.setState({password:e.target.value})}}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:this.state.redirect}):r.a.createElement("div",{className:"login"},r.a.createElement("div",{id:"form-container"},r.a.createElement("form",{id:"login-form",onSubmit:this.handleSubmit},this.state.error&&r.a.createElement("h3",{"data-test":"error",onClick:this.dismissError},r.a.createElement("button",{onClick:this.dismissError},"\u2716"),this.state.error),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"User Name"),r.a.createElement("input",{id:"username",type:"text","data-test":"username",value:this.state.username,onChange:this.handleUserChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password","data-test":"password",value:this.state.password,onChange:this.handlePassChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"btn-login",value:"Login","data-test":"submit"})))))}}]),t}(r.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Daily Expense"))}}]),t}(r.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h2",null,"Footer"))}}]),t}(r.a.Component),E=a(8),v=a(9),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSelected=function(e){for(var t=a.state.numSelectedRecords,n=0;n<a.state.data.length;n++)if(e===a.state.data[n].id){var r=a.state.data;return r[n].isSelected=!r[n].isSelected,r[n].isSelected?t++:t--,a.setState({numSelectedRecords:t,data:r}),void a.props.onToggleSelect(t)}},a.handleSort=function(e){switch(e){case"Amount":a.state.data.sort((function(e,t){return a.state.ascending?e.amount-t.amount:t.amount-e.amount}));break;case"Item":a.state.data.sort((function(e,t){var n=e.description.toUpperCase(),r=t.description.toUpperCase(),s=0;return n>r?s=a.state.ascending?1:-1:n<r&&(s=a.state.ascending?-1:1),s}));break;case"Comment":a.state.data.sort((function(e,t){var n=e.comments.toUpperCase(),r=t.comments.toUpperCase(),s=0;return n>r?s=a.state.ascending?1:-1:n<r&&(s=a.state.ascending?-1:1),s}));break;case"Category":a.state.data.sort((function(e,t){var n=e.categoryName.toUpperCase(),r=t.categoryName.toUpperCase(),s=0;return n>r?s=a.state.ascending?1:-1:n<r&&(s=a.state.ascending?-1:1),s}));break;case"Date":a.state.data.sort((function(e,t){var n=new Date(e.dateTime),r=new Date(t.dateTime),s=0;return n>r?s=a.state.ascending?1:-1:n<r&&(s=a.state.ascending?-1:1),s}))}a.setState({sortingColumn:e,ascending:!a.state.ascending})},a.state={ascending:!0,data:[],storageKey:"expenseList",numSelectedRecords:0,sortingColumn:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data.map((function(t){var a=new Date(t.dateTime);return r.a.createElement("tr",{key:t.id,onClick:function(){return e.handleSelected(t.id)}},r.a.createElement("td",null,"".concat(a.getFullYear(),"-").concat(a.getMonth()>9?"":"0").concat(a.getMonth()+1,"-").concat(a.getDate()>10?"":"0").concat(a.getDate())),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.amount),r.a.createElement("td",null,t.categoryName),r.a.createElement("td",null,t.comments),t.isSelected?r.a.createElement("td",null,r.a.createElement(E.a,{icon:v.b})):r.a.createElement("td",null))}));return r.a.createElement("div",{className:"expense-list"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return e.handleSort("Date")}},"Date"," ","Date"===this.state.sortingColumn&&(this.state.ascending?r.a.createElement(E.a,{icon:v.a}):r.a.createElement(E.a,{className:"faCaretDown",icon:v.a}))),r.a.createElement("th",{onClick:function(){return e.handleSort("Item")}},"Item"," ","Item"===this.state.sortingColumn&&(this.state.ascending?r.a.createElement(E.a,{icon:v.a}):r.a.createElement(E.a,{className:"faCaretDown",icon:v.a}))),r.a.createElement("th",{onClick:function(){return e.handleSort("Amount")}},"Amount"," ","Amount"===this.state.sortingColumn&&(this.state.ascending?r.a.createElement(E.a,{icon:v.a}):r.a.createElement(E.a,{className:"faCaretDown",icon:v.a}))),r.a.createElement("th",{onClick:function(){return e.handleSort("Category")}},"Category"," ","Category"===this.state.sortingColumn&&(this.state.ascending?r.a.createElement(E.a,{icon:v.a}):r.a.createElement(E.a,{className:"faCaretDown",icon:v.a}))),r.a.createElement("th",{onClick:function(){return e.handleSort("Comment")}},"Comment"," ","Comment"===this.state.sortingColumn&&(this.state.ascending?r.a.createElement(E.a,{icon:v.a}):r.a.createElement(E.a,{className:"faCaretDown",icon:v.a}))),r.a.createElement("th",{className:"Table-th"}))),r.a.createElement("tbody",null,t)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{data:e.data}}}]),t}(r.a.Component),C="https://lvaw1qhhfi.execute-api.us-east-1.amazonaws.com/Prod/api/",y={getAllExpense:function(){return fetch(C+"Expense")},getCategories:function(){return fetch(C+"Expense/Categories")},filterExpense:function(e){return fetch(C+"Expense/filter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},deleteExpense:function(e){return fetch(C+"Expense/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},addNew:function(e){return fetch(C+"Expense",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleApplyFilter=function(){y.filterExpense(a.state.filterObj).then((function(e){return e.json()})).then((function(e){a.props.onApplyFilter(e)}))},a.handleInputChange=function(e){var t=a.state.filterObj;switch(e.target.id){case"start-date":t.startDate=e.target.value;break;case"end-date":t.endDate=e.target.value;break;case"min-amount":t.minAmount=e.target.value;break;case"max-amount":t.maxAmount=e.target.value}},a.state={filterObj:{startDate:"",endDate:"",catigoryIDs:[],minAmount:0,maxAmount:99999}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"filter"},r.a.createElement("div",{className:"filter-date-range"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"start-date"},"From"),r.a.createElement("input",{id:"start-date",className:"form-control",type:"date",onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"start-date"},"To"),r.a.createElement("input",{id:"end-date",className:"form-control",type:"date",onChange:this.handleInputChange}))),r.a.createElement("div",{className:"filter-categories"},r.a.createElement("div",{className:"Groceries"},"Groceries"),r.a.createElement("div",{className:"Education"},"Education"),r.a.createElement("div",{className:"Insurance"},"Insurance"),r.a.createElement("div",{className:"Petrol"},"Petrol"),r.a.createElement("div",{className:"Others"},"Others")),r.a.createElement("div",{className:"filter-amount-range"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"$ min",id:"min-amount",onChange:this.handleInputChange}),r.a.createElement("span",null,"To"),r.a.createElement("input",{type:"text",placeholder:"$ max",id:"max-amount",onChange:this.handleInputChange}))),r.a.createElement("div",{className:"filter-btn"},r.a.createElement("input",{type:"button",value:"Apply Filter",className:"btn-apply-filter",onClick:this.handleApplyFilter}),r.a.createElement("input",{type:"reset",value:"Reset Filter",className:"btn-reset-filter",onClick:this.handleApplyFilter})))}}]),t}(r.a.Component),O=(a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmitForm=function(){var e=a.state.newRecord;""===e.Amount||""===e.Description?a.setState({isError:!0}):(e.CategoryName=document.getElementById("category").value,a.setState({newRecord:e}),a.props.onAddNewRecord(a.state.newRecord),document.getElementById("expense-form").reset())},a.handleInputChange=function(e){var t=a.state.newRecord;"date"===e.target.id?t.DateTime=e.target.value:"category"===e.target.id?t.CategoryName=e.target.value:"item-name"===e.target.id?t.Description=e.target.value:"amount"===e.target.id?t.Amount=e.target.value:"comments"===e.target.id&&(t.Comments=e.target.value),a.setState({newRecord:t})},a.state={newRecord:{Id:0,DateTime:"",Description:"",Amount:"",CategoryName:"",Comments:""},category:[],isError:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.getCategories().then((function(e){return e.json()})).then((function(t){e.setState({category:t})}))}},{key:"render",value:function(){console.log("render");var e=this.state.category.map((function(e){return r.a.createElement("option",null,e.categoryName)}));return r.a.createElement("div",{className:"expense-form"},r.a.createElement("form",{id:"expense-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"date",className:"form-control",type:"date",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{id:"category",className:"form-control",onChange:this.handleInputChange},e)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"item-name",className:"form-control",type:"text",placeholder:"Item Name",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"amount",className:"form-control",type:"number",placeholder:"Amount",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"comments",className:"form-control",type:"text",placeholder:"Comments",onChange:this.handleInputChange})),r.a.createElement("div",null,r.a.createElement("input",{className:"btn-add-expense",type:"button",value:"Submit",onClick:this.onSubmitForm}))))}}]),t}(r.a.Component)),N=(a(44),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onQuickSearch=function(e){var t=e.target.value.toUpperCase(),n=a.state.data.filter((function(e){return e.description.toUpperCase().indexOf(t)>=0||e.amount.toString().indexOf(t)>=0||e.categoryName.toUpperCase().indexOf(t)>=0}));a.props.onQuickSearch(n),console.log("search done")},a.state={data:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"quick-search"},r.a.createElement("input",{type:"text",onChange:function(t){return e.onQuickSearch(t)}}),r.a.createElement(E.a,{icon:v.c,className:"search-icon"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{data:e.data}}}]),t}(r.a.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={numSelectedRecords:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"delete-records"},r.a.createElement("input",{type:"button",onClick:this.props.onDelete,value:"Delete ".concat(this.state.numSelectedRecords," Records")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{numSelectedRecords:e.numSelectedRecords}}}]),t}(r.a.Component),k=(a(45),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userName:"Rui"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"user-avatar"}),r.a.createElement("h2",null,"Hello, Rui"))}}]),t}(r.a.Component)),x=(a(46),r.a.Component,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(){var e=a.state.expenseList.filter((function(e){return e.isSelected})).map((function(e){return e.id}));y.deleteExpense(e).then((function(e){return e.json()})).then((function(e){y.getAllExpense().then((function(e){return e.json()})).then((function(e){var t=a.addFlagToList(e);a.setState({expenseList:t,quickSearchResult:t})}))}))},a.handleQuickSearch=function(e){a.setState({quickSearchResult:e})},a.addFlagToList=function(e){return e.map((function(e){return e.isSelected=!1,e}))},a.handleFilterResult=function(e){var t=a.addFlagToList(e);a.setState({expenseList:t,quickSearchResult:t})},a.handleAddNewRecord=function(e){y.addNew(e).then((function(e){return e.json()})).then((function(e){e.isSelected=!1;var t=a.state.expenseList;t.push(e),a.setState({expenseList:t,quickSearchResult:t})}))},a.handleToggleSelect=function(e){a.setState({numSelectedRecords:e})},a.state={expenseList:[],quickSearchResult:[],numSelectedRecords:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.getAllExpense().then((function(e){return e.json()})).then((function(t){var a=e.addFlagToList(t);e.setState({expenseList:a,quickSearchResult:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-page"},r.a.createElement("div",{className:"nav"},r.a.createElement(k,null),r.a.createElement(S,{onApplyFilter:this.handleFilterResult})),r.a.createElement("div",{className:"main"},r.a.createElement(O,{onAddNewRecord:this.handleAddNewRecord}),r.a.createElement("div",null,r.a.createElement(N,{data:this.state.expenseList,onQuickSearch:this.handleQuickSearch}),r.a.createElement("div",{className:"btn"},r.a.createElement("input",{type:"button",value:"Edit"}),r.a.createElement(j,{onDelete:this.handleDelete,numSelectedRecords:this.state.numSelectedRecords}))),r.a.createElement(b,{data:this.state.quickSearchResult,onToggleSelect:this.handleToggleSelect})))}}]),t}(r.a.Component)),w=a(18);var D=function(){return r.a.createElement(w.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:p}),r.a.createElement(h.b,{path:"/expense",component:x})),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b2d5e61d.chunk.js.map