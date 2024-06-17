import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHTML from '../views/DataBindingHTML.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingList from '../views/DataBindingList.vue'
import EventClick from '../views/EventClick.vue'
import TestComWat from '../views/TestComWat.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/databinding',
    name : 'DataBinding',
    component : DataBinding
  },
  {
    path : '/databindinghtml',
    name : 'DataBindingHTML',
    component : DataBindingHTML
  },
  {
    path : '/databindinginputtext',
    name : 'DataBindingInputText',
    component : DataBindingInputText
  },
  {
    path : '/databindinginputnumber',
    name : 'DataBindingInputNumber',
    component : DataBindingInputNumber
  },
  {
    path : '/nestedcomponent',
    name : NestedComponent,
    component : NestedComponent
  },
  {
    path : '/parentcomponent',
    name : ParentComponent,
    component: ParentComponent
  },
  {
    path : '/DataBindingTextarea',
    name : DataBindingTextarea,
    component : DataBindingTextarea
  },
  {
    path : '/DataBindingSelect',
    name : DataBindingSelect,
    component : DataBindingSelect
  },
  {
    path : '/DataBindingCheckbox',
    name : DataBindingCheckbox,
    component : DataBindingCheckbox
  },
  {
    path : '/DataBindingRadio',
    name : DataBindingRadio,
    component : DataBindingRadio
  },
  {
    path : '/DataBindingButton',
    name : DataBindingButton,
    component : DataBindingButton
  },
  {
    path : '/DataBindingClass',
    name : DataBindingClass,
    component : DataBindingClass
  },
  {
    path : '/DataBindingList',
    name : DataBindingList,
    component : DataBindingList
  },
  {
    path : '/EventClick',
    name : EventClick,
    component : EventClick
  },
  {
    path : '/TestComWat',
    name : TestComWat,
    component : TestComWat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
