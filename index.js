
const btn = document.getElementById('btn');
const hiddenSection = document.querySelector("#contact");
btn.addEventListener('click', () => {
    hiddenSection.classList.toggle('hidden');
})