<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      <!-- BACKDROP -->
      <div
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="close"
      ></div>

      <!-- MODAL WRAPPER (scrollable on mobile) -->
      <!-- <div
        class="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl ai-border animate-modalIn z-10 flex flex-col"
      >
        <div
          class="sticky top-0 bg-gradient-to-r from-[#07416B] to-[#1297E0] text-white px-6 py-5 flex items-center justify-between shadow-md"
        >
          <h3 class="text-xl font-semibold">Book a Demo</h3>
          <button @click="close" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

         <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <form @submit.prevent="submit" class="space-y-6">
            
            <div class="grid md:grid-cols-2 gap-4">
              <InputField label="First Name *" v-model="form.first_name" required />
              <InputField label="Last Name *" v-model="form.last_name" required />
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <InputField label="Email *" type="email" v-model="form.email" required />
              <InputField label="Mobile *" v-model="form.mobile" required />
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <InputField label="Company Name" v-model="form.company_name" />
              <InputField label="Designation" v-model="form.designation" />
            </div>

            <InputField
              label="Employee Count"
              type="number"
              v-model="form.employee_count"
            />

            <div class="relative">
              <textarea
                v-model="form.description"
                rows="4"
                class="peer input-box resize-none"
              ></textarea>
              <label class="floating-label">Describe your requirement</label>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="bg-[#1297E0] hover:bg-[#07416B] text-white px-6 py-3 rounded-lg font-medium shadow-lg active:scale-95 transition"
              >
                Request Demo
              </button>
            </div>
          </form>
        </div>
      </div> -->

      <!-- MODAL WRAPPER -->
      <!-- <div
        class="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl ai-border animate-modalIn z-10 flex flex-col"
      >

        <div
          class="sticky top-0 bg-gradient-to-r from-[#07416B] to-[#1297E0] text-white px-6 py-5 flex items-center justify-between shadow-md z-20"
        >
          <h3 class="text-xl font-semibold">Book a Demo</h3>
          <button @click="close" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <form @submit.prevent="submit" class="space-y-6">
            <slot />
          </form>
        </div>

        <div
          class="sticky bottom-0 bg-white px-6 py-4 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] z-20 border-t"
        >
          <button
            @click="submit"
            class="w-full bg-[#1297E0] hover:bg-[#07416B] text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg active:scale-95"
          >
            Submit Request
          </button>
        </div>
      </div> -->

      <!-- MODAL WRAPPER -->
      <div
        class="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl ai-border animate-modalIn z-10 flex flex-col"
      >

        <!-- FIXED HEADER -->
        <div
          class="sticky top-0 bg-gradient-to-r from-[#07416B] to-[#1297E0] text-white px-6 py-5 flex items-center justify-between shadow-md z-20 flex-shrink-0"
        >
          <h3 class="text-xl font-semibold">Book a Demo</h3>
          <button @click="close" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- SCROLLABLE INPUT AREA -->
        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <!-- IMPORTANT: Move only input fields INSIDE this div -->
          <form @submit.prevent="submit" class="space-y-6">
            <!-- All your floating label inputs here -->
            <div class="grid md:grid-cols-2 gap-4">
              <InputField label="First Name *" v-model="form.first_name" required />
              <InputField label="Last Name" v-model="form.last_name" required />
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <InputField label="Email *" type="email" v-model="form.email" required />
              <InputField label="Mobile *" v-model="form.mobile" required />
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <InputField label="Company Name" v-model="form.company_name" />
              <InputField label="Designation" v-model="form.designation" />
            </div>

            <InputField
              label="Employee Count"
              type="number"
              v-model.number="form.employee_count"
            />

            <div class="relative">
              <textarea
                v-model="form.description"
                rows="4"
                class="peer input-box resize-none"
              ></textarea>
              <label class="floating-label">Describe your requirement</label>
            </div>
          </form>
        </div>

        <!-- FIXED FOOTER BUTTON -->
        <div
          class="sticky bottom-0 bg-white px-6 py-4 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] z-20 flex-shrink-0 border-t"
        >
          <!-- <button
            @click="submit"
            :disabled="!isValid"
            class="w-full bg-[#1297E0] hover:bg-[#07416B] text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg active:scale-95"
          >
            Submit Request
          </button> -->
          <button
            @click="submit"
            :disabled="!isValid"
            class="w-full bg-[#1297E0] 
                  hover:bg-[#07416B] 
                  disabled:bg-gray-300 
                  disabled:hover:bg-gray-300
                  disabled:text-gray-500
                  disabled:cursor-not-allowed
                  text-white px-6 py-3 rounded-lg font-semibold 
                  transition shadow-lg active:scale-95"
          >
            Submit Request
          </button>
        </div>

      </div>

      <!-- TOAST -->
    </div>
  </Teleport>
   <transition name="toast">
    <!-- <div
      v-if="toast"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#07416B] text-white px-6 py-3 rounded-xl shadow-2xl z-[99999]"
    >
      {{ toast }}
    </div> -->
    <div
      v-if="toast"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg 
            bg-[#07416B] text-white text-sm font-medium tracking-wide
            animate-slide-up z-[9999] backdrop-blur-md border border-white/20"
    >
      {{ toast }}
    </div>
  </transition>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed, watch } from "vue";
import InputField from "./InputField.vue";
import { useRetryQueue } from "~/composables/useRetryQueue";
const { add: saveToRetryQueue } = useRetryQueue();

const props = defineProps({ show: Boolean });
const emit = defineEmits(["update:show"]);

const toast = ref("");
const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  country_code: "+91",
  description: "",
  company_name: "",
  designation: "",
  employee_count: 0,
});

const errors = ref({
  first_name: "",
  email: "",
  mobile: "",
});

const isValid = computed(() => {
  const hasEmail = isEmailValid(form.value.email);
  const hasMobile = form.value.mobile.trim() !== "";

  return (
    form.value.first_name.trim() !== "" &&
    (hasEmail || hasMobile) // At least one is required
  );
});

function isEmailValid(email) {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function close() {
  emit("update:show", false);
}

async function submit() {
  errors.value = { first_name: "", email: "", mobile: "" };

  if (!form.value.first_name.trim()) {
    errors.value.first_name = "First name is required.";
  }
  const hasEmail = isEmailValid(form.value.email);
  const hasMobile = form.value.mobile.trim() !== "";

  if (!hasEmail && !hasMobile) {
    errors.value.email = "Email or mobile is required.";
    errors.value.mobile = "Email or mobile is required.";
  }  else if (form.value.email && !hasEmail) {
    errors.value.email = "Enter a valid email.";
  }

  if (!isValid.value) return; // BLOCK SUBMISSION
  close();

  const payload = {
    first_name: form.value.first_name || "",
    last_name: form.value.last_name || "",
    email: form.value.email || "",
    mobile: form.value.mobile ? `${form.value.country_code}${form.value.mobile}` : "",
    description: form.value.description || "",
    company_name: form.value.company_name || "",
    designation: form.value.designation || "",
    employee_count: form.value.employee_count,
  };

  const cleanedPayload = Object.fromEntries(
    Object.entries(payload).filter(([_, v]) =>
      v !== "" && v !== null && v !== undefined
    )
  );

  try {
    const response = await $fetch("https://preventence-backend.onrender.com/v1/enquiry", {
      method: "POST",
      body: cleanedPayload,
    });
      
    if (response) {
      toast.value = "Thank you! Your request has been submitted successfully. Our team will get back to you within the next 48 hours.";
    } else {
      toast.value = "Submission received but not processed. Please try again."
      saveToRetryQueue(cleanedPayload);
    }

    setTimeout(() => (toast.value = ""), 3500);

  } catch (e) {
    console.log('error ', e);
    saveToRetryQueue(cleanedPayload);
    toast.value = "Submission failed. Please try again.";
    setTimeout(() => (toast.value = ""), 2500);
  } finally {
    form.value = {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      country_code: "+91",
      description: "",
      company_name: "",
      designation: "",
      employee_count: "",
    };
  }
}

watch(() => props.show, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
});
</script>

<style scoped>
/* mobile scroll fix */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #1297e0;
  border-radius: 10px;
}

/* Floating labels */
.input-box {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d0d7e2;
}
.floating-label {
  position: absolute;
  left: 12px;
  top: 12px;
  transition: 0.15s ease;
  background: white;
  padding: 0 4px;
  color: #64748b;
}
.peer:focus ~ .floating-label,
.peer:not(:placeholder-shown) ~ .floating-label {
  top: -8px;
  color: #07416b;
  transform: scale(0.85);
}

/* AI border */
.ai-border {
  position: relative;
}
.ai-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1.5px;
  border-radius: 16px;
  background: linear-gradient(135deg, #1297e0, #07416b, #1297e0);
  background-size: 400% 400%;
  animation: aiGlow 6s ease infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
@keyframes aiGlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Modal enter animation */
@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-modalIn {
  animation: modalIn 0.25s ease-out;
}

/* Toast animation */
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  /* Only apply the -50% translateX part of the final position, 
     and apply a greater Y translation for the slide effect. */
  transform: translate(-50%, 10px); 
}

@keyframes slideUp {
  0% { opacity: 0; transform: translate(-50%, 20px); }
  100% { opacity: 1; transform: translate(-50%, 0); }
}

.animate-slide-up {
  animation: slideUp 0.35s ease-out;
}

</style>
