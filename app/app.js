'use strict';

var app = angular.module('myApp', []);

app.service('textFormatService', function () {
    this.titleCase = function (input) {
        return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    this.camelCase = function (input) {
        return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    };
    this.dashCase = function (input) {
        return input.replace(/\s/g, '-');
    };
});

app.controller("controller", function (textFormatService) {
    self = this;
    self.kurt = {firstName: "Kurt", lastName: "Wonnegut"};

    self.case = function () {
        self.output1 = textFormatService.titleCase(self.input1);
        self.output2 = textFormatService.camelCase(self.input1);
        self.output3 = textFormatService.dashCase(self.input1);
    };

});



app.directive('directive', function () {
    return {
        restrict: 'EA',
        templateUrl: "template.html"
    };
});

app.filter('person', function () {
    return function (input) {
        return input.lastName + ", " + input.firstName;
    };
});

app.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});
