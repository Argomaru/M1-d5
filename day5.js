//Object

let acc = { nama : "Jason Kristian", 
            email : "Jkristian960@gmail.com",
            pas : "123"
}
console.log(acc)

let iden = [
    {gender : "Male",name : "Jason", age : 22},
    {gender : "Feale",name : "ad", age : 23},
    {gender : "?",name : "kuda", age : 24},
]
console.log(iden[2].name)


const User = {
    username: "aa",
    pass: "a12",
    email: "x@gmail.com",
    dsf: function(){
        return "email saya " + this.email + " dan pass saya " +this.pass;
    }
}
//dot notation
console.log(User.pass) 
console.log(User.dsf())
//brackt notation
console.log(User["username"]);


const buku =[{

}
]