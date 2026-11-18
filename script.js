// JavaScript: how the page WORKS
// Only basic things are used: variables, if/else, functions, one for loop.

// Today's date as text, example: "2026-11-17"
let today = new Date().toISOString().slice(0, 10);

// Put today's date in the publish box
document.getElementById("publish").value = today;


// ------------------------------------------------------------
// FUNCTION 1: updateList()
// Runs when the page opens and every time the user changes
// something (role, language, search, category).
// ------------------------------------------------------------
function updateList() {
  // Read what the user chose
  let role = document.getElementById("role").value;
  let language = document.getElementById("language").value;
  let category = document.getElementById("filter").value;
  let word = document.getElementById("search").value.toLowerCase();

  // LANGUAGE: add a class like "show-pa", "show-hi" or "show-ur"
  // (the CSS then hides English and shows that language)
  if (language == "en") {
    document.getElementById("notices").className = "";
  } else {
    document.getElementById("notices").className = "show-" + language;
  }

  // ADMIN ROLE: show the create form only for Admin
  if (role == "admin") {
    document.getElementById("form").style.display = "block";
  } else {
    document.getElementById("form").style.display = "none";
  }

  // Get all the notices on the page
  let cards = document.getElementsByClassName("notice");
  let shown = 0;   // counts how many notices we show

  // LOOP: check every notice one by one
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let visible = true;   // start by saying "show it"

    // PUBLISH / EXPIRY: only Admin can see notices that are not live
    if (card.className.includes("notlive") && role != "admin") {
      visible = false;
    }

    // CATEGORIES: hide if it is not the chosen category
    if (category != "All" && !card.className.includes(category)) {
      visible = false;
    }

    // SEARCH: hide if the typed word is not in the notice text
    if (!card.textContent.toLowerCase().includes(word)) {
      visible = false;
    }

    // Show or hide the notice
    if (visible == true) {
      card.style.display = "block";
      shown = shown + 1;
    } else {
      card.style.display = "none";
    }
  }

  // Tell the user how many notices were found
  document.getElementById("count").innerHTML = shown + " notice(s) found";
}


// ------------------------------------------------------------
// TRANSLATOR (dictionary)
// Four lists: English text and its meaning in Punjabi, Hindi, Urdu.
// The same position in every list = the same meaning.
// Long sentences come FIRST, single words come LAST.
// All English text must be in small letters.
// ------------------------------------------------------------
let english = [
  "a free vaccination camp will be held at the community hall this sunday.",
  "a free health check-up camp will be held at the community hall this sunday.",
  "water will be off on thursday from 9 am to 1 pm for pipe repair.",
  "meeting at the community hall on friday at 5 pm.",
  "school will be closed tomorrow.",
  "please bring your family.",
  "everyone is welcome.",
  "school closed tomorrow",
  "community meeting",
  "water supply off",
  "free health camp",
  "vaccination camp",
  "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
  "tomorrow", "today", "water", "school", "meeting", "electricity", "notice"
];

let punjabi = [
  "ਇਸ ਐਤਵਾਰ ਕਮਿਊਨਿਟੀ ਹਾਲ ਵਿੱਚ ਮੁਫ਼ਤ ਟੀਕਾਕਰਨ ਕੈਂਪ ਲੱਗੇਗਾ।",
  "ਇਸ ਐਤਵਾਰ ਕਮਿਊਨਿਟੀ ਹਾਲ ਵਿੱਚ ਮੁਫ਼ਤ ਸਿਹਤ ਜਾਂਚ ਕੈਂਪ ਲੱਗੇਗਾ।",
  "ਪਾਈਪ ਦੀ ਮੁਰੰਮਤ ਕਾਰਨ ਵੀਰਵਾਰ ਨੂੰ ਸਵੇਰੇ 9 ਵਜੇ ਤੋਂ ਦੁਪਹਿਰ 1 ਵਜੇ ਤੱਕ ਪਾਣੀ ਬੰਦ ਰਹੇਗਾ।",
  "ਸ਼ੁੱਕਰਵਾਰ ਨੂੰ ਸ਼ਾਮ 5 ਵਜੇ ਕਮਿਊਨਿਟੀ ਹਾਲ ਵਿੱਚ ਮੀਟਿੰਗ ਹੋਵੇਗੀ।",
  "ਸਕੂਲ ਕੱਲ੍ਹ ਬੰਦ ਰਹੇਗਾ।",
  "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਪਰਿਵਾਰ ਨੂੰ ਨਾਲ ਲੈ ਕੇ ਆਓ।",
  "ਸਭ ਦਾ ਸਵਾਗਤ ਹੈ।",
  "ਸਕੂਲ ਕੱਲ੍ਹ ਬੰਦ",
  "ਕਮਿਊਨਿਟੀ ਮੀਟਿੰਗ",
  "ਪਾਣੀ ਦੀ ਸਪਲਾਈ ਬੰਦ",
  "ਮੁਫ਼ਤ ਸਿਹਤ ਕੈਂਪ",
  "ਟੀਕਾਕਰਨ ਕੈਂਪ",
  "ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨੀਵਾਰ",
  "ਕੱਲ੍ਹ", "ਅੱਜ", "ਪਾਣੀ", "ਸਕੂਲ", "ਮੀਟਿੰਗ", "ਬਿਜਲੀ", "ਨੋਟਿਸ"
];

let hindi = [
  "इस रविवार सामुदायिक भवन में मुफ़्त टीकाकरण शिविर लगेगा।",
  "इस रविवार सामुदायिक भवन में मुफ़्त स्वास्थ्य जाँच शिविर लगेगा।",
  "पाइप की मरम्मत के कारण गुरुवार को सुबह 9 बजे से दोपहर 1 बजे तक पानी बंद रहेगा।",
  "शुक्रवार को शाम 5 बजे सामुदायिक भवन में बैठक होगी।",
  "स्कूल कल बंद रहेगा।",
  "कृपया अपने परिवार को साथ लाएँ।",
  "सभी का स्वागत है।",
  "स्कूल कल बंद",
  "सामुदायिक बैठक",
  "पानी की आपूर्ति बंद",
  "मुफ़्त स्वास्थ्य शिविर",
  "टीकाकरण शिविर",
  "रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार",
  "कल", "आज", "पानी", "स्कूल", "बैठक", "बिजली", "सूचना"
];

let urdu = [
  "اس اتوار کمیونٹی ہال میں مفت ویکسینیشن کیمپ لگے گا۔",
  "اس اتوار کمیونٹی ہال میں مفت صحت معائنہ کیمپ لگے گا۔",
  "پائپ کی مرمت کی وجہ سے جمعرات کو صبح 9 بجے سے دوپہر 1 بجے تک پانی بند رہے گا۔",
  "جمعہ کو شام 5 بجے کمیونٹی ہال میں میٹنگ ہوگی۔",
  "اسکول کل بند رہے گا۔",
  "براہِ کرم اپنے خاندان کو ساتھ لائیں۔",
  "سب کا خیر مقدم ہے۔",
  "اسکول کل بند",
  "کمیونٹی میٹنگ",
  "پانی کی سپلائی بند",
  "مفت صحت کیمپ",
  "ویکسینیشن کیمپ",
  "اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ",
  "کل", "آج", "پانی", "اسکول", "میٹنگ", "بجلی", "نوٹس"
];

// Translates one piece of text. "target" is the list of the language we want.
function translateText(text, target) {
  let result = text.toLowerCase();
  for (let i = 0; i < english.length; i++) {
    result = result.replaceAll(english[i], target[i]);   // replace English with the other language
  }
  return result;
}

// Runs when Admin clicks "Translate to Punjabi, Hindi and Urdu"
function translateNotice() {
  let titleEn = document.getElementById("titleEn").value;
  let textEn = document.getElementById("textEn").value;
  let message = document.getElementById("translateMsg");

  if (titleEn == "" || textEn == "") {
    message.innerHTML = "Write the English title and message first.";
    return;
  }

  // Translate the title and the message into each language
  let titlePa = translateText(titleEn, punjabi);
  let textPa = translateText(textEn, punjabi);
  let titleHi = translateText(titleEn, hindi);
  let textHi = translateText(textEn, hindi);
  let titleUr = translateText(titleEn, urdu);
  let textUr = translateText(textEn, urdu);

  // Put the results in the boxes
  document.getElementById("titlePa").value = titlePa;
  document.getElementById("textPa").value = textPa;
  document.getElementById("titleHi").value = titleHi;
  document.getElementById("textHi").value = textHi;
  document.getElementById("titleUr").value = titleUr;
  document.getElementById("textUr").value = textUr;

  // If English letters are still there, some words were not in the dictionary
  let everything = titlePa + textPa + titleHi + textHi + titleUr + textUr;
  if (/[a-z]/.test(everything)) {
    message.innerHTML = "Some words are not in our dictionary, so they stayed in English. Please fix them, then save.";
  } else {
    message.innerHTML = "Translated! Check the text, then click Save notice.";
  }
}


// ------------------------------------------------------------
// Two small helper functions used by addNotice()
// ------------------------------------------------------------

// Makes the tag: "Punjabi: Translated" (green) or "Punjabi: Pending" (orange)
function makeTag(name, title, text) {
  if (title == "" || text == "") {
    return "<span class='tag orange'>" + name + ": Pending</span>";
  } else {
    return "<span class='tag green'>" + name + ": Translated</span>";
  }
}

// Makes the part of the notice for one language
function makePart(code, name, title, text, titleEn, textEn) {
  if (title == "" || text == "") {
    // Not translated: say it is pending and show English
    return "<div class='" + code + "'><p><i>" + name + " translation is pending. Showing English.</i></p><h3>" + titleEn + "</h3><p>" + textEn + "</p></div>";
  }
  let dir = "";
  if (code == "ur") {
    dir = " dir='rtl'";   // Urdu is written from right to left
  }
  return "<div class='" + code + "'" + dir + "><h3>" + title + "</h3><p>" + text + "</p></div>";
}


// ------------------------------------------------------------
// FUNCTION 2: addNotice()
// Runs when Admin clicks "Save notice".
// ------------------------------------------------------------
function addNotice() {
  // Read all the boxes of the form
  let category = document.getElementById("category").value;
  let titleEn = document.getElementById("titleEn").value;
  let textEn = document.getElementById("textEn").value;
  let titlePa = document.getElementById("titlePa").value;
  let textPa = document.getElementById("textPa").value;
  let titleHi = document.getElementById("titleHi").value;
  let textHi = document.getElementById("textHi").value;
  let titleUr = document.getElementById("titleUr").value;
  let textUr = document.getElementById("textUr").value;
  let publish = document.getElementById("publish").value;
  let expiry = document.getElementById("expiry").value;

  // Check that the important boxes are filled
  if (titleEn == "" || textEn == "" || publish == "" || expiry == "") {
    alert("Please fill the English title, English message, publish date and expiry date.");
    return;   // stop here
  }

  // PUBLISH / EXPIRY: is the notice live today?
  let status = "Live";
  let tagColor = "green";
  let extraClass = "";
  if (expiry < today) {
    status = "Expired";
    tagColor = "red";
    extraClass = " notlive";
  } else if (publish > today) {
    status = "Scheduled";
    tagColor = "orange";
    extraClass = " notlive";
  }

  // Build the new notice as HTML text (the + joins pieces together)
  let newCard =
    "<div class='box notice " + category + extraClass + "'>" +
      "<span class='tag'>" + category + "</span> " +
      "<span class='tag " + tagColor + "'>" + status + "</span> " +
      makeTag("Punjabi", titlePa, textPa) + " " +
      makeTag("Hindi", titleHi, textHi) + " " +
      makeTag("Urdu", titleUr, textUr) +
      "<div class='en'><h3>" + titleEn + "</h3><p>" + textEn + "</p></div>" +
      makePart("pa", "Punjabi", titlePa, textPa, titleEn, textEn) +
      makePart("hi", "Hindi", titleHi, textHi, titleEn, textEn) +
      makePart("ur", "Urdu", titleUr, textUr, titleEn, textEn) +
      "<small>Publish: " + publish + " | Expiry: " + expiry + "</small>" +
    "</div>";

  // Add the new notice at the top of the list
  let notices = document.getElementById("notices");
  notices.innerHTML = newCard + notices.innerHTML;

  // Clear the form
  document.getElementById("titleEn").value = "";
  document.getElementById("textEn").value = "";
  document.getElementById("titlePa").value = "";
  document.getElementById("textPa").value = "";
  document.getElementById("titleHi").value = "";
  document.getElementById("textHi").value = "";
  document.getElementById("titleUr").value = "";
  document.getElementById("textUr").value = "";
  document.getElementById("expiry").value = "";
  document.getElementById("translateMsg").innerHTML = "";

  updateList();
}


// Run once when the page opens
updateList();