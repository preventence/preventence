<template>
  <div class="relative">
    <input
      :type="type"
      class="peer input-box"
      v-model="model"
      :required="required"
      placeholder=" "
    />
    <label class="floating-label">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  type: { type: String, default: "text" },
  required: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});
</script>

<style scoped>
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
  background: white;
  padding: 0 4px;
  transition: 0.2s ease;
  color: #64748b;
}
.peer:focus ~ .floating-label,
.peer:not(:placeholder-shown) ~ .floating-label {
  top: -8px;
  transform: scale(0.85);
  color: #07416b;
}
</style>
