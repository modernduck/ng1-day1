  angular.module('hello', [])
            .controller("HelloController", function(){
                var hello = this;
                hello.name = " Hi!";

                /*hello.sayHi = function(){

                }*/
                hello.sayHi = () => {
                    alert("Hey!! sup " + hello.name );
                }
            } )