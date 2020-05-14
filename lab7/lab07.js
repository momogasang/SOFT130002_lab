const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tips: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tips: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];

function addDiv(i) {
    var newDiv = 3("div");
    newDiv.className = "item";//item

    //Genre标题
    var title = document.createElement("p");//对应css中的 .item p
    title.innerHTML = "Genre:" + works[i].tips;
    newDiv.appendChild(title);

    //创建html元素和对应的css名字
    var Namecontainor = document.createElement("div");
    Namecontainor.className = "inner-box";
    //对应css中的 h3和h4
    var authorName = document.createElement("h3");
    var authorLifetime = document.createElement("h4");
    //赋值
    authorLifetime.innerHTML = "&nbsp&nbsp" + "lifetime:" + works[i].lifetime;//&nbsp添加空格
    authorName.innerHTML = works[i].author;
    //排列模式
    authorName.style.display = "inline";
    authorLifetime.style.display = "inline";

    //添加到div中
    Namecontainor.appendChild(authorName);
    Namecontainor.appendChild(authorLifetime);
    //div加到最大的div中
    newDiv.appendChild(Namecontainor);

    //创建html元素和名字——对应css
    var Photo = document.createElement("div");
    Photo.className = "inner-box";
    var photoTitle = document.createElement("h3");
    //给html元素赋值
    photoTitle.innerHTML = "Popular Photos";
    for (var j = 0; j < works[i].photos.length; j++) {
        var images = document.createElement("img");
        images.className = "photo";
        images.src = works[i].photos[j];
        images.style.display = "inline";
        Photo.appendChild(images);
    }
    //添加到Photo中
    Photo.appendChild(photoTitle);
    newDiv.appendChild(Photo);

    var visit = document.createElement("button");
    visit.innerHTML = "Visit";
    newDiv.appendChild(visit);

    //获取指定justify类名的元素
    var justify = document.getElementsByClassName("flex-container justify");
    justify[0].appendChild(newDiv);
}

//执行函数
for (i = 0; i < works.length; i++) {
    addDiv(i);
}