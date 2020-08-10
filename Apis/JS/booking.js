function setTravlersnumber(n){
    $(".number").html(n);
}

function setContent(n){
    $(".leftPane").html("");
    for(i=0; i<n; i++){
        $(".leftPane").append( client(i));
    }
}

function setTotal(n){

}

$(document).ready(function (){
    setContent(3);
    let travlersCount = 1;
    let content = $(".leftPane").html();
    $(".downTravler").click(function (){
        if(travlersCount == 1) return
        travlersCount = travlersCount -1;
        setTravlersnumber(travlersCount);
        setContent(travlersCount, content);
    });
    $(".upTravler").click(function (){
        travlersCount = travlersCount +1;
        setTravlersnumber(travlersCount);
        setContent(travlersCount, content);
    });
});