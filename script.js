"use strict";

const share = document.querySelector(".share-button");
const shareWrapper = document.querySelector(".share-wrapper");
const transparentWrapper = document.querySelector(".transparent-wrapper");

share.addEventListener("click", function () {
  shareWrapper.classList.toggle("hidden");
});

transparentWrapper.addEventListener("click", function () {
  shareWrapper.classList.add("hidden");
});
