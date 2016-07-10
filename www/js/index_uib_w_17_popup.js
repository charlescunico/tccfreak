function uib_w_17_popup_controller($scope, $ionicPopup) {

  // A confirm dialog
  $scope.show = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Sair do Aplicativo',
      template: 'Você tem certeza que deseja sair?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('Saiu');
        navigator.app.exitApp();
      } else {
        console.log('Não saiu');
      }
    });
  };

};