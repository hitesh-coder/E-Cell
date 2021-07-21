<template>
  <div class="quotes">
      <h4>"{{quote}}"</h4>
      <h6>-{{author}}</h6>
  </div>
</template>

<script>
export default {
    name:"quotes",
    async beforeCreate(){
        await this.$store.dispatch("getQuotes");
    },
    computed:{
        quote() {
            return this.$store.getters.quote
        },
        author() {
            return this.$store.getters.author
        }
    }
}
</script>

<style lang="scss" scoped>
$font-color: rgb(255, 199, 45);

.quotes{
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-left: auto;
    margin-top: 2rem;
    h4{
        color: white;
        margin-left: auto;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    h6{
        margin-left: auto;
        color: $font-color;
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
    }
}

@media screen and (max-width:800px) {
    .quotes{
        margin-top: 4rem;
        width: 500px;
        h4,h6{
            font-size: 14px;
            line-height: 17px;
        }
    }
}

@media screen and (max-width:600px) {
    .quotes{
        width: 100%;
        h4,h6{
            margin: auto;
            text-align: center;
        }
        h4{
            margin-bottom: 1rem;
        }
    }
}
</style>