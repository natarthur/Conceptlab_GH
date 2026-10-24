function updateFraction(){
  const n=Math.max(0,Number(document.getElementById("num").value)||0);
  const d=Math.max(1,Number(document.getElementById("den").value)||1);
  const visual=document.getElementById("fractionVisual");
  visual.innerHTML="";
  for(let i=0;i<d;i++){const s=document.createElement("span");if(i<n)s.className="filled";visual.appendChild(s)}
  document.getElementById("fractionText").textContent=`Your fraction is ${n}/${d} = ${(n/d).toFixed(2)}.`;
}
function compareFractions(){
  const a=(Number(document.getElementById("num2").value)||0)/(Math.max(1,Number(document.getElementById("den2").value)||1));
  const b=(Number(document.getElementById("num").value)||0)/(Math.max(1,Number(document.getElementById("den").value)||1));
  const r=document.getElementById("compareResult");
  r.textContent=a===b?"The two fractions are equal.":a>b?"The comparison fraction is greater.":"The first fraction is greater.";
}
document.addEventListener("input",e=>{if(e.target.id==="num"||e.target.id==="den")updateFraction()});
document.addEventListener("click",e=>{if(e.target.id==="compareFractions")compareFractions()});
