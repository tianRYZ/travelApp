import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore'

export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const scrollListenerHandlers = throttle(
    () => {
      if (el === window) {
        clientHeight.value = document.documentElement.clientHeight;
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
      } else {
        clientHeight.value = el.clientHeight;
        scrollTop.value = el.scrollTop;
        scrollHeight.value = el.scrollHeight;
      }
      console.log('------监听滚动-');
      if (Math.ceil(clientHeight.value + scrollTop.value) >= scrollHeight.value) {
        console.log('touch bottom触底了')
        isReachBottom.value = true;
        // if (reachCB) reachCB();
      }
    }, 100)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandlers);
  });
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandlers);
  })
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}