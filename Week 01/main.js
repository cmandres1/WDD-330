const getList = document.getElementById('link-list');
const links = [{
        label: "Week1 Notes",
        url: "Week1/index.html"
    },
    {
        label: "Week2 Notes",
        url: "Week2/index.html"
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