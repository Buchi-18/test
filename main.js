"use strict";
getHeader();


async function getHeader() {
  const getHeader = await fetch("header.html");
  const data = await getHeader.text();
  document.getElementById("header").innerHTML += data;

}
