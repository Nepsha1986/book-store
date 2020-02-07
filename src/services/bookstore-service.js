export default class BookstoreService {
    books = [
        {
            id: 1,
            title: 'Book 1',
            img: 'https://www.placecage.com/640/360',
            description: 'Contrary to , Lorem Ipsum is not simply random text.',
            price: 52
        },
        {
            id: 2,
            title: 'Book 2',
            img: 'https://loremflickr.com/640/360',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            price: 78
        },
        {
            id: 3,
            title: 'Book 3',
            img: 'https://www.placecage.com/640/360',
            description: 'Contrary to popular belief random text.',
            price: 99
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                Math.random() > 0.8 ? reject(new Error('Something went wrong')) : resolve(this.books);
            }, 600)
        })
    }
}
