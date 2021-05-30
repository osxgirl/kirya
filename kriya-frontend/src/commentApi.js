class CommentApi {

     constructor(port){
         this.BACKEND_URL = `${port}/comments`
     }
         

     getComments(){
         fetch(this.BACKEND_URL)
         .then(r => r.json())
         .then( json => {
             json["data"].forEach(element => {
                 const c = new Comment({id: element.id, ...element.attributes})
                 c.addToDom()
                 c.addToDropDown()
             })
         })
     }
    
    createComment(){
          
          const commentInfo = {
              comment: {
                  comment: comInput.value
          }
        }
        console.log(imageInfo)
        const configObj = {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(commentInfo)
         }
    
        
        fetch(this.BACKEND_URL, configObj)
           .then(r => r.json())
           .then(json => {
               const i = new Comment({id: json.data.id, ...json.data.attributes})
              i.attachToDom()
           })
        }
      
      
      sendPatch = (comment) => {
           const commentInfo = {
               comment
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
               image.render()
           })
       }

       deleteComment = (id) => {
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
