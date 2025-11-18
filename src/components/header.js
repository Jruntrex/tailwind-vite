export function getHeaderHTML(activePage) {
    return `
    <nav class="bg-blue-600 text-white p-4">
        <div class="max-w-4xl mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">Vite + Tailwind v4</h1>
            <div class="flex gap-4">
                <a href="/" class="hover:underline ${activePage === 'home' ? 'font-bold underline' : ''}">Головна</a>
                <a href="/about.html" class="hover:underline ${activePage === 'about' ? 'font-bold underline' : ''}">Про нас</a>
            </div>
        </div>
    </nav>
    `;
}