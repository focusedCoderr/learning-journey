function addCarColor(car, color){
    if(color.length === 0 || typeof color != string){
        return "Invalid color";
    }
    
    if(car.brand !== undefined && car.model !== undefined){
        car.color = color;
    }
}




