/*!qinglongWeb-1.0.0 2017-11-01*/
App.controller("changzhurenkouCtrl",["$scope","$http","ngDialog","PagerExtends","layerAlert",function(a,b,c,d,e){a.list=[{},{},{}],a.creatOne=function(){c.openConfirm({template:"createOne",controller:"changzhurenkouCtrl",className:"ngdialog-theme-default",closeByDocument:!1})},a.fieldsList=[{name:"Phone",nameDisplay:"栋座",editor:"select",required:!0,value:""},{name:"Describe",nameDisplay:"单元",editor:"select",required:!0,value:""},{name:"Describe",nameDisplay:"楼层",editor:"select",required:!0,value:""},{name:"Describe",nameDisplay:"房号",editor:"select",required:!0,value:""}]}]);