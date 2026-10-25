(() => {
  const area = document.getElementById('gameArea');
  if (!area) return;
  let state = {};

  const games = {
    fraction() {
      const targetDen = 8;
      const targetNum = Math.floor(Math.random() * 6) + 1;
      state = { targetNum, targetDen, chosen: 0 };
      area.innerHTML = `<div class="game-head"><span>🍕</span><div><h3>Fraction Factory</h3><p>Build <strong>${targetNum}/${targetDen}</strong> by selecting pieces.</p></div></div><div class="game-pizza" id="fractionPieces"></div><div class="game-status" id="gameStatus">0/${targetDen} pieces selected.</div><button class="secondary game-reset" data-reset-game="fraction">New challenge</button>`;
      const pieces = document.getElementById('fractionPieces');
      for (let i = 0; i < targetDen; i++) {
        const b = document.createElement('button'); b.className = 'piece'; b.textContent = i + 1;
        b.onclick = () => {
          b.classList.toggle('selected');
          state.chosen = pieces.querySelectorAll('.piece.selected').length;
          const status = document.getElementById('gameStatus');
          status.textContent = `${state.chosen}/${targetDen} pieces selected.`;
          if (state.chosen === targetNum) status.innerHTML = `🎉 <strong>Great!</strong> ${targetNum} out of ${targetDen} equal parts makes ${targetNum}/${targetDen}.`;
          else if (state.chosen > targetNum) status.textContent += ' Too many pieces — remove one.';
        };
        pieces.appendChild(b);
      }
    },
    market() {
      const items = [{name:'Exercise book',price:4},{name:'Pencil',price:2},{name:'Ruler',price:3}];
      const total = items.reduce((a,x)=>a+x.price,0), cash = 15;
      state = {total,cash};
      area.innerHTML = `<div class="game-head"><span>🛒</span><div><h3>Cedi Market</h3><p>You buy the three items below and pay with GH₵${cash}. What change should you receive?</p></div></div><div class="market-list">${items.map(x=>`<div><span>${x.name}</span><strong>GH₵${x.price}</strong></div>`).join('')}</div><div class="answer-row"><input id="marketAnswer" type="number" min="0" placeholder="Change"><button class="primary" data-market-check>Check</button></div><div class="game-status" id="gameStatus">Add the prices first, then find the change.</div><button class="secondary game-reset" data-reset-game="market">New challenge</button>`;
    },
    energy() {
      const options = [
        ['Battery','Bulb','Chemical → Electrical → Light'],
        ['Food','Human body','Chemical → Kinetic + Thermal'],
        ['Electrical supply','Fan','Electrical → Kinetic + Sound']
      ];
      const item = options[Math.floor(Math.random()*options.length)]; state = {answer:item[2]};
      area.innerHTML = `<div class="game-head"><span>⚡</span><div><h3>Power Station</h3><p>Complete the energy pathway.</p></div></div><div class="energy-chain"><strong>${item[0]}</strong><span>→</span><strong>${item[1]}</strong><span>→</span><span class="energy-blank">?</span></div><div class="choice-list">${options.map(x=>`<button data-energy-choice="${x[2]}">${x[2]}</button>`).join('')}</div><div class="game-status" id="gameStatus">Choose the pathway that best explains the transformation.</div><button class="secondary game-reset" data-reset-game="energy">New challenge</button>`;
    },
    algebra() {
      const x = Math.floor(Math.random()*7)+2, add = Math.floor(Math.random()*8)+2, total=x+add; state={x,add,total};
      area.innerHTML = `<div class="game-head"><span>🔐</span><div><h3>Equation Escape</h3><p>Unlock the door: <strong>x + ${add} = ${total}</strong></p></div></div><div class="answer-row"><input id="algebraAnswer" type="number" placeholder="x"><button class="primary" data-algebra-check>Unlock</button></div><div class="game-status" id="gameStatus">Think about what must be taken away from both sides.</div><button class="secondary game-reset" data-reset-game="algebra">New code</button>`;
    }
  };

  document.addEventListener('click', e => {
    const g = e.target.closest('[data-game]'); if (g && games[g.dataset.game]) games[g.dataset.game]();
    const reset = e.target.closest('[data-reset-game]'); if (reset && games[reset.dataset.resetGame]) games[reset.dataset.resetGame]();
    if (e.target.closest('[data-market-check]')) {
      const v = Number(document.getElementById('marketAnswer').value), s=document.getElementById('gameStatus');
      s.innerHTML = v === state.cash-state.total ? '🎉 <strong>Correct!</strong> GH₵15 − GH₵9 = GH₵6 change.' : 'Not yet. Add the three prices, then subtract the total from the cash paid.';
    }
    const ec = e.target.closest('[data-energy-choice]'); if (ec) {
      const s=document.getElementById('gameStatus'); s.innerHTML = ec.dataset.energyChoice === state.answer ? '🎉 <strong>Correct.</strong> You matched the source, device and transformation.' : 'Try again. Think about what energy is stored at the source and what the device does with it.';
    }
    if (e.target.closest('[data-algebra-check]')) {
      const v=Number(document.getElementById('algebraAnswer').value), s=document.getElementById('gameStatus');
      s.innerHTML = v===state.x ? `🔓 <strong>Unlocked!</strong> x = ${state.x}. Subtract ${state.add} from both sides.` : 'The code did not work. Use the same operation on both sides of the equation.';
    }
  });
})();
