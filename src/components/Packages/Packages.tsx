import PackageCard from './PackageCard';

const Packages = () => {
  return (
    <section id="booknow" className="h-screen py-6">
      <h3 className="text-center text-5xl">Our Packages</h3>
      <div className="grid grid-cols-3 gap-10 mx-auto w-[80vw] my-4">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </section>
  );
};

export default Packages;
