export default function currentBox(cb){
  // next line from: https://stackoverflow.com/a/222847
  let boxes = Array.prototype.slice.call( document.getElementsByClassName("box") );
  let scrollTop = event.target.scrollTop;
  let targetRec = event.target.getBoundingClientRect();
  let firstBoxRec = boxes[0].getBoundingClientRect();
  let midpoint = scrollTop + targetRec.height/2;

  let closestBox = boxes.reduce(function(closest, box){
    box.style.color = "black";
    let preMid = closest.getBoundingClientRect().top+closest.getBoundingClientRect().height/2;
    let preOffset = preMid - firstBoxRec.top;
    let preDist = Math.abs(preOffset - midpoint);
    let newMid = box.getBoundingClientRect().top+box.getBoundingClientRect().height/2;
    let newOffset = newMid - firstBoxRec.top;
    let newDist = Math.abs(newOffset - midpoint);
    if(newDist < preDist){
      return box
    }else{
      return closest
    }
  }, boxes[0]);
  return cb(closestBox, boxes);

}
