var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('no stealing');
    this.nickNames = ko.observableArray(["Bert", "Ernie", "BigBird"]);

    this.catLevel = ko.computed(function(){
        if(this.clickCount() >= 15) {
            return "Wizard";
        } else if (this.clickCount() >= 5) {
            return "Advanced Beginner";
        } else {
            return "noob";
        }
    }, this);
}

var viewModel = function(){
    var self = this;

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new viewModel());
