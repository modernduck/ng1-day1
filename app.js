  angular.module('hello', [])
            .controller("HelloController", function(){
                var hello = this;
                hello.name = " Hi!";
                //hello.isShowEmployee = false;
                hello.page = 'home';
                hello.newUser = {};
                hello.formUser = {};
                hello.indexFormUser;
                hello.users = [
                    {"picture":"http://placehold.it/100x100", "name":"Sompop", "age":29, "salary":25000 },
                    {"picture":"http://placehold.it/100x100", "name":"Zulu", "age":18, "salary":90000 },
                    {"picture":"http://placehold.it/100x100", "name":"Bazoo", "age":67, "salary":10800 },
                    {"picture":"http://placehold.it/100x100", "name":"Mocca", "age":39, "salary":5000 },
                    {"picture":"http://placehold.it/100x100", "name":"Angular", "age":45, "salary":999888 }
                ]

                hello.save = () => {
                    hello.users.push(hello.newUser);
                    hello.isShowEmployee = true;//change the page;
                }

                hello.convertToStringNumber = number => {
                    //some logic fancy hoo hoo hoo
                    return "00"
                }

                /*hello.sayHi = function(){

                }*/
                hello.sayHi = () => {
                    alert("Hey!! sup " + hello.name );
                }

                /*hello.isSenior = function( user ) {
                }*/
                hello.isSenior = user => {
                    if(user.age >35)
                        alert(user.name +  " is Senior");
                    else
                        alert(user.name + " is not senior");
                }

                hello.editUser = () => {
                    //change the data at array
                    
                    hello.users[hello.indexFormUser] = hello.formUser;
                    hello.page = 'display'
                }

                hello.edit = user => {
                    hello.page = 'form';
                    //pass data form edit button to form page
                    hello.formUser = user;
                    //we use name as id
                    hello.indexFormUser = hello.users.findIndex( item => {
                        return item.name == user.name
                    } )
                    
                }


            } )