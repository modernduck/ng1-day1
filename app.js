  angular.module('hello', [])
            .controller("HelloController", function(){
                var hello = this;
                hello.name = " Hi!";
                hello.users = [
                    {"picture":"http://placehold.it/100x100", "name":"Sompop", "age":29 },
                    {"picture":"http://placehold.it/100x100", "name":"Zulu", "age":18 },
                    {"picture":"http://placehold.it/100x100", "name":"Bazoo", "age":67 },
                    {"picture":"http://placehold.it/100x100", "name":"Mocca", "age":39 },
                    {"picture":"http://placehold.it/100x100", "name":"Angular", "age":45 }
                ]

                /*hello.sayHi = function(){

                }*/
                hello.sayHi = () => {
                    alert("Hey!! sup " + hello.name );
                }
            } )