<template>
  <div class="cart" >
    cart {{$store.state.cart.count}}
    <button type="button"  @click="reduces">
      减少
    </button>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('cart', ['add', 'reduces'])
}

</script>
