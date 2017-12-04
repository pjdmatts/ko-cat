var viewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.obervable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('no stealing');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new viewModel());
