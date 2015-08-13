function searchObject(obj, key, val) {
    var objects = [];
    for (var x in obj){    
        if (x == key && obj[key] == val) {
            return true;
        } else {
            return false;
            }
    }
}