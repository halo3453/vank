import AppError from '../../../AppError';

export default async function fetch(ctx) {
  try {
    const {
      request: { body },
    } = ctx;
    
    if(!body.filter){
      throw new Error({ message: 'required param not found' });
    }

    const Invoice = ctx.models.invoice;
    const filter = {};

    if(body.filter.vendor) filter.VENDOR_ID = body.filter.vendor;
    if(body.filter.invoice_date) filter.INVOICE_DATE= body.filter.invoice_date;

    let invoices = [];
    if(Object.keys(filter).length)
      invoices = await Invoice.find(filter);

    ctx.body = {
      invoices,
      message: "succes",
    };

  } catch (error) {
    console.log(error);
    throw new AppError({ message: error.Error });
  }
}