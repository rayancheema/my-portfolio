    const t = document.getElementById("t");
    const w = ["Coder", "Designer", "Creator"];
    let i = 0, j = 0, del = false;
    setInterval(() => {
      const s = w[i];
      j += del ? -1 : 1;
      t.textContent = s.slice(0, j);
      if (j == s.length) del = true;
      if (j == 0) { del = false; i = (i + 1) % w.length; }
    }, 250);
