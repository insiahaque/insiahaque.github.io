window.onload = function () {
    const draggableImages = document.querySelectorAll(".draggable");
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let activeImg = null;

    draggableImages.forEach(img => {
        img.addEventListener("mousedown", function (e) {
            e.preventDefault();
            isDragging = true;
            activeImg = e.target;
            offsetX = e.clientX - activeImg.offsetLeft;
            offsetY = e.clientY - activeImg.offsetTop;
            activeImg.style.cursor = "grabbing";
        });
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging && activeImg) {
            activeImg.style.left = `${e.clientX - offsetX}px`;
            activeImg.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", function () {
        if (activeImg) {
            activeImg.style.cursor = "grab";
        }
        isDragging = false;
        activeImg = null;
    });
};
