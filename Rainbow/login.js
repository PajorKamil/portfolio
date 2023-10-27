
  var users=new Array
  (
    new Array('admin','admin')
  );
  
  function CheckPassword(form) {
          var user=form.user.value.toLowerCase();;
          var pass=form.pass.value;
  
          for (var i=0; i<users.length; i++)
                  if (users[i][0]==user)
                          if (users[i][1]==pass) {
                                  form.action="/Rainbow/home.html";
                                  return true;
                          } else {
                                  alert("" +user+ ", wrong password");
                                  return false;
                          }
          alert("Invalid login or password");
          return false;
  }
