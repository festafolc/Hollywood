let app = new function() {
    this.element = document.getElementById('usersTable');
    this.users = [];
  
    this.create = function () {
        function User (name, email){
            this.name = name;
            this.email = email;
        }

        let userName = document.getElementById('setUser').value;
        let userEmail = document.getElementById('setEmail').value;
        // let user = userName.value;
        // let email = userEmail.value;

        newUser = new User(userName, userEmail);
  
        if (userName && userEmail) {
            this.users.push(newUser);
            userName.value = '';
            userEmail.value = '';
            this.read();
        }
    };

    this.read = function() {
      let data = '';
      if (this.users.length > 0) {
        for (i = 0; i < this.users.length; i++) {
          data += '<tr>';
          data += '<th>Username</th>';
          data += '<th>Email</th>';
          data += '</tr>';
          data += '<tr>';
          data += '<td>' + (i+1) + ". " + this.name + ' ' +'</td>';
          data += '<td>' + ' ' + this.email + '</td>';
          data += '<td><button onclick="app.update(' + i + ' ' + ')"  class="btn btn-warning">Update</button></td>';
          data += '<td><button onclick="app.delete(' + i + ' ' + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
          data += '<tr>';
          data += '<td><hr></td>';
          data += '<td><hr></td>';
          data += '<td><hr></td>';
          data += '<td><hr></td>';
          data += '</tr>';
        }
      }
      this.count(this.users.length);
      return this.element.innerHTML = data;
    };
  
    this.update = function (item) {
      let element = document.getElementById('updateUser');
      element.value = this.users[item];
      document.getElementById('usersBox').style.display = 'block';
      self = this;
      document.getElementById('saveUpdate').onsubmit = function() {
        let user = element.value;
        if (user) {
          self.users.splice(item, 1, user.trim());
          self.read();
          CloseInput();
        }
      }
    };
  
    this.delete = function (item) {
      this.users.splice(item, 1);
      this.read();
    };
  
    this.count = function(data) {
      let element = document.getElementById('counter');
      let name = 'Users';
  
      if (data) {
          if(data ==1){
              name = 'User'
          }
          element.innerHTML = data + ' ' + name ;
      }
      else {
        element.innerHTML = 'No ' + name;
      }
    };
  
  }
  
app.read();

function CloseInput() {
document.getElementById('usersBox').style.display = 'none';
}
  