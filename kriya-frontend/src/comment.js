class Comment{

    static all = []
    static commentContainer = document.getElementById('com-container')

    constructor({id, comment}){
        this.comment = comment
        this.id = id
        
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `comment-${id}`
        
        this.element.addEventListener('click', this.handleLiClick)
        
        Comment.all.push(this)
    }
    
    
    handleLiClick = (e) => {
        if(e.target.innerText === "Edit"){
            e.target.innerText = "Save"
            this.createEditFields(e.target)
        } else if (e.target.innerText === "Delete"){
            this.deleteComment(e)
        } else if(e.target.innerText === "Save"){
            e.target.innerText = "Edit"
            // save this info to the DB
            // turn all input fields back into spans
            this.saveUpdatedComment()
        }
    }

    createEditFields = (editBtn) =>{
        const li = this.element
        const div = this.element.querySelector('div')
    
        for(const e of div.children){
            let inputValue = e.innerText
            let name = e.classList[0]
            e.outerHTML = `<input type="text" class="edit-${comment}" value="${inputValue}">`
        }
    }

    deleteComment = (e) => {
        this.element.remove() // remove it before the fetch request
        commentApi.deleteComment(this.id)
    }

    saveUpdatedComment = () => {
       this.comment = this.element.querySelector(".edit-comment").value
        
       commentApi.sendPatch(this)
    }
    
    render(){
        this.element.innerHTML = `
           <div data-id="${this.id}">
           <span class="comment">${this.url}</span>
        </div>
        
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
        
        `
        return this.element
    }

    attachToDom(){
        this.render()
        Comment.container.appendChild(this.element)
    }
    
}


