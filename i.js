function shuffleWords(str) {
  const words = str.split(';').map(word => word.trim()); // Разбиваем строку по точке с запятой и убираем пробелы
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Генерируем случайный индекс
    [words[i], words[j]] = [words[j], words[i]]; // Меняем местами элементы
  }
  return words.join('; '); // Собираем строку обратно через точку с запятой
}

const input = "teuer; der Stuhl / Stühle; sehen; für (+ Akkusativ); schnell; morgen; kaufen; sehr; heute; kalt; weil; lernen; gestern; arbeiten; und; aber; neu; die Uhr / Uhren; die Lampe / Lampen; das Fenster / Fenster; mit (+ Dativ); schlafen; freundlich; vielleicht; das Handy / Handys; das Zimmer / Zimmer; die Küche / Küchen; das Bad / Bäder; die Tür / Türen; das Bett / Betten; essen; trinken; wohnen; fahren; lesen; klein; hell; sauber; leise; süß; jetzt; draußen; drinnen; immer; selten; bei (+ Dativ); nach (+ Dativ); über (+ Akk/Dat); unter (+ Akk/Dat); ohne (+ Akk)"

console.log(shuffleWords(input));