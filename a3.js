

var j = document.getElementById('f1');

console.log(j);
var name = document.myForm.uname.value;
console.log(name);
var k = document.myForm.gender.value;
console.log(k);
var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    displayUsers(users);
}

function check(user) {
        console.log(user);
        var name = user.username;
        console.log(name);

        if (name == "") {
            a = document.getElementById("uname")
            a.insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please enter the name</p>');
            // document.myform.uname.focus();
            console.log("There is a null val");
        }

        var password = user.password;
        if (password == ""){
            a = document.getElementById("pwd")
            a.insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please enter the password</p>');
        }

        var email = user.email;
        if (email == "") {
            a = document.getElementById("eml")
            a.insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please enter the email</p>');
        }
        var location = user.location;
        if (location== "") {
            document.getElementById("lc").insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please enter the location</p>');
            }
        var company = user.company;
        if (company == "") {
            document.getElementById("cmp").insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please enter the company</p>');
          }
        var gender = user.gender;
        if(document.getElementById('f1').gender.value == "male" || document.getElementById('f1').gender.value == "female") {
          return true;
        }
      else{
        document.getElementById("demo").insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please select the button</p>');
      }
        // if (gender == "" || gender == null) {
        //     document.getElementsByName("gender").insertAdjacentHTML('afterend', '<p style="color:Red; display:inline;">please select the button</p>');
        //     // document.myform.uname.focus();
        //     // return false;
        // }
        // else {
        //     return true;
        // }
return true;
};


//j[type=text]
//create an array and loop through it to put the validation

//
function displayUsers(users) {
var html = "<table border='1|1'>";
    for (var i = 0; i < users.length; i++) {
        html+="<tr>";
        html+="<td>"+users[i].username+"</td>";
        html+="<td>"+users[i].password+"</td>";
        html+="<td>"+users[i].email+"</td>";
        html+="<td>"+users[i].location+"</td>";
        html+="<td>"+users[i].company+"</td>";
        html+="<td>"+users[i].gender+"</td>";
        html+="</tr>";

    }
    html+="</table>";
document.getElementById("box").innerHTML = html;
};

document.getElementById('btn').addEventListener('click', function() {

  // validateform();

  var formA = document.getElementById('f1');
console.log('Gender: ' + formA.gender.value);

  var user = {
        'username': formA.uname.value,
        'password':formA.pwd.value,
        'email':formA.eml.value,
        'location':formA.lc.value,
        'company':formA.cmp.value,
        'gender':formA.gender.value
        // 'gender':document.getElementsByName('gender').value;
        // 'gender':document.querySelector('input[name=nameOfradio]:checked').value
        // 'selectedOption' : $("input:radio[name=option]:checked").val()
    };

    console.log("Username     " + user);
    console.log("This is gender ele " + document.getElementsByName("gender")[0])

    users.push(user);
    check(user);
    // console.log(users);
    localStorage.a_users = JSON.stringify(users);
    displayUsers(users);

});
