(() => {
  const num = document.getElementById("num");
  const den = document.getElementById("den");
  const shownNum = document.getElementById("shownNum");
  const shownDen = document.getElementById("shownDen");
  const shownDecimal = document.getElementById("shownDecimal");
  const meaning = document.getElementById("fractionMeaning");
  const visual = document.getElementById("fractionVisual");
  const explanation = document.getElementById("fractionExplanation");
  const feedback = document.getElementById("practiceFeedback");
  let method = "visual";

  function getValues() {
    const n = Math.max(0, Math.min(20, Number(num.value) || 0));
    const d = Math.max(1, Math.min(20, Number(den.value) || 1));
    num.value = n; den.value = d;
    return {n, d};
  }

  function decimal(n, d) {
    return Number((n / d).toFixed(8)).toString();
  }

  function draw(n, d) {
    visual.innerHTML = "";
    for (let i = 0; i < d; i++) {
      const part = document.createElement("span");
      part.className = "fraction-part" + (i < n ? " filled" : "");
      part.textContent = i < n ? "✓" : "";
      visual.appendChild(part);
    }
  }

  function visualLesson(n, d) {
    const dec = decimal(n,d);
    if (10 % d === 0) {
      const m = 10 / d, top = n * m;
      return `<span class="method-label">👀 Visual Method</span>
        <h3>Let's see what the fraction means.</h3>
        <div class="lesson-step"><b>1</b><p>The whole is divided into <strong>${d} equal parts</strong>.</p></div>
        <div class="lesson-step"><b>2</b><p>We have <strong>${n}</strong> of those parts, so we have <strong>${n}/${d}</strong>.</p></div>
        <div class="lesson-step"><b>3</b><p>Now split each part so the whole has <strong>10 equal parts</strong>.</p></div>
        <div class="lesson-step"><b>4</b><p>${n} parts become <strong>${top} tenths</strong>.</p></div>
        <div class="lesson-step"><b>5</b><p><strong>${top}/10</strong> means ${top} tenths. The digit ${top} is in the <strong>tenths place</strong>.</p></div>
        <div class="big-equation">${n}/${d} = ${top}/10 = ${dec}</div>`;
    }
    return `<span class="method-label">👀 Visual Method</span>
      <h3>Let's see what the fraction means.</h3>
      <div class="lesson-step"><b>1</b><p>The whole is divided into <strong>${d} equal parts</strong>.</p></div>
      <div class="lesson-step"><b>2</b><p>We have <strong>${n}</strong> of those parts: <strong>${n}/${d}</strong>.</p></div>
      <div class="lesson-step"><b>3</b><p>To write it as a decimal, we rename the same amount using tenths, hundredths, and smaller parts.</p></div>
      <div class="lesson-step"><b>4</b><p>The decimal representation is <strong>${dec}</strong>.</p></div>`;
  }

  function numberLesson(n,d) {
    const dec = decimal(n,d);
    if (10 % d === 0) {
      const m = 10/d, top=n*m;
      return `<span class="method-label">🔢 Number & Place Value</span>
        <h3>Why does 4/10 become 0.4?</h3>
        <div class="lesson-step"><b>1</b><p><strong>10/10</strong> is one whole. So one of the 10 parts is <strong>1/10</strong>, called <strong>one tenth</strong>.</p></div>
        <div class="lesson-step"><b>2</b><p>The first place after the decimal point is the <strong>tenths place</strong>.</p></div>
        <div class="place-value-box"><span>Ones</span><span>.</span><strong>Tenths</strong><br><b>0</b><span>.</span><b>${top}</b></div>
        <div class="lesson-step"><b>3</b><p>So <strong>${top}/10</strong> means <strong>${top} tenths</strong>.</p></div>
        <div class="lesson-step"><b>4</b><p>Writing ${top} tenths in decimal form puts ${top} in the tenths place: <strong>${dec}</strong>.</p></div>
        <div class="big-equation">${n}/${d} = ${top}/10 = ${top} tenths = ${dec}</div>`;
    }
    return `<span class="method-label">🔢 Number & Place Value</span>
      <h3>Connect the fraction to decimal place value.</h3>
      <div class="lesson-step"><b>1</b><p>${n}/${d} means ${n} out of ${d} equal parts.</p></div>
      <div class="lesson-step"><b>2</b><p>Decimals describe amounts using tenths, hundredths, thousandths and more.</p></div>
      <div class="lesson-step"><b>3</b><p>For this fraction, the decimal is <strong>${dec}</strong>.</p></div>
      <p class="tip">Choose Step-by-Step Division to see exactly where each decimal digit comes from.</p>`;
  }

  function divisionLesson(n,d) {
    let whole=Math.floor(n/d), rem=n%d, rows=[`Start with <strong>${n} ÷ ${d}</strong>.`,
      `${d} goes into ${n} <strong>${whole}</strong> whole time${whole===1?"":"s"}.`];
    if (!rem) rows.push("There is no remainder, so the answer is complete.");
    else {
      rows.push(`We have <strong>${rem}</strong> left. Because ${rem} is smaller than ${d}, we move to the decimal part.`);
      const seen=new Set(); let i=0;
      while(rem && i<8 && !seen.has(rem)) {
        seen.add(rem); const before=rem, x=rem*10, digit=Math.floor(x/d);
        rem=x%d; i++;
        rows.push(`Add a zero: ${before} becomes <strong>${x}</strong>. ${d} goes into ${x} <strong>${digit}</strong> time${digit===1?"":"s"}. That digit is the next decimal digit.`);
      }
      if(rem) rows.push("The remainder repeats, so the decimal will continue repeating.");
    }
    return `<span class="method-label">👣 Step-by-Step Division</span>
      <h3>We will not skip the steps.</h3>
      ${rows.map((x,i)=>`<div class="lesson-step"><b>${i+1}</b><p>${x}</p></div>`).join("")}
      <div class="big-equation">${n} ÷ ${d} = ${decimal(n,d)}</div>`;
  }

  function realLesson(n,d) {
    return `<span class="method-label">🌍 Real-Life Method</span>
      <h3>Imagine sharing one whole equally.</h3>
      <div class="story-box">Imagine a whole item is divided into <strong>${d} equal pieces</strong>. You have <strong>${n}</strong> pieces.</div>
      <div class="lesson-step"><b>1</b><p>Your amount is <strong>${n}/${d}</strong> because you have ${n} pieces out of ${d}.</p></div>
      <div class="lesson-step"><b>2</b><p>Now describe the same amount using decimal place value.</p></div>
      <div class="lesson-step"><b>3</b><p>The decimal is <strong>${decimal(n,d)}</strong>. It is another name for the same amount.</p></div>`;
  }

  function render() {
    const {n,d}=getValues();
    const dec=decimal(n,d);
    shownNum.textContent=n; shownDen.textContent=d; shownDecimal.textContent=dec;
    meaning.textContent=`This means ${n} out of ${d} equal part${d===1?"":"s"}.`;
    draw(n,d);
    if(method==="visual") explanation.innerHTML=visualLesson(n,d);
    if(method==="number") explanation.innerHTML=numberLesson(n,d);
    if(method==="division") explanation.innerHTML=divisionLesson(n,d);
    if(method==="real") explanation.innerHTML=realLesson(n,d);
    feedback.textContent="";
  }

  num.addEventListener("input",render);
  den.addEventListener("input",render);

  document.querySelectorAll(".path-button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      method=btn.dataset.method;
      document.querySelectorAll(".path-button").forEach(b=>b.classList.toggle("active",b===btn));
      render();
    });
  });

  document.querySelectorAll(".practice-option").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const {n,d}=getValues(), m=Number(btn.dataset.mult);
      if(d*m>20){
        feedback.textContent=`Try another choice. This would make the denominator ${d*m}.`;
        return;
      }
      feedback.textContent=`Good! ${n}/${d} and ${n*m}/${d*m} are equivalent because both numbers were multiplied by ${m}.`;
    });
  });

  render();
})();