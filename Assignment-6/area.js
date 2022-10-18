class rectangle_class
{

    constructor(l,b)
    {
        this.l = l;
        this.b = b;
        
    }

    area()
    {
       console.log(this.l * this.b);
    }

}
class square_class extends rectangle_class
{
    constructor(l,b)
    {
        super(l,b);
        
    }
    
};
let first = new rectangle_class(5,6);
let second = new square_class(4,5)
first.area()
second.area()