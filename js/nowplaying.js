//创建正在热映的模块和一个正在热映的控制器名
angular.module("movieApp.nowplayingCtrl",[])
    .controller("nowplayingCtrl",["$scope","$http",function($scope,$http){
        //1.创建一个电影列表的属性
        $scope.movie=[];
        //2.通过ajax请求data.json文件，获取数据赋值给movie属性
        $http({url:'data.json'}).success(function(data){
            $scope.movie=data;
        })
    }])
