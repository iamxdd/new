/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("addChangeUrlCtrl",["$scope","$http","ngDialog","PagerExtends","layerAlert","serverUrls","PcService",function(a,b,c,d,e,f,g){a.fieldsList=[{name:"NewUrl",nameDisplay:"原地址",editor:"normal",required:!0,value:""},{name:"OldUrl",nameDisplay:"中转地址",editor:"normal",required:!0,value:""},{name:"Name",nameDisplay:"名称",editor:"normal",required:!1,value:""},{name:"Descript",nameDisplay:"描述",editor:"normal",required:!1,value:""}];var h="http://192.168.1.101:8026/api/addchangeurl";a.formSubmit=function(){g.formSubmit(a,!0,a.fieldsList,h)}}]);