import { ref, reactive } from 'vue';

// state

const currentItem = ref("");
const items = reactive([
    {
        id: 1,
        title: "The Moon over Manhattan",
        url: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg"
    },
    {
        id: 2,
        title: "Manhattan Bridge",
        url: "https://images.pexels.com/photos/5627275/pexels-photo-5627275.jpeg"
    },
    {
        id: 3,
        title: "The Skyscrapers",
        url: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png"
    },
    {
        id: 4,
        title: "The Empire State Building",
        url: "https://images.pexels.com/photos/3889873/pexels-photo-3889873.jpeg"
    },
    {
        id: 5,
        title: "Brooklyn Bridge",
        url: "https://images.pexels.com/photos/2346925/pexels-photo-2346925.jpeg"
    },
])

// mutations

const selectItem = (e) => {
    const selectedItem = e.target.src;
    currentItem.value = selectedItem
}

export default { currentItem, items, selectItem }