
function ejecutar(){
    //const element = document.activeElement.tagName;
    // console.log(element);
    // let base = document.baseURI;
    // console.log(base);
    // encoding = document.characterSet;
    // console.log(encoding)
    // const myElement = document.getElementById("myp");
    // myElement.style.color = "red";

    // const collection = document.getElementsByClassName("myclassp");
    // console.log(collection)
    // collection[2].style.color = "blue"
    // let elements = document.getElementsByName("nombre1");
    // console.log(elements)
    // elements[1].checked = true;
    // elements[2].disabled = true;
    // const collection = document.getElementsByTagName("*");
    // console.log(collection)
    // collection[0].disabled = true
    // const para = document.createElement("p");
    // para.innerText = "This is a paragraph";
    // document.body.appendChild(para);
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode("Hello World");
    h1.appendChild(textNode);
    document.body.appendChild(h1)

    const select  = document.createElement("select")
    const op1 = document.createElement("option")
    const op2 = document.createElement("option")
    const op3 = document.createElement("option")
    op1.value = 1
    op1.innerText = "bmw"
    op1.id = "id1"
    op2.value = 2
    op2.innerText = "mercedes"
    op3.value = 3
    op3.innerText = "jaguar"
    select.id = "select1"
    select.appendChild(op1)
    select.appendChild(op2)
    select.appendChild(op3)
    document.body.appendChild(select)

    let strHtml = '<select><option value="1">bmw</option><option value="2">mercedes</option><option value="3">jaguar</option></select>'
    let div = document.getElementById('divselect')
    div.innerHTML = strHtml

    let zaku = document.getElementById('zaku3')
    let url = zaku.src;
    console.log(url)
    zaku.src = "https://files.cults3d.com/uploaders/17090299/illustration-file/64e4abb7-98b3-4bd1-8235-b2452187c278/zaku-iii-2.jpg"
    document.title = "Mira mi nuevo Zaku 3";

    const collection = document.getElementsByTagName("*");
    console.log(collection)
}