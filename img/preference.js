
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

// const mercadopago = require('mercadopago');

// // Substitua com suas credenciais de teste
// mercadopago.configurations.setAccessToken('APP_USR-609660327311030-011713-bed53e7dcbf2535eab7fa0cdcee6949f-260157410');

// const preference = {
//     items: [
//         {
//             id: '123',
//             description: 'Produto de teste',
//             quantity: 1,
//             unit_price: total
//         }
//     ],
//     payment_methods: {
//         excluded: ['amex'] // Excluir Amex, por exemplo
//     }
// };

// mercadopago.preferences.create(preference)
//     .then(function(response) {
//         console.log('Preferência criada:', response.body.id);
//     })
//     .catch(function(error) {
//         console.error('Erro ao criar preferência:', error);
//     });

//     mercadopago.preferences.checkoutPro(preference_id)
//     .then(function(response) {
//         console.log('URL de pagamento:', response.body.init_point);
//         // Redirecionar o usuário para a URL de pagamento
//     })
//     .catch(function(error) {
//         console.error('Erro ao obter URL de pagamento:', error);
//     });