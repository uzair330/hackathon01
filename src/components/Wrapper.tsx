const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <section className="md:px-28 px-12">
        {children}
      </section>
    );
  };
  
  export default Wrapper;