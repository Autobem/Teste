"use strict";(self.webpackChunkBemMais2=self.webpackChunkBemMais2||[]).push([[3598],{3598:(x,g,c)=>{c.r(g),c.d(g,{StatusModule:()=>v});var d=c(7622),a=c(9808),s=c(4521),p=c(4004),n=c(5e3),C=c(9162),_=c(3770),M=c(676);function O(t,o){if(1&t&&(n.TgZ(0,"div",17)(1,"div",18)(2,"p",19),n._uU(3),n.qZA(),n._UZ(4,"i",20),n.qZA(),n.TgZ(5,"div",21),n._UZ(6,"img",22),n.qZA()()),2&t){const e=o.$implicit;n.xp6(3),n.Oqu(e.item),n.xp6(3),n.MGl("src","../../../assets/icons/check-","healthy"==e.status.toLowerCase()?"success":"unhealthy"==e.status.toLowerCase()?"warning":"danger",".svg",n.LSH)}}function P(t,o){if(1&t&&(n.TgZ(0,"div")(1,"p"),n._uU(2),n.qZA(),n.TgZ(3,"div",15),n.YNc(4,O,7,2,"div",16),n.qZA()()),2&t){const e=n.oxw().$implicit;n.xp6(2),n.Oqu(e.displayName),n.xp6(2),n.Q6J("ngForOf",e.details)}}function l(t,o){if(1&t&&(n.TgZ(0,"div",15)(1,"div",17)(2,"div",18)(3,"h5",23),n._uU(4),n.qZA(),n._UZ(5,"i",20),n.qZA(),n.TgZ(6,"div",21),n._UZ(7,"img",22),n.qZA()()()),2&t){const e=n.oxw().$implicit;n.xp6(4),n.Oqu(e.displayName),n.xp6(3),n.MGl("src","../../../assets/icons/check-","healthy"==e.status.toLowerCase()?"success":"unhealthy"==e.status.toLowerCase()?"warning":"danger",".svg",n.LSH)}}function m(t,o){if(1&t&&(n.TgZ(0,"div",12),n.YNc(1,P,5,2,"div",13),n.ALo(2,"async"),n.ALo(3,"async"),n.YNc(4,l,8,2,"ng-template",null,14,n.W1O),n.qZA()),2&t){const e=o.$implicit,i=n.MAs(5),r=n.oxw(2);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,r.auth$)&&n.lcZ(3,4,r.permission$)&&e.details)("ngIfElse",i)}}function u(t,o){if(1&t&&(n.TgZ(0,"div",9)(1,"div",10)(2,"div"),n._uU(3),n.qZA()(),n.YNc(4,m,6,6,"div",11),n.qZA()),2&t){const e=o.ngIf;n.xp6(2),n.Gre("alert alert-","healthy"==e.status.toLowerCase()?"success":"unhealthy"==e.status.toLowerCase()?"warning":"danger",""),n.xp6(1),n.hij(" ","healthy"==e.status.toLowerCase()?"Todo o sistema est\xe1 operacional":"unhealthy"==e.status.toLowerCase()?"Foram detectadas instabilidades no sistema":"Foram detectados problemas no sistema"," "),n.xp6(1),n.Q6J("ngForOf",e.items)}}const h=[{path:"",component:(()=>{class t{constructor(e,i,r){this.statusService=e,this.auth=i,this.profileService=r,this.permissions=["SYSTEM_SEE_DETAILED_SERVICE_STATUS"]}ngOnInit(){this.status$=this.statusService.get(),this.auth$=this.auth.isAuthenticated$.pipe((0,p.U)(({isAuthenticated:e})=>e)),this.permission$=this.profileService.hasPermission(this.permissions)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(C.B),n.Y36(_.J_),n.Y36(M.i))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-status"]],decls:12,vars:3,consts:[[1,"wrapper","d-flex","justify-content-center","align-items-start"],[1,"container"],[1,"header","d-flex","justify-content-between"],[1,"title","d-md-flex","align-items-end"],["routerLink","/home","src","../../../assets/img/login_logo.png","alt","",1,"btn"],[1,"robot"],["src","../../../assets/icons/chatbox.svg","alt",""],[1,"card","body"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"card-title"],["class","service",4,"ngFor","ngForOf"],[1,"service"],[4,"ngIf","ngIfElse"],["else1",""],[1,"card"],["class","d-flex justify-content-between align-items-center body",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center","body"],[1,"service-info","d-flex","align-items-center","justify-content-center"],[1,"text-gray-600"],[1,"fas","fa-info-circle"],[1,"icon-service"],["alt","",3,"src"],[1,"medium-text","mb-0","text-gray-500"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),n._UZ(4,"img",4),n.TgZ(5,"p"),n._uU(6,"Status do sistema"),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"img",6),n.qZA()(),n.TgZ(9,"div",7),n.YNc(10,u,5,5,"div",8),n.ALo(11,"async"),n.qZA()()()),2&e&&(n.xp6(10),n.Q6J("ngIf",n.lcZ(11,1,i.status$)))},directives:[s.rH,a.O5,a.sg],pipes:[a.Ov],styles:[".wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid #70b9d8;position:relative;margin-bottom:47px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:relative;bottom:10px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:333px;height:185px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:20px;color:#959da6;line-height:100px;position:absolute;left:280px;white-space:nowrap}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .robot[_ngcontent-%COMP%]{margin-right:30px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .robot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;top:9px;z-index:-1}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]{width:100%;min-height:500px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:40px 32px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:40px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]{margin-top:25px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#707a84;font-weight:500;font-size:18px;margin-bottom:18px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:0 18px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:16px 5px 16px 16px;border-bottom:1px solid rgba(0,0,0,.1)}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]:last-of-type{border-bottom:none}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:0}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:8px;color:#959da6;font-size:16px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card.body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .icon-service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px}@media screen and (max-width: 768px){.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:relative;bottom:10px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:266px;height:148px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:18px;color:#959da6;line-height:0;position:absolute;left:48px;bottom:0;white-space:nowrap}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .robot[_ngcontent-%COMP%]{margin-right:20px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .robot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;top:0;z-index:-1}}.alert-success[_ngcontent-%COMP%]{background-color:#5cb85c;color:#fff}.alert-warning[_ngcontent-%COMP%]{background-color:#ffcd4e;color:#fff}.alert-danger[_ngcontent-%COMP%]{background-color:#f04848;color:#fff}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.ez,f,d.m]]}),t})()}}]);