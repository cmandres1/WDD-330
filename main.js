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
    },
    {
        label: "Week 04 Notes",
        url: "Week04/index.html"
    },
    {
        label: "Week 05 Notes",
        url: "Week05/index.html"
    },
    {
        label: "Week 06 Notes",
        url: "Week06/index.html"
    },
    {
        label: "Week 07 Notes",
        url: "Week07/index.html"
    },
    {
        label: "Week 08 Notes",
        url: "Week08/index.html"
    },
    {
        label: "Week 09 Notes",
        url: "Week09/index.html"
    },
    {
        label: "Week 10 Notes",
        url: "Week10/index2.html"
    },
    {
        label: "Week 11 Notes",
        url: "Week11/index2.html"
    },
    {
        label: "Challenge",
        url: "Challenge/index.html"
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