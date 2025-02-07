const verses=["Proverbs 2:7 He stores up sound wisdom for the upright; He is a shield to those who walk uprighthly;",
        "John 3:16 For God so loved the world that he gave his only son, so that who ever believes in him shall not perish but have ever lasting life",
        "Hebrews 12:6 For whom the Lord loves He chastens, And scourges every son whom He receives",
        "Hebrews 12:29 For our God is a consuming fire.",
        "Hebrews 13:16 But do not forget to do good and share, for with such sacrifices God is well pleased",
        "God Loved the world wekfinfmfevuig rehbuierhbuirethiutreubeuiebiuhgiu bheghbiuge hiuebiuerh iubtheiuheghbuhbieru hbiurehbiube",
        "Ezekiel 33:8 When I say the wicked, 'O wicked man, you shall surely die!' and you do not speak to warn the wicked from his way, that wicked man shall die in his iniquity; but his blood I will require at your hand",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",]


function giveVerse(){
    document.getElementById("verse").innerHTML=verses[Math.floor(Math.random()*verses.length)]
}