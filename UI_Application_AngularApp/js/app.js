var App = angular.module('App', []);

App.controller('CostCheckController', function ($scope, $http) {
    // $http.get('mockData.json')
    //     .then(function (res) {
    //         console.log(res);
    //         //$scope.records = res.data;
    //         //console.log($scope.records);
    //     });
    $scope.update = false;
    $scope.newEntry = false;
    $scope.updateId = "";
    $scope.addNewForm = false;
    $scope.showAddbtn = true;
    $scope.cancelBtn = false;
    $scope.hideForm = true;
    $scope.data = dataJSON;
    //$scope.frmElem = document.forms['employeeForm'].querySelectorAll('input');
    $scope.recordIdCounter = dataJSON.records.length;

    $scope.addNewEntry = function(){
        $scope.addNewForm = true;
        $scope.newEntry = true;
        $scope.showAddbtn = false;
        $scope.cancelBtn = true;
    }

    $scope.hideForm = function(){
        $scope.addNewForm = false;
    }

    $scope.addNewDetails = function (rawData) {
        $scope.recordIdCounter++;
        rawData.recordId = $scope.recordIdCounter
        $scope.data.records.unshift(rawData);
    }

    $scope.editExistingDetails = function (rawData) {
        $scope.xData = rawData;
        $scope.update = true;
        $scope.addNewForm = true;
        $scope.newEntry = false;
        $scope.showAddbtn = false;
        $scope.cancelBtn = true;
        $scope.updateId = rawData.recordId;
        //console.log($scope.updateId);
        document.body.scrollTop = 0;

        var elements = document.forms['employeeForm'].elements;

        // console.log(elements.length);

        // for(var i=0 ; i < elements.length; i++){
        //     elements[i].setAttribute("disabled", true);
        // }


    }

    $scope.updateDetails = function (rawData) {
        console.log($scope.updateId);
        for (i = 0; i < $scope.data.records.length; i++) {
            if ($scope.data.records[i].recordId == $scope.updateId) {
                $scope.data.records[i] = rawData;
            }
        }
        $scope.xData = {};
        $scope.update = false;
        $scope.newEntry = false;
        $scope.showAddbtn = true;
        $scope.cancelBtn = true;
    }

    $scope.deleteDetails = function (selectedIndex) {
        $scope.data.records.splice(selectedIndex, 1);
    }

});