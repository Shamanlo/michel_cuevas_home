// Michel Cuevas Home Improvement — site scripts
(function () {
  "use strict";

  /* Mobile nav */
  var toggle = document.querySelector(".menu-toggle");
  var mnav = document.querySelector(".mobile-nav");
  var mnavClose = document.querySelector(".mobile-nav-close");
  if (toggle && mnav) {
    toggle.addEventListener("click", function () {
      mnav.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  if (mnavClose && mnav) {
    mnavClose.addEventListener("click", function () {
      mnav.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  /* Keyboard-accessible dropdowns */
  document.querySelectorAll(".has-dropdown > a.nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth > 860) {
        e.preventDefault();
        var parent = link.parentElement;
        var wasOpen = parent.classList.contains("open");
        document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
          el.classList.remove("open");
        });
        if (!wasOpen) parent.classList.add("open");
      }
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
  });

  /* Service category tabs (home page) */
  var tabBtns = document.querySelectorAll(".tab-btn");
  if (tabBtns.length) {
    tabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-tab");
        document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
        document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        var panel = document.getElementById(target);
        if (panel) panel.classList.add("active");
      });
    });
  }

  /* Web3Forms submission (progressive enhancement) */
  document.querySelectorAll("form.web3form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var successEl = form.parentElement.querySelector(".form-success") || form.querySelector(".form-success");
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";
      }
      var formData = new FormData(form);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            form.style.display = "none";
            if (successEl) successEl.classList.add("show");
          } else {
            alert("Something went wrong. Please call us at (319) 333-5046.");
          }
        })
        .catch(function () {
          alert("Something went wrong. Please call us at (319) 333-5046.");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
        });
    });
  });

  /* Current year in footer */
  document.querySelectorAll(".cur-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Multi-step request form */
  document.querySelectorAll("[data-step-form]").forEach(function (root) {
    var panels = root.querySelectorAll(".step-panel");
    var dots = root.querySelectorAll(".step-dot");
    var lines = root.querySelectorAll(".step-line");

    function showStep(n) {
      panels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-panel") === String(n));
      });
      dots.forEach(function (d) {
        var dn = parseInt(d.getAttribute("data-dot"), 10);
        d.classList.toggle("active", dn === n);
        d.classList.toggle("done", dn < n);
      });
      lines.forEach(function (l) {
        var ln = parseInt(l.getAttribute("data-line"), 10);
        l.classList.toggle("done", ln < n);
      });
      var panel = root.querySelector('.step-panel[data-panel="' + n + '"]');
      if (panel) {
        var firstInput = panel.querySelector("input");
        if (firstInput && window.innerWidth > 640) { try { firstInput.focus({ preventScroll: true }); } catch (e) {} }
      }
    }

    root.querySelectorAll(".step-next").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panel = btn.closest(".step-panel");
        var radios = panel.querySelectorAll('input[type="radio"]');
        if (radios.length) {
          var checked = Array.prototype.some.call(radios, function (r) { return r.checked; });
          if (!checked) {
            radios[0].setCustomValidity("Please choose one option to continue.");
            radios[0].reportValidity();
            radios[0].setCustomValidity("");
            return;
          }
        }
        showStep(parseInt(btn.getAttribute("data-next"), 10));
      });
    });

    root.querySelectorAll(".step-back").forEach(function (btn) {
      btn.addEventListener("click", function () {
        showStep(parseInt(btn.getAttribute("data-back"), 10));
      });
    });

    root.querySelectorAll(".option-btn input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        root.querySelectorAll('input[name="' + inp.name + '"]').forEach(function (g) {
          g.closest(".option-btn").classList.toggle("selected", g.checked);
        });
      });
    });
  });
})();
