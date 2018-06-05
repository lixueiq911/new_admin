function response(design_w) {
	
    
    
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var design_w  = design_w?design_w:750;
    
    var recalc = function () {
    		var w = document.documentElement.clientWidth||document.body.clientWidth;
            var prop = w/design_w;
            
            //prop = prop<=1?prop:1;
            
            document.documentElement.style.fontSize = prop*100 + 'px';
        };
	recalc();
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
};

