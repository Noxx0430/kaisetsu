//
// 埋め込むだけで目次を作れるjQuery
// 

// window onload => JS start
$(window).on("load", function(){
    const sel = $(".tocbox").length; // .tocbox none and be
    if(sel === 0){
        // if none => add tocbox
        $("body").prepend("<div class='tocbox'><b>目次</b><br></div>")        
    }else{
        // if be => add mokuji title
        $(".tocbox").append("<b>目次</b><br>");
    }
    $("body").append("<div class='headline_text' style='display: none;'></div>");
    $("h1, h2, h3").each(function(){
        $(".headline_text").text(Number($(".headline_text").text()) + 1);
        const num = $(".headline_text").text();
        $(this).append("<a id='head_" + num + "' class='headline'></a>");
        const head = $(this).prop("outerHTML").slice(2, 3);
        const text = $(this).text();
        if(head === "1"){
            $(".tocbox").append("<li style='margin: 2px 0 0 1rem;'><a href='#head_" + num + "'>" + text + "</a></li>")
        }else if(head === "2"){
            $(".tocbox").append("<li style='margin-left: 2.5rem;'><a href='#head_" + num + "'>" + text + "</a></li>")
        }else if(head === "3"){
            $(".tocbox").append("<li style='margin-left: 4rem;'><a href='#head_" + num + "'>" + text + "</a></li>")
        }
    })
})