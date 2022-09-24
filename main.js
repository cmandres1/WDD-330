const getList = document.getElementById('link-list');
const links = [{
        label: "Week 01 Notes",
        url: "Week01/index.html"
    },
    {
        label: "Week 02 Notes",
        url: "Week02/index.html"
    },
    {
        label: "Week 03 Notes",
        url: "Week03/index.html"
    }
];

links.forEach((link) => {
    const list = document.createElement("li");
    const url = document.createElement("a");
    url.setAttribute("href", link.url);
    url.textContent = link.label;
    list.appendChild(url);
    getList.appendChild(list);
})