import breakfast from '../assets/images/breakfast.png';
import burger from '../assets/images/burger.gif';
import englishBreakfast from '../assets/images/english-breakfast.png';
import chicken from '../assets/images/fried-chicken.gif';
import pizza from '../assets/images/pizza.gif';
import ramen from '../assets/images/ramen.gif';
import riceCake from '../assets/images/rice-cake.gif';
import spaghetti from '../assets/images/spaghetti.png';
import vegan from '../assets/images/vegan.gif';

const menuItems = [
    {
        title: 'Cheese Burger',
        image: burger,
        description: 'A juicy beef patty topped with melted cheese, fresh lettuce, and our signature sauce, served on a toasted brioche bun.',
        value: '20,00',
    },
    {
        title: 'Breakfast',
        image: breakfast,
        description: 'A light and comforting morning combo: freshly brewed coffee, warm milk, and a buttery, flaky croissant.',
        value: '15,00',
    },
    {
        title: 'English Breakfast',
        image: englishBreakfast,
        description: 'A hearty classic: crispy bacon, sunny-side-up eggs, grilled tomatoes, sautéed mushrooms, and golden toast.',
        value: '14,00',
    },
    {
        title: 'Fried Chicken',
        image: chicken,
        description: 'Crispy, golden-fried chicken pieces drizzled with our secret spicy-sweet glaze—irresistibly crunchy and flavorful.',
        value: '25,00',
    },
    {
        title: 'Pepperoni Pizza',
        image: pizza,
        description: 'A timeless favorite: thin, crispy crust topped with rich tomato sauce, gooey mozzarella, and spicy pepperoni slices.',
        value: '30,00',
    },
    {
        title: 'Ramen',
        image: ramen,
        description: 'A steaming bowl of authentic ramen with tender noodles, savory broth, soft-boiled egg, and fresh scallions—inspired by tradition.',
        value: '12,00',
    },
    {
        title: 'Rice Cake',
        image: riceCake,
        description: 'Soft, chewy rice cakes glazed with a sweet and savory sauce—a delightful snack with a perfect texture.',
        value: '12,00',
    },
    {
        title: 'Spaghetti',
        image: spaghetti,
        description: 'Al dente spaghetti tossed in a rich, slow-cooked Bolognese sauce with ground beef, herbs, and a touch of Parmesan.',
        value: '30,00',
    },
    {
        title: 'Vegan Dish',
        image: vegan,
        description: 'A vibrant plant-based plate featuring seasonal roasted vegetables, quinoa, and a creamy tahini dressing—nutritious and full of flavor.',
        value: '20,00',
    }
];

export default menuItems;