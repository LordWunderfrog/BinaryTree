class Node{
	constructor(i, val, css){
		plantPot.innerHTML+='<div class="node '+css+'" id='+i+'>'+val+'</div>';
		this.children = [];
	}
}

function GenTree(leaves){
	plantPot = document.getElementById('treeSec');
	
	if(leaves>100){
		plantPot.innerHTML = '<span class="error">Value must be less than 100</span>';
		return;
	}
	
	plantPot.innerHTML = '';
	generation=1;
	
	for(i=0; i<leaves; i++){
		leaf = new Node(i);
	}
	
}