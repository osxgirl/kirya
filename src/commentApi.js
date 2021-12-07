class CommentApi {
    constructor(port){
            this.BACKEND_URL = `${port}/comments`
        }
        

    getComments(){
        fetch(this.BACKEND_URL)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
                const i = new Comment({id: element.id, ...element.attributes})
                i.addToDom()
            })
        })
    }
}

