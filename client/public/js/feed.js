document.addEventListener('DOMContentLoaded', function(){
    function goToMaristEdu(){
        window.location.href = 'https://my.marist.edu/';
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);
    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

currentStories.push({
    Title: 'Chain Of Gold',
    linkUrl: 'https://i.pinimg.com/474x/f6/df/80/f6df8092e8189d3e8f9c9f8ab88e42b4.jpg',
    imageUrl: 'images/chains.png',
    Body: "An inheritance of shadows. A love in chains. An unconquerable foe. Cordelia Carstairs is a Shadowhunter, a warrior trained since childhood to battle demons. When her father is accused of a terrible crime, she and her brother travel to London in hopes of preventing the family’s ruin. Cordelia’s mother wants to marry her off, but Cordelia is determined to be a hero rather than a bride. Soon Cordelia encounters childhood friends James and Lucie Herondale and is drawn into their world of glittering ballrooms, secret assignations, and supernatural salons, where vampires and warlocks mingle with mermaids and magicians. All the while, she must hide her secret love for James, who is sworn to marry someone else.But Cordelia’s new life is blown apart when a shocking series of demon attacks devastate London. These monsters are nothing like those Shadowhunters have fought before—these demons walk in daylight, strike down the unwary with incurable poison, and seem impossible to kill. London is immediately quarantined. Trapped in the city, Cordelias friends discover that a dark legacy has gifted them with incredible powers—and forced a brutal choice that will reveal the true cruel price of being a hero."
});

currentStories.push({
    Title: 'Chain of Iron',
    Body: "Cordelia Carstairs seems to have everything she ever wanted. She’s engaged to marry James Herondale, the boy she has loved since childhood. She has a new life in London with her best friend Lucie Herondale and James’s charming companions, the Merry Thieves. She is about to be reunited with her beloved father. And she bears the sword Cortana, a legendary hero’s blade.But the truth is far grimmer. James and Cordelia’s marriage is a lie, arranged to save Cordelia’s reputation. James is in love with the mysterious Grace Blackthorn whose brother, Jesse, died years ago in a terrible accident. Cortana burns Cordelia’s hand when she touches it, while her father has grown bitter and angry. And a serial murderer is targeting the Shadowhunters of London, killing under cover of darkness, then vanishing without a trace.Together with the Merry Thieves, Cordelia, James, and Lucie must follow the trail of the knife-wielding killer through the city’s most dangerous streets. All the while, each is keeping a shocking secret: Lucie, that she plans to raise Jesse from the dead; Cordelia, that she has sworn a dangerous oath of loyalty to a mysterious power; and James, that he is being drawn further each night into the dark web of his grandfather, the arch-demon Belial. And that he himself may be the killer they seek.",
    linkUrl: 'https://i.pinimg.com/474x/ca/f1/4f/caf14f8c8f41d8de4365d2288c95725a.jpg',
    imageUrl: 'images/iron.png'
});

currentStories.push({
    Title: 'Chain of Thorns',
    Body: "Cordelia Carstairs has lost everything that matters to her. In only a few short weeks, she has seen her father murdered, her plans to become parabatai with her best friend, Lucie, destroyed, and her marriage to James Herondale crumble before her eyes. Even worse, she is now bound to an ancient demon, Lilith, stripping her of her power as a Shadowhunter.After fleeing to Paris with Matthew Fairchild, Cordelia hopes to forget her sorrows in the city’s glittering nightlife. But reality intrudes when shocking news comes from home: Tatiana Blackthorn has escaped the Adamant Citadel, and London is under new threat by the Prince of Hell, Belial. Cordelia returns to a London riven by chaos and dissent. The long-kept secret that Belial is James and Lucie’s grandfather has been revealed by an unexpected enemy, and the Herondales find themselves under suspicion of dealings with demons. Cordelia longs to protect James but is torn between a love for James she has long believed hopeless, and the possibility of a new life with Matthew. Nor can her friends help—ripped apart by their own secrets, they seem destined to face what is coming alone.For time is short, and Belial’s plan is about to crash into the Shadowhunters of London like a deadly wave, one that will separate Cordelia, Lucie, and the Merry Thieves from help of any kind. Left alone in a shadowy London, they must face Belial’s deadly army. If Cordelia and her friends are going to save their city—and their families—they will have to muster their courage, swallow their pride, and trust one another again. For if they fail, they may lose everything—even their souls.",
    linkUrl: 'https://i.pinimg.com/564x/04/b3/43/04b343f589afa894f2085995102fa263.jpg', 
    imageUrl: 'images/thorns.png'
});

function displayItem(feedItem) {
    let newsfeedElement = document.getElementById('newsfeed');

    let itemHTML = `
        <div class="feed-item">
            <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
            <p>${feedItem.Body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">
                <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 205px;">
            </a>
            <hr>
        </div>
    `;

    newsfeedElement.innerHTML += itemHTML;
}

currentStories.forEach(function(item){
    displayItem(item);
});

    