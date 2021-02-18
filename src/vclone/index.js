import { ref } from 'vue';

// state

const currentItem = ref("");
const items = []

// mutations

const selectItem = (e) => {
    const selectedItem = e.target.src;
    currentItem.value = selectedItem;
}

export default { currentItem, items, selectItem }