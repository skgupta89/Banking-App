var user = [
    {
        username: 'sandeep',
        password: '123',
        DOB: '2021-09-25'
    },

    {
        username: 'hitesh',
        password: '1234',
        DOB: '2021-09-20'
    },

]
// console.log(typeof(user[0].DOB));

// Login Function

function Login() {
    var uname = (document.getElementById('uname').value).toLowerCase();
    var password = document.getElementById('password').value;

    // form Validation

    if (uname == "") {
        document.getElementById('uerror').innerHTML = '***User Name Field Cant be empty***'
    }

    if (password == "") {
        document.getElementById('perror').innerHTML = '***Password Cant be empty***';
    }

    // check for user exist or not

    for (i = 0; i < user.length; i++) {
        if ((uname == user[i].username) && (password == user[i].password)) {
            location.href = 'Home.html';
            alert(' Welcome to GS BANK ' + uname)
        }
        else if ((uname == user[i].username) && (password != user[i].password)) {
            document.getElementById('perror').innerHTML = '***Please Enter Right Password***';
        }
        else if ((uname != user[i].username) && (password == user[i].password)) {
            document.getElementById('uerror').innerHTML = '***Please Enter Right User ID***';
        }
    }

}

// SugnUp Function

function SignUp() {

    var loginForm = document.getElementById('accountform').style.display = 'block';
    var fpass = document.getElementById('formlogin').style.display = 'none';
    document.getElementById('main').style.display = 'none';

}

// Create Account Function

function CreateAccount() {

    // taking Data from user 

    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var date = document.getElementById('date').value;
    console.log(date)
    var username = document.getElementById('username').value;
    var password = document.getElementById('Newpassword').value;
    console.log(password)
    var cpassword = document.getElementById('cpassword').value;

    // validation


    
    // for Name

    if (name == "") {
        document.getElementById('nameError').innerHTML = '*** Field Cant be empty***';
    }

    //for location
    if (location == "") {
        document.getElementById('lerror').innerHTML = '*** Field Cant be empty***';
    }

    //for email
    if (email == "") {
        document.getElementById('emailError').innerHTML = '*** Field Cant be empty***';
    }

    //for username
    if (username == "") {
        document.getElementById('userNError').innerHTML = '*** Field Cant be empty***';
    }

    //for Password
    if (password == "") {
        document.getElementById('passwordError').innerHTML = '*** Field Cant be empty***';
    }


    if (cpassword == "") {
        document.getElementById('CPasswordError').innerHTML = '*** Field Cant be empty***';
    }
    if (cpassword != password) {
        document.getElementById('CPasswordError').innerHTML = '*** Password Not Match***';
    }


    if (mobile == "") {
        document.getElementById('merror').innerHTML = '*** Field Cant be empty***';
    }
    if (date == "") {
        document.getElementById('derror').innerHTML = '*** Field Cant be empty***';
    }


    if ((name != "") && (location != "") && (email != "") && (username != "") && (password != "") && (cpassword != "") && (mobile != "") && (date != "") && (cpassword == password) ){
        alert('Account Created Successfuly!')
    }
    // storing data into user Array

    var newUser = {
        username: username,
        password: password,
        DOB: date
    }
    // console.log(newUser);

    user.push(newUser);
    console.log(user);

    document.getElementById('location').value = "";
    document.getElementById('email').value = "" ;
    document.getElementById('mobile').value = "" ;
    document.getElementById('date').value = "";
    document.getElementById('username').value = "";
    document.getElementById('Newpassword').value = "";
    document.getElementById('cpassword').value = "";


}

// funtion for opening login form after clicking

function OpenLogin() {

    document.getElementById('main').style.display = 'block'
    var CAForm = document.getElementById('formlogin');
    CAForm.style.display = 'block';
    document.getElementById('fpass1').style.display = 'none';
    document.getElementById('accountform').style.display = 'none'

}

// funton for forgot password

function ForgotP() {
    var loginForm = document.getElementById('main');
    loginForm.style.display = 'none'
    var CAForm = document.getElementById('accountform');
    CAForm.style.display = 'none';
    document.getElementById('fpass1').style.display = 'block';
}


// function to get passwword

function GetPassword() {
    var fname = document.getElementById('fUserName').value;
    // console.log(fname)
    var fDate = document.getElementById('fDate').value;
    console.log(fDate);
    var Sname = document.getElementById('getUserName');
    var Spassword = document.getElementById('getPassword')

    for (i = 0; i < user.length; i++) {
        console.log(user[i].DOB);
        if (fDate == user[i].DOB && fname == user[i].username) {

            Sname.innerHTML = 'User Name: ' + user[i].username + '<br>';
            Spassword.innerHTML = 'Password: ' + user[i].password;

        }
    }
}

// open account funtion

function OpenAccount() {

    var loginForm = document.getElementById('accountform').style.display = 'block';
    var fpass = document.getElementById('formlogin').style.display = 'none';
    document.getElementById('main').style.display = 'none';

}





// Home Page


var balance;
// debit button

function Debit() {
    document.getElementById('debitForm').style.display = 'block';
    document.getElementById('loanForm').style.display = 'none';
    document.getElementById('creditForm').style.display = 'none';
}

//withdraw button

function debitAmounts() {

    balance = document.getElementById('Balance').value;

    var dAmount = document.getElementById('debitAmount').value;
    console.log(dAmount);
    var dDescription = document.getElementById('debitDescription').value;
    console.log(dDescription);

    // creatiing Dynamic Element

    var trDebit = document.createElement('tr');
    var tdDate = document.createElement('td');
    var tdDes = document.createElement('td');
    var tdCredit = document.createElement('td');
    var tdDebit = document.createElement('td');
    var tdBalance = document.createElement('td');

    // inner text

    tdDate.innerText = new Date().toLocaleDateString();
    //    console.log(tdDate);
    tdDes.innerText = dDescription;
    tdCredit.innerText = '-';
    tdDebit.innerText = dAmount;
    tdBalance.innerText = balance - dAmount;
    console.log(tdBalance);

    //append td into tr

    trDebit.appendChild(tdDate);
    trDebit.appendChild(tdDes);
    trDebit.appendChild(tdCredit);
    trDebit.appendChild(tdDebit);
    trDebit.appendChild(tdBalance);

    //appending tr in tbody

    document.getElementById('tbody').appendChild(trDebit);

    document.getElementById('Balance').value = tdBalance.innerHTML;

}



function Credit() {
    document.getElementById('creditForm').style.display = 'block';
    document.getElementById('debitForm').style.display = 'none';
    document.getElementById('loanForm').style.display = 'none';
}

function creditAmounts() {

    balance = document.getElementById('Balance').value;

    var cAmount = document.getElementById('creditAmount').value;

    var cDescription = document.getElementById('creditDescription').value;


    // creatiing Dynamic Element

    var trDebit = document.createElement('tr');
    var tdDate = document.createElement('td');
    var tdDes = document.createElement('td');
    var tdCredit = document.createElement('td');
    var tdDebit = document.createElement('td');
    var tdBalance = document.createElement('td');

    // inner text

    tdDate.innerText = new Date().toLocaleDateString();
    //    console.log(tdDate);
    tdDes.innerText = cDescription;
    tdCredit.innerText = cAmount;
    tdDebit.innerText = '-';
    tdBalance.innerText = parseInt(balance) + parseInt(cAmount);
    console.log(tdBalance);

    //append td into tr

    trDebit.appendChild(tdDate);
    trDebit.appendChild(tdDes);
    trDebit.appendChild(tdCredit);
    trDebit.appendChild(tdDebit);
    trDebit.appendChild(tdBalance);

    //appending tr in tbody

    document.getElementById('tbody').appendChild(trDebit);

    document.getElementById('Balance').value = tdBalance.innerHTML;

}



function BalShow() {
    balance = document.getElementById('Balance').value;
    console.log(balance);
    alert('Your Available Balance = ' + balance)
}



// function for loan

function Loan() {
    document.getElementById('loanForm').style.display = 'block';
    document.getElementById('creditForm').style.display = 'none';
    document.getElementById('debitForm').style.display = 'none';
}

//funtion to take loan

function takeLoan() {

    balance = document.getElementById('Balance').value;

    var lAmount = document.getElementById('loanAmount').value;

    var lDescription = document.getElementById('loanDescription').value;


    // creatiing Dynamic Element

    var trDebit = document.createElement('tr');
    var tdDate = document.createElement('td');
    var tdDes = document.createElement('td');
    var tdCredit = document.createElement('td');
    var tdDebit = document.createElement('td');
    var tdBalance = document.createElement('td');

    // inner text

    tdDate.innerText = new Date().toLocaleDateString();
    //    console.log(tdDate);
    tdDes.innerText = lDescription;
    tdCredit.innerText = lAmount;
    tdDebit.innerText = '-';
    tdBalance.innerText = parseInt(balance) + parseInt(lAmount);
    console.log(tdBalance);

    //append td into tr

    trDebit.appendChild(tdDate);
    trDebit.appendChild(tdDes);
    trDebit.appendChild(tdCredit);
    trDebit.appendChild(tdDebit);
    trDebit.appendChild(tdBalance);

    //appending tr in tbody

    document.getElementById('tbody').appendChild(trDebit);

    document.getElementById('Balance').value = tdBalance.innerHTML;

}

function checkInt() {
    balance = document.getElementById('Balance').value;
    console.log(balance);
    let loanAmount = document.getElementById('loanAmount').value;
    console.log(loanAmount);
    let showIntAmount = document.getElementById('ShowIntAmount');
    console.log(showIntAmount)
    let iRate = parseInt(document.getElementById('iRate').innerHTML);
    console.log(typeof (iRate));


    showIntAmount.innerHTML = (iRate / 100) * loanAmount + ' ' + 'Rupees.';
    console.log(showIntAmount);



}



//logout Funtion

function Logout() {
    var war = confirm('Are Sure You Want to LogOut');

    if (war == true) {
        location.href = 'Login.html';
    }

}