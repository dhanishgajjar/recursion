let data = [
	{ id: 1, "parent": null, "name": "Electronics" },
	{ id: 2, "parent": 1, "name": "Television" },
	{ id: 3, "parent": 1, "name": "Portable Electronics" },
	{ id: 4, "parent": 2, "name": "Tube" },
	{ id: 5, "parent": 2, "name": "LCD" },
	{ id: 6, "parent": 2, "name": "Plasma" },
	{ id: 7, "parent": 3, "name": "MP3 Players" },
	{ id: 8, "parent": 3, "name": "CD Players" },
	{ id: 9, "parent": 3, "name": "2 Way Radios" },
	{ id: 10, "parent": 7, "name": "Flash" }
]

let render = "";

function getChildren(array, parent_index) {
	let children = []
	for(let i = 0; i < array.length; i++) {
		let node = array[i]
		if(node["id"] === parent_index) {
			render += "<ul><li>" + node["name"]
			continue
		}
		if(node["parent"] === parent_index) {
			children[node["name"]] = {
				"id" : node["id"], "name" : node["name"], "children" : getChildren(array, node["id"])
			}
		}
	}
	render += "</li></ul>"
	return children
}

let items = getChildren(data, null)
let container = document.getElementById("output")
container.innerHTML += render;
