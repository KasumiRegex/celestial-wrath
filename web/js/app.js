/**
 * Created by lopeza on 26.10.2017.
 */
var APP = function(){
    window.onload = this.initialize(this);
}

APP.prototype.fadeVelocity=200;//ms
APP.prototype.menu_out = false;

APP.prototype.initialize = function(that) {

    that.addListener();
};

APP.prototype.triggerMenue = function(){
    var that = this;
    var menu = $("#smartphone_navigation");

    if(this.menu_out){
        menu.fadeOut(this.fadeVelocity);
        this.menu_out = false;
    }else{
        menu.fadeIn(this.fadeVelocity);
        this.menu_out = true;
    }
    return true;
}

APP.prototype.addListener = function() {
    var that = this;

    $("#menu_icon").on("touchend", function(e){
        e.preventDefault();
        that.triggerMenue();
        return false;
    });
};

APP.prototype.isPhone = function(){
    if ($(".smartphone").css("display") == "none" ){
        return false;
    }
    return true;
}