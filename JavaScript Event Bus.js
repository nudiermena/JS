
broadcast.signal = function (...args) {
    var subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
        subscribers[len].register(args);
    }
    return this;
};

const broadcast = new Broadcaster()
broadcast.register(functionA)
broadcast.register(functionB)
broadcast.register(functionC)
broadcast.signal(100, 200, 300, 'a', 'b', 'c')



functionA(...theArgs)
{
    console.log(theArgs);
}

functionB(...theArgs)
{
    console.log(theArgs);
}

functionC(...theArgs)
{
    console.log(theArgs);
}