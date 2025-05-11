

const SkillsCard = ({ skill }) => {
  const { name, icon, progress } = skill || {};

  // ${
  //   name.includes("tailwindcss") ||
  //   name.includes("JavaScript") ||
  //   name.includes("Express.js")
  //     ? "px-3"
  //     : "px-6"
  // }
  return (
    <div>
      <div
        className={`border-2 py-2 px-6 border-grayText flex w-fit items-center gap-4`}
      >
        <img src={icon} alt={name} />
        <h1 className="text-grayText text-2xl">{name}</h1>
      </div>
      {/* <div className="flex border-2 border-grayText items-center text-white gap-4 justify-center">
        <progress
          className="progress text-grayText bg-black w-56"
          value={progress}
          max="100"
        />
        <h1>{progress}%</h1>
      </div> */}
    </div>
  );
};

export default SkillsCard;
