var ele = document.getElementById('handy-tooltip');

var getSelectedText = function(){
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

var HandyHighlight = function(options){

    var 
        defaults = { 
            extraTop: null,
            extraLeft: null,
            text: null,
            onclick: function(){ return; }
        },
        settings = Object.assign({}, defaults, options),
        sel = window.getSelection(),
        rel1 = document.createRange(),
        rel2= document.createRange(),
        text = (settings.text == null) ? getSelectedText() : settings.text;
    
    rel1.selectNode(document.getElementById('cal1'));
    rel2.selectNode(document.getElementById('cal2'));

    if (text != "") {

        var r = sel.getRangeAt(0).getBoundingClientRect(),
            rb1 = rel1.getBoundingClientRect(),
            rb2 = rel2.getBoundingClientRect(),
            width = (r.width > 1300) ? 1300 : r.width;
    
        ele.style.top = (r.bottom - rb2.top)*100/(rb1.top-rb2.top) + 5 + settings.extraTop + 'px'; 
        ele.style.left = (r.left - rb2.left)*100/(rb1.left-rb2.left) + settings.extraLeft + 'px'; 

        ele.style.width = width+"px";
        ele.innerHTML = text;
        ele.style.display = 'block';   

        ele.onclick = function(){
            settings.onclick();
            ele.style.display = "none";
        } 
    
    } else if(text == ""){
        ele.style.display = "none";
    }

}

module.exports = HandyHighlight;
