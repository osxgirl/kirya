class Image{
    constructor(id, name, url){
        this.id = id;
        this.name = name;
        this.url = url
        
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
                             
}
