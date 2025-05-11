// src/components/SkillsCard.jsx
import PropTypes from 'prop-types';

const SkillsCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-24 h-24 justify-center transition-transform hover:scale-105">
      <img
        src={skill.icon}
        alt={`${skill.name} icon`}
        className="w-12 h-12 mb-2 object-contain"
        onError={(e) => (e.target.src = '/fallback-icon.png')} // Fallback icon
      />
      <p className="text-sm text-gray-800 text-center">{skill.name}</p>
    </div>
  );
};

SkillsCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillsCard;
