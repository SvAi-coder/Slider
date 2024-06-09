function Slider(){
    this.imgsUrls = [];
    this.indexImgsUrls = 0;

    this.sliderImg;
    this.prevBnt;
    this.nextBnt;

   

}

Slider.prototype.Start = function(name){
    var that = this;
    var cont = document.querySelector("." + name);

    this.imgsUrls = [];
    this.indexImgsUrls = 0;
    
    this.sliderImg = cont.querySelector(".slider-img-id");
    this.prevBnt = cont.querySelector(".prev-bnt");
    this.nextBnt = cont.querySelector(".next-btn");
    
    this.prevBnt.addEventListener("click", eee);
    this.nextBnt.addEventListener("click", function(e){
        that._nextBnt_Listner(e);
    });

    function eee(e){
        that._prevBnt_Listner();

    }
    
    this.imgsUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZExHXJ_X10R3xGjuby9o0_ShywAC18XtKyQ&s");
    this.imgsUrls.push("https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg");
    this.imgsUrls.push("https://i.pinimg.com/236x/04/aa/e5/04aae5952f7753b3b99f36f906a1b763.jpg");
    this.imgsUrls.push("https://aaron.jorb.in/wp-content/uploads/2015/04/cheesesteak-wapuu-300x300.png");
    
    this.sliderImg.src = this.imgsUrls[this.indexImgsUrls];
}

Slider.prototype._nextBnt_Listner = function(event){
    this.indexImgsUrls++;
    this.sliderImg.src = this.imgsUrls[this.indexImgsUrls];
}

Slider.prototype._prevBnt_Listner = function(event){
    this.indexImgsUrls--;
    this.sliderImg.src = this.imgsUrls[this.indexImgsUrls];
}

