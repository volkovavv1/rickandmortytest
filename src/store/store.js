import { reactive } from "vue";

export const store = reactive({
  currentPage: 1,
  setCurrentPage(page) {
    this.currentPage = page;
    },
  setPrevPage() {
    this.currentPage--
  },
  setNextPage() {
    this.currentPage++
  },
  
  filter: false,
  setFilter(param) {
    this.filter = param
  }
})