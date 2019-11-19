<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)" v-bind:class="{ 'bg-success': item.estado, 'text-dark': !item.estado }"
            class="list-group-item d-flex justify-content-between align-items-center">
               {{index}} - {{ item.nombre }}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <div>
           <button type="button" class="btn btn-block btn-secondary" @click="resetear">reiniciar</button>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';


export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas']),
        arrayOrdenado(){
            return this.frutas.sort( (a, b) => b.cantidad - a.cantidad )
        }
    },
    methods: {
        ...mapMutations(['aumentar','resetear']),
        
    }
}
</script>