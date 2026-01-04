// Main Quran functionality
document.addEventListener('DOMContentLoaded', function () {
  // ... existing surah code ...
});

// Quran & Hadith Display
const HADITH_API_URL = 'https://hadithapi.com/api/hadiths/random';
const HADITH_API_KEY = 'YOUR_API_KEY_HERE'; // or use process.env.HADITH_API_KEY on Vercel

async function loadQuranAndHadith() {
  const quranDiv = document.getElementById('quran-verse');
  const hadithDiv = document.getElementById('hadith-verse');
  if (!quranDiv || !hadithDiv) return;

  quranDiv.innerHTML = 'Loading Quran verse...';
  hadithDiv.innerHTML = 'Loading Hadith...';

  try {
    // Fetch random Quran verse
    const random = Math.floor(Math.random() * 6236) + 1;
    const quranRes = await fetch(`https://api.alquran.cloud/v1/ayah/${random}`);
    const quranData = await quranRes.json();
    if (quranData && quranData.data) {
      quranDiv.innerHTML = `
        <strong>Quran:</strong> ${quranData.data.text}
        <br><small>(${quranData.data.surah.englishName} ${quranData.data.numberInSurah})</small>
      `;
    } else {
      quranDiv.innerHTML = 'Could not load Quran verse.';
    }

    // Fetch random Hadith
    const hadithRes = await fetch(HADITH_API_URL, {
      headers: { Authorization: `Bearer ${HADITH_API_KEY}` },
    });
    const hadithData = await hadithRes.json();
    if (hadithData && hadithData.hadith && hadithData.hadith.hadithEnglish) {
      hadithDiv.innerHTML = `
        <strong>Hadith:</strong> ${hadithData.hadith.hadithEnglish}
        <br><small>Source: ${hadithData.hadith.book.bookName}</small>
      `;
    } else {
      hadithDiv.innerHTML = 'Could not load Hadith.';
    }
  } catch (error) {
    console.error('Error loading Quran or Hadith:', error);
    quranDiv.innerHTML = 'Error loading Quran verse.';
    hadithDiv.innerHTML = 'Error loading Hadith.';
  }
}

window.addEventListener('load', loadQuranAndHadith);
