/* ConceptLab Ghana Beta 1.1 — Learning engine */
window.CL_ENGINE = (() => {
  const key = "conceptlab-progress-v1-1";

  function load() {
    try { return JSON.parse(localStorage.getItem(key)) || {}; }
    catch { return {}; }
  }

  function save(data) {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }

  function markTopic(topic, result) {
    const data = load();
    data[topic] = data[topic] || {views:0, practice:0, tests:0, correct:0, attempts:0, mastery:0};
    data[topic].views++;
    if (result) {
      data[topic].attempts++;
      if (result.correct) data[topic].correct++;
      if (result.type === "practice") data[topic].practice++;
      if (result.type === "test") data[topic].tests++;
    }
    const attempts = data[topic].attempts;
    data[topic].mastery = attempts ? Math.round((data[topic].correct / attempts) * 100) : Math.min(20, data[topic].views * 10);
    save(data);
    return data[topic];
  }

  function getTopic(topic) {
    return load()[topic] || {views:0, practice:0, tests:0, correct:0, attempts:0, mastery:0};
  }

  function totalExplored() {
    return Object.keys(load()).length;
  }

  function reset() {
    localStorage.removeItem(key);
  }

  function stuck(topic, route) {
    const messages = {
      simpler: "Break the idea into one small question. What is known? What is unknown? What changes?",
      visual: "Draw it or represent it with a picture, number line, table, flowchart, labelled diagram or physical object.",
      hint: "Do not jump to the answer. Identify the first step you are confident about, then continue from there.",
      another: "Switch representation: explain it in words, then symbols, then a real-life example. Compare the three."
    };
    return messages[route] || messages.hint;
  }

  return {load, save, markTopic, getTopic, totalExplored, reset, stuck};
})();
