function compareObjects(obj1, obj2) {
    for (var param in obj1) {
        if (typeof obj1[param] == 'object' && obj1[param] != null) {
    
            //Check if lengths are different
            if (typeof obj2[param] != "undefined" && obj1[param].length != obj2[param].length) {
                return true;
            }
    
            if (compareObjects(obj1[param], obj2[param]) === true) return true;
        
        } else {          
            if (obj1[param] != obj2[param]) {
                  return true;
            }
        }
    }    
    return false;
}