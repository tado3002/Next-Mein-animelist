const Synopsis = async ({ synopsis }) => {
  return (
    <div className="container md:mx-auto px-4 flex flex-col gap-4">
      <h3 className="text-base md:text-lg font-bold">Sinopsis</h3>
      <p className="text-justify text-sm leading-2 md:text-base">
        {synopsis}
      </p>
    </div>
  );
};

export default Synopsis;
