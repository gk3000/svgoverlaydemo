//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//

//import { portfolio } from "./data.js";

const portfolio = [
  {
    title: "AromatizadosGallo",
    numImages: 4,
    videoIndex: [4],
    category: ["Visibility"],
    Brand: ["Gallo"],
    Company: ["GalloWW"],
  },

  {
    title: "PersonalCare",
    numImages: 20,
    category: ["Visibility"],
    Brand: ["Axe", "Rexona", "Vaseline", "Dove"],
    Company: ["Unilever"],
  },
  {
    title: "CompalAlma",
    numImages: 4,
    category: ["Branding", "Packaging"],
    Brand: ["Compal"],
    Company: ["SumolCompal"],
  },

  {
    title: "PackagingAlsa",
    numImages: 28,
    category: ["Packaging", "Visibility"],
    Brand: ["Alsa"],
    Company: ["DrOetker"],
  },

  {
    title: "MarcasCompal",
    numImages: 6,
    category: ["Visibility"],
    Brand: ["Compal"],
    Company: ["SumolCompal"],
  },

  {
    title: "herbsKnorr",
    numImages: 12,
    category: ["Packaging"],
    Brand: ["Knorr"],
    Company: ["Unilever"],
  },

  {
    title: "SopasFrescasKnorr",
    numImages: 17,
    category: ["Packaging", "Visibility"],
    Brand: ["Knorr"],
    Company: ["Unilever"],
  },

  {
    title: "GalloChina",
    numImages: 11,
    category: ["Visibility"],
    Brand: ["Gallo"],
    Company: ["GalloWW"],
  },

  {
    title: "ProjectoCube",
    numImages: 38,
    category: ["Visibility"],
    Brand: ["Gallo"],
    Company: ["GalloWW"],
  },
  {
    title: "PackagingPlanta",
    numImages: 10,
    category: ["Packaging"],
    Brand: ["Planta"],
    Company: ["Upfield"],
  },

  {
    title: "DigitalPep+",
    numImages: 14,
    videoIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    category: ["Digital"],
    Brand: ["Lays"],
    Company: ["Pepsico"],
  },

  {
    title: "Expanscience",
    numImages: 7,
    category: ["Visibility"],
    Brand: ["Dove", "Axe", "Vaseline", "Rexona"],
    Company: ["Unilever"],
  },

  {
    title: "FilmeFlamingHot",
    numImages: 1,
    videoIndex: [1],
    category: ["Digital"],
    Brand: ["Doritos"],
    Company: ["Pepsico"],
  },

  {
    title: "MupiDigitalOnduladas",
    numImages: 1,
    videoIndex: [1],
    category: ["Digital"],
    Brand: ["Gallo"],
    Company: ["Pepsico"],
  },

  {
    title: "MupiWCL",
    numImages: 1,
    videoIndex: [1],
    category: ["Visibility"],
    Brand: ["Lays"],
    Company: ["Pepsico"],
  },
  {
    title: "PomarPedagogico",
    numImages: 23,

    category: ["Visibility"],
    Brand: ["Compal"],
    Company: ["SumolCompal"],
  },

  {
    title: "SpalConsumidor",
    numImages: 3,
    category: ["Visibility"],
    Brand: ["Gallo"],
    Company: ["GalloWW"],
  },
];

//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//
//===============================================================//

const allBrands = [];
const allCompanies = [];

portfolio.forEach((element) => {
  element.Brand.forEach((ele) => {
    if (!allBrands.includes(ele)) {
      allBrands.push(ele);
    }
  });

  if (!allCompanies.includes(element.Company[0])) {
    allCompanies.push(element.Company[0]);
  }
});

//========================================================//
//===================Settings Object======================//
//========================================================//

const settings = {
  sorting: "linear", // Always Lower Case
  logos: "Company", // possible values "Brand" or "Company"
  autoPlay: 0,
  excludedBrands: [],
  excludedCompanies: [],
};

let linearButton = document.getElementById("linear");
let randomButton = document.getElementById("random");
let brandButton = document.getElementById("brand");
let companyButton = document.getElementById("company");

//-------------- Linear/Random Button
if (settings.sorting == "linear") {
  linearButton.classList.remove("buttonDisable");
  randomButton.classList.add("buttonDisable");
} else {
  linearButton.classList.add("buttonDisable");
  randomButton.classList.remove("buttonDisable");
}

linearButton.addEventListener("click", () => {
  linearButton.classList.remove("buttonDisable");
  randomButton.classList.add("buttonDisable");
  settings.sorting = "linear";
});

randomButton.addEventListener("click", () => {
  linearButton.classList.add("buttonDisable");
  randomButton.classList.remove("buttonDisable");
  settings.sorting = "random";
});

//-------------- Logos Button

if (settings.logos == "Brand") {
  brandButton.classList.remove("buttonDisable");
  companyButton.classList.add("buttonDisable");
} else {
  brandButton.classList.add("buttonDisable");
  companyButton.classList.remove("buttonDisable");
}

brandButton.addEventListener("click", () => {
  brandButton.classList.remove("buttonDisable");
  companyButton.classList.add("buttonDisable");
  settings.logos = "Brand";

  //console.log(settings.logos);
});

companyButton.addEventListener("click", () => {
  brandButton.classList.add("buttonDisable");
  companyButton.classList.remove("buttonDisable");
  settings.logos = "Company";
  //console.log(settings.logos);
});

//-------------- Show Company Logos in Settings

let companyLogos = document.getElementById("companyLogos");

allCompanies.forEach((element) => {
  let imageLogo = document.createElement("img");
  imageLogo.src = `Company/${element}.png`;
  companyLogos.appendChild(imageLogo);

  imageLogo.addEventListener("click", () => {
    if (!settings.excludedCompanies.includes(element)) {
      settings.excludedCompanies.push(element);

      console.log("=======>  " + settings.excludedCompanies);

      imageLogo.classList.add("buttonDisable");
    } else {
      settings.excludedCompanies.splice(
        settings.excludedCompanies.indexOf(element),
        1
      );
      imageLogo.classList.remove("buttonDisable");
    }
  });
});

//-------------- Show Brand Logos in Settings

let brandLogos = document.getElementById("brandLogos");

allBrands.forEach((element) => {
  let imageLogo = document.createElement("img");
  imageLogo.src = `Brands/${element}.png`;
  brandLogos.appendChild(imageLogo);

  imageLogo.addEventListener("click", () => {
    if (!settings.excludedBrands.includes(element)) {
      settings.excludedBrands.push(element);
      //console.log(settings.excludedBrands);
      imageLogo.classList.add("buttonDisable");
    } else {
      settings.excludedBrands.splice(
        settings.excludedBrands.indexOf(element),
        1
      );
      imageLogo.classList.remove("buttonDisable");
    }
  });
});
//================== Random

let portfolioToRender = portfolio;

const settingsFilter = () => {
  let settingsArray = [...portfolio];

  //console.log("Its working");
  //console.log(settings.sorting);

  if (settings.sorting == "random") {
    settingsArray.forEach((element) => {
      let pickOne = Math.floor(Math.random() * settingsArray.length);
      //console.log(settingsArray.length, pickOne);

      let removeItem = settingsArray.splice(pickOne, 1);
      settingsArray.push(removeItem[0]);
      //console.log(removeItem, settingsArray);
    });
  }

  settingsArray = settingsArray.filter((ele) =>
    ele.Brand.some((brand) => !settings.excludedBrands.includes(brand))
  );
  settingsArray = settingsArray.filter((ele) =>
    ele.Company.some((company) => !settings.excludedCompanies.includes(company))
  );

  portfolioToRender = settingsArray;
};

settingsFilter();

//What we want to Create
var thumbnails = document.getElementById("thumbnails");
var categoriesContainer = document.querySelector("nav");
var logosContainer = document.getElementById("brands");
var modalContainer = document.querySelector("body");

let brands = [];
let companies = [];

//console.log(portfolioToRender);

const populateLogoArray = () => {
  companies.length = 0;
  brands.length = 0;

  portfolioToRender.forEach((element) => {
    element.Brand.forEach((item) => {
      if (!brands.includes(item)) {
        brands.push(item);
        //console.log(brands);
      }
    });
  });

  portfolioToRender.forEach((element) => {
    if (
      !companies.includes(element.Company[0]) &&
      !settings.excludedCompanies.includes(element.Company[0])
    ) {
      companies.push(element.Company[0]);
      //console.log(companies);
    }
  });
};

populateLogoArray();
// =====================================================//
// ====================== Thumbnails ===================//
// =====================================================//

let renderThumbnail = (info) => {
  thumbnails.innerHTML = "";

  info.forEach((element, index) => {
    //console.log(element.title);
    let image = document.createElement("img");
    image.src = `Projects/${element.title}/0.jpg`;
    thumbnails.appendChild(image);

    image.addEventListener("click", () => {
      let modalWrapper = document.createElement("div");
      modalWrapper.classList.add("modalContainer");
      modalContainer.appendChild(modalWrapper);

      let modal = document.createElement("div");

      modalWrapper.appendChild(modal);
      modal.classList.add("modal");
      //console.log(info[index]);

      //console.log(modal);
      let closeIcon = document.createElement("i");
      modal.appendChild(closeIcon);
      closeIcon.classList.add("fa-solid", "fa-circle-xmark", "modalCloseIcon");

      closeIcon.addEventListener("click", () => {
        stopVideo(videoPos);
        modalWrapper.remove();
      });

      let bulletContainer = document.createElement("div");
      bulletContainer.classList.add("styleBulletContainer");
      modal.appendChild(bulletContainer);

      let numberImages = element.numImages;
      //console.log("------->.  " + numberImages);

      let bulletsArray = [];
      let lastClick = 1;
      var videoPos = [];

      for (var a = 1; a <= numberImages; a++) {
        let imageContainer = document.createElement("div");
        imageContainer.id = `slide${a}`;
        imageContainer.classList.add("styleImageContainer");

        if (element.videoIndex?.includes(a)) {
          //console.log(`Projects/${element.title}/${a}.mp4`);

          let videoPortfolio = document.createElement("video");
          videoPos[a] = videoPortfolio;

          videoPortfolio.src = `Projects/${element.title}/${a}.mp4`;
          videoPortfolio.classList.add("styleVideo");
          videoPortfolio.autoplay = "false";

          modal.appendChild(imageContainer);
          imageContainer.appendChild(videoPortfolio);
        } else {
          let imagePortfolio = document.createElement("img");
          imagePortfolio.src = `Projects/${element.title}/${a}.jpg`;
          modal.appendChild(imageContainer);
          imageContainer.appendChild(imagePortfolio);
        }

        let bullet = document.createElement("span");
        bullet.classList.add("styleBullet");
        bulletContainer.appendChild(bullet);

        let link = document.createElement("a");
        link.href = `#slide${a}`;
        bullet.appendChild(link);
        bulletsArray.push(link);

        //link.number=a;
        //console.log(bulletsArray);

        link.textContent = "•";
        let bulletNumber = a;
        bulletsArray[0].classList.add("selectedBullet");

        link.addEventListener("click", () => {
          stopVideo(videoPos);

          //bulletsArray[lastClick - 1].classList.remove("selectedBullet");

          bulletsArray.forEach((element) => {
            element.classList.remove("selectedBullet");
          });

          link.classList.add("selectedBullet");

          videoPos[bulletNumber].play();

          lastClick = bulletNumber;
        });
      }
    });
  });
};

renderThumbnail(portfolioToRender);

let stopVideo = (videosArray) => {
  videosArray.forEach((element) => {
    element.pause();
    element.currentTime = 0;
  });
};

// =====================================================//
// ================= Categories =================//
// =====================================================//

let categories = [];

let foundCategories = () => {
  portfolioToRender.forEach((element) => {
    element.category.forEach((item) => {
      if (!categories.includes(item)) {
        categories.push(item);
      }
      //console.log(categories);
    });
  });
};

foundCategories();

let renderCategories = () => {
  let labelArray = [];
  categories.forEach((element, index) => {
    let label = document.createElement("span");
    label.textContent = element;
    categoriesContainer.appendChild(label);

    labelArray.push(label);

    label.addEventListener("click", () => {
      if (
        label.classList.contains("disabelCategory") == false &&
        labelArray.some((label) =>
          label.classList.contains("disabelCategory")
        ) == true
      ) {
        labelArray.forEach((element) => {
          element.classList.remove("disabelCategory");
        });
        renderThumbnail(portfolioToRender);
        // console.log();
      } else {
        labelArray.forEach((element) => {
          element.classList.add("disabelCategory");
        });

        labelArray[index].classList.remove("disabelCategory");
        //console.log("clicked Category. ", labelArray[index]);

        filterThumbnails(portfolioToRender, element);
      }

      //console.log(element);
    });
  });
};

renderCategories();

// =====================================================//
// ================= Show Logos =================//
// =====================================================//

let showLogos = () => {
  let logoArrays = [];
  logosContainer.innerHTML = "";
  if (settings.logos == "Brand") {
    brands.forEach((element) => {
      //console.log("----->. " + element);

      var logo = document.createElement("img");
      logo.src = `Brands/${element}.png`;
      logosContainer.appendChild(logo);
      logoArrays.push(logo);

      logo.addEventListener("click", () => {
        console.log(logo.state);

        if (logo.state == "active") {
          logoArrays.forEach((element) => {
            element.classList.remove("disableLogo");
            element.state = "desactive";
          });

          return renderThumbnail(portfolioToRender);
        }

        logoArrays.forEach((element) => {
          element.classList.add("disableLogo");
          element.state = "desactive";
        });
        logo.classList.remove("disableLogo");
        logo.state = "active";
        filterBrands(portfolioToRender, element, settings.logos);
      });
    });
  } else {
    companies.forEach((element) => {
      //console.log("----->. " + element);

      var logo = document.createElement("img");
      logo.src = `Company/${element}.png`;
      logosContainer.appendChild(logo);

      // =======================================
      logoArrays.push(logo);

      logo.addEventListener("click", () => {
        console.log(logo.state);

        if (logo.state == "active") {
          logoArrays.forEach((element) => {
            element.classList.remove("disableLogo");
            element.state = "desactive";
          });

          return renderThumbnail(portfolioToRender);
        }

        logoArrays.forEach((element) => {
          element.classList.add("disableLogo");
          element.state = "desactive";
        });
        logo.classList.remove("disableLogo");
        logo.state = "active";
        filterBrands(portfolioToRender, element, settings.logos);
      });
      //=======================================
    });
  }

  //logosContainer.
};
showLogos();

let filterThumbnails = (primaryArray, category) => {
  let filterArray = [];

  primaryArray.forEach((element) => {
    if (element.category.includes(category)) {
      filterArray.push(element);

      //console.log("*********. " + element.category);
    }
  });

  return renderThumbnail(filterArray);
};

let filterBrands = (primaryArray, brand, type) => {
  let filterArray = [];

  primaryArray.forEach((element) => {
    if (element[type].includes(brand)) {
      filterArray.push(element);

      //console.log("*********. " + element.category);
    }
  });

  return renderThumbnail(filterArray);
};

// =====================================================//
// ================= Logo Simple Intro =================//
// =====================================================//

let pickOne = Math.floor(Math.random() * 7) + 1;
let introVideo = document.createElement("video");

introVideo.src = `Filme/${pickOne}.mp4`;
introVideo.classList.add("video-masked");
introVideo.autoplay = "true";
introVideo.loop = "true";

let placeVideo = document.querySelector("header");
placeVideo.appendChild(introVideo);
introVideo.muted = "true";

// =====================================================//
// ================= Activate Settings =================//
// =====================================================//

let settingsActive = false;

const bodyElement = document.querySelector("body");
bodyElement.addEventListener("keydown", (event) => {
  //console.log(event.code);

  let aside = document.querySelector("aside");
  //console.log(event.code);

  if (event.code == "Tab") {
    aside.classList.toggle("openSettings");
    settingsActive = !settingsActive;
    //console.log(settingsActive);

    //debugger;
    if (!settingsActive) {
      //console.log("----->.  " + settings.logos);
      settingsFilter();
      populateLogoArray();

      showLogos();
      renderThumbnail(portfolioToRender);
    }
  }
});
