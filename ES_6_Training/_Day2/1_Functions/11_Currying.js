var greetings = function (greetingMsg, name) {
    console.log(greetingMsg + ", " + name);
}

// greetings("Good Morning", "Manish");
// greetings("Good Morning", "Abhijeet");
// greetings("Good Morning", "Ramaknt");

var mGreet = greetings.bind(this, "Good Morning");

mGreet("Abhijeet");
mGreet("Subodh");
mGreet("Ramakant");

var aGreet = greetings.bind(this, "Good Afternoon");

aGreet("Abhijeet");
aGreet("Subodh");
aGreet("Ramakant");

var greetings1 = function (greetingMsg) {
    return function (name) {
        console.log(greetingMsg + ", " + name);
    }
}

var eGreet = greetings1("Good Evening");

eGreet("Ramakant");
eGreet("Subodh");
eGreet("Abhijeet");

