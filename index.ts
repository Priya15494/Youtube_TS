class Youtube{
    
    constructor(public videoTitle:string, public videoChannel:string, private noOfViews:number,
        private relatedVideos:string[], private uploadedOn:string, private likes?:number,
          private dislikes?:number)
    {
        this.videoTitle=videoTitle;
        this.videoChannel=videoChannel;
        this.noOfViews=noOfViews;
        this.uploadedOn=uploadedOn;
        this.relatedVideos=relatedVideos;
        this.likes=likes;
        this.dislikes=dislikes;
    }

    getlikes=()=>{
        return this.likes;
    }
    setlikes=()=>{
        this.likes=50000;
    }

    getdislikes=()=>{
        return this.dislikes;
    }
    setdislikes=()=>{
         this.dislikes=70;
    }

    getNumberofdislikes=()=>{
        return this.setdislikes();
    }


    getNumberofViews =():number=>{
        return this.noOfViews;
    }

    
    
    getOtherVideos=()=>{
       let other: string[]=this.relatedVideos;
       console.log(`Related Videos of `+this.videoTitle+` `+`of`+` `+this.videoChannel);
       for(let i of other){
            console.log(i);
       }
    }


}

let title1 = new Youtube("Focus Your Mind","Jay Shetty",131576,["Before you watch this","How to find your Purpose","Redefining happiness"],
"3 days ago");
let title2 = new Youtube("Great People Dont Give Up","Gaur Gopal Das",18005,["Mission Impossible","Tree of Life","WAKE Up"],
"1 month ago",17000,52);

console.log("Views: "+title1.getNumberofViews());
title1.getOtherVideos();

let dislikes=title2.getNumberofdislikes();
console.log("Updated- Dislikes- "+title2.getdislikes());