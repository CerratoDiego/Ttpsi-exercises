'use strict'

function crea() {
    localStorage.setItem("bookstore_xml", bookstore);
    alert("Dati salvati correttamente nel localStorage")
}

function visualizza() {
    // lettura della stringa dal localStorage
    let xml = localStorage.getItem("bookstore_xml");
    let _tbody = document.getElementById("tabLibri")

    console.log(xml)

    let parse = new DOMParser();
    let xmlDoc = parse.parseFromString(xml, "text/xml");
    let root = xmlDoc.documentElement;
    //console.log("Children: ", root.children.length);
    //console.log("ChildNods: ", root.childNodes.length);
    for(let i = 0; i < root.children.length; i++)
    {
        let book = root.children[i]
        let cat = "", tit = "", lin = "", aut = "", anno = "", pre = ""
        for (const item of book.children) {
            switch(item.nodeName) {
                case "title":
                    tit = item.textContent
                    if(item.hasAttribute("lang"))
                        lin = item.getAttribute("lang")
                    break;
                case "author":
                    aut += item.textContent + "; "
                    break;
                case "year":
                    anno = item.textContent
                    break;
                case "price":
                    pre = item.textContent
                    break;
            }
        }
        if(book.hasAttribute("category"))
            cat = book.getAttribute("category")

        let _tr = document.createElement("tr")
        _tbody.appendChild(_tr)

        let _td = document.createElement("td")
        _tr.appendChild(_td)
        _td.innerHTML = tit

        _td = document.createElement("td")
        _tr.appendChild(_td)
        _td.innerHTML = cat

        _td = document.createElement("td")
        _tr.appendChild(_td)
        _td.innerHTML = lin

        _td = document.createElement("td")
        _tr.appendChild(_td)
        _td.innerHTML = aut

        _td = document.createElement("td")
        _tr.appendChild(_td)
        _td.innerHTML = anno

        _td = document.createElement("td")
        _tr.appendChild(_td)
        _td.innerHTML = pre
    }
}