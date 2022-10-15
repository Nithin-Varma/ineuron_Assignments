
var result;
const pi = 3.14
class Volume
{
    constructor (radius,height)
    {
        this.radius = radius;
        this.height = height;
    }

    volume_of_cylinder()
    {
        result = pi*this.radius**2*this.height;
        console.log(`volume of cylinder ${result}`)
    }
    volume_of_sphere()
    {
        result = 4/3*pi*this.radius**3;
        console.log(`volume of sphere ${result}`)
    }
    volume_of_cone()
    {
        result = pi*this.radius**2*(this.height)/3;
        console.log(`volume of cone ${result}`)
    }
}

let vol = new Volume(5,6);
vol.volume_of_cylinder();
vol.volume_of_sphere();
vol.volume_of_cone();