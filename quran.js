document.addEventListener('DOMContentLoaded', function() {
    const surahList = document.getElementById('surah-list');
    const surahInfo = document.getElementById('surah-info');
    const verseContainer = document.getElementById('verse-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentSurah = null;
    let currentVerses = [];
    let currentPage = 1;
    const versesPerPage = 10;
    
    // Fetch and display surah list
    async function fetchSurahs() {
        try {
            const response = await fetch('https://quranapi.pages.dev/api/chapters');
            const data = await response.json();
            
            surahList.innerHTML = '';
            data.chapters.forEach(surah => {
                const surahItem = document.createElement('div');
                surahItem.className = 'p-3 rounded-lg cursor-pointer hover:bg-green-50 transition duration-200';
                surahItem.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="font-medium text-green-900">${surah.name_simple}</span>
                        <span class="text-gray-500 text-sm">${surah.id}</span>
                    </div>
                    <div class="flex justify-between mt-1">
                        <span class="text-gray-600 text-sm">${surah.translated_name.name}</span>
                        <span class="text-gray-500 text-sm">${surah.verses_count} verses</span>
                    </div>
                `;
                
                surahItem.addEventListener('click', () => loadSurah(surah.id));
                surahList.appendChild(surahItem);
            });
        } catch (error) {
            console.error('Error fetching surahs:', error);
            surahList.innerHTML = '<p class="text-red-500">Failed to load surahs. Please try again later.</p>';
        }
    }
    
    // Load specific surah
    async function loadSurah(surahId) {
        try {
            surahInfo.innerHTML = '<p class="text-gray-600">Loading...</p>';
            verseContainer.innerHTML = '';
            
            const response = await fetch(`https://quranapi.pages.dev/api/chapters/${surahId}/verses`);
            const data = await response.json();
            
            currentSurah = data.chapter;
            currentVerses = data.verses;
            currentPage = 1;
            
            displaySurahInfo();
            displayVerses();
        } catch (error) {
            console.error('Error loading surah:', error);
            surahInfo.innerHTML = '<p class="text-red-500">Failed to load surah. Please try again later.</p>';
        }
    }
    
    // Display surah information
    function displaySurahInfo() {
        surahInfo.innerHTML = `
            <h2 class="text-2xl font-playfair font-bold text-green-900 mb-2">${currentSurah.name_simple}</h2>
            <p class="text-gray-600 mb-1">${currentSurah.translated_name.name}</p>
            <p class="text-gray-600">${currentSurah.verses_count} verses | ${currentSurah.revelation_place}</p>
        `;
    }
    
    // Display verses for current page
    function displayVerses() {
        const startIndex = (currentPage - 1) * versesPerPage;
        const endIndex = Math.min(startIndex + versesPerPage, currentVerses.length);
        const versesToShow = currentVerses.slice(startIndex, endIndex);
        
        verseContainer.innerHTML = '';
        versesToShow.forEach(verse => {
            const verseElement = document.createElement('div');
            verseElement.className = 'mb-8 pb-8 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0';
            verseElement.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <span class="text-green-800 font-bold text-xl">${verse.verse_number}</span>
                </div>
                <p class="text-3xl text-right leading-loose mb-4" lang="ar">${verse.text_uthmani}</p>
                <p class="text-gray-700 italic">"${verse.translations?.[0]?.text || 'Translation not available'}"</p>
            `;
            verseContainer.appendChild(verseElement);
        });
        
        // Update pagination buttons
        prevBtn.classList.toggle('hidden', currentPage === 1);
        nextBtn.classList.toggle('hidden', endIndex >= currentVerses.length);
    }
    
    // Event listeners for pagination
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayVerses();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(currentVerses.length / versesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayVerses();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Initialize
    fetchSurahs();
});