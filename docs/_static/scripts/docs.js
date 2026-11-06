document.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".wy-nav-side");
  const menu = document.querySelector(".menu-toggle");
  if (navigation && menu) {
    navigation.id = "docs-navigation";
    const updateMenu = () =>
      menu.setAttribute(
        "aria-expanded",
        String(navigation.classList.contains("shift")),
      );
    new MutationObserver(updateMenu).observe(navigation, {
      attributes: true,
      attributeFilter: ["class"],
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation.classList.contains("shift")) {
        menu.click();
        menu.focus();
      }
    });
  }

  const search = document.querySelector('.wy-side-nav-search input[name="q"]');
  if (search) {
    search.placeholder = "Tìm kiếm tài liệu…";
    search.setAttribute("aria-label", "Tìm kiếm tài liệu");
    document.addEventListener("keydown", (event) => {
      if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey)
        return;
      if (
        event.target.closest(
          'input, textarea, select, [contenteditable="true"]',
        )
      )
        return;
      event.preventDefault();
      if (
        menu &&
        navigation &&
        window.matchMedia("(max-width: 768px)").matches &&
        !navigation.classList.contains("shift")
      )
        menu.click();
      search.focus();
    });
  }

  const links = [...document.querySelectorAll('.page-outline a[href^="#"]')];
  if ("IntersectionObserver" in window && links.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        for (const link of links) {
          if (decodeURIComponent(link.hash.slice(1)) === visible[0].target.id)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      },
      { rootMargin: "-5% 0px -65% 0px" },
    );
    for (const link of links) {
      const target = document.getElementById(
        decodeURIComponent(link.hash.slice(1)),
      );
      if (target) observer.observe(target);
    }
  }

  if (!navigator.clipboard?.writeText) return;
  for (const block of document.querySelectorAll(".highlight")) {
    const code = block.querySelector("pre");
    if (!code) continue;
    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    button.textContent = "Sao chép";
    button.setAttribute("aria-label", "Sao chép đoạn mã");
    button.setAttribute("aria-live", "polite");
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = "Đã sao chép";
      } catch {
        button.textContent = "Chưa sao chép được";
      }
      setTimeout(() => {
        button.textContent = "Sao chép";
      }, 2000);
    });
    block.append(button);
  }
});
