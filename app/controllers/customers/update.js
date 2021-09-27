import AppError from '../../../AppError';

export default async function update(ctx) {
  try {
    const {
      request: { body },
    } = ctx;

    if(!body || !body.customer){
      throw new Error({ message: 'required param not found' });
    }

    const Customer = ctx.models.customer;
    const customer = body.customer;

    const updateCustomer = await Customer.findOne({_id: customer._id});
    if (!updateCustomer) {
      throw new AppError({});
    }
    
    updateCustomer.taxId = (customer.taxId) ? customer.taxId : updateCustomer.taxId;
    updateCustomer.currency = (customer.currency) ? customer.currency : updateCustomer.currency;

    const newCustomer = new Customer(updateCustomer); 
    await updateCustomer.save();

    ctx.body = {
      customer: newCustomer,
      message:"succes"
    };

  } catch (error) {
    throw new AppError({ message: error.Error });
  }
}