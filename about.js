const missionParagraphs = [
    "Our mission is to create sustainable, vibrant communities where families can thrive and enjoy a modern lifestyle.",
    "We are dedicated to providing affordable, high-quality housing solutions that set new standards in urban living.",
    "Empowering residents with innovative amenities and a secure environment is at the heart of our mission.",
    "To create sustainable, innovative communities that elevate living standards through exceptional design, eco-friendly practices, and personalized service."
];
const visionParagraphs = [
    "Our vision is to be the leading real estate developer, shaping the future of urban living in Pakistan.",
    "We envision a community where nature, technology, and comfort blend seamlessly for a better tomorrow.",
    "To inspire trust and deliver excellence in every project, making dreams of modern living a reality.",
    "To lead real estate sector by building eco-conscious, future-ready communities that inspire trust and lasting value."
];
function showRandomParagraph(type) {
    let text = '';
    if (type === 'mission') {
        text = missionParagraphs[Math.floor(Math.random() * missionParagraphs.length)];
    } else if (type === 'vision') {
        text = visionParagraphs[Math.floor(Math.random() * visionParagraphs.length)];
    }
    document.getElementById('aboutParagraph').textContent = text;
}
// Show a random paragraph by default
showRandomParagraph('mission');

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
});
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
scrollTopBtn.style.display = 'none';