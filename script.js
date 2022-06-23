
el = document.querySelector('#aSentence');
setWidthForDiv(el);
function setWidthForDiv(el){          window.getSelection().selectAllChildren(el);
  var selection = window.getSelection();
  var range = selection.getRangeAt(0); 
  var rects = range.getClientRects();
  var maxWidthLine = 0;
 
  for (const key of Object.keys(rects)) {
    if(maxWidthLine<rects[key].width){
        maxWidthLine = rects[key].width
    }
  }
  if(maxWidthLine>0){
    el.style.width = maxWidthLine+'px';
  }
  console.log(maxWidthLine);
  
}