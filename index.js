class Polygon{
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(accum, value){
            return accum + value;
        }) 
    }
}

class Triangle extends Polygon {

    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        if (this.count !== 3) {
            return false
        }
        return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1) 
    } 
}

class Square extends Polygon{
    get area(){
        return this.sides[0] ** 2
    }

    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        if (this.count != 4){
            return false;
            
        }
        
        return (side1 === side2) && (side1 === side3) && (side1 === side4)
    }
}