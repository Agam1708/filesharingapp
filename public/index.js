const dropzone = document.querySelector(".dropzone");
const fileinput = document.querySelector("#file");
const browsebtn = document.querySelector(".browsebtn");
const bgprogress = document.querySelector(".bg-progress");
const fileUrl = document.querySelector("#fileUrl");
const copybtn = document.querySelector("#copybtn");

const toast = document.querySelector(".toast");
const subbtn = document.querySelector("#subbtn");

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    if(!dropzone.classList.contains("dragged")){
            dropzone.classList.add("dragged");
        }
    })

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragged");
})

dropzone.addEventListener("drop", (e) =>{
    e.preventDefault();
    dropzone.classList.remove("dragged");
    const files = e.dataTransfer.files;
        if(files.length){
            fileinput.files = files;
            checkFileSize(files[0]);
        }
    })

    browsebtn.addEventListener("click", ()=>{
        fileinput.click();
    })

copybtn.addEventListener("click", () => {
    fileUrl.select();
    document.execCommand("copy");
    showToast("Link Copied");
});

let toastTimer;
const showToast = (msg) => {
    toast.innerText = msg;
    toast.style.transform = "translate(-50%, 0)";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.style.transform = "translate(-50%, 60px)";

    }, 2000);
};


