import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from './components/WelcomePage.vue';
import NoteListLinks from './components/NoteListLinks.vue';
import FullNoteSheet from './components/FullNoteSheet.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/welcome' },
        {
          name: 'FNS',
          path: '/fns',
          component: FullNoteSheet
        },
        {
          name: 'welcome',
          path: '/welcome',
          component: WelcomePage
        },
        {
            name:'noteLists',
            path: '/noteLists',
            component: NoteListLinks,
            children: [
              {
                name:'noteListSheets',
                path: ':id',
                component: FullNoteSheet
              }
            ]
        }
    ],
    linkActiveClass: 'active'
  });  

export default router;