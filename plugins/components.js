import Vue from 'vue'

import Page from '~/components/templates/Page.vue'

import ALink from '~/components/atoms/ALink.vue'
import MLinkList from '~/components/molecules/MLinkList.vue'

import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'

Vue.component('page', Page)

Vue.component('a-link', ALink)
Vue.component('m-link-list', MLinkList)

Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
