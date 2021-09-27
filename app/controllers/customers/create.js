import AppError from '../../../AppError';

export default async function create(ctx) {
  try {
    const {
      request: { body },
    } = ctx;

    if(!body || !body.customer){
      throw new Error({ message: 'required param not found' });
    }

    const Customer = ctx.models.customer;
    const customer = body.customer;
    const newCustomer = new Customer(customer); 
    await newCustomer.save();

    ctx.body = {
      customer: newCustomer,
      message:"succes"
    };

  } catch (error) {
    throw new AppError({ message: error.Error });
  }
}