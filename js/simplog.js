window.addEventListener("load", function() {
  // remove 'height' attribute from article's images for responsive things
  var images = document.querySelectorAll(".article-content img");

  [].forEach.call(images, function(img) {
    img.removeAttribute("height");
  });

  // redefine more-less function
  window.toggleMoreLess = function(obj, num, txtMore, txtLess) {
    if(txtMore.length === 0) txtMore = "More";
    if(txtLess.length === 0) txtLess = "Less";

  	var btnMore = document.getElementById("more" + num);
    var foldContent = document.getElementById("content" + num);

    if(foldContent.style.display == "none") {
	    btnMore.className = "moreless_top";
	    obj.innerHTML = txtLess;

	    var btnLess = document.createElement("P");
	    btnLess.id = "less" + num;
	    btnLess.className = "moreless_bottom";

	    var txtMore2 = txtMore.replace(/&/g, "&amp;");
	    var txtLess2 = txtLess.replace(/&/g, "&amp;");

	    btnLess.innerHTML = "<span style='cursor:pointer;' onclick='toggleMoreLess(this, \"" + num + "\", \"" + txtMore2 + "\", \"" + txtLess2 + "\");return false;'>" + txtLess + "<\/span>";

	    var after = foldContent.nextSibling;
	    foldContent.parentNode.insertBefore(btnLess, after);

	    foldContent.style.display = "block";
    }
    else {
      btnMore.className = "moreless_fold";
      btnMore.childNodes[0].innerHTML = txtMore;

      btnLess = document.getElementById("less" + num);
      foldContent.parentNode.removeChild(btnLess);

     	foldContent.style.display = "none";
    }
  }

  document.querySelector(".nav-search").addEventListener("click", function() {
    var headerSearch = document.querySelector(".header-search");
    var computedStyle = window.getComputedStyle(headerSearch);

    if(headerSearch.style.display === "none" || computedStyle.display === "none") {
      headerSearch.style.display = "block";
    }
    else {
      headerSearch.style.display = "none";
    }
  });
});
