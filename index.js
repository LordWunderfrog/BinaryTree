class Node{
	constructor(num, id){
		this.num = num;
		this.left = null;
		this.right = null;
		this.id = id;
	}
}

class Tree{
	constructor(){
		this.parent = null;
	}
	
	addLeaf(id){
		
		var num = Math.round(Math.random()*100);
		var id = id;
		var leaf = new Node(num, id);
		
		if(this.parent === null){
			this.parent = leaf;
			this.renderLeaf('root', leaf.num, leaf.id);
		}else{
			this.sortLeaf(this.parent, leaf);
		}	
	}
	
	sortLeaf(parent, leaf){
		if(leaf.num < parent.num){
			if(parent.left === null){
				parent.left = leaf;
				this.renderLeaf('left', leaf.num, leaf.id, parent.id);
			}else{
				this.sortLeaf(parent.left, leaf);
			}
		}else{
			if(parent.right === null){
				parent.right = leaf;
				this.renderLeaf('right', leaf.num, leaf.id, parent.id);
			}else{
				this.sortLeaf(parent.right, leaf);
			}
		}
	}	
	
	renderLeaf(css, num, id, parentId){
		if(css!== 'root'){
			plantPot = document.getElementById(css+'-'+parentId);
		}
		plantPot.innerHTML+=
		'<div class="node '+css+'" id="'+id+'">'+num+'</div><ul class="halfCon"><li class="leftBranch" id="left-'+id+'"></li><li class="rightBranch" id="right-'+id+'"></li></ul>';
		
	}
}

function GenTree(leaves){
	plantPot = document.getElementById('treeSec');
	
	if(leaves>100){
		plantPot.innerHTML = '<span class="error">Value must be less than 100</span>';
		return;
	}
	
	plantPot.innerHTML = '';
	
	var sapling = new Tree();
		
	for(var counter=0;counter<leaves; counter++){
		sapling.addLeaf(counter);
	}
}	

