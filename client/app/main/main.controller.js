'use strict';

(function() {

class MainController {

  // constructor($http, $scope, socket, $uibModal) {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    // this.messages = [];


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
      // socket.unsyncUpdates('message');
    });

    if (document.body.getElementsByClassName('triangle-bg')[0]) {
      var element = document.body.getElementsByClassName('triangle-bg')[0];
      var pattern_height = element.clientHeight;
      var pattern_width = element.clientWidth;
      var pattern_x_color = 'Blues';
      var pattern_cell_size = Math.floor(Math.random() * 20) + 30;
      var pattern = Trianglify({
        height: pattern_height,
        width: pattern_width,
        x_colors: pattern_x_color,
        cell_size: pattern_cell_size,
      });
      element.setAttribute('style', 'background-image: url('+pattern.canvas().toDataURL("image/png")+')');
    }
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
    // this.$http.get('/api/messages').then(response => {
    //   this.messages = response.data;
    //   this.socket.syncUpdates('message', this.messages);
    // });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }
  // addMessage() {
  //   if (this.newMessage) {
  //     this.$http.post('/api/messages', { name: this.newMessage });
  //     this.newMessage = '';
  //   }
  // }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
  // deleteMessage(message) {
  //   this.$http.delete('/api/messages/' + message._id);
  // }

  // open() {
  //   console.log("open clicked!");
  //   this.showModal = true;
  // }
  // ok() {
  //   this.showModal = false;
  // }
  // cancel() {
  //   this.showModal = false;
  // }

}

angular.module('ali001App')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
