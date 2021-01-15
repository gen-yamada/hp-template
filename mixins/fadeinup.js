export default {
  mounted() {
    const options = {
      root: null,
      rootMargin: "-40px",
      threshold: 0,
		};
    const images = document.querySelectorAll('.fadeInUp');
    images.forEach((target) => this.onIntersect(target, options));
  },
  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addShowClass, options);
      observer.observe(target);
    },
    addShowClass(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-fadeInUp");
        }
      }
    },
  }
}