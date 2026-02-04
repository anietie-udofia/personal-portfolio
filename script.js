// JavaScript Document
const button = document.querySelector("#ctabtn");
const message = document.querySelector("#message");

button.addEventListener("click",function () {message.textContent = "Thank you! Your download will begin shortly";
button.textContent = "processing...";
button.disabled = true;
});