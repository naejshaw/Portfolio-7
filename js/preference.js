
import { MercadoPagoConfig, Preference } from 'mercadopago';

var total = document.getElementsByClassName("total-price");
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-609660327311030-011713-bed53e7dcbf2535eab7fa0cdcee6949f-260157410' });

const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        'id': 'pref_1994',
        'title': 'Carrinho de compras',
        'quantity': 1,
        'unit_price': total
      }
    ],

    back_urls: {
        success: 'http://localhost:3000/success',
        failure: 'http://localhost:3000/failure',
        pending: 'http://localhost:3000/pending',
    },

    notification_url: 'NOTIFICATION_URL',
        external_reference: 'jeanjfra@gmail.com',
        payment_methods: {
            excluded_payment_methods: [
                {
                    id: 'visa',
                }
            ],
            excluded_payment_types: [
                {
                    id: 'visa',
                }
            ],
            installments: 6,
        },
        payer: {
            name: 'Lalo',
            surname: 'Landa',
            email: 'test_user_36961754@testuser.com',
            phone: {
                area_code: '21',
                number: 22223333,
            },
            address: {
                zip_code: '1640',
                street_name: 'rua falsa',
                street_number: 123,
            }
        },
  }
})
.then(console.log)
.catch(console.log);
