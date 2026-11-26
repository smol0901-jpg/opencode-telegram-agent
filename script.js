const clock = document.getElementById('clock');
function tick() {
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString('ru-RU', { hour12: false });
}
tick();
setInterval(tick, 1000);

const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelectorAll('#prompts button').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.textContent.replace(/[«»]/g, '').trim();
    try {
      await navigator.clipboard.writeText(text);
      showToast('Скопировано — отправьте боту в группу');
    } catch {
      showToast(text);
    }
  });
});
