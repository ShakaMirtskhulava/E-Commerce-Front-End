let NavBarIframe = document.getElementById("NavBar");

NavBarIframe.addEventListener("load", () => {
    let iframeWindow = NavBarIframe.contentWindow;
    
    let HomePageBtn = iframeWindow.document.getElementById("HomePageBtn");
    let AboutUsPageBtn = iframeWindow.document.getElementById("AboutUsPageBtn");
    let ContactUsPageBtn = iframeWindow.document.getElementById("ContactUsPageBtn");
    let BlogsPageBtn = iframeWindow.document.getElementById("BlogsPageBtn");
    let Logo = iframeWindow.document.getElementById("Logo");

    
    Logo.addEventListener("click", () => {
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../Index.html";
        else if(window.location.href.includes("PHP"))
            window.location.href = "../HTML/Index.html";
        else
            window.location.href = "Index.html";
    });
    HomePageBtn.addEventListener("click", () => {
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../Index.html";
        else if(window.location.href.includes("PHP"))
            window.location.href = "../HTML/Index.html";
        else
            window.location.href = "Index.html";
    });
    AboutUsPageBtn.addEventListener("click", () => {
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../AboutUs.html";
        else if(window.location.href.includes("PHP"))
            window.location.href = "../HTML/AboutUs.html";
        else
            window.location.href = "AboutUs.html";
    });
    ContactUsPageBtn.addEventListener("click", () => {
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../../PHP/ContactUs.php";
        else if(window.location.href.includes("HTML"))
            window.location.href = "../PHP/ContactUs.php";
        else
            window.location.href = "ContactUs.php";
    });
    BlogsPageBtn.addEventListener("click", ()=>{
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../../PHP/BlogsPage.php";
        else if(window.location.href.includes("HTML"))
            window.location.href = "../PHP/BlogsPage.php";
        else
            window.location.href = "BlogsPage.php";
    });
    

    let acerTravelMateProductDiv = document.getElementById("AcerTravelMateProductDiv"); 
    if(acerTravelMateProductDiv != null && acerTravelMateProductDiv != undefined){
        acerTravelMateProductDiv.addEventListener("click", () => {
            //If the current location is not in the folder ProductPages
            if(!window.location.href.includes("ProductPages"))
            window.location.href = "ProductPages/AcerTravelMate.html";
            else
            window.location.href = "AcerTravelMate.html";
        });
    }

    let xiaomiRedmiNote9ProductDiv = document.getElementById("XiaomiRedmiNote9ProductDiv");
    if(xiaomiRedmiNote9ProductDiv != null && xiaomiRedmiNote9ProductDiv != undefined){
        xiaomiRedmiNote9ProductDiv.addEventListener("click", () => {
            //If the current location is not in the folder ProductPages
            if(!window.location.href.includes("ProductPages"))
            window.location.href = "ProductPages/XiaomiRedmiNote9.html";
            else
            window.location.href = "XiaomiRedmiNote9.html";
        });
    }
        
    let appleiPhone13ProductDiv = document.getElementById('AppleiPhone13ProductDiv');
    if(appleiPhone13ProductDiv != null && appleiPhone13ProductDiv != undefined){
        appleiPhone13ProductDiv.addEventListener('click',() => {
            //If the current location is not in the folder ProductPages
            if(!window.location.href.includes("ProductPages"))
            window.location.href = "ProductPages/AppleiPhone13.html";
            else
            window.location.href = "AppleiPhone13.html";
        });
    }

    let cyberBlast5100XProductDiv = document.getElementById('CyberBlast5100XProductDiv');
    if(cyberBlast5100XProductDiv != null && cyberBlast5100XProductDiv != undefined){
        cyberBlast5100XProductDiv.addEventListener('click',() => {
            //If the current location is not in the folder ProductPages
            if(!window.location.href.includes("ProductPages"))
            window.location.href = "ProductPages/cyberBlast5100X.html";
            else
            window.location.href = "cyberBlast5100X.html";
        });
    }
    
    let CurrentPage = window.location.href;
    if(CurrentPage.includes("Index.html")){
        HomePageBtn.style.color = "purple";
    }
    else if(CurrentPage.includes("AboutUs.html")){
        AboutUsPageBtn.style.color = "purple";
    }
    else if(CurrentPage.includes("ContactUs.html")){
        ContactUsPageBtn.style.color = "purple";
    }
    else if(CurrentPage.includes("BlogsPage.html")){
        BlogsPageBtn.style.color = "purple";
    }
    else{
        HomePageBtn.style.color = "purple";
    }
    
});

let footer = document.getElementById("footer");

footer.addEventListener("load", () => {

    let iframeWindow = footer.contentWindow;
    
    let AboutUsPageBtn = iframeWindow.document.getElementById("AboutUsPageBtn");
    let BlogsPageBtn = iframeWindow.document.getElementById("BlogsPageBtn");
    
    AboutUsPageBtn.addEventListener("click", () => {
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../AboutUs.html";
        else if(window.location.href.includes("PHP"))
            window.location.href = "../HTML/AboutUs.html";
        else
            window.location.href = "AboutUs.html";
    });
    BlogsPageBtn.addEventListener("click", ()=>{
        if(window.location.href.includes("ProductPages"))
            window.location.href = "../../PHP/BlogsPage.php";
        else if(window.location.href.includes("HTML"))
            window.location.href = "../PHP/BlogsPage.php";
        else
            window.location.href = "BlogsPage.php";
    });

});
