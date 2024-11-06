import type {RouteRecordRaw} from "vue-router";

export const stockRoutePrefix = 'stock'

export const stockRoute : RouteRecordRaw =
  {
    path : '/stock',
    name: `${stockRoutePrefix}`,
    children : [
      {
        path: '',
        name: `${stockRoutePrefix}.list`,
        component: () => import('./views/ListView.vue'),
      },
      {
        path: 'add',
        name: `${stockRoutePrefix}.add`,
        component: () => import('./views/AddView.vue'),
      },
    ]
  };
