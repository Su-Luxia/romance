
onload = () => {
    const c = setTiemout(() =>{
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};