export const categoryMap = {"category":{"/":{"path":"/category/","map":{"实验室活动":{"path":"/category/%E5%AE%9E%E9%AA%8C%E5%AE%A4%E6%B4%BB%E5%8A%A8/","keys":["v-fb25e18a"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


