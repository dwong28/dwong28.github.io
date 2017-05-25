/**
 * Created by Dennis Wong on 5/18/2017.
 */
(function () {
    var app = angular.module('mainPage', []);

    app.controller('TabController', function() {
      this.tab = 0;
      this.isSet = function(newTab) {
          return this.tab === newTab;
      }

      this.setTab = function(newTab) {
          this.tab = newTab;
      }
    })
})();