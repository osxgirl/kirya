
class Video{

    static all = []
    static container = document.getElementById('video-list')

    constructor({id, name, url}){
        this.name = name
        this.url = url
        this.id = id
        
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `video-${id}`
        
        Video.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <strong class="name">${this.name}</strong>:
            <span class="url">${this.url}</span>
        </div>
        `
        return this.element
    }

    attachToDom(){
        this.render()
        Video.container.appendChild(this.element)
    }
}


