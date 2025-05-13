import {
  bio,
  skills,
  projects,
  education,
  experience,
  footer,
} from "../data/data.js";


function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const h3 = getElement("li", null);
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

function populateProjects(items, id) {
  const projectdesign = document.getElementById(id);
  const count = 4; // Number of blogs to display

  for (let i = 0; i < count; i++) {
      // Create a wrapper for the blog card
      const blogCard = document.createElement("div");
      blogCard.className = "blog-card";
      blogCard.style = `
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          padding: 16px;
          font-size: 14px;
          background: linear-gradient(135deg, rgb(216, 184, 155), rgb(228, 200, 161));
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          min-height: 150px;
          cursor: pointer;
      `;

      // Wrap the card content in an anchor tag
      const blogLink = document.createElement("a");
      blogLink.href = items[i].link;
      blogLink.target = "_blank";
      blogLink.style = "text-decoration: none; color: black; display: block;";

      blogCard.appendChild(blogLink);

      // Blog Title
      const blogTitle = document.createElement("h4");
      blogTitle.className = "blog-heading";
      blogTitle.innerHTML = items[i].title;
      blogTitle.style = "margin: 0 0 8px; font-size: 18px; font-weight: bold;";
      blogLink.appendChild(blogTitle);


      // Blog Description
      const blogDescription = document.createElement("p");
      blogDescription.className = "blog-description";
      blogDescription.innerHTML = items[i].content;
      blogDescription.style = "margin: 0 0 12px; font-size: 12px; color: #000;";
      blogLink.appendChild(blogDescription);
      
      // Categories (Tags)
      const categoriesDiv = document.createElement("div");

      for (const category of items[i].tags) {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.innerHTML = category;
          categoriesDiv.appendChild(badge);
      }
      blogLink.appendChild(categoriesDiv);
      // Append the blog card to the container
      projectdesign.appendChild(blogCard);
  }
}

function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);

  for (let i = 0; i < items.length; i++) {
    let spanTimelineSublabel = document.createElement("span");
    spanTimelineSublabel.className = "timeline-sublabel";
    spanTimelineSublabel.innerHTML = items[i].subtitle;

    let spanh2 = document.createElement("p");
    spanh2.innerHTML = items[i].duration;

    let h2TimelineLabel = document.createElement("h2");
    h2TimelineLabel.innerHTML = items[i].title;
  

    let divTimelineLabel = document.createElement("div");
    divTimelineLabel.className = "timeline-label";
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanh2);
    divTimelineLabel.append(spanTimelineSublabel);

    for (let j = 0; j < items[i].details.length; j++) {
      let pTimelineText = document.createElement("p");
      pTimelineText.className = "timeline-text";
      pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
      divTimelineLabel.append(pTimelineText);
    }

    let divTags = document.createElement("div");
    for (let j = 0; j < items[i].tags.length; j++) {
      let spanTags = document.createElement("span");
      spanTags.className = "badge";
      spanTags.innerHTML = items[i].tags[j];
      divTags.append(spanTags);
    }
    divTimelineLabel.append(divTags);

    let iFa = document.createElement("i");
    iFa.className = "fa fa-" + items[i].icon;

    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }

  let divTimelineIcon = document.createElement("div");
  divTimelineIcon.className = "timeline-icon color-2";

  let divTimelineEntryInner = document.createElement("div");
  divTimelineEntryInner.className = "timeline-entry-inner";
  divTimelineEntryInner.append(divTimelineIcon);

  let article = document.createElement("article");
  article.className = "timeline-entry begin animate-box";
  article.append(divTimelineEntryInner);

  mainContainer.append(article);
}

function populateLinks(items, id) {
  let footer = document.getElementById(id);

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      let span = document.createElement("span");
      span.className = "col";

      let p = document.createElement("p");
      p.className = "col-title";
      p.innerHTML = item.label;
      span.append(p);

      let nav = document.createElement("nav");
      nav.className = "col-list";

      let ul = document.createElement("ul");
      item.data.forEach(function (data) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        if (data.link) {
          a.href = data.link;
          a.target = "_blank";
        }
        if (data.func) {
          a.setAttribute("onclick", data.func);
        }
        a.innerHTML = data.text;

        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      span.append(nav);
      footer.append(span);
    }

    if (item.label === "copyright-text") {
      let div = document.createElement("div");
      div.className = "copyright-text no-print";
      item.data.forEach(function (copyright) {
        let p = document.createElement("p");
        p.innerHTML = copyright;
        div.append(p);
      });
      footer.append(div);
    }
  });
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

populateBio(bio, "bio");

populateSkills(skills, "skills");

populateProjects(projects, "projects");

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

populateLinks(footer, "footer");