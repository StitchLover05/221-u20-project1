document.addEventListener('DOMContentLoaded', function(){
    function goToMaristEdu(){
        window.location.href = 'https://my.marist.edu/';
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);
    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

currentStories.push({
    Title: 'Chains Of Gold',
    linkUrl: 'https://i.pinimg.com/474x/f6/df/80/f6df8092e8189d3e8f9c9f8ab88e42b4.jpg',
    imageUrl: 'images/chains.png',
    Body: 'This is the body of Marist Story 1'
});

currentStories.push({
    Title: 'Marist Story 2',
    Body: 'This is the body of Marist Story 2',
    linkUrl: 'https://example.com/story2',
    imageUrl: 'images/news_pic.jpg'
});

currentStories.push({
    Title: 'Marist Story 3',
    Body: 'This is the body of Marist Story 3',
    linkUrl: 'https://example.com/story1', 
    imageUrl: 'images/hancock.png'
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

    