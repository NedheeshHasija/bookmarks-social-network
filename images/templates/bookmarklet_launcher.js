(function(){
    if (window.myBookMarklet !== undefined){
        myBookMarklet();
    }
    else{
        document.body.appendChild(document.createElement('script')).src='http://127.0.0.1:8000/static/j'
    }
})();