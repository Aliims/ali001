'use strict';

(function() {

class AdminController {
  constructor(User, Modal) {
    // Use the User $resource to fetch all users
    this.users = User.query();

    // Our callback function is called if/when the delete modal is confirmed
    this.delete = Modal.confirm.delete(user => {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    });

  }

  // delete(user) {
  //   user.$remove();
  //   this.users.splice(this.users.indexOf(user), 1);
  // }
}

angular.module('ali001App.admin')
  .controller('AdminController', AdminController);

})();