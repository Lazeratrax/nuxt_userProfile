<template>
  <section>
    <h1>User {{ user.name }}</h1>
    <hr>
    <h3>{{user.email}}</h3>
  </section>
</template>

<script>


// серверная валидация
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  // есть доступ до контекста - paramss
  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    return {user}
  }
}
</script>

