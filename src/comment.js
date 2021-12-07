class Comment{
    static all = []

    static commentContainer = document.getElementById('comment-list')

    constructor({id, comment }){
        this.id = id
        this.comment = comment

        this.element = document.createElement('li')

        Comment.all.push(this)
    }

    comment(){
        return Comment.all.filter((comment) => comment.categoryId == this.id)
    }
    

    render(){
        this.element.innerText = this.comment
        this.element.id = `comment-${this.id}`
        return this.element
    }

    addToDom(){
        Comment.commentContainer.append(this.render())
        this.addListeners()
    }

   
}
