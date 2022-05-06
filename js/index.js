function aparece (){
    var html = document.getElementsByTagName("html")[0];
    var aparecer = document.getElementsByClassName("container");

    document.addEventListener('wheel', function(){
        var Topvent = html.scrollTop;
        for(i=0; i< aparecer.length; i++){
            var TopElement = aparecer[i].offsetTop;
            if(Topvent > TopElement -400){
                aparecer[i].style.opacity = 1;
            }
        }
    })
}

aparece();