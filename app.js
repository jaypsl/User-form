
var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    displayUsers(users);
}

function displayUsers(users) {

}

document.getElementById('btn').addEventListener('click', function() {
    var user = {
        'username':document.getElementById('uname').value,
        'password':document.getElementById('pwd').value,
        'email':document.getElementById('eml').value,
        'location':document.getElementById('lc').value,
        'company':document.getElementById('cmp').value,
        // 'gender':document.querySelector('input[name=nameOfradio]:checked').value
        // 'selectedOption' : $("input:radio[name=option]:checked").val()
    };
    users.push(user);
    localStorage.a_users = JSON.stringify(users);
});

var j = function (){
    var table = document.getElementsByTagName('table')[0],
    newrow = table.insertRow(1),
    cell1 = newrow.insertCell(0),
    cell2 = newrow.insertCell(1),
    cell3 = newrow.insertCell(2),
    cell4 = newrow.insertCell(3),
    cell5 = newrow.insertCell(4),
    // cell6 = newrow.insertCell(5);

   var username = document.getElementById('uname').value;
   var password = document.getElementById('pwd').value;
   var email = document.getElementById('eml').value;
   var location = document.getElementById('lc').value;
   var company = document.getElementById('cmp').value;
   // var gender = document.getElementById('gd1').value;

    cell1.innerHTML = username;
    cell2.innerHTML = password;
    cell3.innerHTML = email;
    cell4.innerHTML = location;
    cell5.innerHTML = company;
    // cell6.innerHTML = gender;

};

document.getElementById('btn').addEventListener('click', j());

// function validateform(){
//     var username = document.getElementById('uname').value;
//     var pwd = document.getElementById('pwd').value;
//     var eml = document.getElementById('eml').value;
//     var lc = document.getElementById('lc').value;
//     var cmp = document.getElementById('cmp').value;
//     // var gnd = document.querySelector('input[name="gender"]:checked');
//
// // console.log(username);
//     if (username == "")
//     {
//           document.getElementById('uname').insertAdjacentHTML('beforeend', '<h6 style="color:Red;">hey</h6>');
//           // window.alert("Please enter your name.");
//         // username.focus();
//         // return false;
//     }
//
//     if (pwd == "")
//     {
//         window.alert("Please enter your password.");
//         // pwd.focus();
//         return false;
//     }
//     if (eml == "")
//     {
//         window.alert("Please enter a valid e-mail address.");
//         // eml.focus();
//         return false;
//     }
//     if (eml.indexOf("@", 0) < 0)
//     {
//         window.alert("Please enter a valid e-mail address.");
//         // eml.focus();
//         return false;
//     }
//     if (eml.indexOf(".", 0) < 0)
//     {
//         window.alert("Please enter a valid e-mail address.");
//         // eml.focus();
//         return false;
//     }
//
//     if (lc == "")
//     {
//         window.alert("Please enter your location.");
//         // lc.focus();
//         return false;
//     }
//
//     if (cmp == "")
//     {
//         window.alert("Please provide a company name");
//         // cmp.focus();
//         return false;
//     }
//
//     if(gnd.checked==false)
//     {
//         window.alert('select gender');
//         return false;
//     }
//     return true;
// }
//
//
// document.getElementById('btn').addEventListener('click', validateform);
