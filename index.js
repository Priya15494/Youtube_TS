var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, videoChannel, noOfViews, relatedVideos, uploadedOn, likes, dislikes) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.videoChannel = videoChannel;
        this.noOfViews = noOfViews;
        this.relatedVideos = relatedVideos;
        this.uploadedOn = uploadedOn;
        this.likes = likes;
        this.dislikes = dislikes;
        this.getlikes = function () {
            return _this.likes;
        };
        this.setlikes = function () {
            _this.likes = 50000;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.setdislikes = function () {
            _this.dislikes = 70;
        };
        this.getNumberofdislikes = function () {
            return _this.setdislikes();
        };
        this.getNumberofViews = function () {
            return _this.noOfViews;
        };
        this.getOtherVideos = function () {
            var other = _this.relatedVideos;
            console.log("Related Videos of " + _this.videoTitle + " " + "of" + " " + _this.videoChannel);
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var i = other_1[_i];
                console.log(i);
            }
        };
        this.videoTitle = videoTitle;
        this.videoChannel = videoChannel;
        this.noOfViews = noOfViews;
        this.uploadedOn = uploadedOn;
        this.relatedVideos = relatedVideos;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    return Youtube;
}());
var title1 = new Youtube("Focus Your Mind", "Jay Shetty", 131576, ["Before you watch this", "How to find your Purpose", "Redefining happiness"], "3 days ago");
var title2 = new Youtube("Great People Dont Give Up", "Gaur Gopal Das", 18005, ["Mission Impossible", "Tree of Life", "WAKE Up"], "1 month ago", 17000, 52);
console.log("Views: " + title1.getNumberofViews());
title1.getOtherVideos();
var dislikes = title2.getNumberofdislikes();
console.log("Updated- Dislikes- " + title2.getdislikes());
