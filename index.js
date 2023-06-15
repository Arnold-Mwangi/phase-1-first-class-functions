function receivesAFunction(callbackF){
    callbackF()
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){
        return" sick"
    }
}
returnsAnAnonymousFunction()
returnsAnAnonymousFunction()
returnsANamedFunction()