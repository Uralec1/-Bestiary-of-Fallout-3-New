function getRandomValues() {
    let values1 = ["Супермутант", "Супермутант-бестия", "Супермутант-мастер", "Супермутант-босс", "Супермутант-бегемот"];
    let values2 = ["Гуль", "Гуль-бродяга", "Святящийся гуль", "Гуль-потрошитель", "Гангренозный гуль"];
    let values3 = ["Яо-гай", "Радтаракан", "Коготь смерти", "Гигантский муравей", "Болотник"];
   
    document.getElementById("value1").innerHTML = getRandomValue(values1);
    document.getElementById("value2").innerHTML = getRandomValue(values2);
    document.getElementById("value3").innerHTML = getRandomValue(values3);
    
    document.getElementById("image1").src = getImageUrl(document.getElementById("value1").innerHTML);
    document.getElementById("image2").src = getImageUrl(document.getElementById("value2").innerHTML);
    document.getElementById("image3").src = getImageUrl(document.getElementById("value3").innerHTML);
}

function getRandomValue(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getImageUrl(value) {
  switch(value) {
    case "Супермутант":
      return "https://static.wikia.nocookie.net/fallout/images/1/18/FO3_super_mutant.png/revision/latest?cb=20220330165533&path-prefix=ru";
    case "Супермутант-бестия":
      return "https://static.wikia.nocookie.net/fallout/images/8/8f/FO3_super_mutant_brute.png/revision/latest?cb=20220327111411&path-prefix=ru";
    case "Супермутант-мастер":
      return "https://static.wikia.nocookie.net/fallout/images/6/6b/FO3_super_mutant_master.png/revision/latest?cb=20220327111413&path-prefix=ru";
    case "Супермутант-босс":
      return "https://static.wikia.nocookie.net/fallout/images/3/38/FO3BS_Super_mutant_overlord.png/revision/latest?cb=20220328184836&path-prefix=ru";
    case "Супермутант-бегемот":
      return "https://static.wikia.nocookie.net/fallout/images/8/86/FO3_super_mutant_behemoth.png/revision/latest?cb=20220327111408&path-prefix=ru";
    case "Гуль":
      return "https://static.wikia.nocookie.net/fallout/images/4/47/FNV_Feral_ghoul.png/revision/latest/scale-to-width-down/250?cb=20220331153259&path-prefix=ru";
    case "Гуль-бродяга":
      return "https://static.wikia.nocookie.net/apocalypse/images/1/18/Ghoul_Roamer.jpg/revision/latest?cb=20230816001320&path-prefix=ru";
    case "Святящийся гуль":
      return "https://static.wikia.nocookie.net/apocalypse/images/2/25/Glowing_one.jpg/revision/latest?cb=20230816001440&path-prefix=ru";
    case "Гуль-потрошитель":
      return "https://sun9-64.userapi.com/c666/u50314246/92524393/x_5b0b3f08.jpg";
    case "Гангренозный гуль":
      return "https://static.wikia.nocookie.net/fallout/images/2/20/Fo4-bloated-glowing-one.png/revision/latest/scale-to-width-down/226?cb=20220331162656&path-prefix=ru";
    case "Яо-гай":
      return "https://static.wikia.nocookie.net/fallout/images/2/2e/Yao_guai.png/revision/latest?cb=20220403105943&path-prefix=ru";
    case "Радтаракан":
      return "https://static.wikia.nocookie.net/fallout/images/a/a0/FO3_Radroach.png/revision/latest?cb=20220402103712&path-prefix=ru";
    case "Коготь смерти":
      return "https://static.wikia.nocookie.net/fallout/images/a/a6/FNV_Deathclaw.png/revision/latest?cb=20220325191639&path-prefix=ru";
    case "Гигантский муравей":
      return "https://static.wikia.nocookie.net/fallout/images/5/5a/FNV_Giant_soldier_ant.png/revision/latest?cb=20220331172040&path-prefix=ru";
    case "Болотник":
      return "https://static.wikia.nocookie.net/fallout/images/a/a1/Mirelurk_hunter.png/revision/latest?cb=20220417093935&path-prefix=ru";
    default:
      return "";
  }
}