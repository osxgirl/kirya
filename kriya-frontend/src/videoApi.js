class VideoApi {
    
    constructor(port){
        this.BACKEND_URL = `${port}/videos`
    }
    
   
    getVideos(){
        fetch(this.BACKEND_URL)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
            const v = new Video({id: element.id, ...element.attributes})
                           v.attachToDom()
                })
                   })
    }
      
    createVideo(){
        
      const configObj ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(videoInfo)
       }
  
      
    fetch(this.BACKEND_URL, configOjb)
        .then(r => r.json())
        .then( json => {
         const v = new Video({id: json.data.id, ...json.data.attributes})
        v.attachToDom()
        })
    }
}

