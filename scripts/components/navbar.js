export function navbar(menuPage = false) {
    const dynamicLink = menuPage
        ? `<a href="index.html">Home</a>`
        : `<a href="menu.html">Bagels</a>`;

    return `
    <div class="navbar-wrapper">
        ${dynamicLink}
        <a href="https://wolt.com/en/geo/tbilisi/restaurant/bar-bagel" target="_blank">Delivery</a>
        <a href="https://www.instagram.com/bar.bagel/" target="_blank">Social Media</a>
    </div>
    `;
}