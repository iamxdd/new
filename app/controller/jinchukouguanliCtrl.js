App.controller('jinchukouguanliCtrl', ['$scope', '$http', 'ngDialog', 'PagerExtends', 'layerAlert', function($scope, $http, ngDialog, PagerExtends, layerAlert) {
	$scope.list = [];

	//新增管理
	$scope.creatOne = function() {
		ngDialog.openConfirm({
			template: 'createOne',
			controller: 'jinchukouguanliCtrl',
			className: 'ngdialog-theme-default',
			//closeByEscape: true,
			closeByDocument: false
		});
	};
}]);