"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[50],{5444:(n,t,e)=>{e.d(t,{Z:()=>C});var l=e(4448),o=e(6940),r=e(2221),i=function(n){return(0,l.dD)("data-v-349609dc"),n=n(),(0,l.Cn)(),n},u=i((function(){return(0,l._)("img",{src:o,alt:""},null,-1)})),a=[u],c={class:"navigation"},s=(0,l.Uk)("Home"),d=(0,l.Uk)("Espace Professionnel"),p=i((function(){return(0,l._)("img",{src:r,alt:""},null,-1)})),m=[p],f={class:"dropdown-nav"},_=(0,l.Uk)("Home"),h=(0,l.Uk)("Espace Professionnel"),v=i((function(){return(0,l._)("li",null,[(0,l._)("p",{class:"link"},"Deconnecter")],-1)}));function w(n,t,e,o,r,i){var u=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("header",{class:(0,l.C_)({"scrolld-nav":r.scrollNav})},[(0,l._)("nav",null,[(0,l._)("div",{class:"branding",onClick:t[0]||(t[0]=function(){return i.home&&i.home.apply(i,arguments)})},a),(0,l.wy)((0,l._)("ul",c,[(0,l._)("li",null,[(0,l.Wm)(u,{class:"link",to:{name:"home"}},{default:(0,l.w5)((function(){return[s]})),_:1})]),(0,l._)("li",null,[(0,l.Wm)(u,{class:"link",to:{name:"doctor"}},{default:(0,l.w5)((function(){return[d]})),_:1})]),(0,l._)("li",null,[(0,l._)("p",{class:"link",onClick:t[1]||(t[1]=function(){return i.logout&&i.logout.apply(i,arguments)})},"Deconnecter")])],512),[[l.F8,!r.mobile]]),(0,l.wy)((0,l._)("div",{class:(0,l.C_)(["icon",{"icon-active":r.mobileNav}]),onClick:t[2]||(t[2]=function(){return i.toggleMobileNav&&i.toggleMobileNav.apply(i,arguments)})},m,2),[[l.F8,r.mobile]]),(0,l.Wm)(l.uT,{name:"mobile-nav"},{default:(0,l.w5)((function(){return[(0,l.wy)((0,l._)("ul",f,[(0,l._)("li",null,[(0,l.Wm)(u,{class:"link",to:{name:"home"}},{default:(0,l.w5)((function(){return[_]})),_:1})]),(0,l._)("li",null,[(0,l.Wm)(u,{class:"link",to:{name:"doctor"}},{default:(0,l.w5)((function(){return[h]})),_:1})]),v],512),[[l.F8,r.mobileNav]])]})),_:1})])],2)}const g={name:"ComponentNavbar",data:function(){return{scrollNav:null,mobile:null,mobileNav:null,windowWith:null}},created:function(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{home:function(){this.$router.push({path:"/"})},logout:function(){localStorage.clear("patient"),this.$router.push({path:"/login"})},toggleMobileNav:function(){this.mobileNav=!this.mobileNav},updateScroll:function(){var n=window.scrollY;if(n>50)return this.scrollNav=!0,!0;this.scrollNav=!1},checkScreen:function(){this.windowWith=window.innerWidth,this.windowWith<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)}}};var k=e(3744);const b=(0,k.Z)(g,[["render",w],["__scopeId","data-v-349609dc"]]),C=b},4050:(n,t,e)=>{e.r(t),e.d(t,{default:()=>H});var l=e(4448);function o(n,t,e,o,r,i){var u=(0,l.up)("ComponentNavbarConnect"),a=(0,l.up)("ComponentCompte");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(u),(0,l.Wm)(a,{users:r.users},null,8,["users"])])}var r=e(5444),i=function(n){return(0,l.dD)("data-v-2e62f2ce"),n=n(),(0,l.Cn)(),n},u={class:"container"},a={class:"content"},c={class:"header"},s={class:"compte"},d=i((function(){return(0,l._)("div",{class:"compte-header"},[(0,l._)("p",null,"Gestion du compte")],-1)})),p={class:"main"},m={class:"card"},f={class:"card-body"},_=i((function(){return(0,l._)("i",{class:"fa fa-pen fa-xs edit"},null,-1)})),h=i((function(){return(0,l._)("td",null,"Nom",-1)})),v=i((function(){return(0,l._)("td",null,":",-1)})),w=i((function(){return(0,l._)("td",null,"Prenom",-1)})),g=i((function(){return(0,l._)("td",null,":",-1)})),k=i((function(){return(0,l._)("td",null,"Addresse Email",-1)})),b=i((function(){return(0,l._)("td",null,":",-1)})),C=i((function(){return(0,l._)("td",null,"Numero",-1)})),N=i((function(){return(0,l._)("td",null,":",-1)})),y=i((function(){return(0,l._)("td",null,"Date de naissance",-1)})),W=i((function(){return(0,l._)("td",null,":",-1)})),D={class:"btn"};function S(n,t,e,o,r,i){return(0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",a,[(0,l._)("div",c,[(0,l._)("ul",null,[(0,l._)("li",{onClick:t[0]||(t[0]=function(){return i.carnet&&i.carnet.apply(i,arguments)})},"carnet"),(0,l._)("li",{onClick:t[1]||(t[1]=function(){return i.compte&&i.compte.apply(i,arguments)})},"Mon Compte"),(0,l._)("li",{onClick:t[2]||(t[2]=function(){return i.maladie&&i.maladie.apply(i,arguments)})},"Maladie")])]),(0,l._)("div",s,[d,(0,l._)("div",p,[(0,l._)("div",m,[(0,l._)("div",f,[_,(0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.users,(function(n){return(0,l.wg)(),(0,l.iD)("tbody",{key:n.id},[(0,l._)("tr",null,[h,v,(0,l._)("td",null,(0,l.zw)(n.nom),1)]),(0,l._)("tr",null,[w,g,(0,l._)("td",null,(0,l.zw)(n.prenom),1)]),(0,l._)("tr",null,[k,b,(0,l._)("td",null,(0,l.zw)(n.email),1)]),(0,l._)("tr",null,[C,N,(0,l._)("td",null,(0,l.zw)(n.numero),1)]),(0,l._)("tr",null,[y,W,(0,l._)("td",null,(0,l.zw)(n.date_naissance),1)])])})),128))])])])]),(0,l._)("div",D,[(0,l._)("button",{onClick:t[3]||(t[3]=function(){return i.redirect&&i.redirect.apply(i,arguments)})},"modifier")])])])])}const $={name:"ComponentCompte",props:["users"],methods:{carnet:function(){this.$router.push({path:"/carnet"})},compte:function(){this.$router.push({path:"/compte"})},maladie:function(){this.$router.push({path:"/maladie"})},redirect:function(){this.$router.push({path:"/updatepatient"})}}};var z=e(3744);const E=(0,z.Z)($,[["render",S],["__scopeId","data-v-2e62f2ce"]]),I=E;var M=e(9669),Z=e.n(M);const U={name:"CompteView",components:{ComponentCompte:I,ComponentNavbarConnect:r.Z},data:function(){return{users:""}},created:function(){var n=localStorage.getItem("patient");console.log("authhhh",n),null===n&&this.$router.push({path:"/login"})},mounted:function(){var n=this,t=localStorage.getItem("patient");t?(console.log("sfsdfg",t),Z().get("https://sante-kionou.herokuapp.com/users/detailuser",{headers:{patient:localStorage.getItem("patient")}}).then((function(t){console.log("response",t.data),n.users=t.data.user}))):console.log("nono")}},F=(0,z.Z)(U,[["render",o]]),H=F}}]);
//# sourceMappingURL=50.e015ab8b.js.map