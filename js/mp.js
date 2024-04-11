
const mp = new MercadoPago('APP_USR-baa5256f-c506-4623-be17-fca7e2f92ea7');
const bricksBuilder = mp.bricks();


mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "pref_1994",
    },
 customization: {
  texts: {
   valueProp: 'smart_option',
  },
  },
 });