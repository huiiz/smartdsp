import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-shared@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});