document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: "right"
    });

    
    let cssCodeTexts = ""
    const docStylsheet = document.styleSheets
    for (const cssFile in docStylsheet) {
        if (typeof(docStylsheet[cssFile].href) == "string" && docStylsheet[cssFile].href.includes('util.css')) {
                const cssCodes = docStylsheet[cssFile].cssRules
                for (const css in cssCodes) {                
                if (cssCodes[css].selectorText && document.querySelector('body').innerHTML.includes(cssCodes[css].selectorText.split(".")[1] || "zzzzzzzzzz")) {
                    cssCodeTexts = cssCodeTexts + cssCodes[css].cssText
                }
            }
        }
    }
    var download = document.getElementById('download');
    download.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(cssCodeTexts));
    download.setAttribute('download', 'filename.css');


});