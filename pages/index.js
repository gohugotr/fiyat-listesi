import PricingPlans from '../components/pricing-plans'

export default function Home() {
  return (
    <>
      <div className='px-4 pt-24 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
          Pricing Plans for teams of all sizes
        </h2>
        <p className='max-w-3xl mt-4 text-lg text-slate-500'>
          Choose an affordable plan thats packed with the best features for engaging your audience,
          creating loyalty, and driving sales.
        </p>
      </div>
      <PricingPlans />
    </>
  )
}
