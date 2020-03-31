
## Laravel VueJs Tailwind

### Technology
- **Laravel** 6
- **VueJs**, *VueRouter*, *Vuex*
- **TailWindCss**
- Laravel **Passport** for Auth 
- **GuzzleHttp**
- **fruitcake/laravel-cors**


#### Installation:
- `composer install`
- `php artisan migrate` [**after config .env file**]
- `php artisan passport:intall` 

        provide the client_id and client_secret given to .env variables as following:
        
        PASSPORT_CLIENT_ID={client-id}
        PASSPORT_CLIENT_SECRET={client-secret}

- Go to `./resourses/js/app.js`

        axios.defaults.baseURL = 'http://localhost/LaravelVueTailwind/public/api';
        updatet that line with your server api link,  

- `npm install`
- `npm run watch`

## License
This is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
