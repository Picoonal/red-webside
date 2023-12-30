import{u as Y}from"./api-libs-BNhwcwzX.js";import{u as B}from"./locale-vendor-sHloh-3D.js";import{C as Z,a as ee,I as L,O as te,S as oe,P as le,U as ne,F as j,b as q,c as H,T as K,d as ae}from"./comp-vendor-Z72aggk7.js";import{d as V,f as d,h as y,l as s,u as l,B as i,F as z,N as E,p as U,$ as e,x as I,M as u,q as T,j as S,r as G,J as Q,K as W,k as J,n as se,a as D}from"./vue-vendor-kiFy-Aic.js";const ie={class:"commodity-item"},ce={class:"image-wrap flex items-center mr-8"},re=["src"],me={class:"commodity-info mr-8 flex flex-col flex-1 w-0"},de={class:"title-wrap flex items-center"},ue={class:"name font-bold ml-8 one-line"},pe={class:"id ml-8"},_e={class:"info-wrap mt-4 flex flex-1 [&>div]:flex [&>div]:flex-col [&>div]:w-1/3"},fe={class:"selling-points"},be={class:"info-title one-line mb-4"},ye={class:"info-item flex items-center selling-point-item"},he={class:"one-line"},ge={key:0,class:"more flex items-center"},Ne={class:"scenarios"},ve={class:"info-title one-line mb-4"},Ce={class:"info-item flex items-center scene-item"},Fe={class:"one-line"},$e={key:0,class:"more flex flex-1 items-center"},xe={class:"notes"},Ie={class:"info-title one-line mb-4"},Ve={class:"info-item flex items-center note-item"},Pe={class:"one-line"},we={key:0,class:"more flex flex-1 items-center"},ke=V({__name:"CommodityItem",props:{commodityInfo:{default:()=>({images:[],brand:"",id:"",name:"",notes:[],scenarios:[],sellPoints:[]})}},emits:["createNote"],setup(h,{emit:r}){const{t}=B(),{commodityInfo:c}=h,{images:o,brand:n,id:p,name:F,notes:v,scenarios:b,sellPoints:C}=c,w=r;function m(){w("createNote",c)}return(a,g)=>{const _=Z,$=ee;return d(),y("section",ie,[s("div",ce,[l($,{class:"carousel","auto-play":!0,"indicator-type":"dot","show-arrow":"hover","animation-name":"fade"},{default:i(()=>[(d(!0),y(z,null,E(e(o).length?e(o).slice(0,3):["http://dummyimage.com/200x200"],f=>(d(),U(_,{class:"carousel-item full-size"},{default:i(()=>[s("img",{class:"full-size",src:f,loading:"lazy"},null,8,re)]),_:2},1024))),256))]),_:1})]),s("div",me,[s("div",de,[l(e(X),{class:"brand"},{default:i(()=>[I(u(e(n)),1)]),_:1}),s("span",ue,u(e(F)),1),s("span",pe,"#"+u(e(p)),1)]),s("div",_e,[s("div",fe,[s("div",be,u(e(t)("components.CommodityItem.sellPoints")),1),(d(!0),y(z,null,E(e(C).length<=4?e(C):e(C).slice(0,3),f=>(d(),y("div",ye,[s("span",he,u(f),1)]))),256)),e(C).length>4?(d(),y("div",ge," ... ")):T("",!0)]),s("div",Ne,[s("div",ve,u(e(t)("components.CommodityItem.scenarios")),1),(d(!0),y(z,null,E(e(b).length<=4?e(b):e(b).slice(0,3),f=>(d(),y("div",Ce,[s("span",Fe,u(f),1)]))),256)),e(b).length>4?(d(),y("div",$e," ... ")):T("",!0)]),s("div",xe,[s("div",Ie,u(e(t)("components.CommodityItem.notes"))+"("+u(e(v).length)+")",1),(d(!0),y(z,null,E(e(v).length<=4?e(v):e(v).slice(0,3),f=>(d(),y("div",Ve,[s("span",Pe,u(f.title),1)]))),256)),e(v).length>4?(d(),y("div",we," ... ")):T("",!0)])])]),l(e(O),{class:"mr-4",onClick:m},{default:i(()=>[I(u(e(t)("components.CommodityItem.genNoteBtn")),1)]),_:1})])}}}),P=(h,r)=>{const t=h.__vccOpts||h;for(const[c,o]of r)t[c]=o;return t},gt=P(ke,[["__scopeId","data-v-20220faf"]]),Se=V({__name:"DangerButton",emits:["click"],setup(h,{emit:r}){const t=r;return(c,o)=>(d(),y("button",{class:"danger-button center-btn",onClick:o[0]||(o[0]=n=>t("click",n))},[S(c.$slots,"default",{},void 0,!0)]))}}),Be=P(Se,[["__scopeId","data-v-78647746"]]),ze={class:"filter-bar flex items-center"},Ee=V({__name:"FilterBar",props:{placeholder:{default:""},filterConditionList:{default:()=>[]}},emits:["change"],setup(h,{emit:r}){const{t}=B(),c=r,o=G(""),n=G("");function p(){v()}function F(){c("change",{searchText:o.value,filterCondition:n.value})}function v(){o.value=""}return(b,C)=>{const w=L,m=te,a=oe;return d(),y("section",ze,[l(w,{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=g=>o.value=g),class:"search-input",placeholder:e(t)("components.FilterBar.searchPlaceHolder",{text:b.placeholder}),onChange:F},{prefix:i(()=>[l(e(R),{class:"search-icon",name:"search"})]),suffix:i(()=>[Q(s("div",{class:"clear-input flex items-center justify-center",onClick:v},[l(e(R),{name:"close"})],512),[[W,o.value]])]),_:1},8,["modelValue","placeholder"]),l(a,{class:"filter-condition",modelValue:n.value,"onUpdate:modelValue":C[1]||(C[1]=g=>n.value=g),placeholder:e(t)("components.FilterBar.filterPlaceHolder"),"allow-clear":"","allow-search":"","default-active-first-option":!1,onChange:p},{prefix:i(()=>[l(e(R),{class:"filter-icon",name:"filter"})]),default:i(()=>[(d(!0),y(z,null,E(b.filterConditionList,g=>(d(),U(m,{key:g,value:g},{default:i(()=>[I(u(e(t)("components.FilterBar.filterLabel.".concat(g))),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","placeholder"])])}}}),Nt=P(Ee,[["__scopeId","data-v-33259fbe"]]),Ge={class:"sticky inset-[50%]"},Ue=V({__name:"Loading",props:{color1:{},color2:{},containerSize:{default:200},ballSize:{default:10},ballTotal:{default:36},duration:{default:3},delayScale:{default:5},blurBg:{type:Boolean,default:!1}},setup(h){function r(t){return typeof t=="number"?t/10+"rem":t}return(t,c)=>(d(),y("section",{class:se(["loading-mask absolute inset-0 full-size",{"backdrop-blur !bg-gray-300 !bg-opacity-5":t.blurBg}])},[s("div",Ge,[s("div",{class:"loading-wrapper",style:J({"--ball-color-1":t.color1,"--ball-color-2":t.color2,"--ball-total":t.ballTotal,"--container-size":r(t.containerSize),"--ball-size":r(t.ballSize),"--animation-duration":(t.duration||3)+"s","--animation-delay-scale":t.delayScale})},[(d(!0),y(z,null,E(t.ballTotal,o=>(d(),y("div",{class:"dot-group",style:J({"--dot-count":o})},null,4))),256))],4)])],2))}}),vt=P(Ue,[["__scopeId","data-v-b343d86f"]]),Le={class:"note-item flex"},Te={class:"note-info-wrap flex"},Re={class:"image-wrap mr-4"},je=["src","alt"],qe={class:"note-info flex flex-col justify-between"},He={class:"id"},De={class:"title one-line"},Me={class:"create-date one-line"},Oe=["innerHTML","data-label"],Ae=["data-label"],Je={class:"flex items-center"},Ke={class:"cid"},Qe={class:"cname mt-2 one-line"},We={class:"operate flex items-center justify-center"},Xe=V({__name:"NoteItem",props:{noteInfo:{default:()=>({type:"",date:"",id:"",title:"",content:"",desc:"",tags:[],images:[],videos:[],topics:[],status:"save",commodityInfo:{id:"",brand:"",name:"",images:[]},createTime:new Date})}},emits:["publishNote","deleteNote"],setup(h,{emit:r}){const{t}=B(),{noteInfo:c}=h,o=r,{id:n,title:p,content:F,createTime:v,commodityInfo:b}=c;function C(){o("publishNote",c)}function w(){o("deleteNote",c)}return(m,a)=>{var g,_,$,f,k;return d(),y("section",Le,[s("div",Te,[s("div",Re,[s("img",{src:((g=e(b))==null?void 0:g.images[0])||"http://dummyimage.com/200x200",alt:((_=e(b))==null?void 0:_.name)||"not image"},null,8,je)]),s("div",qe,[s("span",He,"#"+u(e(n)),1),s("span",De,u(e(p)),1),s("span",Me,u(new Date(e(v)).toLocaleString()),1)])]),s("div",{class:"note-content line-clamp-3 overflow-hidden mr-4",innerHTML:e(F),"data-label":e(t)("components.NoteItem.contentLabel")},null,8,Oe),s("div",{class:"commodity-info flex flex-col","data-label":e(t)("components.NoteItem.commodityLabel")},[s("div",Je,[s("span",Ke,u(($=e(b))!=null&&$.id?"#".concat(e(b).id):""),1),Q(l(e(X),{class:"ml-8"},{default:i(()=>{var N;return[I(u((N=e(b))!=null&&N.brand?e(b).brand:""),1)]}),_:1},512),[[W,(f=e(b))==null?void 0:f.brand]])]),s("span",Qe,u((k=e(b))!=null&&k.name?e(b).name:""),1)],8,Ae),s("div",We,[l(e(O),{onClick:C},{default:i(()=>[I(u(e(t)("components.NoteItem.publishBtn")),1)]),_:1}),l(e(Be),{onClick:w},{default:i(()=>[I(u(e(t)("components.NoteItem.deleteBtn")),1)]),_:1})])])}}}),Ct=P(Xe,[["__scopeId","data-v-5a26dab2"]]),Ye={class:"pagination-bar relative z-10 flex items-center justify-between"},Ze={class:"left"},et={class:"right flex items-center"},tt={class:"total-page"},ot={class:"page-list-wrap flex"},lt=V({__name:"Pagination",props:{total:{default:1},currentPage:{default:1},pageSize:{default:10}},emits:["change","update:currentPage"],setup(h,{emit:r}){const{t}=B(),c=h,o=r;function n(p){o("update:currentPage",p),o("change",p)}return(p,F)=>{const v=le;return d(),y("section",Ye,[s("div",Ze,[S(p.$slots,"left",{},void 0,!0)]),s("div",et,[S(p.$slots,"right",{},()=>[s("div",tt,u(e(t)("components.Pagination.totalPage",{totalPage:Math.ceil(p.total/p.pageSize)})),1),s("div",ot,[l(v,{current:c.currentPage,"onUpdate:current":F[0]||(F[0]=b=>c.currentPage=b),simple:"",total:c.total,"page-size":c.pageSize,"page-item-style":{height:"3.4rem"},"active-page-item-style":{height:"3.4rem"},onChange:n},null,8,["current","total","page-size"])])],!0)])])}}}),Ft=P(lt,[["__scopeId","data-v-e7b6bef4"]]),nt=V({__name:"PrimaryButton",emits:["click"],setup(h,{emit:r}){const t=r;return(c,o)=>(d(),y("button",{class:"primary-button center-btn",onClick:o[0]||(o[0]=n=>t("click",n))},[S(c.$slots,"default",{},void 0,!0)]))}}),M=P(nt,[["__scopeId","data-v-73b742e6"]]),at=V({__name:"PrimaryButton2",emits:["click"],setup(h,{emit:r}){const t=r;return(c,o)=>(d(),y("button",{class:"primary-button-2 center-btn",onClick:o[0]||(o[0]=n=>t("click",n))},[S(c.$slots,"default",{},void 0,!0)]))}}),O=P(at,[["__scopeId","data-v-4b0b909c"]]),st={class:"svg-icon full-size flex-shrink-0","aria-hidden":""},R=V({__name:"SvgIcon",props:{prefix:{},name:{}},setup(h){const{prefix:r="icon",name:t}=h,c="#".concat(r,"-").concat(t);return(o,n)=>(d(),y("svg",st,[s("use",{href:c,fill:"currentColor"})]))}}),it={},ct={class:"tag p-4 one-line"};function rt(h,r){return d(),y("section",ct,[S(h.$slots,"default",{},void 0,!0)])}const X=P(it,[["render",rt],["__scopeId","data-v-d6fa95a5"]]),mt=V({__name:"CancelButton",emits:["click"],setup(h,{emit:r}){const t=r;return(c,o)=>(d(),y("button",{class:"cancel-button center-btn",type:"reset",onClick:o[0]||(o[0]=n=>{n.stopPropagation(),t("click",n)})},[S(c.$slots,"default",{},void 0,!0)]))}}),A=P(mt,[["__scopeId","data-v-db971833"]]),dt=V({__name:"CreateCommodityForm",props:{disabled:{type:Boolean,default:!1}},emits:["submit","cancel"],setup(h,{emit:r}){const{t}=B(),c=r,o=D({title:"",brand:"",sellPoints:[],scenarios:[],images:[]}),n=m=>({required:!0,message:"".concat(t("components.CreateCommodityForm.label.".concat(m)),"不能为空")}),p={type:"array",minLength:1},F={title:[n("title")],brand:[n("brand")],sellPoints:[n("sellPoints"),p],scenarios:[n("scenarios"),p],images:[n("images"),p]},v=G();function b({values:m,errors:a}){a||m&&c("submit",{...m,images:m.images.map(g=>g.response.data.path)})}function C(){c("cancel")}function w(m){const{onProgress:a,onError:g,onSuccess:_,fileItem:$}=m;Y($.file,{onUploadProgress(f){let k;(f.total||0>0)&&(k=f.loaded/f.total),a(k,f)}}).then(f=>{_(f)}).catch(f=>{g(f)})}return(m,a)=>{const g=ne,_=j,$=L,f=q,k=H;return d(),U(k,{class:"create-commodity-form flex flex-col justify-between full-size",model:o,layout:"horizontal",disabled:m.disabled,"scroll-to-first-error":"",ref:v.value,rules:F,withCredentials:!0,onSubmit:b},{default:i(()=>[s("section",null,[l(_,{field:"images",label:e(t)("components.CreateCommodityForm.label.images")},{default:i(()=>[l(g,{"file-list":o.images,"onUpdate:fileList":a[0]||(a[0]=N=>o.images=N),accept:"image/*","list-type":"picture-card","image-preview":"",multiple:"","response-url-key":N=>N.response.data.path,limit:3,"custom-request":w},null,8,["file-list","response-url-key"])]),_:1},8,["label"]),l(_,{field:"title",label:e(t)("components.CreateCommodityForm.label.title")},{default:i(()=>[l($,{modelValue:o.title,"onUpdate:modelValue":a[1]||(a[1]=N=>o.title=N),placeholder:e(t)("components.CreateCommodityForm.placeInput",{text:e(t)("components.CreateCommodityForm.label.title")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"brand",label:e(t)("components.CreateCommodityForm.label.brand")},{default:i(()=>[l($,{modelValue:o.brand,"onUpdate:modelValue":a[2]||(a[2]=N=>o.brand=N),placeholder:e(t)("components.CreateCommodityForm.placeInput",{text:e(t)("components.CreateCommodityForm.label.brand")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"sellPoints",label:e(t)("components.CreateCommodityForm.label.sellPoints")},{default:i(()=>[l(f,{modelValue:o.sellPoints,"onUpdate:modelValue":a[3]||(a[3]=N=>o.sellPoints=N),placeholder:e(t)("components.CreateCommodityForm.placeInput",{text:e(t)("components.CreateCommodityForm.label.sellPoints")}),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"scenarios",label:e(t)("components.CreateCommodityForm.label.scenarios")},{default:i(()=>[l(f,{modelValue:o.scenarios,"onUpdate:modelValue":a[4]||(a[4]=N=>o.scenarios=N),placeholder:e(t)("components.CreateCommodityForm.placeInput",{text:e(t)("components.CreateCommodityForm.label.scenarios")}),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(_,null,{default:i(()=>[l(e(M),null,{default:i(()=>[I(u(e(t)("components.CreateCommodityForm.confirm")),1)]),_:1}),l(e(A),{class:"ml-8",onClick:C},{default:i(()=>[I(u(e(t)("components.CreateCommodityForm.cancel")),1)]),_:1})]),_:1})]),_:1},8,["model","disabled"])}}}),$t=P(dt,[["__scopeId","data-v-dce6704c"]]),ut={class:"flex-1 overflow-y-auto"},pt=V({__name:"EditNoteForm",props:{disabled:{type:Boolean,default:!1},noteInfo:{default:()=>({})}},emits:["publish","save","cancel"],setup(h,{emit:r}){const{t}=B(),{noteInfo:c}=h,o=r,n=D({title:c.title||"",content:c.content||"",topics:c.topics||[]}),p=m=>({required:!0,message:"".concat(t("components.EditNoteForm.label.".concat(m)),"不能为空")}),F={type:"array",minLength:1},v={title:[p("title")],content:[p("content"),F],topics:[p("topics"),F]},b=G();function C({values:m,errors:a},g){if(a||!m)return;if(g.submitter.dataset.role=="publish")return o("publish",m);o("save",m)}function w(){o("cancel")}return(m,a)=>{const g=L,_=j,$=K,f=q,k=H;return d(),U(k,{class:"create-commodity-form flex flex-col justify-between full-size",model:n,layout:"horizontal",disabled:m.disabled,"scroll-to-first-error":"",ref:b.value,rules:v,onSubmit:C},{default:i(()=>[s("section",ut,[l(_,{field:"title",label:e(t)("components.EditNoteForm.label.title")},{default:i(()=>[l(g,{modelValue:n.title,"onUpdate:modelValue":a[0]||(a[0]=N=>n.title=N),placeholder:e(t)("components.EditNoteForm.placeInput",{text:e(t)("components.EditNoteForm.label.title")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"content",label:e(t)("components.EditNoteForm.label.content")},{default:i(()=>[l($,{modelValue:n.content,"onUpdate:modelValue":a[1]||(a[1]=N=>n.content=N),placeholder:e(t)("components.EditNoteForm.placeInput",{text:e(t)("components.EditNoteForm.label.content")}),"auto-size":{minRows:2},"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"topics",label:e(t)("components.EditNoteForm.label.topics")},{default:i(()=>[l(f,{modelValue:n.topics,"onUpdate:modelValue":a[2]||(a[2]=N=>n.topics=N),placeholder:e(t)("components.EditNoteForm.placeInput",{text:e(t)("components.EditNoteForm.label.topics")}),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(_,{class:"pt-4"},{default:i(()=>[l(e(M),{"data-role":"publish"},{default:i(()=>[I(u(e(t)("components.EditNoteForm.publishBtn")),1)]),_:1}),l(e(O),{class:"ml-8","data-role":"save"},{default:i(()=>[I(u(e(t)("components.EditNoteForm.saveBtn")),1)]),_:1}),l(e(A),{class:"ml-8",onClick:w},{default:i(()=>[I(u(e(t)("components.EditNoteForm.cancel")),1)]),_:1})]),_:1})]),_:1},8,["model","disabled"])}}}),xt=P(pt,[["__scopeId","data-v-1b2e4c7a"]]),_t=V({__name:"GenerateNoteForm",props:{disabled:{type:Boolean,default:!1},commodityInfo:{default:()=>({})}},emits:["submit","cancel"],setup(h,{emit:r}){const{t}=B(),{commodityInfo:c}=h,o=r,n=D({commodityName:c.name||"",commoditySellPoints:c.sellPoints||[],commodityScenarios:c.scenarios||[],other:"",genNumber:1}),p=m=>({required:!0,message:"".concat(t("components.GenerateNoteForm.label.".concat(m)),"不能为空")}),F={type:"array",minLength:1},v={commodityName:[p("commodityName")],commoditySellPoints:[p("commoditySellPoints"),F],commodityScenarios:[p("commodityScenarios"),F],genNumber:[p("genNumber")]},b=G();function C({values:m,errors:a}){a||m&&o("submit",m)}function w(){o("cancel")}return(m,a)=>{const g=L,_=j,$=q,f=K,k=ae,N=H;return d(),U(N,{class:"generate-commodity-form flex flex-col justify-between full-size",model:n,layout:"horizontal",disabled:m.disabled,"scroll-to-first-error":"",ref:b.value,rules:v,onSubmit:C},{default:i(()=>[s("section",null,[l(_,{field:"commodityName",label:e(t)("components.GenerateNoteForm.label.commodityName")},{default:i(()=>[l(g,{modelValue:n.commodityName,"onUpdate:modelValue":a[0]||(a[0]=x=>n.commodityName=x),placeholder:e(t)("components.GenerateNoteForm.placeInput",{text:e(t)("components.GenerateNoteForm.label.commodityName")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"commoditySellPoints",label:e(t)("components.GenerateNoteForm.label.commoditysellPoints")},{default:i(()=>[l($,{modelValue:n.commoditySellPoints,"onUpdate:modelValue":a[1]||(a[1]=x=>n.commoditySellPoints=x),placeholder:e(t)("components.GenerateNoteForm.placeInput",{text:e(t)("components.GenerateNoteForm.label.commoditysellPoints")}),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"commodityScenarios",label:e(t)("components.GenerateNoteForm.label.commodityscenarios")},{default:i(()=>[l($,{modelValue:n.commodityScenarios,"onUpdate:modelValue":a[2]||(a[2]=x=>n.commodityScenarios=x),placeholder:e(t)("components.GenerateNoteForm.placeInput",{text:e(t)("components.GenerateNoteForm.label.commodityscenarios")}),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"other",label:e(t)("components.GenerateNoteForm.label.other")},{default:i(()=>[l(f,{modelValue:n.other,"onUpdate:modelValue":a[3]||(a[3]=x=>n.other=x),placeholder:e(t)("components.GenerateNoteForm.placeInput",{text:e(t)("components.GenerateNoteForm.label.other")}),"auto-size":{minRows:2},"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"genNumber",label:e(t)("components.GenerateNoteForm.label.genNumber")},{default:i(()=>[l(k,{modelValue:n.genNumber,"onUpdate:modelValue":a[4]||(a[4]=x=>n.genNumber=x),style:{width:"10em",textAlign:"center"},placeholder:e(t)("components.GenerateNoteForm.placeInput",{text:e(t)("components.GenerateNoteForm.label.genNumber")}),min:1,precision:0,mode:"button",formatter:x=>"x "+x,parser:x=>x.replace(/^x\s/,"")},null,8,["modelValue","placeholder","formatter","parser"])]),_:1},8,["label"])]),l(_,null,{default:i(()=>[l(e(M),null,{default:i(()=>[I(u(e(t)("components.GenerateNoteForm.genNoteBtn")),1)]),_:1}),l(e(A),{class:"ml-8",onClick:w},{default:i(()=>[I(u(e(t)("components.GenerateNoteForm.cancel")),1)]),_:1})]),_:1})]),_:1},8,["model","disabled"])}}}),It=P(_t,[["__scopeId","data-v-fce052c0"]]);export{gt as C,xt as E,Nt as F,It as G,vt as L,Ct as N,M as P,R as _,P as a,Ft as b,$t as c,A as d};
