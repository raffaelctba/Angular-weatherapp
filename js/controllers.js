'use strict';

weatherApp.controller('HomeController', function($scope) {
    
  });
  weatherApp.controller('AboutController', function($scope) {
   
  });

  weatherApp.controller('customersCtrl', ['$scope', 'dataFactory', 
        function ($scope, dataFactory) {
    $scope.status;
    $scope.getWeather;
    $scope.date;
    getDate();
    getWeather();


    function getWeather() {
        $scope.getWeather = dataFactory.getWeather();   
        var index = 0;
						while (index < $scope.getWeather.length){
							var tem  = Math.round(parseInt($scope.getWeather[index].low));
							if(tem<=50){
								$scope.getWeather[index].img = "image/binhthuong.png"
							}
							if(tem>50&&tem<62){
								$scope.getWeather[index].img  = "image/mua.png"
							}
							if(tem>62){
								$scope.getWeather[index].img  = "image/nang.jpg"
							}
							index++;
						}  
    } 
    function getDate() {
        $scope.date = dataFactory.getWeather()[0].date;     
    } 
      $scope.myOrderBy = "";
      $scope.$watch('sort', function(newValue){
      	    if(newValue===undefined){

      	    }else{
      	    	$scope.myOrderBy = newValue;
      	    }
      });


       

}]);

  weatherApp.controller('ExampleController', ['$scope', function($scope) {
      $scope.color = {
        name: "f"
      };
       $scope.fc = "c";
       $scope.old = "f";
      setInterval(function(){ ahk(); }, 100);
    function ahk(){
    	if($scope.old!=$scope.color.name){
    				if($scope.color.name=="c"){
						var index = 0;
						while (index < $scope.getWeather.length){
							$scope.getWeather[index].low = Math.round((parseInt($scope.getWeather[index].low) - 32 )/1.8);
							$scope.getWeather[index].high = Math.round(( parseInt($scope.getWeather[index].high) - 32 )/ 1.8);
							index++;
						}
					}
					if($scope.color.name=="f"){
		      	    	var index = 0;
						while (index < $scope.getWeather.length){
						    $scope.getWeather[index].low = Math.round(( parseInt($scope.getWeather[index].low) *1.8 ) +32);
						    $scope.getWeather[index].high = Math.round(( parseInt($scope.getWeather[index].high) *1.8 ) +32);
						    index++;
						}
      	   		 }
      	   		 $scope.old = $scope.color.name;
    	}
    }
       			
       
    }]);
