var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'no stealing',
        nickNames: ["Bert", "Ernie", "BigBird"]
    },
    {
        clickCount: 0,
        name: 'Rando',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'no stealing',
        nickNames: ["Aaa", "Bbb", "Ccc"]
    },
    {
        clickCount: 0,
        name: 'Boinga',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'no stealing',
        nickNames: ["This", "Is", "knockout"]
    },
    {
        clickCount: 0,
        name: 'Laughy Magee',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'no stealing',
        nickNames: ["How", "Many", "Cats"]
    },
    {
        clickCount: 0,
        name: 'Lazy Bastard',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'no stealing',
        nickNames: ["Get", "Up", "Now"]
    }
];

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);

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

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.newCat = function(clickedCat){
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new viewModel());
