// Success notification
document.getElementById("btnSuccess").addEventListener("click", () => {
  const notif = document.getElementById("notifSuccess");
  notif.classList.remove("translate-x-[-200%]");
  notif.classList.add("translate-x-0");
  setTimeout(() => {
    notif.classList.remove("translate-x-0");
    notif.classList.add("translate-x-[-200%]");
  }, 3000);
});

// Error notification
document.getElementById("btnError").addEventListener("click", () => {
  const notif = document.getElementById("notifError");
  notif.classList.remove("translate-x-[200%]");
  notif.classList.add("translate-x-0");
  setTimeout(() => {
    notif.classList.remove("translate-x-0");
    notif.classList.add("translate-x-[200%]");
  }, 3000);
});

// Warning notification
document.getElementById("btnWarning").addEventListener("click", () => {
  const notif = document.getElementById("notifWarning");
  notif.classList.remove("translate-y-[200%]");
  notif.classList.add("translate-y-0");
  setTimeout(() => {
    notif.classList.remove("translate-y-0");
    notif.classList.add("translate-y-[200%]");
  }, 3000);
});
