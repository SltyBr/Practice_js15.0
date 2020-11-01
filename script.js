'use strict';

class First {
    hello(){
        console.log('Привет я метод родителя');                    
    }
}


const hello = new First();

hello.hello();

class Second extends First{
    hello(){
        super.hello();
        console.log('А я наследуемый метод');
    }
}

const hello2 = new Second();

hello2.hello();