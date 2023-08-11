var users = [
    {email:"kiliclarerdem@hotmail.com", password:"qwerqwer"},

    {email:"kiliclarsena@hotmail.com", password:"qwerqwer"}
]

var tweets = [
    {email:"kiliclarerdem@hotmail.com", tweet:"Bugün hava çok güzel"},
    {email:"kiliclarsena@hotmail.com", tweet:"Bugün hava çok boktan"}
]

var email = prompt("email?")
var password = prompt("password?")

function isUserHave(email,password){
    console.log(email)
    console.log(password)
    for(i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
            return true;
        }
    }
    return false;
}

function start(){
    if(isUserHave(email,password)){
        console.log(tweets)
    }
    else{
        console.log("users or email is not correct")
    }
}

start(email,password)