import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from './components/WelcomePage.vue';
import NoteListLinks from './components/NoteListLinks.vue';
import FullNoteSheet from './components/FullNoteSheet.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/welcome' },
        {
          name: 'welcome',
          path: '/welcome',
          component: WelcomePage
        },
        {
            path: '/noteLists',
            component: NoteListLinks
        },
        {
            name:'noteLists',
            path: '/noteLists/:id',
            components: FullNoteSheet
        }
    ],
      //{ path: '/:notFound(.*)', component: NotFound }
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
      // console.log(to, from, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    }
  });  

export default router;