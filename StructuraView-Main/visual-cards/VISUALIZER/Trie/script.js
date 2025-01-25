

let data = { nodeId: 0, value: 'root', endOfWord: false, children: [], childrenCharacter: {} };
let curId = 1;

const width = Math.max(100, window.innerWidth - 50);
const height = Math.max(100, window.innerHeight - 200);
const nodeRadius = 20;
const LinkStroke = 4;
const animationDuration = 500;
const padding = 40;

d3.select('.Canvas').append('svg').append('g');

const freezeButtons = () => {
  document.getElementById('InsertButton').disabled = true;
  document.getElementById('DeleteButton').disabled = true;
};
const unfreezeButtons = () => {
  document.getElementById('InsertButton').disabled = false;
  document.getElementById('DeleteButton').disabled = false;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const init = () => {
  const treemap = d3.tree().size([width, height]);
  const newTree = treemap(d3.hierarchy(data, (d) => d.children));

  newTree.y += padding;

  const nodes = d3
    .select('.Canvas > svg g')
    .selectAll('g.node')
    .data(newTree)
    .enter()
    .append('g')
    .attr('class', () => 'node');
  nodes
    .append('circle')
    .attr('id', (d) => `circle${d.data.nodeId}`)
    .attr('r', nodeRadius)
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('value', (d) => d.data.value);
  nodes
    .append('text')
    .attr('dx', (d) => d.x)
    .attr('dy', (d) => d.y)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('font-size', '20px')
    .attr('font-weight', 'bold')
    .text((d) => d.data.value);
};
init();

const update = (oldData, newData, parentId, childId) => {


  const treemap = d3.tree().size([width, height]);
  const oldTree = treemap(d3.hierarchy(oldData, (d) => d.children));
  const newTree = treemap(d3.hierarchy(newData, (d) => d.children));
  let oldTreeArray = oldTree.descendants();
  let newTreeArray = newTree.descendants();

  for (let i = 0; i < newTreeArray.length; i++) {
    let oldPosition = {};
    for (let j = 0; j < oldTreeArray.length; j++) {
      if (newTreeArray[i].data.nodeId == childId) {
        if (oldTreeArray[j].data.nodeId == parentId) {
          oldPosition = oldTreeArray[j];
        }
      } else {
        if (oldTreeArray[j].data.nodeId == newTreeArray[i].data.nodeId) {
          oldPosition = oldTreeArray[j];
        }
      }
    }
    newTreeArray[i].oldX = oldPosition.x || 0;
    newTreeArray[i].oldY = (oldPosition.y || 0) + padding;
    newTreeArray[i].y += padding;
  }

  d3.select('.Canvas > svg g').remove();
  d3.select('.Canvas > svg').append('g');

  let allLinks = [];
  for (let i = 0; i < newTreeArray.length; i++) {
    if (!newTreeArray[i].children) continue;
    for (let j = 0; j < newTreeArray[i].children.length; j++) {
      allLinks.push({
        parent: newTreeArray[i],
        child: newTreeArray[i].children[j],
      });
    }
  }

  const links = d3
    .select('.Canvas > svg g')
    .selectAll('g.link')
    .data(allLinks)
    .enter()
    .append('g')
    .append('line')
    .attr('id', (d) => `link${d.parent.data.nodeId}D${d.child.nodeId}`)
    .attr('stroke-width', LinkStroke)
    .attr('stroke', 'black')
    .attr('x1', (d) => d.parent.oldX)
    .attr('y1', (d) => d.parent.oldY)
    .attr('x2', (d) => d.child.oldX)
    .attr('y2', (d) => d.child.oldY);
  links
    .transition()
    .duration(animationDuration)
    .attr('x1', (d) => d.parent.x)
    .attr('y1', (d) => d.parent.y)
    .attr('x2', (d) => d.child.x)
    .attr('y2', (d) => d.child.y);

  const nodes = d3
    .select('.Canvas > svg g')
    .selectAll('g.node')
    .data(newTree)
    .enter()
    .append('g')
    .attr('id', (d) => `node${d.data.nodeId}`)
    .attr('class', (d) => (d.data.endOfWord ? 'endOfWordNode' : 'node'));
  nodes
    .append('circle')
    .attr('id', (d) => `circle${d.data.nodeId}`)
    .attr('r', nodeRadius)
    .attr('cx', (d) => d.oldX)
    .attr('cy', (d) => d.oldY)
    .attr('value', (d) => d.data.value);
  nodes
    .append('text')
    .attr('dx', (d) => d.oldX)
    .attr('dy', (d) => d.oldY)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('fill', 'white')
    .attr('font-size', '20px')
    .attr('font-weight', 'bold')
    .text((d) => d.data.value);

  nodes
    .transition()
    .duration(animationDuration)
    .attr('transform', function (d) {
      if (d.data.value != null) return `translate(${parseInt(d.x - d.oldX)}, ${parseInt(d.y - d.oldY)})`;
      else return 'translate(0,0)';
    });

  data = newData;
};

const addNode = async () => {
  let str = document.getElementById('InsertNodeField').value;
  if (str == '') {
    return;
  }
  if (str.length > 12) {
    alert('Word Length should be less than 12.');
    return;
  }
  str = str.toLowerCase();
  document.getElementById('InsertNodeField').value = '';

  freezeButtons();

  let oldData = JSON.parse(JSON.stringify(data));
  let newData = JSON.parse(JSON.stringify(data));
  let node = newData;

  for (let i = 0; i < str.length; i++) {
    if (str[i] in node.childrenCharacter && node.childrenCharacter[str[i]] == true) {
      for (let j = 0; j < node.children.length; j++) {
        if (node.children[j].value == str[i]) {
          node = node.children[j];
          break;
        }
      }
      if (i == str.length - 1) {
        node.endOfWord = true;
        update(newData, newData, -1, -1);
      }
    } else {
      node.childrenCharacter[str[i]] = true;
      node.children.push({
        nodeId: curId,
        value: str[i],
        endOfWord: i == str.length - 1,
        children: [],
        childrenCharacter: {},
      });
      curId++;
      update(oldData, newData, node.nodeId, node.children[node.children.length - 1].nodeId);
      oldData = JSON.parse(JSON.stringify(newData));
      node = node.children[node.children.length - 1];
    }
    const nodeEle = document.getElementById(`node${node.nodeId}`);
    let originalClass = '';
    if (nodeEle) {
      originalClass = nodeEle.className.baseVal;
      nodeEle.className.baseVal = 'highlightedNode';
    }
    await sleep(700);
    if (nodeEle) {
      nodeEle.className.baseVal = originalClass;
    }
  }
  unfreezeButtons();
};

const deleteNodeUtil = async () => {
  if (data.children.length == 0) {
    alert('Trie is empty');
    return;
  }
  let str = document.getElementById('DeleteNodeField').value;
  if (str == '') {
    return;
  }
  str = str.toLowerCase();
  document.getElementById('DeleteNodeField').value = '';

  freezeButtons();

  const newData = JSON.parse(JSON.stringify(data));

  const deleteNode = async (parent, node, str, depth) => {
    const nodeEle = document.getElementById(`node${node.nodeId}`);
    let originalClass = '';
    if (nodeEle) {
      originalClass = nodeEle.className.baseVal;
      nodeEle.className.baseVal = 'highlightedNode';
    }
    await sleep(700);
    if (nodeEle) {
      nodeEle.className.baseVal = originalClass;
    }

    if (depth == str.length) {
      if (node.endOfWord == false) {
        alert('Word not found in trie');
        return false;
      }
      node.endOfWord = false;


      if (node.children.length == 0) {
        const oldData = JSON.parse(JSON.stringify(newData));
        delete parent.childrenCharacter[str[depth - 1]];
        let charIndex = 0;
        for (let i = 0; i < parent.children.length; i++) {
          if (parent.children[i].value == str[depth - 1]) {
            charIndex = i;
          }
        }
        parent.children.splice(charIndex, 1);
        update(oldData, newData, -1, -1);
      } else {
        update(newData, newData, -1, -1);
      }
      return true;
    }

    if (str[depth] in node.childrenCharacter) {
      let charIndex = 0;
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].value == str[depth]) {
          charIndex = i;
        }
      }

      const isWordFound = await deleteNode(node, node.children[charIndex], str, depth + 1);
      if (isWordFound == false) {
        return false;
      }


      if (parent && node.children.length == 0 && node.endOfWord == false) {
        const nodeEle = document.getElementById(`node${node.nodeId}`);
        if (nodeEle) {
          nodeEle.className.baseVal = 'highlightedNode';
        }
        await sleep(700);

        const oldData = JSON.parse(JSON.stringify(newData));
        parent.childrenCharacter[str[depth - 1]] = false;
        charIndex = 0;
        for (let i = 0; i < parent.children.length; i++) {
          if (parent.children[i].value == str[depth - 1]) {
            charIndex = i;
          }
        }
        parent.children.splice(charIndex, 1);
        update(oldData, newData, -1, -1);
      }
      return true;
    } else {
      alert('Word not found in trie');
      return false;
    }
  };

  let node = newData;
  let parent = null;
  await deleteNode(parent, node, str, 0);

  unfreezeButtons();
};

document.getElementById('InsertButton').addEventListener('click', addNode);
document.getElementById('DeleteButton').addEventListener('click', deleteNodeUtil);

document.getElementById('InsertNodeField').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    document.getElementById('InsertButton').click();
  }
});
document.getElementById('DeleteNodeField').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    document.getElementById('DeleteButton').click();
  }
});