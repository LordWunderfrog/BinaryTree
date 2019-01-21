/*This JS file was compiled by Babel for Internet Explorer compatibility. Check index-raw.js for source code*/

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*Creates node with blank properties for the value, ordinal id, as well as left and right children*/
var Node = function Node(num, id) {
  _classCallCheck(this, Node);

  this.num = num;
  this.left = null;
  this.right = null;
  this.id = id;
};
/*Constructs a tree and adds nodes with recursive functions.*/


var Tree =
/*#__PURE__*/
function () {
  function Tree() {
    _classCallCheck(this, Tree);

    this.parent = null;
  }

  _createClass(Tree, [{
    key: "addLeaf",
    value: function addLeaf(id) {
      /*Assigns a random ID to each node in order to randomly distribute across the tree*/
      var num = Math.round(Math.random() * 100);
      var id = id;
      var leaf = new Node(num, id);
      /*If root, do this*/

      if (this.parent === null) {
        this.parent = leaf;
        this.renderLeaf('root', leaf.num, leaf.id);
      } else {
        this.sortLeaf(this.parent, leaf);
      }
    }
    /*Recursive function to sort through the tree looking for a node with no child*/

  }, {
    key: "sortLeaf",
    value: function sortLeaf(parent, leaf) {
      if (leaf.num < parent.num) {
        if (parent.left === null) {
          parent.left = leaf;
          this.renderLeaf('left', leaf.num, leaf.id, parent.id);
        } else {
          this.sortLeaf(parent.left, leaf);
        }
      } else {
        if (parent.right === null) {
          parent.right = leaf;
          this.renderLeaf('right', leaf.num, leaf.id, parent.id);
        } else {
          this.sortLeaf(parent.right, leaf);
        }
      }
    }
    /*Generates and outputs the relevant markup for each node*/

  }, {
    key: "renderLeaf",
    value: function renderLeaf(css, num, id, parentId) {
      if (css !== 'root') {
        /*If not the root, then find the appropriate li container to insert to*/
        var plantPot = document.getElementById(css + '-' + parentId);
      } else {
        var plantPot = document.getElementById('treeSec');
      }

      plantPot.innerHTML += '<div class="node ' + css + '" id="' + id + '">' + num + '</div><ul class="halfCon"><li class="leftBranch" id="left-' + id + '"></li><li class="rightBranch" id="right-' + id + '"></li></ul>';
    }
  }]);

  return Tree;
}();
/*Function called by onClick. Invokes constructors*/


function GenTree(leaves) {
  var plantPot = document.getElementById('treeSec');

  if (leaves > 100) {
    plantPot.innerHTML = '<span class="error">Value must be less than 100</span>';
    return;
  }

  plantPot.innerHTML = '';
  var sapling = new Tree();
  /*Loops and adds nodes for number specified by user*/

  for (var counter = 0; counter < leaves; counter++) {
    sapling.addLeaf(counter);
  }
}
