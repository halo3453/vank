import Customer from '../../../app/database/customers/customer';
import create from '../../../app/controllers/customers/create';

let ctx;

describe('Basic validations', () => {
  ctx = {
    models:{
      customer: Customer
    },
    request:{
      body:{
        customerx: {
          companyName: "example name",
          internalCode: "45k46l4k5645",
          taxId: "sdfgsdfg",
          currency: "USD",
          bancks: [1,2,3,4]
        }
      }
    }
  };

  test('Required param not found', done => {
    expect(create(ctx))
    .rejects.toThrowError();

    done();
  })
});
