document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";
        
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll(".Ropa").forEach(ropa => {
            ropa.classList.toggle("oculto", !ropa.textContent.toLowerCase().includes(searchTerm));
        });
    }
    
});
