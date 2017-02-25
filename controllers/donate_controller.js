var donateapp=angular.module("Donate_app",['720kb.socialshare']);
donateapp.controller("Donate_controller",['$scope','Socialshare',function($scope,Socialshare){
    $scope.totalamount=1000;
    $scope.donatedamount=0;
    $scope.loadfb=function(){
        Socialshare.share({
            'provider': 'facebook',
            'attrs': {
                'socialshareText':'Yay, I donated!',
                'socialshareUrl': 'https://www.loktra.com/'
            }
        });
    }
    $scope.loadtwitter=function(){
        Socialshare.share({
            'provider': 'twitter',
            'attrs': {
                'socialshareText':'Yay, I donated!'
            }
        });
    }
    $scope.givenow=function($amt){
        if($amt){
            $scope.donatedamount=$scope.donatedamount + $amt;
            if($scope.donatedamount<=$scope.totalamount){
                $scope.changeslider($scope.donatedamount,$scope.totalamount);
                $scope.amount="";
            }
        }
    }
    $scope.changeslider=function($value,$total){
        for(i=0;i<$value;i++){
            returnvalue=(i*100)/$total;
            $scope.slidervalue=returnvalue;
        }
    }
    $scope.checkamount=function(){
        if(!$scope.amount){
            $scope.amount="";
            $scope.invalidflag=true;
        }
        else{
            $scope.invalidflag=false;
        }
    }
}]);