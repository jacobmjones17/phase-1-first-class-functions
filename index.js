function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("named function")
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return () => console.log('')
}
