const SectionTitle = ({
  title,
  paragraph,
  width = "870px",
  center,
  mb = "4px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl lg:text-5xl leading-tight! font-bold text-black sm:text-4xl md:text-5xl dark:text-white">
          {title}
        </h2>
        <p className="text-body-color mb-6 text-base leading-relaxed! md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
