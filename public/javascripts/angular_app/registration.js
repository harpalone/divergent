var app = angular.module('Registration', []);
app.directive("repeatPassword", function() {
  return {
      require: "ngModel",
      link: function(scope, elem, attrs, ctrl) {
        var otherInput = elem.inheritedData("$formController")[attrs.repeatPassword];

        ctrl.$parsers.push(function(value) {
            if(value === otherInput.$viewValue) {
              ctrl.$setValidity("repeat", true);
              return value;
          }
          ctrl.$setValidity("repeat", false);
        });

        otherInput.$parsers.push(function(value) {
          ctrl.$setValidity("repeat", value === ctrl.$viewValue);
          return value;
        });
      }
  };
});

app.controller('RegistrationController', function($scope, $http) {
  $scope.user = {};
  $scope.user.name = 'harpal';
  $scope.user.email = 'harpal@yopmail.com';
  $scope.user.password = 'asdfasdf';
  $scope.user.confirm_password = 'asdfsadf';
  $scope.submit_form = function() {
    $scope.notice = 'Sumitting form'
    //prepare request
    var request = {
      method: 'POST',
      url: '/users/create',
      data: $scope.user
    }
    console.log('request prepared');

    $http(request)
      .then(function successCallback(res) {
        console.log('success callback run');
        if(res.data.status == 'success'){
          $scope.notice = res.data.message;
        }
        else{
          $scope.notice = res.data.message;
        }
      },function errorCallback(res) {
        console.log(res);
        $scope.notice = 'Something wrong';
      }
    );

  } 
});
