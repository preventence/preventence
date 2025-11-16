import { ref } from "vue";

const QUEUE_KEY = "preventence_enquiry_queue";

export function useRetryQueue() {
  const queue = ref([]);

  function loadQueue() {
    const saved = localStorage.getItem(QUEUE_KEY);
    queue.value = saved ? JSON.parse(saved) : [];
  }

  function saveQueue() {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.value));
  }

  function add(payload) {
    loadQueue();
    queue.value.push({
      payload,
      timestamp: Date.now()
    });
    saveQueue();
  }

  async function processQueue() {
    loadQueue();

    if (!queue.value.length) return;

    for (const item of [...queue.value]) {
      try {
        await $fetch("https://preventence-backend.onrender.com/v1/enquiry", {
          method: "POST",
          body: item.payload,
        });

        // remove after success
        queue.value = queue.value.filter(q => q !== item);
        saveQueue();
      } catch (err) {
        console.warn("Retry failed, will try again later.");
      }
    }
  }

  return { add, processQueue };
}
