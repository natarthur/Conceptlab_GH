const energyMap={
 bulb:{title:"Torch / Bulb",symbol:"💡",from:"Chemical energy (battery)",to:"Electrical → Light + Thermal energy",explain:"A battery provides chemical energy. The circuit converts it into electrical energy, producing light and heat."},
 fan:{title:"Electric Fan",symbol:"🌀",from:"Electrical energy",to:"Kinetic + Sound + Thermal energy",explain:"Electrical energy powers the motor, producing movement of the blades and some sound and heat."},
 speaker:{title:"Speaker",symbol:"🔊",from:"Electrical energy",to:"Sound + Thermal energy",explain:"Electrical signals make the speaker vibrate, transforming electrical energy mainly into sound."},
 food:{title:"Food / Human Body",symbol:"🍎",from:"Chemical energy in food",to:"Kinetic + Thermal energy",explain:"The body releases chemical energy from food and uses it for movement and maintaining body temperature."}
};
document.addEventListener("click",e=>{
 const key=e.target.dataset.energy;if(!key)return;
 const x=energyMap[key];
 document.getElementById("energyDisplay").innerHTML=`<div class="energy-symbol">${x.symbol}</div><h3>${x.title}</h3><p><strong>${x.from}</strong> → <strong>${x.to}</strong></p><p>${x.explain}</p>`;
});
