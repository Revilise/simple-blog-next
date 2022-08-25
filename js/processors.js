export const processors = (function() {
    const arrayLets = [
        ["а", "a"], ["б", "b"], ["в", "v"], ["г", "g"], ["д", "d"], ["е", "e"],
        ["ё", "yo"], ["ж", "zh"], ["з", "z"], ["и", "i"], ["й", "j"], ["к", "k"],
        ["л", "l"], ["м", "m"], ["н", "n"], ["о", "o"], ["п", "p"], ["р", "r"],
        ["с", "s"], ["т", "t"], ["у", "u"], ["ф", "f"], ["х", "h"], ["ц", "c"],
        ["ч", "ch"], ["ш", "w"], ["щ", "shh"], ["ъ", "''"], ["ы", "y"], ["ь", "'"],
        ["э", "e"], ["ю", "yu"], ["я", "ya"], ["А", "A"], ["Б", "B"], ["В", "V"],
        ["Г", "G"], ["Д", "D"], ["Е", "E"], ["Ё", "YO"], ["Ж", "ZH"], ["З", "Z"],
        ["И", "I"], ["Й", "J"], ["К", "K"], ["Л", "L"], ["М", "M"], ["Н", "N"],
        ["О", "O"], ["П", "P"], ["Р", "R"], ["С", "S"], ["Т", "T"], ["У", "U"],
        ["Ф", "F"], ["Х", "H"], ["Ц", "C"], ["Ч", "CH"], ["Ш", "W"], ["Щ", "SHH"],
        ["Ъ", ""], ["Ы", "Y"], ["Ь", ""], ["Э", "E"], ["Ю", "YU"], ["Я", "YA"],
        ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"],
        ["g", "g"], ["h", "h"], ["i", "i"], ["j", "j"], ["k", "k"], ["l", "l"],
        ["m", "m"], ["n", "n"], ["o", "o"], ["p", "p"], ["q", "q"], ["r", "r"],
        ["s", "s"], ["t", "t"], ["u", "u"], ["v", "v"], ["w", "w"], ["x", "x"],
        ["y", "y"], ["z", "z"], ["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"],
        ["E", "E"], ["F", "F"], ["G", "G"], ["H", "H"], ["I", "I"], ["J", "J"],
        ["K", "K"], ["L", "L"], ["M", "M"], ["N", "N"], ["O", "O"], ["P", "P"],
        ["Q", "Q"], ["R", "R"], ["S", "S"], ["T", "T"], ["U", "U"], ["V", "V"],
        ["W", "W"], ["X", "X"], ["Y", "Y"], ["Z", "Z"]
    ]

    function translateRuEn(str) {
        function changeLetter(lit) {
            let efim360ru = arrayLets
                .map(i => i[0] === lit ? i[1] : undefined)
                .filter(i => !!i);

            return efim360ru.length > 0 ? efim360ru[0] : "-"
        }

        return Array.from(str).map(i => changeLetter(i)).join("");
    }
    function parsePostData(doc) {
        const data = doc.data();
        const date = (new Date(data.date)).toDateString();
        const content = JSON.parse(data.content);
        const id = doc.id;

        return {...data, date, content, id};
    }
    function deepCopy(data) {
        return JSON.parse(JSON.stringify(data));
    }
    return {
        translateRuEn, parsePostData, deepCopy
    }
})();