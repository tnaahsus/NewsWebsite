// 26f996e7fe604b98945e48a622cf7486

// Initialize the news api parameters
let source = 'google-news-in';
let apiKey = '26f996e7fe604b98945e48a622cf7486'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach((element, index) => {
            let news = ` <div class="newBox">
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse${index}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">${element["title"]}</a>
                        </p>
                        <div class="col mb-3">
                            <div class="row">
                                <div class="collapse multi-collapse" id="multiCollapse${index}">
                                    <div class="card card-body">
                                    ${element["description"]}
                                    <a href="${element['url']}" target="_blank" >Read more here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    }
}

xhr.send();


// search bar
let search = document.getElementById('searchTxt');
// set Listener here, also using suggested test for null
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let newBox = document.getElementsByClassName('newBox');
    for (i = 0; i < newBox.length; i++) {
        if (!newBox[i].innerHTML.toLowerCase().includes(inputVal)) {
            newBox[i].style.display = "none";
        }
        else {
            newBox[i].style.display = "block";
        }
    }


})