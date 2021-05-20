 class ImageApi {
    
    constructor(port){
        this.BACKEND_URL = `${port}/images`
    }
    
   
    getImages(){
        fetch(this.BACKEND_URL)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
            const i = new Image({id: element.id, ...element.attributes})
                           i.attachToDom()
        })
      })
    }
      
    createImage(){
        
        const imageInfo = {
            image: {
                name: nameInput.value,
                url: urlInput.value,
        }
      }
      console.log(imageInfo)
        
      const configObj ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(imageInfo)
       }
  
      
    fetch(this.BACKEND_URL, configOjb)
        .then(r => r.json())
        .then( json => {
         const i = new Image({id: json.data.id, ...json.data.attributes})
        i.attachToDom()
        })
    }
    
    
    sendPatch = (image) => {
         let {name, url} = image
         const imageInfo = {
             name,
             url
         }

         const configObj = {
             method: 'PATCH',
             headers: {
                 "Content-Type": "application/json",
                 Accept: "application/json"
             },
             body: JSON.stringify(imageInfo)
         }
        
         fetch(`${this.BACKEND_URL}/${image.id}`, configObj)
         .then(r => r.json())
         .then(json => {
             // we are optomistically rendering here since we don't use the json response
             image.render()
         })
     }

     deleteImage = (id) => {
         const configObj = {
             method: 'DELETE',
             headers: {
                 "Content-Type": "application/json",
                 Accept: "application/json"
             }
         }
         
         fetch(`${this.BACKEND_URL}/${id}`, configObj)
             .then(r => r.json())
             .then(json => alert(json.message))
     }
}

