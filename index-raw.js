/*Creates node with blank properties for the value, ordinal id, as well as left and right children*/
class Node{
	constructor(num, id){
		this.num = num;
		this.left = null;
		this.right = null;
		this.id = id;
	}
}

/*Constructs a tree and adds nodes with recursive functions.*/
class Tree{
	constructor(){
		this.parent = null;
	}
	
	addLeaf(id){
		/*Assigns a random ID to each node in order to randomly distribute across the tree*/
		var num = Math.round(Math.random()*100);
		var id = id;
		var leaf = new Node(num, id);
		
		/*If root, do this*/
		if(this.parent === null){
			this.parent = leaf;
			this.renderLeaf('root', leaf.num, leaf.id);
		}else{
			this.sortLeaf(this.parent, leaf);
		}	
	}
	
	/*Recursive function to sort through the tree looking for a node with no child*/
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
	
	/*Generates and outputs the relevant markup for each node*/
	renderLeaf(css, num, id, parentId){
		if(css!== 'root'){
			/*If not the root, then find the appropriate li container to insert to*/
			var plantPot = document.getElementById(css+'-'+parentId);
		}else{
			var plantPot = document.getElementById('treeSec');
		}
		plantPot.innerHTML+=
		'<div class="node '+css+'" id="'+id+'">'+num+'</div><ul class="halfCon"><li class="leftBranch" id="left-'+id+'"></li><li class="rightBranch" id="right-'+id+'"></li></ul>';
		
	}
}

/*Function called by onClick. Invokes constructors*/
function GenTree(leaves){
	var plantPot = document.getElementById('treeSec');
	
	if(leaves>100){
		plantPot.innerHTML = '<span class="error">Value must be less than 100</span>';
		return;
	}
	
	plantPot.innerHTML = '';
	
	var sapling = new Tree();
		
	/*Loops and adds nodes for number specified by user*/
	for(var counter=0;counter<leaves; counter++){
		sapling.addLeaf(counter);
	}
}	

