<template>
    <div class="container">
        <div style="display: flex; gap: 0.25em; justify-content: center; align-items: center;">
            <p class="name">{{ name }}</p>
            <p class="id">#{{ id }}</p>
        </div>

        <div style="display: flex; gap: 0.25em; justify-content: center;">
            <span title="Pokemon of the day">
                <img :src="sprite" alt="Sprite" class="fit-image sprite" :style="{ backgroundColor: color }">
            </span>
            <section>
                <p class="id" v-for="type in types" :key="type">{{ type }}</p>
                <p>{{ (height * 0.1).toFixed(1) }}m</p>
            </section>
        </div>
    </div>
</template>

<script>
const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    dark: "#EE99AC",
};
export default {
    data() {
        return {
            name: "",
            id: "",
            sprite: "",
            color: "",
            types: [],
            height: ""
        }
    },
    methods: {
        async FetchData(number) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
                // Check if the response was successful
                if (!response.ok) {
                    this.$emit('click-event', JSON.stringify("ERROR"));
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const name = data.name;
                this.name = String(name).charAt(0).toUpperCase() + String(name).slice(1); // uppercase
                this.id = data.id;
                this.sprite = data.sprites.front_default;
                for (let type of data.types) {
                    this.types.push(type.type.name)
                }
                this.color = typeColors[this.types[0]]
                this.height = data.height

            } catch (error) {
                console.error('Error:', error);
            }
        },
        PokemonFormula() { // Can't figure out a good way to get a unique pokemon each day
            const maxPokemon = 1025
            const date = new Date()
            const day = date.getDate()
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            return Math.floor((year / day * month / day) % maxPokemon);
        }
    },
    mounted() {
        const num = this.PokemonFormula()
        this.FetchData(num)
    }

}
</script>

<style scoped>
.container {
    object-fit: contain;
    margin: 0;
}

.name {
    margin: 0;
    color: rgb(255, 216, 59);
    -webkit-text-stroke: 1px rgb(209, 157, 46);
}

.id {
    margin: 0;
    color: rgb(89, 89, 89);
    font-size: small;
}

.sprite {}
</style>