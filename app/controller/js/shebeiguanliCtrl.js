/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("shebeiguanliCtrl",["$scope","$rootScope","$http","ngDialog","PagerExtends","layerAlert","serverUrls","PcService","$q","$filter",function(a,b,c,d,e,f,g,h,i,j){a.newnavTabList=[{Id:1,Name:"领用记录",Active:!0},{Id:2,Name:"归还记录",Active:!1},{Id:3,Name:"设备管理",Active:!1}],a.devlist=[],a.selectTab=a.newnavTabList[0],a.newDev={TitleText:"新增领取设备记录",DevName:"",DevId:"",LeadName:"",LeadPhone:"",Describe:"",Remark:""},a.newDevName=a.newDevId=a.newEquipeDevName=a.newEquipeDevId=[{Id:0,Name:"请选择"}],a.DevnewSelect=[{Name:"可使用",Id:1},{Name:"使用中",Id:2},{Name:"已损坏",Id:3}],a.BackSelect=[{value:"全部",index:0},{value:"待归还",index:1},{value:"已归还",index:2}],a.DevSelect=[{value:"全部",index:0},{value:"可使用",index:1},{value:"使用中",index:2},{value:"已损坏",index:3}],a.newEquipment={TitleTextTwo:"新增入库设备记录",DevName:"",DevCode:"",DevId:"",Describe:"",Remark:""},a.newBack={TitleTextBack:"归还记录"},a.BackId=0,a.fieldsList=[{name:"DevName",nameDisplay:"设备名称",editor:"select",required:!0,value:a.newDevName[0].Id,opts:a.newDevName,originValue:0},{name:"DevId",nameDisplay:"设备号",editor:"select",required:!0,value:a.newDevId[0].Id,opts:a.newDevId,originValue:0,editable:!0},{name:"LeadName",nameDisplay:"领用人",editor:"normal",required:!0,value:"",originValue:""},{name:"LeadPhone",nameDisplay:"领用人电话",editor:"normal",required:!1,value:"",originValue:""},{editor:"textarea",name:"Describe",nameDisplay:"描述",required:!1,value:"",originValue:""},{editor:"textarea",name:"Remark",nameDisplay:"备注",required:!1,value:"",originValue:""}],a.fieldsListBack=[{name:"BackEquipmenName",nameDisplay:"设备名称",editor:"normal",required:!0,value:"",editable:!0,originValue:"",isState:!1,BackStateValue:"已归还"},{name:"BackEquipmenId",nameDisplay:"设备号",editor:"normal",required:!0,value:"",editable:!0,originValue:""},{name:"BackName",nameDisplay:"归还人",editor:"normal",required:!0,editable:!0,value:"",originValue:""},{name:"BackPhone",nameDisplay:"归还人电话",editor:"normal",required:!1,value:"",editable:!0,originValue:""},{editor:"textarea",name:"Describe",nameDisplay:"描述",required:!1,value:"",editable:!0,originValue:""},{editor:"textarea",name:"Remark",nameDisplay:"备注",required:!1,value:"",originValue:""}],a.fieldsListTwo=[{name:"DevName",nameDisplay:"设备名称",editor:"normal",required:!0,value:"",originValue:""},{name:"DevCode",nameDisplay:"设备状态",editor:"select",required:!0,value:a.DevnewSelect[0].Id,opts:a.DevnewSelect,originValue:0},{name:"DevId",nameDisplay:"设备号",editor:"normal",required:!0,value:"",originValue:""},{editor:"textarea",name:"Describe",nameDisplay:"描述",required:!1,value:"",originValue:""},{editor:"textarea",name:"Remark",nameDisplay:"备注",required:!1,value:"",originValue:""}],a.searchOption={value:"",state:0};var k=function(b,c){e.regListSpecifyPage(a,{apiUrl:b,params:c,success:function(b){a.devlist=b,3===a.selectTab.Id?a.devlist.map(function(a){1===a.State?a.State="可使用":2===a.State?a.State="使用中":3===a.State&&(a.State="已损坏")}):2===a.selectTab.Id&&a.devlist.map(function(a){1===a.RecordState?a.RecordState="待归还":2===a.RecordState&&(a.RecordState="已归还")})},error:function(a){f.autoclose(a)}})};a.devInit=function(b){var c={},d="";c=a.searchOption,1===b||2===b?(d=g.equipmentrecordList,console.log("id=>",c)):3===b&&(d=g.equipmentList,console.log("data3=>",c)),k(d,c)},a.devInit(a.newnavTabList[0].Id),a.newchecked=function(b){a.selectTab=b,a.newnavTabList.forEach(function(a,c){a.Name===b.Name?a.Active=!0:a.Active=!1}),a.devInit(a.selectTab.Id)};var l=function(e,g,i){a.ngDialogPromise=c({headers:b.pHeader,method:g,url:e,data:i}).success(function(b){var c=b.State.Code,e=b.State.Message;0===c?(a.devInit(a.selectTab.Id),setTimeout(function(){d.closeAll()},1600)):f.autoclose(e)}).error(function(a){f.autoclose(h.errorResult(a))})},m=function(d,e,g){a.ngDialogPromise=c({headers:b.pHeader,method:e,url:d,data:g}).success(function(b){var c=b.State.Code,d=b.State.Message,e=b.Content,g=[],h=[];console.log("content=>",e),e.map(function(a){g.push({Id:a.DeviceNumber,Name:a.Name}),h.push({Id:a.Name,Name:a.DeviceNumber})}),0===c?(a.fieldsList[0].value=g[0].Id,a.fieldsList[0].opts=g,a.fieldsList[1].value=h[0].Id,a.fieldsList[1].opts=h):f.autoclose(d)}).error(function(a){f.autoclose(h.errorResult(a))})},n=function(b){var c="",d={},e="post",f=new Date;switch(b){case 1:console.log("sssssssssss",b);break;case 2:c=g.addequipmentrecord,d={Id:a.BackId,EquipmentId:a.fieldsListBack[1].value,ResidentStatus:a.fieldsListBack[2].value,Phone:a.fieldsListBack[3].value,UsingTime:j("date")(f,"yyyy-MM-dd HH:mm"),Describe:a.fieldsListBack[4].value,Remarks:a.fieldsListBack[5].value,RecordState:2},l(c,e,d);break;case 3:c=g.addEquipment,d={Name:a.fieldsListTwo[0].value,DeviceNumber:a.fieldsListTwo[2].value,Describe:a.fieldsListTwo[3].value,Remarks:a.fieldsListTwo[4].value,State:a.fieldsListTwo[1].value},l(c,e,d)}};a.creatOne=function(b){if(d.openConfirm({template:"createOne",scope:a,controller:["$scope",function(a){a.formSubmit=function(){n(b)}}],className:"ngdialog-theme-default",closeByDocument:!1,width:600}),1===b){var c=g.equipmentall,e={},f="get";m(c,f,e)}},a.BackF=function(b){console.log("xxxxxxxxx",b),a.BackId=b.Id,a.creatOne(a.selectTab.Id,b),a.fieldsListBack[0].value=b.RecipientsNickName,a.fieldsListBack[1].value=b.EquipmentId,a.fieldsListBack[2].value=b.RecipientsNickName,a.fieldsListBack[3].value=b.Phone,a.fieldsListBack[4].value=b.Describe}}]);