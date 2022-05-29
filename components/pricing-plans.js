import { pricingPlans } from '../data'

const PricingPlans = () => {
  return (
    // <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
    //   <pre className='p-8 mt-12 font-medium bg-cyan-50 text-cyan-800'>
    //     TODO: Let's build a pricing section together
    //   </pre>
    // </div>
    <div className='relative'>
      <div className='absolute inset-0 flex flex-col'>
        <div className='flex-1'></div>
        <div className='flex-1 bg-slate-100'></div>
      </div>
      <div className='grid px-4 py-24 mx-auto lg:grid-cols-3 gap:12 lg:gap-8 max-w-7xl sm:px-6 lg:px-8'>
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className='relative flex flex-col p-8 mt-8 bg-white border shadow-lg border-slate-200 rounded-2xl'
          >
            <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
            {plan.mostPopular && (
              <p className='absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md'>
                Most Popular
              </p>
            )}
            <p className='mt-4 text-sm leading-6 text-slate-700'>{plan.description}</p>
            <div className='p-6 mt-4 -mx-6 rounded-lg bg-slate-50'>
              <p className='flex items-center text-sm font-semibold text-slate-500'>
                <span>{plan.currency}</span>
                <span className='ml-3 text-4xl text-slate-900'>${plan.price}</span>
                <span className='ml-1.5'>{plan.frequency}</span>
              </p>
            </div>
            {/* Features */}
            <ul className='flex-1 mt-6 space-y-4'>
              {plan.fetaures.map((feature) => (
                <li key={feature} className='flex text-sm leading-6 text-slate-700'>
                  {/* https://heroicons.com/ */}
                  {/* shrink-0 ile yer açmak için check işareti küçülmesin */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-cyan-500 shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='ml-3'>{feature}</span>
                </li>
              ))}
            </ul>
            {/* Call to action */}
            <a
              href='#'
              className={`block px-6 py-4 mt-8 text-sm font-semibold leading-4 text-center rounded-lg
                ${
                  plan.mostPopular
                    ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
                    : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
                }
                `}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingPlans
