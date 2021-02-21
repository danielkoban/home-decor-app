import { ref } from 'vue';

// state

const currentItem = ref("");
const items = ref([]);

// mutations

fetch("https://home-decor-api.herokuapp.com/items")
    .then(res => res.json())
    .then(data => {
        items.value = data
        console.log(data)
    })
    .catch((err) => {
        alert("Sorry something went wrong. Please try later.");
        console.log("Error: ", err);
    })

const selectItem = (e) => {
    const selectedItem = e.target.src;
    currentItem.value = selectedItem;
}

export default { currentItem, items, selectItem }