"use strict";(self.webpackChunkBemMais2=self.webpackChunkBemMais2||[]).push([[8889],{8889:(Wt,U,s)=>{s.r(U),s.d(U,{QuotationModule:()=>Gt});var f=s(9808),g=s(4521),P=s(8306),q=s(262),O=s(312),t=s(5e3),v=s(7751);let k=(()=>{class i{constructor(e){this.modalService=e}canDeactivate(e){return!e.canDeactivate||!0===e.canDeactivate()||!1===e.canDeactivate()&&new P.y(o=>{var n;this.modalRef=this.modalService.open(O.z,{centered:!0});const a=this.modalRef.componentInstance;a.list=["As informa\xe7\xf5es n\xe3o salvas ser\xe3o perdidas. Deseja continuar?"],a.title="Informa\xe7\xf5es n\xe3o salvas",a.type="alert",a.confirmButtonText="Sim",a.cancelButtonText="N\xe3o",null===(n=this.modalRef.closed)||void 0===n||n.pipe((0,q.K)(l=>(o.next(l),o.complete(),l))).subscribe(l=>{o.next(l),o.complete()})})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(v.FF))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var A=s(1135),L=s(8746),C=s(5698),Y=s(6367),z=s(5989),y=s(7258),D=s(6878);let B=(()=>{class i{constructor(e){this.modal=e,this.selectedPeriod=D.h.Daily}ngOnInit(){}get PeriodTime(){return D.h}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v.Kz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-select-period-modal"]],decls:27,vars:6,consts:[[1,"modal-content"],[1,"modal-header","d-flex","align-items-center"],[1,"modal-icon","mr-2"],["src","../../../../assets/icons/modal-info.svg","alt",""],[1,"modal-title","pull-left","text-gray-600","mb-0"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"close-icon"],[1,"modal-body"],[1,"card","shadow","calendar",3,"click"],["src","../../../../assets/icons/daily-calendar.svg"],[1,"text-gray-600"],["src","../../../../assets/icons/monthly-calendar.svg"],["src","../../../../assets/icons/yearly-calendar.svg"],[1,"footer"],["type","button",1,"btn","btn-outline-light-atb","mr-3",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"h5",4),t._uU(5," Escolha o tipo de per\xedodo "),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){return o.modal.dismiss()}),t.TgZ(7,"span",6),t._uU(8,"\xd7"),t.qZA()()(),t.TgZ(9,"div",7)(10,"div",8),t.NdJ("click",function(){return o.selectedPeriod=o.PeriodTime.Daily}),t._UZ(11,"img",9),t.TgZ(12,"span",10),t._uU(13,"Di\xe1rio"),t.qZA()(),t.TgZ(14,"div",8),t.NdJ("click",function(){return o.selectedPeriod=o.PeriodTime.Monthly}),t._UZ(15,"img",11),t.TgZ(16,"span",10),t._uU(17,"Mensal"),t.qZA()(),t.TgZ(18,"div",8),t.NdJ("click",function(){return o.selectedPeriod=o.PeriodTime.Yearly}),t._UZ(19,"img",12),t.TgZ(20,"span",10),t._uU(21,"Anual"),t.qZA()()(),t.TgZ(22,"div",13)(23,"button",14),t.NdJ("click",function(){return o.modal.dismiss()}),t._uU(24," Fechar "),t.qZA(),t.TgZ(25,"button",15),t.NdJ("click",function(){return o.modal.close(o.selectedPeriod)}),t._uU(26," confirmar "),t.qZA()()()),2&e&&(t.xp6(10),t.ekj("active",o.selectedPeriod==o.PeriodTime.Daily),t.xp6(4),t.ekj("active",o.selectedPeriod==o.PeriodTime.Monthly),t.xp6(4),t.ekj("active",o.selectedPeriod==o.PeriodTime.Yearly))},styles:[".modal-content[_ngcontent-%COMP%]{width:28rem}.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{font-size:2.4rem;color:#828282}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]{width:7rem;height:7rem;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2.125rem;height:2.375rem}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:.875rem}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .calendar.active[_ngcontent-%COMP%]{transition:.1s ease-in-out;border-color:#0275d8;border-width:2px}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .calendar.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.1s ease-in-out;font-size:105%}.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .calendar.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:.1s ease-in-out;font-size:105%;color:#0275d8!important}.modal-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{margin:4rem 1rem 1rem;display:flex;justify-content:flex-end}.modal-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:5rem!important}"]}),i})();var h=s(824),R=s(1969),x=s(3047),E=s(8080),j=s(72),Q=s(2290),I=s(8966),H=s(1235),M=s(6517),G=s(5214);function V(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().selectedAssetType=a}),t._uU(1),t.qZA()}if(2&i){const e=r.$implicit;t.xp6(1),t.Oqu(e)}}function W(i,r){1&i&&t._UZ(0,"i",22)}function X(i,r){1&i&&t._UZ(0,"div",23)}function K(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().createQuotation()}),t.YNc(1,W,1,0,"i",20),t.YNc(2,X,1,0,"div",21),t._uU(3),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",e.createQuotationLoading),t.xp6(1),t.Q6J("ngIf",!e.createQuotationLoading),t.xp6(1),t.Q6J("ngIf",e.createQuotationLoading),t.xp6(1),t.hij(" ",e.createQuotationLoading?"Criando cota\xe7\xe3o...":"Criar cota\xe7\xe3o"," ")}}const tt=function(){return["ROOT","COMMERCIAL_CREATE_PROPOSAL"]};let et=(()=>{class i extends Y.K{constructor(e,o,n,a,l,d,c,p,m,b,Vt){super(),this.quotationService=e,this.navbarService=o,this.router=n,this.route=a,this.datePipe=l,this.modal=d,this.ngbModal=c,this.loading=p,this.toast=m,this.commercialHelper=b,this.dialog=Vt,this.categories=["Todas","Finalizadas","Em andamento"],this.selectedAssetType=this.categories[0],this.quotations$=new A.X({}),this.displayedColumns=[{displayName:"Cota\xe7\xe3o",columnName:"number",className:"flex-10"},{displayName:"Status",columnName:"status",hasInnerHtml:!0,cell:({status:_})=>this.StatusTranslator[_],className:"flex-7"},{displayName:"Proponente",columnName:"proponent",hasInnerHtml:!0,cell:({proponent:_})=>this.returnProponent(_)},{displayName:"Consultor",columnName:"socialBroker"},{displayName:"Data de cria\xe7\xe3o",columnName:"creation",hasInnerHtml:!0,cell:({creation:_})=>this.convertDate(_),className:"flex-15"},{displayName:"Data de vencimento",columnName:"expiration",hasInnerHtml:!0,cell:({expiration:_})=>this.convertDate(_),className:"flex-15"}],this.actions=[{iconClass:"fas fa-pen",eventName:"edit",tooltip:"Editar cota\xe7\xe3o"},{iconClass:"fas fa-file-alt",eventName:"document",tooltip:"Visualizar cota\xe7\xe3o"},{isMenu:!0,iconClass:"fas fa-ellipsis-v",tooltip:"Mais...",children:[{displayName:"Hist\xf3rico",eventName:"historic"},{displayName:"Baixar",eventName:"download"},{displayName:"Enviar por email",eventName:"email"},{displayName:"Cancelar/Excluir",eventName:"delete"}]}],this.currentPage=0,this.pageSize=10,this.searchQuotation=_=>this.searchTableItem(_,this.quotationService,this.loadQuotationTable,"quotationSearch",this.quotations$,"Clique em criar para adicionar um cota\xe7\xe3o.","Nenhuma cota\xe7\xe3o encontrado.",["quotation"]),this.navbarService.setContentTitle("Cota\xe7\xf5es")}ngOnInit(){this.loadQuotationTable()}loadQuotationTable(e=0,o=10,n="quotation"){this.initTable(this.quotationService,"quotationSearch","getQuotations",this.quotations$,e,o,"atb-search",[n])}get StatusTranslator(){return z.h}openViewQuotationHistoricDialog(e){this.dialog.open(R.M,{height:"100vh",width:"100vw",maxWidth:"none",data:e})}permissionMessage(){this.toast.show("\xc9 necess\xe1rio efetuar o c\xe1lculo da cota\xe7\xe3o antes de executar esta a\xe7\xe3o","",{toastClass:"alert-toast"})}onAction(e){switch(e.action){case"edit":this.editQuotation(e.element);break;case"document":"Saved"===e.element.modification?this.commercialHelper.viewProposal(e.element.id).subscribe():this.permissionMessage();break;case"download":"Saved"===e.element.modification?this.commercialHelper.downloadProposalPdf(e.element.id).subscribe():this.permissionMessage();break;case"email":"Saved"===e.element.modification?this.commercialHelper.sendEmail(e.element.id).subscribe():this.permissionMessage();break;case"delete":this.deleteQuotation(e.element);break;case"historic":this.openViewQuotationHistoricDialog(e.element)}}deleteQuotation(e){var o;const n=e.proponent?"Cancelar":"Excluir",a=e.proponent?"cancelQuotation":"removeQuotation",l=this.modal.open(O.z,{centered:!0});l.componentInstance.list=[`Deseja realmente ${n.toLowerCase()} a cota\xe7\xe3o?`],l.componentInstance.title=`${n} cota\xe7\xe3o`,l.componentInstance.type="alert",l.componentInstance.confirmButtonText="Sim",l.componentInstance.cancelButtonText="N\xe3o",null===(o=l.closed)||void 0===o||o.subscribe(d=>{!0===d&&(this.loading.show(),this.quotationService[a](e.id).pipe((0,L.x)(()=>this.loading.hide())).subscribe(()=>{var c;this.toast.show(`Cota\xe7\xe3o ${e.proponent?"cancelada":"removida"} com sucesso`,"",{toastClass:"success-toast"}),!e.proponent&&1==(null===(c=this.quotations$.getValue().items)||void 0===c?void 0:c.length)&&0!==this.paginator.pageIndex&&--this.paginator.pageIndex,this.loadQuotationTable(10*this.paginator.pageIndex,this.paginator.pageSize)}))})}createQuotation(){this.ngbModal.open(B,{centered:!0,modalDialogClass:"modal-size-period"}).closed.subscribe(o=>{o&&(this.createQuotationLoading=!0,this.quotationService.createQuotation(o).pipe((0,C.q)(1)).subscribe(n=>{this.router.navigate(["./",n.id,h.x[0]],{relativeTo:this.route})},n=>{this.createQuotationLoading=!1},()=>{this.createQuotationLoading=!1}))})}applyFilter(e){}editQuotation(e){this.router.navigate(["./",e.id,h.x[0]],{relativeTo:this.route})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.G),t.Y36(E.I),t.Y36(g.F0),t.Y36(g.gz),t.Y36(f.uU),t.Y36(v.FF),t.Y36(v.FF),t.Y36(j.t2),t.Y36(Q._W),t.Y36(y.J),t.Y36(I.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-quotations"]],features:[t._Bn([y.J]),t.qOj],decls:22,vars:15,consts:[[1,"wrapper","px-0"],[1,"content-title"],[1,"card","table-card","mt-3","min-height"],[1,"w-100","h-75"],[1,"row","w-100","m-0","h-100"],[1,"col-lg-12"],[1,"table-header","pb-3","row","d-flex","align-items-center","justify-content-between"],[1,"col-4","col-lg-6"],[1,"dropdown","d-flex","align-items-center"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-transparent","dropdown-toggle","category-dropdown","pl-0"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],["class","dropdown-item",3,"click",4,"ngFor","ngForOf"],["class","btn btn-outline-primary ml-3",3,"disabled","click",4,"ngxPermissionsOnly"],[1,"col-lg-3"],["src","../../../../../../assets/icons/search.svg","alt","",1,"search-icon"],["type","search","id","atb-search","placeholder","Buscar",1,"form-control","search-input",3,"ngbTypeahead"],["input",""],[3,"dataSource","totalItems","columns","actions","spinner","indexColumn","onPaginator","page","action"],[1,"dropdown-item",3,"click"],[1,"btn","btn-outline-primary","ml-3",3,"disabled","click"],["class","fas fa-plus mr-2",4,"ngIf"],["class","spinner-border spinner-border-sm mr-2 text-primary","role","status",4,"ngIf"],[1,"fas","fa-plus","mr-2"],["role","status",1,"spinner-border","spinner-border-sm","mr-2","text-primary"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Cota\xe7\xf5es criadas"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"button",9),t._uU(11),t.qZA(),t.TgZ(12,"div",10),t.YNc(13,V,2,1,"a",11),t.qZA(),t.YNc(14,K,4,4,"button",12),t.qZA()(),t.TgZ(15,"div",13),t._UZ(16,"img",14)(17,"input",15,16),t.qZA()(),t.TgZ(19,"atb-table",17),t.NdJ("onPaginator",function(a){return o.paginator=a})("page",function(a){return o.loadQuotationTable(a.skip,a.take)})("action",function(a){return o.onAction(a)}),t.ALo(20,"async"),t.ALo(21,"async"),t.qZA()()()()()()),2&e){let n,a;t.xp6(11),t.hij(" ",o.selectedAssetType," "),t.xp6(2),t.Q6J("ngForOf",o.categories),t.xp6(1),t.Q6J("ngxPermissionsOnly",t.DdM(14,tt)),t.xp6(3),t.Q6J("ngbTypeahead",o.searchQuotation),t.xp6(2),t.Q6J("dataSource",null==(n=t.lcZ(20,10,o.quotations$))?null:n.items)("totalItems",null==(a=t.lcZ(21,12,o.quotations$))?null:a.total)("columns",o.displayedColumns)("actions",o.actions)("spinner",o.spinnerTable$)("indexColumn",!0)}},directives:[f.sg,H.gE,f.O5,v.dR,M.oH,G.a],pipes:[f.Ov],styles:[".table-card[_ngcontent-%COMP%]{padding:1rem 0}.table-container[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.1);margin-top:13px}.input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{height:40px}.dropdown-menu-table[_ngcontent-%COMP%]{position:absolute;right:15px}.dropdown-menu-table[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.form-control#category-select[_ngcontent-%COMP%]{font-weight:bolder;font-size:14px}.category-dropdown[_ngcontent-%COMP%]{font-weight:700}a.action-link[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:12px}"]}),i})(),ot=(()=>{class i{canDeactivate(e){return!e.canDeactivate||!0===e.canDeactivate()||"DIALOG_OPEN"!=e.canDeactivate()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),nt=(()=>{class i{constructor(e,o,n){this.navbarService=e,this.route=o,this.commercialController=n,this.quotationId="",this.quotationId=this.route.snapshot.paramMap.get("id"),this.navbarService.setContentTitle("Criar Cota\xe7\xe3o"),this.commercialController.setContentTitle(this.quotationId)}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(E.I),t.Y36(g.gz),t.Y36(y.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-proposal"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},directives:[g.lC],styles:[""]}),i})();var it=s(2071),S=s(8505),at=s(1094),st=s(9093),rt=s(6539),lt=s(829),ct=s(3e3);function dt(i,r){1&i&&(t.TgZ(0,"div",13)(1,"span",14),t._uU(2,"Loading..."),t.qZA()())}function pt(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"div",15)(2,"div",16),t._uU(3,"Question\xe1rio"),t.qZA(),t.TgZ(4,"div",17),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).openSurvey()}),t.TgZ(5,"span",18),t._uU(6,"5 respondidos\xa0"),t.qZA(),t.TgZ(7,"span",16),t._uU(8,"de 75"),t.qZA(),t._UZ(9,"i",19),t.qZA()()()}}function ut(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",2)(1,"span",3),t._uU(2),t.qZA(),t.TgZ(3,"div",4)(4,"div",5)(5,"div",6)(6,"app-assets-table",7),t.NdJ("deleteAsset",function(n){return t.CHM(e),t.oxw().onDeleteAsset(n)})("editAsset",function(n){return t.CHM(e),t.oxw().openAssetsPanel(n)})("openAssetsPanel",function(n){return t.CHM(e),t.oxw().openAssetsPanel(n)})("openServicesPanel",function(n){return t.CHM(e),t.oxw().openServicesPanel(n)}),t.ALo(7,"async"),t.qZA()(),t._UZ(8,"div"),t.YNc(9,dt,3,0,"ng-template",null,8,t.W1O),t.qZA()(),t.YNc(11,pt,10,0,"div",9),t.TgZ(12,"div",10)(13,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().onAction(!1)}),t._uU(14,"Voltar"),t.qZA(),t.TgZ(15,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().onAction(!0)}),t._uU(16,"Pr\xf3ximo"),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(2),t.hij(" ",e.isQuotation?"Cadastrar bens":"Bens cadastrados e question\xe1rio"," "),t.xp6(4),t.Q6J("assetsSet",t.lcZ(7,3,e.assets$)),t.xp6(5),t.Q6J("ngIf",!e.isQuotation)}}let mt=(()=>{class i{constructor(e,o,n){this.route=e,this.dialog=o,this.quotationService=n,this.stepAction=new t.vpe,this.saveAsset=new t.vpe,this.deleteAsset=new t.vpe,this.editAsset=new t.vpe,this.assetsDialogOpen=new t.vpe,this.servicesDialogOpen=new t.vpe,this.assets$=new A.X({})}ngOnInit(){this.quotationId=this.route.snapshot.paramMap.get("id"),this.loadTable(),this.statics$=this.quotationService.getQuotationStatics().pipe((0,C.q)(1),(0,S.b)(e=>this._statics=e))}onAction(e){this.stepAction.emit({goForward:e})}loadTable(){this.quotationService.getAssets(this.quotationId,0,10).pipe((0,C.q)(1)).subscribe(e=>this.assets$.next(e))}openSurvey(){this.dialog.open(rt.v,{height:"100vh",width:"100vw",maxWidth:"none",data:{quotationId:this.quotationId}})}openAssetsPanel(e){this.assetsDialogOpen.emit(!0),this.dialog.open(lt.i,{height:"100vh",width:"100vw",maxWidth:"none",data:{asset:e,quotationId:this.quotationId},closeOnNavigation:!1}).afterClosed().subscribe(n=>{this.assetsDialogOpen.emit(!1),n&&(this.loadTable(),e?this.onEditAsset(n):this.onSaveAsset(n))})}openServicesPanel(e){new Array,this.dialog.open(st.k,{height:"100vh",width:"100vw",maxWidth:"none",closeOnNavigation:!1,data:{selectedAsset:e,quotationId:this.quotationId}}).afterClosed().subscribe(n=>{n&&this.quotationService.putSpecifAutoProduct(this.quotationId,e.id,n).subscribe(()=>this.loadTable())})}onSaveAsset(e){this.saveAsset.emit(e)}onDeleteAsset(e){this.deleteAsset.emit(e)}onEditAsset(e){this.editAsset.emit(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.gz),t.Y36(I.uw),t.Y36(x.G))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-proposal-assets"]],inputs:{show:"show",assets:"assets",isQuotation:"isQuotation"},outputs:{stepAction:"stepAction",saveAsset:"saveAsset",deleteAsset:"deleteAsset",editAsset:"editAsset",assetsDialogOpen:"assetsDialogOpen",servicesDialogOpen:"servicesDialogOpen"},decls:3,vars:1,consts:[["class","wrapper px-0",4,"ngIf"],["toast",""],[1,"wrapper","px-0"],[1,"content-title","mb-3"],[1,"card","table-card"],[1,"w-100","d-flex","align-items-center","justify-content-center"],[1,"w-100"],[3,"assetsSet","deleteAsset","editAsset","openAssetsPanel","openServicesPanel"],["loading",""],[4,"ngIf"],[1,"buttons"],[1,"btn","btn-outline-light-atb","btn-lg",3,"click"],[1,"btn","btn-primary","btn-lg",3,"click"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"],[1,"card","flex-row","p-4","survey-card","mt-4"],[1,"subtitle","bold-txt"],[1,"d-flex","align-items-center","pointer",3,"click"],[1,"text-green-200"],[1,"fas","fa-chevron-right","ml-3"]],template:function(e,o){1&e&&(t.YNc(0,ut,17,5,"div",0),t._UZ(1,"div",null,1)),2&e&&t.Q6J("ngIf",o.show)},directives:[f.O5,ct.v],pipes:[f.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.add-button[_ngcontent-%COMP%]{width:140px}.card[_ngcontent-%COMP%]{min-height:450px;align-items:center;justify-content:center}.no-assets-card[_ngcontent-%COMP%]{min-height:540px}.illustration-container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.buttons[_ngcontent-%COMP%]{margin-top:1.5rem;display:flex;justify-content:space-between}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:156px}.survey-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;min-height:120px}.survey-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}@media screen and (max-width: 768px){.illustration[_ngcontent-%COMP%]{width:220px}}@media screen and (max-height: 850px){.no-assets-card[_ngcontent-%COMP%]{min-height:420px}.no-assets-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px}}"]}),i})();var u=s(3075),w=s(7579),T=s(9646),ht=s(1884),ft=s(1520),N=s(4004),gt=s(590),Z=s(97),F=s(1470),vt=s(2485);const _t=["proponentForm"];function Ct(i,r){1&i&&(t.TgZ(0,"div",32)(1,"span",33),t._uU(2,"Loading..."),t.qZA()())}function bt(i,r){if(1&i&&(t.TgZ(0,"option",34),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.Q6J("value",null==e?null:e.unit),t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function Pt(i,r){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"form",11,12),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw(2).save()}),t.TgZ(3,"span",13),t._uU(4,"Dados pessoais"),t.qZA(),t.TgZ(5,"div",14)(6,"div",15)(7,"div",16)(8,"label",17),t._uU(9,"CPF / CNPJ"),t.qZA(),t._UZ(10,"input",18),t.YNc(11,Ct,3,0,"div",19),t.qZA()()(),t.TgZ(12,"div",14)(13,"div",15)(14,"div",20)(15,"label",21),t._uU(16,"Nome"),t.qZA(),t._UZ(17,"input",22),t.qZA()()(),t.TgZ(18,"span",13),t._uU(19,"Contato"),t.qZA(),t.TgZ(20,"div",14)(21,"div",15)(22,"div",23)(23,"label",24),t._uU(24,"Telefone celular"),t.qZA(),t._UZ(25,"input",25),t.qZA()(),t.TgZ(26,"div",15)(27,"div",23)(28,"label",26),t._uU(29,"E-mail"),t.qZA(),t._UZ(30,"input",27),t.qZA()()(),t.TgZ(31,"div",14)(32,"div",15)(33,"div",20)(34,"label",28),t._uU(35,"UF"),t.qZA(),t.TgZ(36,"select",29)(37,"option",30),t._uU(38," Selecione "),t.qZA(),t.YNc(39,bt,2,2,"option",31),t.qZA()()()()(),t.BQk()}if(2&i){const e=r.ngIf,o=t.oxw(2);t.xp6(1),t.Q6J("formGroup",o.form),t.xp6(6),t.Q6J("ngClass",o.removeDocCss?"remove-is-valid-css":""),t.xp6(4),t.Q6J("ngIf","PENDING"==(null==o.form||null==o.form.controls||null==o.form.controls.document?null:o.form.controls.document.status)),t.xp6(26),t.Q6J("disabled",""!==(null==o.form||null==o.form.value?null:o.form.value.uf)),t.xp6(2),t.Q6J("ngForOf",e)}}function yt(i,r){1&i&&t._UZ(0,"atb-skeleton",35),2&i&&t.Q6J("rows",2)}function St(i,r){1&i&&(t.TgZ(0,"div",36)(1,"div",37)(2,"span",33),t._uU(3,"Loading..."),t.qZA()()())}function Tt(i,r){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"span",2),t._uU(3,"Inserir os dados do proponente"),t.qZA(),t.TgZ(4,"span",3),t._uU(5," Caso o proponente j\xe1 esteja cadastrado, ap\xf3s a inser\xe7\xe3o do CPF/CNPJ, os campos ser\xe3o preenchidos automaticamente. "),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,Pt,40,5,"ng-container",5),t.ALo(8,"async"),t.YNc(9,yt,1,1,"ng-template",null,6,t.W1O),t.YNc(11,St,4,0,"ng-template",null,7,t.W1O),t.qZA(),t.TgZ(13,"div",8)(14,"button",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().stepperAction({direction:"back"})}),t._uU(15," Voltar "),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().stepperAction({direction:"forward"})}),t._uU(17," Pr\xf3ximo "),t.qZA()()(),t.BQk()}if(2&i){const e=t.MAs(10),o=t.oxw();t.xp6(7),t.Q6J("ngIf",t.lcZ(8,2,o.staticFederations$))("ngIfElse",e)}}let J=(()=>{class i{constructor(e,o,n,a,l){this.formBuilder=e,this.quotationService=o,this.route=n,this.toastrService=a,this.modalService=l,this.form=this.formBuilder.group({displayName:["",[u.kI.required,(0,Z.fM)()]],document:["",{validators:[u.kI.required,(0,Z.B5)()],asyncValidators:[this.checkProponentByDocumentNumber()],updateOn:"blur"}],phone:["",[u.kI.required,(0,Z.tH)()]],email:["",[u.kI.required,u.kI.email]],federationUnit:["",u.kI.required],id:[null],addresses:[[]],isLocked:[!1],acceptChangeFederationUnit:[!1]}),this.submitted=!1,this.editingProponent={},this.staticFederations$=new A.X(null),this.loading$=new A.X(!1),this.removeDocCss=!1,this.showStep=!1,this.isLocked=!1,this.formSubmitted=new w.x,this.stepAction=new w.x,this.setStep=new w.x}set _showStep(e){this.showStep=e,this.showStep&&this.setStep.next(0)}set statics(e){e&&this.staticFederations$.next(e.federationUnits)}set _proponent(e){var o,n,a,l,d;e&&(this.proponent=e,e.document&&this.onFederationUnit(),this.form.patchValue({id:e.id}),this.form.patchValue({displayName:e.displayName}),this.form.patchValue({email:(null===(o=e.contacts)||void 0===o?void 0:o.length)?null===(n=e.contacts)||void 0===n?void 0:n.filter(c=>"Email"===c.types[0])[0].contact:null}),this.form.patchValue({phone:(null===(a=e.contacts)||void 0===a?void 0:a.length)?null===(l=e.contacts)||void 0===l?void 0:l.filter(c=>"Mobile"===c.types[0])[0].contact:null}),this.form.patchValue({federationUnit:e.federationUnit}),null===(d=this.form.get("document"))||void 0===d||d.setValue(e.document,{onlySelf:!0,emitEvent:!1}),this.form.patchValue({isLocked:e.isLocked})),this.loading$.next(!1)}ngOnInit(){var e;this.quotationId=null===(e=this.route.parent)||void 0===e?void 0:e.snapshot.paramMap.get("id")}ngOnChanges(){var e,o,n,a;!0===this.form.value.isLocked&&(null===(e=this.form.get("displayName"))||void 0===e||e.disable(),null===(o=this.form.get("phone"))||void 0===o||o.disable(),null===(n=this.form.get("email"))||void 0===n||n.disable(),null===(a=this.form.get("federationUnit"))||void 0===a||a.disable())}onFederationUnit(){var e;null===(e=this.form.get("federationUnit"))||void 0===e||e.valueChanges.pipe((0,ht.x)(),(0,ft.G)()).subscribe(([o,n])=>{var a,l;const d=(c,p=!0)=>{var m;null===(m=this.form.get("federationUnit"))||void 0===m||m.setValue(c,{onlySelf:p,emitEvent:p})};n!==this.proponent.federationUnit?(null===(a=this.form.get("acceptChangeFederationUnit"))||void 0===a?void 0:a.value)||(d(o),this.openChangeFederationUnitModal().subscribe(c=>{var p;null===(p=this.form.get("acceptChangeFederationUnit"))||void 0===p||p.setValue(!!c),c&&d(n,!1)})):null===(l=this.form.get("acceptChangeFederationUnit"))||void 0===l||l.setValue(!1)})}openChangeFederationUnitModal(){const e=this.modalService.open(O.z,{centered:!0});return e.componentInstance.title="Mudan\xe7a de federa\xe7\xe3o",e.componentInstance.type="alert",e.componentInstance.confirmButtonText="Sim",e.componentInstance.cancelButtonText="N\xe3o",e.componentInstance.list=["Essa altera\xe7\xe3o de Estado (UF) ir\xe1 remover os servi\xe7os de todos os bens. Voc\xea deseja continuar?"],e.closed}checkProponentByDocumentNumber(){return e=>{var o,n,a,l,d,c,p,m;return this.form.value.isLocked&&(null===(o=this.form.get("displayName"))||void 0===o||o.enable(),null===(n=this.form.get("displayName"))||void 0===n||n.reset(),null===(a=this.form.get("phone"))||void 0===a||a.enable(),null===(l=this.form.get("phone"))||void 0===l||l.reset(),null===(d=this.form.get("email"))||void 0===d||d.enable(),null===(c=this.form.get("email"))||void 0===c||c.reset(),null===(p=this.form.get("federationUnit"))||void 0===p||p.enable(),null===(m=this.form.get("federationUnit"))||void 0===m||m.reset()),this.form.get("document").setValidators([u.kI.required,(0,Z.B5)()]),e.dirty&&e.valueChanges?this.quotationService.checkProponent(e.value).pipe((0,S.b)(b=>{b&&(this.proponent=b,this.setProponent(b))}),(0,N.U)(b=>null),(0,q.K)(b=>(this.setInvalidDocument(),(0,T.of)([]))),(0,gt.P)()):(0,T.of)(null)}}setInvalidDocument(){this.removeDocCss=!0,this.toastrService.show("O CPF/CNPJ do proponente n\xe3o foi encontrado.","Erro",{toastClass:"alert-toast"})}setProponent(e){var o,n,a,l,d,c,p;this.removeDocCss=!1,!this.submitted&&e&&(console.log(e),this.form.patchValue({displayName:e.displayName,email:null===(o=null==e?void 0:e.contacts)||void 0===o?void 0:o.filter(m=>"Email"===m.types[0])[0].contact,phone:null===(n=null==e?void 0:e.contacts)||void 0===n?void 0:n.filter(m=>"Mobile"===m.types[0])[0].contact,isLocked:e.isLocked,id:e.id}),e.federationUnit&&this.form.patchValue({federationUnit:e.federationUnit}),!0===e.isLocked&&(null===(a=this.form.get("displayName"))||void 0===a||a.disable(),null===(l=this.form.get("phone"))||void 0===l||l.disable(),null===(d=this.form.get("email"))||void 0===d||d.disable(),null===(c=this.form.get("federationUnit"))||void 0===c||c.disable()),(null===(p=this.form.get("document"))||void 0===p?void 0:p.dirty)&&this.toastrService.show("Proponente encontrado.","Oh yes",{toastClass:"success-toast"}))}stepperAction(e){"forward"==e.direction&&(this.save().subscribe(o=>o?this.stepAction.next(e):null),this.validateAllFormFields(this.form)),"back"==e.direction&&this.stepAction.next(e)}save(){if(this.form.invalid&&this.toastrService.show("Formul\xe1rio inv\xe1lido! Verifique os campos e tente novamente!","title",{toastClass:"error-toast"}),this.form.valid){if(!this.form.dirty)return(0,T.of)(!0);this.submitted=!0;const e=this.form.getRawValue();console.log(e);const o={displayName:e.displayName,document:e.document,contacts:[{types:["Email"],contact:e.email.toLowerCase(),description:"Email1"},{types:["Mobile"],contact:e.phone,description:"Mobile1"}],federationUnit:e.federationUnit,id:e.id,addresses:e.addresses,isLocked:e.isLocked};if(this.isLocked)return this.form.dirty?(this.validateAllFormFields(this.form),this.form.markAllAsTouched(),this.quotationService.updateProponent(this.quotationId,o).pipe((0,C.q)(1),(0,N.U)(n=>!!n),(0,S.b)(n=>{n.id&&this.toastrService.show("Proponente editado com sucesso.","Oh yes",{toastClass:"success-toast"})}))):(0,T.of)(!0);if(!this.isLocked)return this.validateAllFormFields(this.form),this.form.markAllAsTouched(),this._proponent=o,""===o.id&&(o.id=void 0),this.quotationService.saveProponent(this.quotationId,o).pipe((0,C.q)(1),(0,N.U)(n=>!!n),(0,S.b)(n=>{n.id&&this.toastrService.show("Proponente cadastrado com sucesso.","Oh yes",{toastClass:"success-toast"})}))}return(0,T.of)(!1)}validateAllFormFields(e){Object.keys(e.controls).forEach(o=>{const n=e.get(o);n instanceof u.NI?n.markAsTouched({onlySelf:!0}):n instanceof u.cw&&this.validateAllFormFields(n)})}markAllAsTouched(e){Object.values(e.controls).forEach(o=>{o.markAsTouched(),o.controls&&this.markAllAsTouched(o)})}saveProponent(e){}markFormGroupTouched(e){Object.values(e.controls).forEach(o=>{o.markAsTouched(),o.controls&&this.markFormGroupTouched(o)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.qu),t.Y36(x.G),t.Y36(g.gz),t.Y36(Q._W),t.Y36(v.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-proponent-register"]],viewQuery:function(e,o){if(1&e&&t.Gf(_t,5),2&e){let n;t.iGM(n=t.CRH())&&(o.formRef=n.first)}},inputs:{_showStep:["showStep","_showStep"],statics:"statics",_proponent:["proponent","_proponent"]},outputs:{formSubmitted:"formSubmitted",stepAction:"stepAction",setStep:"setStep"},features:[t.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[1,"wrapper","container-fluid","px-0"],[1,"content-title"],[1,"small","text-gray-300","mb-3"],[1,"card"],[4,"ngIf","ngIfElse"],["loading2",""],["loading",""],[1,"buttons"],["type","button",1,"btn","btn-outline-light-atb","btn-lg",3,"click"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],["id","proponent-form",1,"proponent-form",3,"formGroup","ngSubmit"],["proponentForm","ngForm"],[1,"medium-txt"],[1,"row"],[1,"col-lg-4"],[1,"form-group",3,"ngClass"],["for","cpfCnpjInput",1,"text"],["type","text","id","cpfCnpjInput","autocomplete","off","mask","000.000.000-00||00.000.000/0000-00","formControlName","document",1,"form-control"],["class","ml-3 spinner-border text-primary input-loading","role","status",4,"ngIf"],[1,"form-group"],["for","nameInput",1,"text"],["type","text","id","nameInput","autocomplete","off","formControlName","displayName",1,"form-control"],[1,"form-group","remove-is-valid-css"],["for","phoneInput",1,"small"],["mask","(00) 0 0000-0000","type","text","id","phoneInput","autocomplete","off","formControlName","phone",1,"form-control"],["for","emailInput",1,"small"],["type","email","id","emailInput","autocomplete","off","formControlName","email",1,"form-control",2,"text-transform","lowercase"],["for","federationUnit",1,"small"],["formControlName","federationUnit",1,"form-control"],["value","",3,"disabled"],[3,"value",4,"ngFor","ngForOf"],["role","status",1,"ml-3","spinner-border","text-primary","input-loading"],[1,"sr-only"],[3,"value"],["type","form",3,"rows"],[1,"d-flex","justify-content-center","w-100","align-items-center","h-100"],["role","status",1,"spinner-border","text-primary"]],template:function(e,o){1&e&&t.YNc(0,Tt,18,4,"ng-container",0),2&e&&t.Q6J("ngIf",o.showStep)},directives:[f.O5,u._Y,u.JL,u.sg,M.MU,M.HK,f.mk,F.hx,u.Fj,M.oH,u.JJ,u.u,u.EJ,u.YN,u.Kr,f.sg,vt.a],pipes:[f.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.proponent-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly}@media screen and (max-width: 768px){.proponent-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%;max-width:auto}}.buttons[_ngcontent-%COMP%]{margin-top:1.5rem;display:flex;justify-content:space-between}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:156px}.card[_ngcontent-%COMP%]{padding:2rem 2.5rem}@media screen and (max-width: 1366px){.card[_ngcontent-%COMP%]{padding:1.5rem 2.5rem}}"]}),i})();var At=s(2178),xt=s(8004),Mt=s(9694);const Ot=[{path:"",component:et},{path:":id",data:{title:"Criar cota\xe7\xe3o"},component:nt,children:[{path:"finalizar",component:it.E},{path:":step",component:(()=>{class i{constructor(e,o,n,a,l,d,c){var p,m;this.router=e,this.route=o,this.quotationService=n,this.dialog=a,this.commercialFacade=l,this.toastr=d,this.cd=c,this.currentStep=h.t.Proponent,this.statics$=new P.y,this.proponent$=new P.y,this.participation$=new P.y,this.isEditing=!1,this.steps=[{index:h.t.Proponent,label:"Proponente"},{index:h.t.Assets,label:"Cadastrar bens"},{index:h.t.Calculate,label:"Gerar proposta"}],this.calculatePanelData$=new P.y,this.quotationId=null===(p=this.route.parent)||void 0===p?void 0:p.snapshot.paramMap.get("id"),this.currentStep=Number(h.x[null===(m=this.route)||void 0===m?void 0:m.snapshot.paramMap.get("step")])}get installment$(){return this.commercialFacade.installment$}get QuotationSteps(){return h.t}get assetsTableBS$(){return this.commercialFacade.assetsTableBS$}get calculateTableBS$(){return this.commercialFacade.calculateTableBS$}get calculateEvents$(){return this.commercialFacade.calculateEvents$}ngOnInit(){}setStep(e){switch(e){case this.QuotationSteps.Proponent:this.statics$=this.quotationService.getQuotationStatics(),this.quotationId&&(this.isEditing=!0,this.setProponentOnEdit());break;case this.QuotationSteps.Calculate:this.statics$=this.quotationService.getQuotationStatics(),this.calculatePanelData$=this.commercialFacade.getQuotationFinalizationData(this.quotationId),this.participation$=this.commercialFacade.getQuotationParticipationData(this.quotationId),this.loadCalculateTable(this.quotationId,0,10)}}setProponentOnEdit(){this.proponent$=this.quotationService.getProponent(this.quotationId).pipe((0,C.q)(1),(0,S.b)(e=>this._proponent=e))}loadAssetsTable(e=this.quotationId,o=0,n=10){this.commercialFacade.loadAssetsRegisterTable(e,o,n).subscribe()}loadCalculateTable(e=this.quotationId,o=0,n=10){this.commercialFacade.loadFinalizationTable(e,o,n).subscribe()}changeStep(e){if(e.clickedStep>=0)return this.currentStep==h.t.Proponent?void this.proponentComponent.save().pipe((0,C.q)(1)).subscribe(n=>{n&&(this.currentStep=e.clickedStep,this.router.navigate(["../",h.x[this.currentStep]],{relativeTo:this.route}))}):(this.currentStep=e.clickedStep,this.router.navigate(["../",h.x[this.currentStep]],{relativeTo:this.route}),void this.cd.detectChanges());if("forward"==e.direction)return this.currentStep++,this.router.navigate(["../",h.x[this.currentStep]],{relativeTo:this.route}),void this.cd.detectChanges();if("back"==e.direction){if(this.currentStep!=h.t.Proponent)return this.currentStep--,void this.router.navigate(["../",h.x[this.currentStep]],{relativeTo:this.route});this.router.navigate(["../../app/comercial/cotacoes"])}}canDeactivate(){return!(this.currentStep==h.t.Proponent&&!this._proponent)&&(!(this.dialog.openDialogs.length>0)||(this.dialog.closeAll(),history.pushState(null,null,location.href),"DIALOG_OPEN"))}calculateQuotation(e){this.commercialFacade.calculateQuotation(e,this.quotationId).subscribe()}finalizeQuotation(e){this.quotationService.getQuotationFinalization(this.quotationId).subscribe(o=>{"Saved"==o.status?this.router.navigate(["../finalizar"],{relativeTo:this.route}):this.toastr.show("\xc9 necess\xe1rio efetuar o c\xe1lculo antes de finalizar a cota\xe7\xe3o.","Aten\xe7\xe3o!",{toastClass:"alert-toast"})})}ngOnDestroy(){}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.F0),t.Y36(g.gz),t.Y36(x.G),t.Y36(I.uw),t.Y36(y.J),t.Y36(Q._W),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-quotation-steps"]],viewQuery:function(e,o){if(1&e&&(t.Gf(J,5),t.Gf(mt,5)),2&e){let n;t.iGM(n=t.CRH())&&(o.proponentComponent=n.first),t.iGM(n=t.CRH())&&(o.assetsComponent=n.first)}},features:[t._Bn([y.J])],decls:9,vars:26,consts:[[1,"h-100"],[3,"steps","currentStep","stepClicked"],[3,"showStep","statics","proponent","stepAction","setStep"],[3,"showStep","assetsTableBS$","loadAssetsTable$","stepAction"],[3,"quotationId","showStep","calculateTableBS$","calculateEvents","participation$","statics$","installment","calculatePanelData$","loadCalculateTable$","calculate","stepAction","finalize","setStep"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"app-stepper",1),t.NdJ("stepClicked",function(a){return o.changeStep(a)}),t.qZA(),t.TgZ(2,"app-proponent-register",2),t.NdJ("stepAction",function(a){return o.changeStep(a)})("setStep",function(a){return o.setStep(a)}),t.ALo(3,"async"),t.ALo(4,"async"),t.qZA(),t.TgZ(5,"app-assets-register",3),t.NdJ("loadAssetsTable$",function(a){return o.loadAssetsTable(o.quotationId,null==a?null:a.skip,null==a?null:a.take)})("stepAction",function(a){return o.changeStep(a)}),t.qZA(),t.TgZ(6,"app-proposal-finalize",4),t.NdJ("loadCalculateTable$",function(a){return o.loadCalculateTable(o.quotationId,null==a?null:a.skip,null==a?null:a.take)})("calculate",function(a){return o.calculateQuotation(a)})("stepAction",function(a){return o.changeStep(a)})("finalize",function(a){return o.finalizeQuotation(a)})("setStep",function(a){return o.setStep(a)}),t.ALo(7,"async"),t.ALo(8,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("steps",o.steps)("currentStep",o.currentStep),t.xp6(1),t.Q6J("@fadeInAnim",o.currentStep===o.QuotationSteps.Proponent)("showStep",o.currentStep===o.QuotationSteps.Proponent)("statics",t.lcZ(3,18,o.statics$))("proponent",t.lcZ(4,20,o.proponent$)),t.xp6(3),t.Q6J("@fadeInAnim",o.currentStep===o.QuotationSteps.Assets)("showStep",o.currentStep===o.QuotationSteps.Assets)("assetsTableBS$",o.assetsTableBS$),t.xp6(1),t.Q6J("@fadeInAnim",o.currentStep===o.QuotationSteps.Calculate)("quotationId",o.quotationId)("showStep",o.currentStep===o.QuotationSteps.Calculate)("calculateTableBS$",o.calculateTableBS$)("calculateEvents",t.lcZ(7,22,o.calculateEvents$))("participation$",o.participation$)("statics$",o.statics$)("installment",t.lcZ(8,24,o.installment$))("calculatePanelData$",o.calculatePanelData$))},directives:[At.v,J,xt.P,Mt.Q],pipes:[f.Ov],styles:[""],data:{animation:[at.Gs]}}),i})(),canDeactivate:[k,ot]}]}];let Qt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.Bz.forChild(Ot)],g.Bz]}),i})();var $=s(7622),It=s(8279),wt=s(7446),Nt=s(6087),Ft=s(4847),Ut=s(645),qt=s(1170),Dt=s(6154),Et=s(1660),Jt=s(1125),$t=s(7496),kt=s(4107),Lt=s(2145),Yt=s(4036),zt=s(3495);let Bt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[],imports:[[f.ez,$.m,v.lQ,v.ZS,zt.U$,Lt.WN,kt.LD,Yt.kW,F.yI]]}),i})();var Rt=s(3421),jt=s(664),Ht=s(7335);let Gt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,Qt,Rt.T,$.m,It.p0,Nt.TU,wt.p9,Ft.JX,Ut.b,qt.s,Bt,Dt.Z,Et.e,Jt.To,$t.W,F.yI,v.ZS,jt.CommercialModule,Ht.S]]}),i})()}}]);