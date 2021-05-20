class Image{

    static all = []
    static container = document.getElementById('image-list')

    constructor({id, name, url}){
        this.name = name
        this.url = url
        this.id = id
        
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `image-${id}`
        
        this.element.addEventListener('click', this.handleLiClick)
        
        Image.all.push(this)
    }
    
    
    handleLiClick = (e) => {
        if(e.target.innerText === "Edit"){
            e.target.innerText = "Save"
            this.createEditFields(e.target)
        } else if (e.target.innerText === "Delete"){
            this.deleteImage(e)
        } else if(e.target.innerText === "Save"){
            e.target.innerText = "Edit"
            // save this info to the DB
            // turn all input fields back into spans
            this.saveUpdatedImage()
        }
    }

    createEditFields = (editBtn) =>{
        const li = this.element
        const div = this.element.querySelector('div')
    
        for(const e of div.children){
            let inputValue = e.innerText
            let name = e.classList[0]
            e.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}">`
        }
    }

    deleteItem = (e) => {
        this.element.remove() // remove it before the fetch request
        imageApi.deleteImage(this.id)
    }

    saveUpdatedImage = () => {
        this.url = this.element.querySelector(".edit-url").value
        this.name = this.element.querySelector(".edit-name").value
    
       imageApi.sendPatch(this)
    }
    
    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <strong class="name">${this.name}</strong>:
            <span class="url">${this.url}</span>
        </div>
        
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
        
        `
        return this.element
    }

    attachToDom(){
        this.render()
        Image.container.appendChild(this.element)
    }
}


