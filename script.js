const container = document.getElementById("container");
const tabList = [];
class Tabs {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.tab = function () {
            return `<div class="tab"> ` + this.title +` `+ this.content + ` </div>`;
        };
    }
}

const tab1 = new Tabs("HTML", "Displays content for the page");
const tab2 = new Tabs("CSS", "Styles the content for the page");
const tab3 = new Tabs("JS", "Manipulates the content for the page");

tabList.push(tab1, tab2, tab3);

let text = "";
for(let t in tabList){
    text += tabList[t].tab();
}

container.innerHTML = text;