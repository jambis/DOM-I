const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav Items
let navA = document.querySelectorAll("nav a");
navA.forEach(
  (el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

//CTA Section
let ctaTextElements = document.querySelectorAll("div.cta-text");
ctaTextElements[0].children[0].textContent = siteContent.cta.h1;
ctaTextElements[0].children[1].textContent = siteContent.cta.button;

let ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src", siteContent.cta["img-src"]);

//Main Content Section
let mainContent = document.querySelector(".main-content");

let mainHeaders4 = mainContent.querySelectorAll(":scope h4");
mainHeaders4[0].textContent = siteContent["main-content"]["features-h4"];
mainHeaders4[1].textContent = siteContent["main-content"]["about-h4"];
mainHeaders4[2].textContent = siteContent["main-content"]["services-h4"];
mainHeaders4[3].textContent = siteContent["main-content"]["product-h4"];
mainHeaders4[4].textContent = siteContent["main-content"]["vision-h4"];

let mainParagraphs = mainContent.querySelectorAll(":scope p");
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

let mainContentImage = document.querySelector("#middle-img");
mainContentImage.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

//Contact Section
let contactContent = document.querySelectorAll(".contact");
contactContent[0].children[0].textContent =
  siteContent["contact"]["contact-h4"];
contactContent[0].children[1].textContent = siteContent["contact"]["address"];
contactContent[0].children[2].textContent = siteContent["contact"]["phone"];
contactContent[0].children[3].textContent = siteContent["contact"]["email"];

//Footer
let footerContent = document.querySelector("footer > p");
footerContent.textContent = siteContent["footer"]["copyright"];

//Navigation Text Color to Green
let navChildren = [...document.querySelectorAll("nav")[0].children];
navChildren.forEach(el => (el.style.color = "green"));

//Adding 2 Items to the Navigation
let extraLink1 = document.createElement("a");
let extraLink2 = document.createElement("a");

extraLink1.textContent = "Home";
extraLink2.textContent = "Login";

let nav = document.querySelector("nav");
nav.prepend(extraLink1);
nav.appendChild(extraLink2);

extraLink1.style.color = "green";
extraLink2.style.color = "green";
extraLink1.href = "";
extraLink2.href = "";

/*Study tomorrow's lesson on events and try to integrate a button that 
can update content on the site with a click of a button. You could build 
a similar data object with new values to help you test the click event.*/
