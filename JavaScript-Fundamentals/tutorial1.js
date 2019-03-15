var lang = "Javascript";

function myFunction(lang) {
    this.lang = lang;
    alert("Hello, welcome to " + this.lang);
};

var test = new myFunction(lang)