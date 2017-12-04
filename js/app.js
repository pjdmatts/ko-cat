var viewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('no stealing');
    this.nickNames = ko.observableArray([
        {nickName: "Bert"}, {nickName: "Ernie"}, {nickName: "BigBird"}]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

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

ko.applyBindings(new viewModel());
