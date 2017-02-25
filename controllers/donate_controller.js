var donateapp=angular.module("Donate_app",['720kb.socialshare']);
donateapp.controller("Donate_controller",['$scope','Socialshare',function($scope,Socialshare){
    $scope.screen_width=window.innerWidth;
    $scope.screen_height= window.innerHeight;
    $scope.loadfb=function(){
        Socialshare.share({
            'provider': 'facebook',
            'attrs': {
                'socialshare-text':"Ya i DOnated",
                'socialshareUrl': 'https://www.loktra.com/'
            }
        });
    }
    $scope.loadtwitter=function(){
        Socialshare.share({
            'provider': 'twitter',
            'attrs': {
                'socialshare-text':'Ya I shared!'
            }
        });
    }
}]);