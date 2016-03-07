function remove(subset, set) {
	var newArr = [];
	
	for (var i=0; i<subset.length; i++) {
		searchValue = subset[i];
		set = ($(set).not([searchValue]));
			for (var j=0; j<set.length; j++){
			 	newArr.push(set[j]);
			}
		set = newArr;
		newArr=[];		
	}
	return set;
}