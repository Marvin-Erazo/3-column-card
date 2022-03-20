//obtainer the element click
let authorBtn = document.getElementById('avatar');

// create a counter for the clicks
let clicksCount = 0;


//if the click is par the elemment hidden else the element shows
authorBtn.addEventListener('click', function(){
    clicksCount +=1;
    
    if(clicksCount % 2 === 0){
        document.getElementById('author').className = 'author';
    }

    else{
        document.getElementById('author').className = 'author-active';
    }
});